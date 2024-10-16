import { render } from "./Render";
import List from "./List";
import { getMyList } from "./TaskManager";

export function addTaskToList() {
    const myList = getMyList()
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let hasCompleted = document.querySelector('#has-completed').value === 'true';
    
    let newTask = new List(title, description, hasCompleted);
    myList.push(newTask);

    localStorage.setItem('myList', JSON.stringify(myList))
    
    render();
}