const addItemButton = document.querySelector('#addItemButton')


addItemButton.addEventListener('click',()=> {
    const text = document.querySelector('.description-control')
    console.log(text.value)

    const itemList = document.querySelector('#itemList')
    
    itemList.innerHTML += `
    <div class="media">
        <div class="h-status">
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="media-body">
            <h5 class="mt-0">${text.value}</h5>
            <p>Description</p>
        </div>
        <div class="assigned-to">
            <i class="fas fa-user-circle"></i>
            <i class="fas fa-user-circle"></i>
        </div>
    </div>
    `

})