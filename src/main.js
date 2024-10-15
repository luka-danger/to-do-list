// Import Modules
import { render } from "./Render.js";
import { makeDialog } from "./Dialog.js";
import { addSampleTasks } from "./SampleTask.js";
import List from "./List.js";
import "./style.css"

// Create object array to store tasks
export let myList = []

document.addEventListener('DOMContentLoaded', () => {
    addSampleTasks();
    loadTasks();
    render();
    makeDialog();
    clearList();
});

export function loadTasks() {
    const storedTasks = localStorage.getItem('myList');
    if (storedTasks) {
        myList = JSON.parse(storedTasks).map(task => 
            new List(task.title, task.description, task.hasCompleted)
        );
    }
}

export function clearList() {
    const clearButton = document.querySelector('#clear-task-btn');
    clearButton.addEventListener('click', () => {
        localStorage.removeItem('myList');
        myList = []
        render();
    });
}