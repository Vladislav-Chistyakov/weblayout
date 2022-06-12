document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.header__burger').addEventListener('click', () => {
    if (document.querySelector('.header__burger-menu').classList.contains('header__burger-activ') === true) {
      document.querySelector('.header__burger-menu').classList.remove('header__burger-activ')
    } else {
      document.querySelector('.header__burger-menu').classList.add('header__burger-activ');
    }
  })



  document.querySelectorAll('.tabs__btn').forEach(tabsBtn => {
    tabsBtn.addEventListener('click', event => {
      document.querySelectorAll('.section-work__btn-step').forEach((btn) => {
        console.log(btn)
        btn.classList.remove('orange')
      })
      const path = event.currentTarget.dataset.path
      event.target.classList.add('orange')
      document.querySelectorAll('.block-work').forEach(tabContent => {
        tabContent.classList.remove('block-work-active')
      })
      console.log(document.querySelector(`[data-target="${path}"]`))
      document.querySelector(`[data-target="${path}"]`).classList.add('block-work-active')
    })
  })

  document.querySelector('.header__burger-close').addEventListener('click', () => {
    document.querySelector('.header__burger-menu').classList.remove('header__burger-activ')
  })

  document.querySelectorAll('.list-questions__heading').forEach(el => {
    el.style.margin = '0'
    el.style.padding = '0'
    //el.style.fontWeight = 'bold'
    //el.style.fontSize = '24px'
  })

  document.querySelectorAll('.list-questions__block-descr').forEach(el => {
    el.style.margin = '0'
    el.style.padding = '0'
    el.style.border = 'none'
    el.style.overflow = 'hidden'
  })

  document.querySelectorAll('.list-questuions__descr').forEach(el => {
    el.style.margin = '0'
    el.style.marginTop = '30px'
    el.style.padding = '0'
    el.style.overflow = 'hidden'
    el.style.fontFamily = 'Montserrat'
  })


  document.querySelectorAll('.list-questions__heading').forEach(header => {
    header.style.fontSize = '24px'
    header.style.fontFamily = 'Montserrat'
    header.addEventListener('click', event => {
      const list = event.currentTarget.dataset.list
      document.querySelectorAll('.list-questions__block-descr').forEach(el => {
        el.style.height = '100%'
      })
      document.querySelectorAll('.button-svg').forEach(transform => {
        transform.classList.remove('btn-transform-svg')
      })
      document.querySelector(`[data-rotate="${list}"]`).classList.add('btn-transform-svg')
    })
  })

  document.querySelector('.form__check-span').addEventListener('click', () => {
    if (document.querySelector('.form__check-span').ariaChecked === 'false') {
      document.querySelector('.form__check-span').ariaChecked = 'true'
    } else {
      document.querySelector('.form__check-span').ariaChecked = 'false'
    }
  })

  document.querySelector('.navigation__btn').addEventListener('click', () => {
    document.querySelector('.block-input').classList.add('block-input-active')
  })

  document.querySelector('.close__btn').addEventListener('click', () => {
    document.querySelector('.block-input').classList.remove('block-input-active')
  })
})
