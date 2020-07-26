import { get, getAll } from './utility'

export function initNavigation() {
  const navIcons = getAll('[data-js="nav-icon"]')
  const pages = getAll('[data-js="page"]')
  const headline = get('h1')

  navIcons?.forEach((icon) => {
    icon?.addEventListener('click', () => {
      const iconName = icon.dataset.name
      // display page
      pages.forEach((oneOfAllPages) => {
        const pageName = oneOfAllPages.dataset.name
        oneOfAllPages.classList.toggle('display-none', pageName !== iconName)
      })

      // const activeIcon = get('.footer__icon--active')
      // activeIcon?.classList.toggle('footer__icon--active')
      // icon.classList.toggle('footer__icon--active')

      // mark icon active
      navIcons.forEach((oneOfAllIcons) => {
        const oneOfAllIconsName = oneOfAllIcons.dataset.name
        oneOfAllIcons.classList.toggle(
          'footer__icon--active',
          oneOfAllIconsName === iconName
        )
      })

      // set headline text
      headline.textContent = iconName
    })
  })
}
/*
//export function navBar() {
  // constanten, die zum Inhalt (=body) der vier verschiedenen Screens führen
  const pageHome = get('.page-questions')
  const pageBookmarks = get('.page-bookmarks')
  const pageCreate = get('.page-create')
  const pageProfile = get('.page-profile')

  //constanten, die die Eingabe-Buttons in der Navbar repräsentieren
  const homeNav = get('.footer__icon--home')
  const bookmarksNav = get('.footer__icon--bookmarks')
  const createNav = get('.footer__icon--cards')
  const profileNav = get('.footer__icon--profile')

  //Funktion: Bei einem Click auf eins der Icons in der Nav-Bar soll der User zum entsprechenden Screen weiter geleitet werden
  homeNav.addEventListener('click', () => {
    pageHome.classList.remove('display-none')
    pageBookmarks.classList.add('display-none')
    pageCreate.classList.add('display-none')
    pageProfile.classList.add('display-none')
  })

  bookmarksNav.addEventListener('click', () => {
    pageHome.classList.add('display-none')
    pageBookmarks.classList.remove('display-none')
    pageCreate.classList.add('display-none')
    pageProfile.classList.add('display-none')
  })

  createNav.addEventListener('click', () => {
    pageHome.classList.add('display-none')
    pageBookmarks.classList.add('display-none')
    pageCreate.classList.remove('display-none')
    pageProfile.classList.add('display-none')
  })

  profileNav.addEventListener('click', () => {
    pageHome.classList.add('display-none')
    pageBookmarks.classList.add('display-none')
    pageCreate.classList.add('display-none')
    pageProfile.classList.remove('display-none')
  })
}*/
