import { get, getAll } from './utility'
//import { cardLogic } from './cards'
import { clearInput } from './input'
import { toggleBookmarks } from './bookmarks'
import { initCards } from './arraycards'
import { initNavigation } from './nav'

//import { cardList } from './arraycards'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initCards()

    // cardLogic()
    clearInput()
    toggleBookmarks()
    initNavigation()
    // cardList()
  })
})
