
const descriptionPopup = document.querySelector(".descriptionPopup-wrapper");

const descriptionConfirmBtn = document.querySelector('#Confirm');
const descriptionCancelBtn = document.querySelector('#Cancel');
// const descriptionCloseBtn = document.querySelector('.descriptionPopup-close');

const addDescriptionButtons = document.querySelectorAll(".media")

// const tasksContainer = document.querySelector('#tasks-container')

const loadData = async () => {
    const datas = await fetch('http://localhost:8080/todolist')
    const dataArray = datas.json()
    for (let data of dataArray){
        document.querySelector("#tasks-container").innerHTML = `
        <div class="media">
          <div class="h-status">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="media-body">
            <h5 class="mt-0">${data.name}</h5>
            <p>${data.description}</p>
          </div>
          <div class="assigned-to">
            <p>${data.assignedTo}</p>
            <i class="fas fa-user-circle"></i>
            <i class="fas fa-user-circle"></i>
          </div>
        </div>
        `
    }
}
loadData()




for (let addDescriptionButton of addDescriptionButtons) {
    addDescriptionButton.addEventListener('click', (event) => {
        // event.preventDefault();
        descriptionPopup.classList.remove('hide')
    })
}
descriptionPopup.addEventListener('click', (event) => {
    // event.preventDefault();
    // descriptionPopup.classList.add('hide');
})
descriptionCancelBtn.addEventListener('click', (event) => {
    // event.preventDefault();
    descriptionPopup.classList.add('hide');
})
// descriptionCloseBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     descriptionPopup.classList.add('hide');
// })
descriptionPopup.addEventListener('click', (e) => {
    e.stopPropagation();
})
document.querySelector('main').addEventListener('click', (event) => {
    console.log('main')
})

// descriptionConfirmBtn.addEventListener('click',()=>{
//     console.log('Project title:'+description-control+assign-to.value);
// })

// const projectList = document.querySelector('.media-body')
    
// projectList.innerHTML += `
//     <div class="media">
//         <div class="h-status">
//             <i class="fas fa-check-circle"></i>
//         </div>
//         <div class="media-body">
//             <h5 class="mt-0">${text.value}</h5>
//             <p>Description</p>
//         </div>
//         <div class="assigned-to">
//             <i class="fas fa-user-circle"></i>
//             <i class="fas fa-user-circle"></i>
//         </div>
//     </div>


const pjinput = document.querySelector("pjinput.description-control");
const btn = document.querySelector("#Confirm > button");

btn.addEventListener("click", addProject);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addList();
    //console.log('enter:   ' + e.key)
  }
});