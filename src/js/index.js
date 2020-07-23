/*const buttonAnswer = document.querySelector('.card__button--answer')
const answer = document.querySelector('.answer-text')

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('display-none')
})

let currentPage = document.querySelector('.page-questions')
const buttonBookmarks = document.querySelector('.footer__icon--bookmarks')
const pageBookmarks = document.querySelector('.page-bookmarks')
const buttonCreate = document.querySelector('.footer__icon--cards')
const pageCreate = document.querySelector('.page-create')
const buttonProfile = document.querySelector('.footer__icon--profile')
const pargeProfile = document.querySelector('.page-profile')


buttonBookmarks.addEventListener('click', () => {
  pageBookmarks.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = document.querySelector('page-bookmarks')
})

buttonCreate.addEventListener('click', () => {
  pageCreate.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = document.querySelector('page-create')
})
*/

const buttonQuestions = document.querySelector('.footer__icon--profile')
const buttonBookmarks = document.querySelector('.footer__icon--bookmarks')
const buttonCreate = document.querySelector('.footer__icon--cards')
const buttonProfile = document.querySelector('.footer__icon--home')
const pageQuestions = document.querySelector('.page-questions')
const pageBookmarks = document.querySelector('.page-bookmarks')
const pageCreate = document.querySelector('.page-create')
const pageProfile = document.querySelector('.page-profile')
let currentPage = pageQuestions

buttonQuestions.addEventListener('click', () => {
  pageQuestions.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = pageQuestions
})
buttonBookmarks.addEventListener('click', () => {
  pageBookmarks.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = pageBookmarks
})
buttonCreate.addEventListener('click', () => {
  pageCreate.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = pageCreate
})
buttonProfile.addEventListener('click', () => {
  pageProfile.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = pageProfile
})
