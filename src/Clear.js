import { myList } from "./main";
import { render } from "./Render";

export function clearList() {
    const clearButton = document.querySelector('#clear-task-btn');
    clearButton.addEventListener('click', () => {
        localStorage.removeItem('myList');
        myList.length = 0;
        render();
    });
}