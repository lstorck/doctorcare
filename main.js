window.addEventListener('scroll', onScroll )
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll () { 
  if (scrollY > 0) {
    navs.classList.add('scroll')
  } else {
    navs.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll () {
    if (scrollY > 1449) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 1500,
}).reveal(`#home, 
#home img, 
#home .stats,
#services header,
#services .card,
#about,
#about header,
#about .content`)

