export default {
  title: 'Input-Form',
}

export const InputForm = () =>
  /*html*/
  `<form action="submit">
          <div>
            <div class="label">
              <label for="question" class="form__label">Question</label>
            </div>

            <textarea
              class="input-question"
              name="question"
              id="question"
              cols="30"
              rows="10"
              placeholder="What do you want to ask?"
            ></textarea>
          </div>
          <div>
            <div class="label">
              <label for="answer" class="form__label">Answer</label>
            </div>
            <textarea
              class="input-answer"
              name="answer"
              id="answer"
              cols="30"
              rows="10"
              placeholder="What's the answer?"
              class="form__textarea p-10"
            ></textarea>
          </div>

          <div class="input-tags">
            <div class="lable">
              <label for="tags" class="form__label">Tags</label>
            </div>
            <textarea
              name="tags"
              id="tags"
              cols="1"
              rows="1"
              placeholder="tag1,tag2,tag3"
              class="input-lables p-10"
            ></textarea>
          </div>

          <button class="submit p-10 mb-40">Submit</button>
        </form>`
