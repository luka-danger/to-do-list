import { addTaskToList } from "./AddTask";

export function makeDialog() {
    const dialog = document.querySelector('dialog');
    const addNewTask = document.querySelector('#add-task-btn');

    addNewTask.addEventListener('click', () => {
        dialog.showModal();
    });
    
    document.querySelector('#add-task-form').addEventListener('submit', (event) => {
        event.preventDefault();
        addTaskToList();
        document.getElementById('add-task-form').reset();
        dialog.close();
    });
}