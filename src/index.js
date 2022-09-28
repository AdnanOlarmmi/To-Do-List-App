import './styles.css';

const toDoItemsEl = document.querySelector('.to-do__items');

const toDoItemsArray = [{
  description: 'Wash Clothes',
  completed: true,
  index: 1,
}, {
  description: 'Watch news',
  completed: false,
  index: 2,
}, {
  description: 'Code',
  completed: true,
  index: 3,
}];

const renderToDoItems = () => {
  let markup = '';

  toDoItemsArray.forEach((elem) => {
    markup += `<section class="to-do__item flex-row border-bottom">
    <input type="checkbox" ${elem.completed && 'checked'} name="" id="" />
    <p>${elem.description}</p>
    <span class="to-do__item-icons">
      <span class="material-symbols-outlined"> delete </span>
      <span class="material-symbols-outlined"> edit_note </span>
    </span>
  </section>`;
  });

  toDoItemsEl.innerHTML = markup;
};

renderToDoItems();