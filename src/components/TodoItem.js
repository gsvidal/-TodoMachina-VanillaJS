function TodoItem(text) {

  const completed = false;
  // const text = true;

  return /*html*/`
    <li class="TodoItem">
      <span 
        class="TodoItem__icon TodoItem__icon-check ${completed && 'TodoItem__icon-check--completed'}"
      ></span>
      <p class="TodoItem__text ${completed && 'TodoItem__text--completed'}">${text}</p>
      <span 
        class="TodoItem__icon TodoItem__icon-delete"
      ></span>
    </li>
  `;
}

export default TodoItem