console.log("hello");
const date = document.querySelector(".date > h1");
date.innerHTML = moment().format("L");
const input = document.querySelector("input#enterAdd");
const btn = document.querySelector(".addTask > button");

let itemList = [
  {
    name: "123",
    duedate: "2021-08-12",
  },
  {
    name: "123",
    duedate: "2021-08-12",
  },
  {
    name: "123",
    duedate: "2021-08-11",
  },
];

btn.addEventListener("click", addList);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addList();
    //console.log('enter:   ' + e.key)
  }
});

function addList(e) {
  console.log("hi" + e + ": " + input.value);
  const notCompleted = document.querySelector(".notCompleted");
  const Completed = document.querySelector(".complete");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = '<i class="fa fa-check"></i>';
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";
    notCompleted.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = "none";
  });
  delBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    selectable: true,
    dateClick: function (info) {
        // info.dateStr 係
      console.log("clicked " + info.dateStr);
      let items = itemList.filter((item) => item.duedate === info.dateStr);
      let html = "";
      const notCompleted = document.querySelector(".notCompleted");
      notCompleted.innerHTML = "";
      console.log(items);
      for (let item of items) {
        addItem(item.name);
      }
    },
  });
  calendar.render();
});

function addItem(input) {
  const notCompleted = document.querySelector(".notCompleted");
  const Completed = document.querySelector(".complete");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = '<i class="fa fa-check"></i>';
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  if (input !== "") {
    newLi.textContent = input;
    input = "";
    notCompleted.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = "none";
  });
  delBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}
