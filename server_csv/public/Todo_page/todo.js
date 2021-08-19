console.log("hello");
const date = document.querySelector(".date > h1");
date.innerHTML = moment().format("L");
const input = document.querySelector("input#enterAdd");
const btn = document.querySelector(".addTask > button");

let selectDate = ''

let itemList = [
  {
    name: "123",
    duedate: "2021-08-12",
    isCompleted: "yes"
  },
  {
    name: "123",
    duedate: "2021-08-12",
    isCompleted: "no"
  },
  {
    name: "123",
    duedate: "2021-08-11",
    isCompleted: "yes"
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
  
  itemList.push({
    name: input.value,
    duedate: selectDate,
    isCompleted: "no"
  })

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
      selectDate = info.dateStr
      let items = itemList.filter((item) => item.duedate === info.dateStr);
      let html = "";
      const notCompleted = document.querySelector(".notCompleted");
      const Completed = document.querySelector(".complete");
      notCompleted.innerHTML = "";
      Completed.innerHTML = "";
      console.log(items);
      for (let item of items) {
        if(item.isCompleted==='no'){
          addNotCompletedItem(item.name);
        }else{
          addCompletedItem(item.name)
        }
      }
    },
  });
  calendar.render();
});

function addNotCompletedItem(input) {
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

function addCompletedItem(input) {
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
    Completed.appendChild(newLi);
    newLi.appendChild(delBtn);
  }
  delBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}