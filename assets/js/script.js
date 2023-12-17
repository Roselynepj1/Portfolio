document.addEventListener('DOMContentLoaded', () => {
  feather.replace()
  const navMenu = document.querySelector('.nav-menu')
  //add events to menu toggles
  document.querySelector('.menu-open').addEventListener('click', () => {
    navMenu.style.display = 'flex'
    if (navMenu.classList.contains('slide-out-from-bottom')) {
      navMenu.classList.remove('slide-out-from-bottom')
    }
    navMenu.classList.add('slide-in-from-top')
  })
  document.querySelector('.menu-close').addEventListener('click', () => {
    setTimeout(() => {
      navMenu.style.display = 'none'
    }, 500)
    if (navMenu.classList.contains('slide-in-from-top')) {
      navMenu.classList.remove('slide-in-from-top')
    }
    navMenu.classList.add('slide-out-from-bottom')
  })

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    setStickyNavigation()
  }

  // Get the navbar
  var navbar = document.querySelector('.navbar')

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function setStickyNavigation() {
    if (window.scrollY >= sticky) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
  }

  // Function to show the menu when the window is resized to a larger screen
  function showMenuOnLargeScreen() {
    const navMenu = document.querySelector('.nav-menu')
    const screenWidth = window.innerWidth

    if (screenWidth > 767) {
        if (navMenu.classList.contains('slide-out-from-bottom')) {
          navMenu.classList.remove('slide-out-from-bottom')
        }
      navMenu.style.display = 'flex'
    } else {
      navMenu.style.display = 'none'
    }
  }

  // Initial call to set the menu visibility on page load
  showMenuOnLargeScreen()

  // Event listener for window resize
  window.addEventListener('resize', showMenuOnLargeScreen)
})
