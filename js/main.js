//STEPS 
// 1. Display modal window when you click sign in 
// 2. Fade out the modal window when you click close
// 3. Toggle the error class when you click submit
// 4. Remove error class when cursor is in the field


let modalWindow = document.querySelector('#modal')


// Display modal window when you click sign in
let signIn = document.querySelector('#signin')

signIn.addEventListener(`click`,(event) => {
    modalWindow.style.display = `block`;
})


// Close modal window when you click close 
let closeButton = document.querySelector(`#close`
)
closeButton.addEventListener(`click`,(event) => {
    modalWindow.style.display = `none`;
})



// Show error when you click submit for BOTH user and password
let submitButton = document.querySelector('#submit')

let inputField = document.querySelectorAll(`.field`)

submitButton.addEventListener(`click`,(event) => {
    // document.querySelector('#user').classList.add(`error`);
    // document.querySelector('#pass').classList.add(`error`);

    inputField.forEach(box => {
        box.classList.add(`error`)
    })
})




// // INDIVIDUAL
// let userFocus = document.getElementById(`user`)
// userFocus.addEventListener(`focus`, (event) => {
//     userFocus.classList.remove(`error`);
// })

// let userPass = document.getElementById(`pass`)
// userPass.addEventListener(`focus`, (event) => {
//     userPass.classList.remove(`error`);
// })



// 1. Grab both input
// 2. Remove classList error from each input

let userInputs = document.querySelectorAll("input")
console.log(`${userInputs}`)

userInputs.forEach(field => {
    field.addEventListener(`focus`, (event) => {
        //document.getElementsByTagName(`input`).classList.remove(`error`)
        console.log(event);
        event.target.classList.remove(`error`) 
    })
})

// To find what is being targeted, go console > click on whatever shit on the website > look at the dropdown > go to target  


///////////////////////PART 2/////////////////////////

