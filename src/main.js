// Import Modules
import { render } from "./Render.js";
import { makeDialog } from "./Dialog.js";
import { addSampleTasks } from "./SampleTask.js";
import { clearList } from "./Clear.js";
import { loadTasks } from "./Load.js";
import "./style.css"

// Initialize the application once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    addSampleTasks();
    loadTasks();
    render();
    makeDialog();
    clearList();
});

