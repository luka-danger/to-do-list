import { makeUI } from "./UI"

export function render() {
    const listContainer = document.querySelector('.list-container')

    const myList = document.createElement('h1');
    listContainer.appendChild(myList)

    const titleInput = document.getElementById('title');
    myList.textContent = titleInput.value
    alert(`${titleInput.value}`)
}