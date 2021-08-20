
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
addonDescriptionPopup.addEventListener('click', (event) => {
    // event.preventDefault();
    // addonDescriptionPopup.classList.add('hide');
})
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
})
