// An array to hold the list of tasks
let myList = [];

/* 
Function - Clear List

Description: Resets the `myList` array to an empty state, effectively 
removing all tasks from the list. This is useful for clearing the task list 
during initialization or when the user wants to start fresh.
*/
export function clearMyList() {
    myList = [];
}

/* 
Function: Get Task List

Description: Retrieves the current list of tasks stored in the 
myList array. It also returns a reference to the array, allowing other parts of 
the application to access the tasks for rendering or manipulation.
*/ 
export function getMyList() {
    return myList;
}

/* 
Function: Set Task List

Description: Updates the `myList` array with a new list of tasks, replaces the 
current tasks with the provided newList - an array of task objects. This is 
useful for loading tasks from local storage or when modifying the task list.
*/
export function setMyList(newList) {
    myList = newList;
}