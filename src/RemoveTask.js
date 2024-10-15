import { myList } from "./main";
import { render } from "./Render";

export function removeTask(index) {
    myList.splice(index, 1);
    render();
}

// Add to global scope
window.removeTask = removeTask;