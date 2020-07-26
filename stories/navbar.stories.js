export default {
  title: 'Navbar',
}

export const Bookmarks = () =>
  /*html*/
  `<footer class="footer">
      <nav class="footer__navbar">
        <svg
          data-js="nav-icon"
          data-name="dashboard"
          class="footer__icon footer__icon--home footer__icon--active"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="28px"
          height="28px"
        >
          <path
            fill="currentcolor"
            fill-rule="evenodd"
            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          viewBox="0 0 24 24"
          width="28"
          class="footer__icon footer__icon--bookmarks"
          data-js="nav-icon"
          data-name="bookmarks"
        >
          <path
            fill="currentcolor"
            fill-rule="evenodd"
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          viewBox="0 0 28 28"
          width="28"
          data-js="nav-icon"
          data-name="create"
          class="footer__icon footer__icon--cards"
        >
          <path
            class="footer__icon footer__icon--cards"
            fill="currentcolor"
            fill-rule="evenodd"
            d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          viewBox="0 0 24 24"
          width="28"
          data-js="nav-icon"
          data-name="profile"
          class="footer__icon footer__icon--profile"
        >
          <path
            fill="currentcolor"
            fill-rule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
          />
        </svg>
      </nav>
    </footer>`
