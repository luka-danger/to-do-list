import { render } from "./Render";
import { getMyList } from "./TaskManager";

/* 
Function: Toggle Task Completion Status

Description: Toggles the completion status of a task in the to-do list, retrieves the 
current task list, changes the `hasCompleted` property of the task at the specified index, 
and updates the task list in local storage to persist the change. After toggling the 
completion status, it triggers a re-render of the task list to reflect the updated status 
in the user interface.

Example: When a user clicks the "Complete Task" button for a specific task, this 
function is called with the corresponding index. If the task was previously marked as 
incomplete, it will now be marked as complete, and vice versa. The updated task list 
is then displayed on the page.
*/
export function toggleComplete(index) {
    const myList = getMyList();
    myList[index].toggleComplete();
    localStorage.setItem('myList', JSON.stringify(myList));
    render();
}

// Add to global scope
window.toggleComplete = toggleComplete;