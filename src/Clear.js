import { myList } from "./main";
import { render } from "./Render";
import { clearMyList } from "./TaskManager";

/* 
Function: Clear To Do List

Description: Accesses the HTML button "clear", clears the page and removes all items 
from the myList array and from local storage, and and triggers render to dynamically
update the page.

Example: Clicking "Clear" will clear the screen. If you refresh the window, the 
original sample tasks will be displayed on the window.
*/
export function clearList() {
    const clearButton = document.querySelector('#clear-task-btn');
    clearButton.addEventListener('click', () => {
        // Empty local storage
        localStorage.removeItem('myList');

        // Reset / Clear List Array
        clearMyList();

        // Dynamically refresh the page
        render();
    });
}