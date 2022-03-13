import {
  animate
} from './helpers'

const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')

  // изначально модальное окно opacity = 0

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (screen.width >= 768) {
        modal.style.display = 'block'
        modal.style.opacity = 0

        animate({
          duration: 800,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress
          }
        });

      } else {
        modal.style.display = 'block'
      }
    })
  })

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none'
    }
  })
}

export default modal