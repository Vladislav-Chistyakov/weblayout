document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__menu').classList.add('header__menu-active')
  })

  document.querySelector(".header__menu-close-svg").addEventListener('click', () => {
    document.querySelector('.header__menu').classList.remove('header__menu-active')
  })

})
