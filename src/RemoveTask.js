import { myList } from "./main";
import { render } from "./Render";

export function removeTask(index) {
    myList.splice(index, 1);
    localStorage.setItem('myList', JSON.stringify(myList))
    render();
}

// Add to global scope
window.removeTask = removeTask;