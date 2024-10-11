import "./style.css";
import { makeUI } from "./UI";
import List from "./List";
import { render } from "./Render";

document.querySelector('#add-item').addEventListener('click', () => {
    makeUI();
})

