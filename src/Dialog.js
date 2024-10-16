import { addTaskToList } from "./AddTask";

/* 
Function: Display Modal Window

Description: Accesses the HTML Dialog Element, accesses "Add New Task" HTML button,
creates Modal Window, run addTaskToList(), then close the window when clicking submit.

Example: Clicking "Add New Task" opens up a modal window and takes user input. Clicking
"submit" displays the user input on the page.
*/
export function makeDialog() {
    const dialog = document.querySelector('dialog');
    const addNewTask = document.querySelector('#add-task-btn');

    addNewTask.addEventListener('click', () => {
        dialog.showModal();
    });
    
    document.querySelector('#add-task-form').addEventListener('submit', (event) => {
        // Prevent default if event not handled
        // Attribtion: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        event.preventDefault();
        addTaskToList();
        document.getElementById('add-task-form').reset();
        dialog.close();
    });
}