import { myList } from "./main";
import { removeTask } from "./RemoveTask";

export function render() {

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
            <button class="toggle-complete-btn" onclick="toggleComplete(${i})">
                ${listItem.hasCompleted ? 'Make Incomplete' : 'Complete Task'}
            </button>
            <button class="remove-btn" onclick="removeTask(${i})">Remove Task</button>
        </div>
        `;
        taskItem.appendChild(listElement);
    }
}