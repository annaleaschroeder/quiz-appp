import { get, getAll } from './utility'
import { cardLogic } from './cards'
import { clearInput } from './input'
import { toggleBookmarks } from './bookmarks'
import { initNavigation } from './nav'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    cardLogic()
    clearInput()
    toggleBookmarks()
    initNavigation()
  })
})
