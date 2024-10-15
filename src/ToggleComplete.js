import { myList } from "./main";
import { render } from "./Render";

export function toggleComplete(index) {
    myList[index].toggleComplete();
    render();
}

// Add to global scope
window.toggleComplete = toggleComplete;