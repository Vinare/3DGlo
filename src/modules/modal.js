const animate = ({
  timing,
  draw,
  duration
}) => {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')
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

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })
}

modal()
// export default modal

const array1 = [1, 2, 3, 4]
const array2 = 3

const allItems = [...array1, array2]