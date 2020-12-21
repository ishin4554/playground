const popUpCancelBtn = () => {
  document.querySelector('.popup').innerHTML = `
    <button class="btn">cancel</button>
  `
  document.querySelector('.popup .btn').addEventListener('click', () => {
    console.log('關閉 popup')
  })
}

const alertCancelBtn = () => {
  document.querySelector('.alert').innerHTML = `
    <button class="btn">cancel</button>
  `
  document.querySelector('.alert .btn').addEventListener('click', () => {
    console.log('關閉 alert')
  })
}

const popUpOkBtn = () => {
  document.querySelector('.popup').innerHTML = `
    <button class="btn">ok</button>
  `
  document.querySelector('.popup .btn').addEventListener('click', () => {
    console.log('popup OK')
  })
}