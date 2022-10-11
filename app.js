const list = document.getElementById("list");
const addTodo = () => {
  const userInput = document.getElementById("todo");

  //   ================== Li wor k ===============
  const li = document.createElement("li");
  const liText = document.createTextNode(userInput.value);
  li.appendChild(liText);
  list.appendChild(li);
  console.log(li)
//   localStorage.setItem('todos', JSON.stringify(userInput.value));
//   localStorage.setItem('value', userInput.value);
//   localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: userInput.value}]));
//   localStorage.getItem("lastname");
  userInput.value = "";

  //   ================ delete button ===============
  const deleteBtn = document.createElement("button");
  const deleteText = document.createTextNode("Delete");
  deleteBtn.appendChild(deleteText);
  li.appendChild(deleteBtn);
  deleteBtn.setAttribute("onClick", "deleteItem(this)");

  // ============ edit ==============
  const editBtn = document.createElement("button");
  const editBtnText = document.createTextNode("Edit");
  editBtn.appendChild(editBtnText);
  li.appendChild(editBtn);
  editBtn.setAttribute("onClick", "editButtonFn(this)");
};

//   ============== delete all ==============

const deleteTodoAll = () => {
  list.innerHTML = "";
};

function deleteItem(e) {
  e.parentNode.remove();
  // console.log("deete")
}

const editButtonFn = (e) => {
  let val = e.parentNode.firstChild;
  let editVal = prompt("Please make edit your Todo", val.nodeValue);
  val.nodeValue = editVal;
};
