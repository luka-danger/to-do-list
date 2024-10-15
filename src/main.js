// Import Modules
import List from "./List.js";
import { render } from "./Render.js";
import { addTaskToList } from "./AddTask.js";

// Create object array to store tasks
export let myList = []


function toggleComplete(index) {
    myList[index].toggleComplete();
    render();
}

function removeTask(index) {
    myList.splice(index, 1);
    render();
}

const odinProject = new List("To Do List", "Finish Odin Project To Do List.", false);
const dailyRun = new List("5 mile run", "Easy 5 with 4x30sec hill strides", false);
const buildPlatform = new List("Build Platform", "Finish building deadlift platform", false);
const walkWaffles = new List("Walk Waffles", "Take the little man around the block for some exercise", true)

myList.push(odinProject)
myList.push(dailyRun)
myList.push(buildPlatform)
myList.push(walkWaffles)


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
})

render()