import { get, getAll } from './utility.js'

const cards = [
  {
    question: 'What does forEach do/',
    answer: 'I iterates over an array etc.',
    tags: ['js'],
  },
  {
    question: 'Hallo ich bin eine Frage2',
    answer: 'Ich bin eine Antwort2',
    tags: ['tag 1', 'tag 2'],
  },
  {
    question: 'Hallo ich bin eine Frage3',
    answer: 'Ich bin eine Antwort3',
    tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
  },
  {
    question: 'Hallo ich bin eine Frage4',
    answer: 'Ich bin eine Antwort4',
    tags: ['tag 1', 'tag 2'],
  },
  {
    question: 'Hallo ich bin eine Frage5',
    answer: 'Ich bin eine Antwort5',
  },
]

export function initCards() {
  cards.forEach(createCard)
}

function createCard({ question, answer, tags = [] } = {}) {
  const newCard = document.createElement('section')
  newCard.className = 'card'
  const target = get('[data-js=placeholder]')
  target.appendChild(newCard)

  const tagList = document.createElement('ul')
  tagList.classList.add('card__tags')
  tags.forEach((tag) => {
    const listItem = document.createElement('li')
    listItem.classList.add('card__tag')
    listItem.innerHTML = tag

    tagList.appendChild(listItem)
  })

  newCard.innerHTML = /*html*/ `
   
    <svg
            class="card__bookmark card__bookmark--active"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path

              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>

   <h2 class="card__question">Question</h2>
    <p class="card__text">
      ${question}
    </p>
    <button class="card_button card__button--answer radius-5">
            Show Answer
          </button>
          <button
            class="card_button card__button--hide-answer display-none radius-5"
          >
            Hide Answer
          </button>

       <p class="answer-text display-none">
       ${answer}
      </p>
   
  `
  newCard.appendChild(tagList)
  addToggleLogic(newCard)
  // addBookmarkLogic(newCard)
  //toggleBookmarks()
}
//cards.forEach(addBookmarkLogic)

//export function addBookmarkLogic(card) {
//function toggleBookmarks()
//export function addBookmarkLogic(card) {
// const bookmarkList = getAll('.card__bookmark')
// bookmarkList.forEach((bookmark) => {
//   bookmark?.addEventListener('click', () => {
//     bookmark.classList.toggle('card__bookmark--active')
//   })
// })

function addToggleLogic(card) {
  const textShowAnswer = card.querySelector('.answer-text')
  const buttonShowAnswer = card.querySelector('.card__button--answer')

  buttonShowAnswer?.addEventListener('click', () => {
    textShowAnswer.classList.toggle('display-none')
    buttonShowAnswer.textContent =
      buttonShowAnswer.textContent === 'Hide answer'
        ? 'Show answer'
        : 'Hide answer'
  })
}

// export function cardList() {
//   const placeholder = get('[data-js=placeholder]')
//   let card = [
//     {
//       type: 'h2',
//       className: 'card__question',
//       text: 'Question',
//     },
//     {
//       type: 'paragraph',
//       className: 'card__text',
//       text:
//         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nesciunt adipisci? Quia voluptate voluptas harum eius vel, error qui natus ipsam. Natus nulla harum in quas sit dicta sequi facilis!',
//     },

//     {
//       type: 'button',
//       className: 'card_button card__button--answer radius-5',
//       text: 'Show Answer',
//     },

//     {
//       type: 'button',
//       className: 'card_button card__button--hide-answer display-none radius-5',
//       text: 'Hide Answer',
//     },
//     {
//       type: 'paragraph',
//       className: 'answer-text',
//       text:
//         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, exercitationem consectetur!',
//     },
//     {
//       type: 'li',
//       className: 'card__tag',
//       text: 'tag 1',
//     },
//     {
//       type: 'li',
//       className: 'card__tag',
//       text: 'tag 2',
//     },
//   ]

//   //   cardCopy = [...copy]

//   //   cardCopy.push(5)
//   //   console.log(card, cardCopy)

//   card.forEach(({ type, className, text }) => {
//     const el = createElement({ type, className, target: placeholder })
//     el.textContent = text
//   })

// repeat(createElement (), 5 {
//   createElement();
//   times=5 && times=--5 && repeat(createElement (), 5)
// }

// repeat(createElement () {document.createElement(type)}; }, 5;)

//   //   Anna Idee
//   //   const tagList = [
//   //     {
//   //       type: li,
//   //       className: 'tag__list',
//   //       text: 'Tag 1',
//   //     },
//   //     {
//   //       type: 'paragraph',
//   //       className: 'card__text',
//   //       text:
//   //         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nesciunt adipisci? Quia voluptate voluptas harum eius vel, error qui natus ipsam. Natus nulla harum in quas sit dicta sequi facilis!',
//   //     },

//   createElement()

//   function createElement({
//     type = 'div',
//     className = '',
//     target = document.body,
//   } = {}) {
//     const el = document.createElement(type)
//     el.className = className
//     target.appendChild(el)
//     return el
//   }
// }
