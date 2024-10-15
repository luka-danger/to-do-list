// Import Modules
import { render } from "./Render.js";
import { makeDialog } from "./Dialog.js";
import { addSampleTasks } from "./SampleTask.js";
import "./style.css"

// Create object array to store tasks
export let myList = []

document.addEventListener('DOMContentLoaded', () => {
    addSampleTasks();
    render();
    makeDialog();
});


