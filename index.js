// Arrays to keep track of each task's state

// remove arrays and use an object to keep track of the state;

// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = []



// comment out old code:
// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskDescriptions.push(title);
//   taskComplete.push(false);
// }

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? '' : " not"} been completed`);
    },

    markCompleted: function() {
      this.complete = true
    }
  };
  return task;
}

// functiomn accepts the task object
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}


// add the task object name with dot notation

// fucntion accepts the task object (vs array index)
// Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   // const title = taskTitles[taskIndex];
//   // const complete = taskComplete[taskIndex];
//   console.log(`${task.title} has  ${task.complete ? " " : "  not "}been completed`);
// }






// DRIVER CODE BELOW

// // old code
// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed


const task1 = newTask("Clean Cat Litter", "Take the #@$! out of the litter box");
const task2 = newTask("Do Laundry", "Clean your clothes");
const tasks = [task1, task2];

// change the
// logTaskState(task1); //task 1 not completed
// completeTask(task1); //complete the task
// logTaskState(task1) // task1 is now completed

task1.logState();
task1.markCompleted();
task1.logState();


// Note: accessing properties or methods of out task is as simple as writng code like this:
// task1.title
// task1.markCompleted()

// console.log(tasks);
