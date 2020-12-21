const user = {
  isLogin: true,
  state: 1,
  type: 'admin'
};

const checkLogin = (user) => {
  if (user.isLogin) return 'next';
  console.log('尚未登入')
};

const checkState = (user) => {
  switch(user.state) {
    case 0: 
      console.log('已經註冊且未發驗證信')
      return;
    case 1:
      console.log('已經註冊但驗證信未通過')
      return;
    case 2:
      console.log('已經發驗證信且通過')
      return 'next'
    default: 
      return;
  }
};

const checkType = (user) => {
  if (user.type !== 'admin') return;
  console.log('可以登入後台')
};

class Chain {
  constructor(handler) {
    this.handler = handler;
    this.successor = null;
  }

  setSuccessor(successor) {
    this.successor = successor;
    return successor;
  }

  passRequest(...args) {
    const result = this.handler(...args);
    if (result === 'next') {
      return this.successor && this.successor.passRequest(...args);
    }
    return result;
  }
}

const checkUserState = (user) => {
  const loginChecker = new Chain(checkLogin);
  const stateChecker = new Chain(checkState);
  const typeChecker = new Chain(checkType);

  loginChecker
    .setSuccessor(stateChecker)
    .setSuccessor(typeChecker)

  loginChecker.passRequest(user);
};

checkUserState(user);