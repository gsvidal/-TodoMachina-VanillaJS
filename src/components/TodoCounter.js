function TodoCounter() {

  const completed = 2;
  const total = 3;

  return /*html*/`
    <h2 class="TodoCounter">
      ${`Has completado ${completed} de ${total} TODOs`}
    </h2>`
}

export default TodoCounter