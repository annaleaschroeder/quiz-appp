import { get, getAll } from './utility'

export function cardLogic() {
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
}
