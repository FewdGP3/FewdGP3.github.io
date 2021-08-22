const projectList = [
    {
        projectName: '12',
        description:'34',
        dueDate:'2021-11-11',
    },
    {
        projectName: '123',
        description:'344',
        dueDate:'2021-11-13',
    }
]

const mediaList = document.querySelector('.mediaList');
for (let project of projectList){
console.log(project.projectName)  
console.log(project.description)
console.log(project.dueDate)
// const projectName = project.projectName 
mediaList.innerHTML += `
    <div class="media">
    <div class="h-status">
    <i class="fas fa-check-circle"></i>
    </div>
    <div class="media-body">
    <h5 class="mt-0">${project.projectName}</h5>
    <p>${project.description}</p> 
    <p>${project.dueDate}</p>
    </div>
    <div class="assigned-to">
    <i class="fas fa-user-circle"></i>
    <i class="fas fa-user-circle"></i>
    </div>
    </div>

`
}

const addonDescriptionPopup = document.querySelector(".addonDescriptionPopup-wrapper");

const addonDescriptionConfirmBtn = document.querySelector('#addonConfirm');
const addonDescriptionCancelBtn = document.querySelector('#addonCancel');

const addaddonDescriptionButtons = document.querySelectorAll("#popupConfirm");

for (let addaddonDescriptionButton of addaddonDescriptionButtons) {
    addaddonDescriptionButton.addEventListener('click', (event) => {
        // event.preventDefault();
        addonDescriptionPopup.classList.remove('hide')
    })
}

addonDescriptionCancelBtn.addEventListener('click', (event) => {
    // event.preventDefault();
    addonDescriptionPopup.classList.add('hide');
})
// addonDescriptionCloseBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     addonDescriptionPopup.classList.add('hide');
// })

addonDescriptionPopup.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(123)
})
document.querySelector('main').addEventListener('click', (event) => {
    console.log('main')
    addonDescriptionPopup.classList.remove('hide')
})

// const newAddonUserProject = `<p>'‘Task’' + ${userDescription.value}</p>`