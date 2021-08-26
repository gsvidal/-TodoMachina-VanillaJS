import TodoItem from "./TodoItem.js";

function TodoList() {

  const todos = [
  { text: "Cortar cebolla", completed: false},
  { text: "Spread the word about Bit Hug", completed: true},
  { text: "Llorar con la  cebolla", completed: true},
  { text: "Pagar al personal", completed: false},
  { text: "Contar al personal2", completed: false},
]


  return /*html*/`
    <section>
      <ul class="list__container">
        ${todos.map(todo => TodoItem(todo.text)).join("")}
      </ul>
    </section>
  `;
}

export default TodoList


// ${todos.map(todo => TodoItem(todo.text)}