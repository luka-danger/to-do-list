import { clearList, myList } from "./main";
import { render } from "./Render";


export function toggleComplete(index) {
    myList[index].toggleComplete();
    localStorage.setItem('myList', JSON.stringify(myList));
    render();
}

// Add to global scope
window.toggleComplete = toggleComplete;