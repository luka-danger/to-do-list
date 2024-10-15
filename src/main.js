// Create object array to store tasks
let myList = []

class List {
    constructor(title, description, hasCompleted) {
        this.title = title;
        this.description = description;
        this.hasCompleted = hasCompleted;
    }

    toggleComplete(index) {
        this.hasCompleted = !this.hasCompleted;
    }
}

function render() {
    let taskItem = document.querySelector('#tasks');
    taskItem.innerHTML = "";

    for (let i = 0; i < myList.length; i++) {
        let listItem = myList[i];
        let listElement = document.createElement('div');
        listElement.setAttribute("class", "list-card");
        listElement.innerHTML = `
        <div class="list-header">
            <h3 class="title">${listItem.title}</h3>
        </div>
        <div class="list-body">
            <p class="description">${listItem.description}</p>
            <p class="complete-status ${listItem.hasCompleted ? 'complete' : 'incomplete'}"> ${listItem.hasCompleted ? "Complete" : "Incomplete"}</p>
            <button class="toggle-complete-btn" onclick="toggleComplete"(${i})">Complete Task</button>
            <button class="remove-btn" onclick="removeTask(${i})">Remove Task</button>
        </div>
        `;
        taskItem.appendChild(listElement);
    }
}

function toggleComplete(index) {
    myList[index].toggleComplete();
    render();
}

function removeTask(index) {
    myList.splice(index, 1);
    render();
}

function addTaskToList() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let hasCompleted = document.querySelector('#has-completed').value;
    
    let newTask = new List(title, description, hasCompleted);

    myList.push(newTask);

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