const user = {
  isLogin: true,
  state: 1,
  type: 'admin'
};

const checkUserState = (user) => {
  if(user.isLogin) {
      if(user.state === 2) {
        console.log('已經發驗證信且通過')
        if(user.type === 'admin') {
          console.log('可以登入後台')
        }
      }
      if(user.state === 1) {
        console.log('已經註冊但驗證信未通過')
      }
      if(user.state === 0){
      console.log('已經註冊且未發驗證信')
      }
  } else {
    console.log('尚未登入')   
  }
};

checkUserState(user);