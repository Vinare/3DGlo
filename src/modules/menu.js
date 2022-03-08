const menu = () => {
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul>li>a')
  const smoothScroll = document.querySelector('a[href="#service-block"]')
  const menuItemsAll = [...menuItems, smoothScroll]
  console.log(menuItemsAll);


  const handleMenu = () => {
    menu.classList.toggle('active-menu')
  }

  menuBtn.addEventListener('click', handleMenu)
  closeBtn.addEventListener('click', handleMenu)

  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))

  menuItemsAll.forEach(menuItem => menuItem.addEventListener('click', (e) => {
    e.preventDefault()

    const blockID = menuItem.getAttribute("href").substring(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }))
}

export default menu