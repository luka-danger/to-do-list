import { removeTask } from "./RemoveTask";
import { getMyList } from "./TaskManager";

/* 
Function: Render Task List

Description: Renders the current list of tasks onto the page, retrieves the task list from 
the application's state and creates a visual representation for each task. Each task is 
displayed with its title, description, and completion status. Additionally, buttons are 
provided for toggling the task's completion status and removing the task from the list.

The rendered tasks are structured as follows:
- Title: Displays the task title and applies a 'completed' class if the task is marked as complete.
- Description: Shows the task description and applies a 'complete-this' class if the task is complete.
- Completion Status: Indicates whether the task is "Complete" or "Incomplete."
- Action Buttons: Includes a button to toggle the task's completion status and a button to remove the task.

Example: When the `render` function is called after loading tasks or making changes 
to the task list, it updates the displayed list in the UI, reflecting the current state 
of the tasks.

Usage: Call this function whenever the task list needs to be updated or re-rendered, 
such as after adding, removing, or toggling a task's completion status.
*/
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