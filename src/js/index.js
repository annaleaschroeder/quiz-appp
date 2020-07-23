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

const cardList = getAll('.card')
cardList.forEach(addToggleLogic)

function addToggleLogic(card) {
  const buttonAnswer = card.querySelector('.card__button--answer')
  const buttonHide = card.querySelector('.card__button--hide-answer')
  const answer = card.querySelector('.answer-text')

  buttonAnswer.addEventListener('click', () => {
    answer.classList.remove('display-none')
    buttonAnswer.classList.add('display-none')
    buttonHide.classList.remove('display-none')
  })
  buttonHide.addEventListener('click', () => {
    buttonHide.classList.add('display-none')
    answer.classList.add('display-none')
    buttonAnswer.classList.remove('display-none')
  })
}

//Constants for bookmarks on cards
const bookmarkList = getAll('.card__bookmark')
bookmarkList.forEach(addBookmarkLogic)

function addBookmarkLogic(bookmark) {
  bookmark.addEventListener('click', (event) => {
    event.stopPropagation()
    bookmark.classList.toggle('card__bookmark--active')

    // !true === false
    // !!true === true
    // !false === true
    // !!false

    // if (1234) {
    //   45345
    // } else {
    //   858585
    // }

    // 1234 ? 45345 : 858585

    // if (bookmark.classList.contains('card__bookmark--active')) {
    //   bookmark.classList.remove('card__bookmark--active')
    // } else {
    //   bookmark.classList.add('card__bookmark--active')
    // }
  })
}

//function delcaration: get, um querySelector in der constant declaration raus kürzen zu
function get(selector) {
  return document.querySelector(selector)
}

function getAll(selector) {
  return document.querySelectorAll(selector)
}
