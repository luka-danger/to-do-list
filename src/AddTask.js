// Imports 
import { render } from "./Render";
import List from "./List";
import { getMyList } from "./TaskManager";

/* 
Function: Add New Task To Do List

Description: Retrieves the current to do list from local storage, collects user input, 
and adds this task to the list, updates the local storage with the new list, and 
triggers render function to dynamically update the page.

Example: Calling `addTaskToList()` after a user fills out the task form will add 
the new task to the existing list and update the displayed list.
*/
export function addTaskToList() {
    // Retrieve list array and store it as myList variable
    const myList = getMyList()

    // Access HTML elements
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let hasCompleted = document.querySelector('#has-completed').value === 'true';
    
    // Instantiate new List object and push to myList
    let newTask = new List(title, description, hasCompleted);
    myList.push(newTask);

    // Update Local Storage
    localStorage.setItem('myList', JSON.stringify(myList))
    
    // Dynamically refresh the page
    render();
}