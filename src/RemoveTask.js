import { render } from "./Render";
import { getMyList } from "./TaskManager";

export function removeTask(index) {
    const myList = getMyList();
    myList.splice(index, 1);
    localStorage.setItem('myList', JSON.stringify(myList))
    render();
}

// Add to global scope
window.removeTask = removeTask;