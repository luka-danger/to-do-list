import List from "./List";
import { myList } from "./main";

export function addSampleTasks() {
    // Add sample list items
    const odinProject = new List("To Do List Project", "Finish Odin Project To Do List.", false);
    const dailyRun = new List("5 mile run", "Easy 5 with 4x30sec hill strides", false);
    const buildPlatform = new List("Build Platform", "Finish building deadlift platform", false);
    const walkWaffles = new List("Walk Waffles", "2-3 mile walk around the neighborhood", true)

    myList.push(odinProject)
    myList.push(dailyRun)
    myList.push(buildPlatform)
    myList.push(walkWaffles)
}