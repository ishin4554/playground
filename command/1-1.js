const createBtn = (selector, text, handler) => {
  const btn = document.createElement('button');
  btn.innerText = text;
  /**
   * 對於動態語言來說，callback 是什麼並不需要先被定義好
   * 但對靜態語言來說就會需要 command pattern 封裝 command object 來處理 callback 這一段。
   */
  btn.addEventListener('click', handler);
  document.querySelector(selector).appendChild(btn);
}

const popUpCancel = () => {
  console.log('關閉 popup')
}

const alertCancel = () => {
  console.log('關閉 alert')
}

const popUpOk = () => {
  console.log('popup OK')
}

(function() {
  createBtn('.popup', '取消', popUpCancel)
  createBtn('.popup', '取消', alertCancel)
  createBtn('.popup', '取消', popUpOk)
})()