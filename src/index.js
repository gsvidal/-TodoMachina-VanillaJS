//Aquí se importan los componentes
import TodoTitle from "./components/TodoTitle.js";
import TodoCounter from "./components/TodoCounter.js";
import TodoSearch from "./components/TodoSearch.js";
import TodoList from "./components/TodoList.js";
import CreateTodoButton from "./components/CreateTodoButton.js";

const root = document.querySelector("#root");

function app() {
  root.innerHTML = render()
}

function render() {
    return `
    ${TodoTitle()}
    ${TodoCounter()}
    ${TodoSearch()}
    ${TodoList()}
    
    ${CreateTodoButton()}
 
    `;
}

document.addEventListener("DOMContentLoaded", app)

