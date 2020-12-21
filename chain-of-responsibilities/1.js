const user = {
  isLogin: true,
  state: 1,
  type: 'admin'
};

const checkLogin = (user) => {
  if (user.isLogin) return;
  console.log('尚未登入')
};

const checkState = (user) => {
  switch(user.state) {
    case 0: 
      console.log('已經註冊且未發驗證信')
    case 1:
      console.log('已經註冊但驗證信未通過')
      break;
    case 2:
      console.log('已經發驗證信且通過')
    default: 
      return;
  }
};

const checkType = (user) => {
  if (user.type !== 'admin') return;
  console.log('可以登入後台')
};

const checkUserState = (user) => {
  const checkUserChain = [
    checkLogin,
    checkState,
    checkType,
  ];
  checkUserChain.forEach((checker) => {
    checker(user);
  });
};

checkUserState(user);