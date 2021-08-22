

const Today = document.querySelector('.mediadate');
function getTodayDate() {
    let fullDate = new Date();
    let yyyy = fullDate.getFullYear();
    let MM = (fullDate.getMonth() + 1) >= 10 ? (fullDate.getMonth() + 1) : ("0" + (fullDate.getMonth() + 1));
    let dd = fullDate.getDate() < 10 ? ("0"+fullDate.getDate()) : fullDate.getDate();
    let today = yyyy + "/" + MM + "/" + dd;
    return today;
  }


// const descriptionPopup = document.querySelector(".descriptionPopup-wrapper");

// const descriptionConfirmBtn = document.querySelector('#Confirm');
// const descriptionCancelBtn = document.querySelector('#Cancel');
// const descriptionCloseBtn = document.querySelector('.descriptionPopup-close');


const descriptionPopup = document.querySelector(".descriptionPopup-wrapper");
const descriptionConfirmBtn = document.querySelector('#Confirm');
const descriptionCancelBtn = document.querySelector('#Cancel');


// const mediaDiv = document.querySelector(".media");

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

descriptionConfirmBtn.addEventListener('click',()=>{
    console.log(media.value);

    const newMedia = document.querySelector('.project-control'+'.description-control'+'.assign-to'+'.due-date')
    newMedia.innerHTML = media.value;

    mediaDiv.append(newMedia);
})



descriptionPopup.addEventListener('click', (event) => {
    // event.preventDefault();
    // descriptionPopup.classList.add('hide');
})

//ben
// const medias = document.querySelector('.media')
// for(const media of medias){
//     item.addEventListener('click',()=>{
//         console.log(123)
//     })
// }





