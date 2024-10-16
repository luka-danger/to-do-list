import { removeTask } from "./RemoveTask";
import { getMyList } from "./TaskManager";

export function render() {

    let taskItem = document.querySelector('#tasks');
    taskItem.innerHTML = "";
    const myList = getMyList();
    for (let i = 0; i < myList.length; i++) {
        let listItem = myList[i];
        let listElement = document.createElement('div');
        listElement.setAttribute("class", "list-card");
        listElement.innerHTML = `
        <div class="list-header">
            <h3 class="title ${listItem.hasCompleted ? 'completed' : ''}">${listItem.title}</h3>
        </div>
        <div class="list-body">
            <p class="description ${listItem.hasCompleted ? 'complete-this' : ''}">${listItem.description}</p>
            <p class="complete-status ${listItem.hasCompleted ? 'complete' : 'incomplete'}"> ${listItem.hasCompleted ? "Complete" : "Incomplete"}</p>
        </div>
        <div class="list-buttons">
            <button class="toggle-complete-btn" onclick="toggleComplete(${i})">
                ${listItem.hasCompleted ? 'Make Incomplete' : 'Complete Task'}
            </button>
            <button class="remove-btn" onclick="removeTask(${i})">Remove Task</button>
        </div>
        `;
        taskItem.appendChild(listElement);
    }
}