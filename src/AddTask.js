import { myList } from "./main";
import { render } from "./Render";
import List from "./List";

export function addTaskToList() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let hasCompleted = document.querySelector('#has-completed').value === 'true';
    
    let newTask = new List(title, description, hasCompleted);

    myList.push(newTask);

    render();
}