import { myList } from "./main";
import { render } from "./Render";
import { clearMyList } from "./TaskManager";

export function clearList() {
    const clearButton = document.querySelector('#clear-task-btn');
    clearButton.addEventListener('click', () => {
        localStorage.removeItem('myList');
        clearMyList();
        render();
    });
}