export default class List {
    constructor(title, description, dueDate, hasCompleted) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.hasCompleted = hasCompleted;
    }

    toggleCompleted(index) {
        this.hasCompleted = !this.hasCompleted;
    }
}