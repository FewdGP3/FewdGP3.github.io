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
for (let project of projectList){  //project 每一個既object, 每次loop都會refresh 新既值
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
    
})
document.querySelector('main').addEventListener('click', (event) => {
    console.log('main')
    addonDescriptionPopup.classList.remove('hide')
})

addonDescriptionConfirmBtn.addEventListener('click',()=>{

console.log(123)
    const pjName = document.querySelector('#floatingTextarea3').value
    console.log(pjName)
    const dName = document.querySelector('#floatingTextarea4').value
    console.log(dName)
    const dueDates = document.querySelector('#addonDate').value
    console.log(dueDates)
    const pj = {
        projectName:pjName.trim(),
        description:dName.trim(),
        dueDate:dueDates,
    }
    console.log(pj)
    projectList.push(pj)
    console.log(projectList)
    mediaList.innerHTML=''
    for (let project of projectList){  //project 每一個既object, 每次loop都會refresh 新既值
        console.log(project.projectName)  
        console.log(project.description)
        console.log(project.dueDate)
        // const projectName = project.projectName 
        mediaList.innerHTML +=  `
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

})

// const newMedia = document.querySelector('.project-control'+'.description-control'+'.assign-to'+'.due-date')
// newMedia.innerHTML = media.value;


// const newAddonUserProject = `<p>'‘Task’' + ${userDescription.value}</p>`