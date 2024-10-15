import { toggleComplete } from "./ToggleComplete";

export default class List {
    constructor(title, description, hasCompleted) {
        this.title = title;
        this.description = description;
        this.hasCompleted = hasCompleted;
    }

    toggleComplete(index) {
        this.hasCompleted = !this.hasCompleted;
    }
}