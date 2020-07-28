export default {
  title: 'Card',
}

export const Card = () =>
  /*html*/
  `  <section
      data-js="page"
      data-name="dashboard"
      class="body page page-questions"
    >
      <main class="main">
        <section class="card radius-5">
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, nesciunt adipisci? Quia voluptate voluptas harum eius
            vel, error qui natus ipsam. Natus nulla harum in quas sit dicta
            sequi facilis!
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
            exercitationem consectetur! Provident laudantium praesentium a
            obcaecati ipsam deleniti esse, consequatur, consectetur amet,
            molestiae magni laborum harum enim. Est, neque aliquam?
          </p>
          <ul class="card__tags">
            <li class="card__tag">Item1</li>
            <li class="card__tag">Item2</li>
            <li class="card__tag">Item3 longer text</li>
            <li class="card__tag">Item4</li>
            <li class="card__tag">Item5</li>
            <li class="card__tag">Item6</li>
          </ul>
        </section>`
