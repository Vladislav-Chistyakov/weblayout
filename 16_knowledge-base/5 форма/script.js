const btn = document.querySelector('.btn')


btn.addEventListener('click', () => {
  const spanName = document.querySelector('.span-name')
  const spanNum = document.querySelector('.span-num')
  const spanEmail = document.querySelector('.span-email')

  const inputName = document.querySelector('.input-name')
  const inputNum = document.querySelector('.input-num')
  const inputEmail = document.querySelector('.input-email')

  if (inputName.value.length === 0) {
    spanName.classList.add('block')
  } else {
    spanName.classList.remove('block')
  }

  if (inputNum.value.length === 0) {
    spanNum.classList.add('block')
  } else {
    spanNum.classList.remove('block')
  }

  if (inputEmail.value.length === 0) {
    spanEmail.classList.add('block')
  } else {
    spanEmail.classList.remove('block')
  }

  console.log(spanName)
  console.log(spanNum)
  console.log(spanEmail)


})