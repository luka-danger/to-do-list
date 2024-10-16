import { toggleComplete } from "./ToggleComplete";

// Create List Object
export default class List {
    constructor(title, description, hasCompleted) {
        this.title = title;
        this.description = description;
        this.hasCompleted = hasCompleted;
    }

    // Functionality for Toggle Complete Function 
    // See ToggleComplete.js module for more
    toggleComplete() {
        this.hasCompleted = !this.hasCompleted;
    }
}