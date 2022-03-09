const smoothScroll = () => {
  const menu = document.querySelector('menu')
  const menuItems = menu.querySelectorAll('ul>li>a')
  const smoothScroll = document.querySelector('.service-link')
  const menuItemsAll = [...menuItems, smoothScroll]

  menuItemsAll.forEach(menuItem => {
    menuItem.addEventListener('click', (e) => {
      e.preventDefault()

      const blockID = menuItem.getAttribute("href").substring(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  })
}

export default smoothScroll