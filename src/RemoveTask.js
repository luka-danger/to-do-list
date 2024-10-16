import { render } from "./Render";
import { getMyList } from "./TaskManager";

/* 
Function: Remove Task from To Do List

Description: Removes a task from the to-do list based on the provided index. 
It updates the task list in both the application's state and the local storage 
to ensure that the changes persist across sessions. After removal, it triggers a 
re-render of the task list to reflect the updated state.

Example: If a user clicks the "Delete" button next to a task, this function is called 
with the index of the task to be removed. The task is then deleted from the list, and 
the updated list is displayed on the page.
*/
export function removeTask(index) {
    const myList = getMyList();
    myList.splice(index, 1);
    localStorage.setItem('myList', JSON.stringify(myList))
    render();
}

// Add to global scope
window.removeTask = removeTask;