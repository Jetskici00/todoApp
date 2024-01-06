const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Функция добавления задачи
function addTask() {
  const inputValue = inputBox.value.trim();

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    const li = createTaskElement(inputValue);
    listContainer.appendChild(li);
  }

  inputBox.value = "";
  saveData();
}

// Функция создания элемента задачи
function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.innerHTML = taskText;

  const deleteButton = document.createElement("span");
  deleteButton.innerHTML = "\u00d7";
  li.appendChild(deleteButton);

  return li;
}

// Обработчик событий для списка задач
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }

  saveData();
});

// Функция сохранения данных в localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Функция отображения задач из localStorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Инициализация при загрузке страницы
showTask();
