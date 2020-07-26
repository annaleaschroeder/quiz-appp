import { get, getAll } from './utility'

export function clearInput() {
  const form = get('form')

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    form.reset()
  })
}

//Clear Input Field after clicking on submit button
//reset Form after Clicking on Submit-Button:
//function addInputLogic()
//if (buttonSubmit.addEventListener('click')) {
//inputList.querySelector('input', reset)

//}

//reset form
//function reset() {
//    inputList.value= ''
//}
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
// })
//}
