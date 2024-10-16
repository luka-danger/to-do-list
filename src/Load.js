import { myList } from "./main";
import List from "./List";
import { setMyList } from "./TaskManager";

/* 
Function: Load tasks from local storage

Description: Uses local storage property to save and retrieve data from user's 
browser and parses them into JS objects. If tasks are found in local storage, they 
are converted into instances of List and stored in the application's state for 
further access.
*/
export function loadTasks() {
    const storedTasks = localStorage.getItem('myList');
    if (storedTasks) {
        const tasks = JSON.parse(storedTasks).map(task => 
            new List(task.title, task.description, task.hasCompleted)
        );
        setMyList(tasks);
    }
}