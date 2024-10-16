import { myList } from "./main";
import List from "./List";
import { setMyList } from "./TaskManager";

export function loadTasks() {
    const storedTasks = localStorage.getItem('myList');
    if (storedTasks) {
        const tasks = JSON.parse(storedTasks).map(task => 
            new List(task.title, task.description, task.hasCompleted)
        );
        setMyList(tasks);
    }
}