import { render } from "./Render";
import { getMyList } from "./TaskManager";


export function toggleComplete(index) {
    const myList = getMyList();
    myList[index].toggleComplete();
    localStorage.setItem('myList', JSON.stringify(myList));
    render();
}

// Add to global scope
window.toggleComplete = toggleComplete;