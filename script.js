let todoArr = ["Task 1", "Task 2", "Task 3"];
let progressArr = ["Task 4", "Task 5", "Task 6"];
let doneArr = ["Task 7", "Task 8", "Task 9"];
let todoCol = document.getElementById("todo");
let progressCol = document.getElementById("progress");
let doneCol = document.getElementById("done");

function renderTodo() {
  todoCol.innerHTML = "<h1>To Do</h1>";
  todoArr.forEach((item, index) => {
    todoCol.innerHTML += `
        <div class="task">
            <p>${item}</p>
            <button onclick=shiftToRight('todoArr',${index})>&rarr;</button>
        </div>
    `;
  });
}
function renderProgress() {
  progressCol.innerHTML = "<h1>Progress</h1>";
  progressArr.forEach((item, index) => {
    progressCol.innerHTML += `
          <div class="task">
              <p>${item}</p>
              <button onclick=shiftToLeft('progressArr',${index})>&larr;</button>
              <button onclick=shiftToRight('progressArr',${index})>&rarr;</button>
          </div>
      `;
  });
}
function renderDone() {
  doneCol.innerHTML = "<h1>Done</h1>";
  doneArr.forEach((item, index) => {
    doneCol.innerHTML += `
          <div class="task">
              <p>${item}</p>
              <button onclick=shiftToLeft('doneArr',${index})>&larr;</button>
          </div>
      `;
  });
}
function shiftToRight(colName, index) {
  if (colName == "todoArr") {
    let removedItem = todoArr[index];
    todoArr = todoArr.filter((item, i) => i !== index);
    renderTodo();
    progressArr.push(removedItem);
    renderProgress();
  } else if (colName == "progressArr") {
    let removedItem = progressArr[index];
    progressArr = progressArr.filter((item, i) => i !== index);
    renderProgress();
    doneArr.push(removedItem);
    renderDone();
  }
}
function shiftToLeft(colName, index) {
  if (colName == "doneArr") {
    let removedItem = doneArr[index];
    doneArr = doneArr.filter((item, i) => i !== index);
    renderDone();
    progressArr.push(removedItem);
    renderProgress();
  } else if (colName == "progressArr") {
    let removedItem = progressArr[index];
    progressArr = progressArr.filter((item, i) => i !== index);
    renderProgress();
    todoArr.push(removedItem);
    renderTodo();
  }
}

renderTodo();
renderProgress();
renderDone();
