import List from "./List";
import { getMyList } from "./TaskManager";

/* 
Function: Add Sample To Do List Tasks

Description: Adds list objects to the list array and displays them on 
the page for improved usability and UX.

Example: When the page loads, it will display the sample list objects on the page.
*/
export function addSampleTasks() {
    // Retrieve list array and store it as myList variable
    const myList = getMyList();

    // Instantiate List Objects
    const odinProject = new List("To Do List Project", "Finish Odin Project To Do List.", false);
    const dailyRun = new List("5 mile run", "Easy 5 with 4x30sec hill strides", false);
    const buildPlatform = new List("Build Platform", "Finish building deadlift platform", false);
    const walkWaffles = new List("Walk Waffles", "2-3 mile walk around the neighborhood", true)

    // Push Objects to List Array
    myList.push(odinProject)
    myList.push(dailyRun)
    myList.push(buildPlatform)
    myList.push(walkWaffles)
}