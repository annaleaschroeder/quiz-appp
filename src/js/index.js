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
  pageHome.classlist.remove('display-none')
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

//function delcaration: get, um querySelector in der constant declaration raus kürzen zu
function get(selector) {
  return document.querySelector(selector)
}
