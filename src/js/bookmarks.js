//Constants for bookmarks on cards
import { get, getAll } from './utility'
export function toggleBookmarks() {
  const bookmarkList = getAll('.card__bookmark')

  bookmarkList?.forEach(addBookmarkLogic)

  function addBookmarkLogic(bookmark) {
    bookmark?.addEventListener('click', (event) => {
      bookmark.classList.toggle('card__bookmark--active')
    })
  }
}
