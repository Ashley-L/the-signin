//STEPS 
// 1. Display modal window when you click sign in 
// 2. Fade out the modal window when you click close
// 3. Toggle the error class when you click submit
// 4. Remove error class when cursor is in the field

let modalWindow = document.querySelector('#modal')
let signIn = document.querySelector('#signin')
let closeButton = document.querySelector(`#close`)
let submitButton = document.querySelector('#submit')

let inputField = document.querySelectorAll(`.field`)
var userInputs = document.querySelectorAll("input")
let inputUsername = document.getElementById('user')
let inputPass = document.getElementById('pass')
// let userValue = inputUsername.value.trim();
// let passValue = inputPass.value.trim();

let greeting = document.querySelector('#hello');
let form = document.querySelector('#getstarted')






// Display modal window when you click sign in
signIn.addEventListener(`click`,(event) => {
    modalWindow.style.display = `block`;
})


// Close modal window when you click close 
closeButton.addEventListener(`click`,(event) => {
    modalWindow.style.display = `none`;
})



// Show error when you click submit for BOTH user and password


    // show error when you click for both, but individually
    // submitButton.addEventListener(`click`,(event) => {
    //     // document.querySelector('#user').classList.add(`error`);
    //     // document.querySelector('#pass').classList.add(`error`);

    //     inputField.forEach(box => {
    //         box.classList.add(`error`)
    //     })
    // })



// To remove the error class from input field when cursor is in the field 
// // INDIVIDUAL
// let userFocus = document.getElementById(`user`)
// userFocus.addEventListener(`focus`, (event) => {
//     userFocus.classList.remove(`error`);
// })

// let userPass = document.getElementById(`pass`)
// userPass.addEventListener(`focus`, (event) => {
//     userPass.classList.remove(`error`);
// })


// To remove the error class from input field when cursor is in the field 
// 1. Grab both input
// 2. Remove classList error from each input

// console.log(`${userInputs}`)

userInputs.forEach(field => {
    field.addEventListener(`focus`, (event) => {
        console.log(`there's a focus`)
        //document.getElementsByTagName(`input`).classList.remove(`error`)
        console.log(event);
        event.target.classList.remove(`error`) 
    })
})




// To find what is being targeted
// console.log(event)
// go console > click on whatever shit on the website 
// > look at the dropdown > go to target



//////////////////////////////////////////////////////
///////////////////////PART 2/////////////////////////
//////////////////////////////////////////////////////
// FUNCTION: WHEN YOU CLICK SUBMIT



// userInputs.forEach(input => {
//     console.log(`there are two fields`)
//     input.addEventListener(`blur`, (event) => {
//         console.log(`there's a blur`)

//         // let userValue = inputUsername.value.trim();
//         // if (userValue === "") {
//         //     event.target.classList.add(`error`)
//         //     console.log(`username is invalid`)
//         // } else {console.log(`username is valid`)}

//         let passValue = inputPass.value.trim();
//         if (passValue === "") {
//             event.target.classList.add(`error`)
//             console.log(`password is invalid`)
//         } else {console.log(`password is valid`)}
        
//         // if (userValue === "" && passValue === "") {
//         //     event.target.classList.add(`error`)
//         //     // console.log(`password is invalid`)
//         // } 
//     })
// })





// THIS EVENT LISTENER IS ON SUBMIT

// STEP 1. Prevent from submitting when submit is clicked
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(`Don't submit this page`)  

    // STEP 2. Add .error to value = "" when submit is clicked [INDIVIDUALLY]
    // Trim whitespace so typing in spaces will still show an error

    // Error for username w/ value ""
    let userValue = inputUsername.value.trim();
    console.log(`The username is ${userValue}`);
    if (userValue === "") {
        inputUsername.classList.add(`error`)
    }
   
    // // Error for password w/ value ""
    let passValue = inputPass.value.trim();
    console.log(`The password is ${passValue}`)
    if (passValue === "") {
        inputPass.classList.add(`error`)
    }

   





    

    // STEP 3. If both fields valid on submit
        // close modal
        // remove sign-in page
        // append textContent to the #hello saying 'Welcome [USERNAME]'
        // make textContent half the font size
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

    // ! means NOT; && means AND
    if (userValue !== "" && passValue !== "") {
        // close/hide modal
        modalWindow.style.display = `none`;
        console.log(`That's valid, bro.`)

        // remove/hide sign in button
        signIn.style.display = `none`;

        // append textContent
        greeting.textContent = `Hello, ${userValue}`;

        // reduce font size
        // let initialFont = window.getComputedStyle(document.querySelector('#hello')).fontSize;
        // console.log(`Font size is ${initialFont}`)
        greeting.style.fontSize = `4em`;   
    } else {
        console.log(`User + pass: Not valid`)
    }
})

//////////////////////////////////////////////////////////
// STEP 4. Error after you remove cursor from the field //
//////////////////////////////////////////////////////////


// 1. FIRST YOU NEED TO GET THE INPUTS, WHICH YOU ALREADY DID
    // var userInputs = document.querySelectorAll("input")

// 2. You are going to test if an input's value is false
    // So make a variable and set it to false
    // Empty strings ("") are false by default
    var emptyValue = false;

// 3. Write a function (outline) to validate the inputs
    // Parameters can also be any name, stop forgetting
function validateInputs (thetwoInputs) {

   
    // 4. running the function FOR EACH input (individually)
    thetwoInputs.forEach(input => {

        // 5. Add the event listener
        //  listening for a blur on (each) input
        input.addEventListener(`blur`, event => {
            // if the value of an input is NOT false/empty, add .error
            // you have to do 'if not empty' first
            if (input.value != emptyValue) {
                input.classList.remove(`error`);
            } else { //if it IS empty, add the .error
                input.classList.add(`error`)
            }
        })
    })
}

// This whole thing basically says
// for each input, look for a blur
// if the string is not empty, remove the error class
// and if it's still empty, add the error class

// run the function on userInputs (qhich is querySelectorAll on inputs)
validateInputs(userInputs);



// STEP 5. Click the modal to close
modalWindow.addEventListener(`click`, event => {
    modalWindow.style.display = `none`;
    console.log(event);
})
// Parent: #modal --> modalWindow
// Child: #getstarted --> form
// Problem: clicking the child (form) triggers the eventlistener (close) on the parent (modalWindow)
// Solution: add stopPropagation to the child to stop the click from bubbling up

form.addEventListener(`click`, event => {
    event.stopPropagation();
})







/* NOTES 30/01/20
- to stop scrolling: position: fixed; + overflow: hidden;
- do DOM references (all the variables) at the top at the beginning
    - $ at the beginning of variable name --> $modalWindow
    - but make a function for the variables since they're all 'document.querySelector' --> const $ = (selector) =>{}
- https://developer.mozilla.org/en-US/docs/Web/Events
- console.log(event) --> prints out all the details 



FOR TAKE-HOME
- window: holds the content, can change
- document: the whole thing
- fold: bottom of the window, document extends past 

- Console: window.innerheight or innerwidth --> dimensions of window
- Console: document.body.scrollHeight
- inner width of body is less than inner width of window b/c of scroll bar
- you can only scroll the difference between doc and window
- make the scroll function on window, (add console.log(event) don't need this)
- scrollY - up/down scroll 
- only need height values really
- need css
*/








// WRITE YOUR STEPS HOLY SHIT
// step 4.4 for each #input??? or field???
// userInputs.forEach(input => {
    // step 4.3. blur (opposite of focus) on the field (b/c it's the target)
//     inputUsername.addEventListener(`blur`, event => { 
//         console.log(event)
//         // step 4.2. if statement: if value === "" then add .error
//         if (userValue === "") {
//             // step 4.1. add .error to #input
//             event.target.classList.add(`error`)
//             // console.log(`username is ${userValue}, password is ${passValue}`)
//         }
//     }) 
// // })


// var on input, but maybe not querySelector all


// var inputs = document.value.trim()
// userInputs.forEach(field => {
//     field.addEventListener(`focus`, event => {
//         event.target.classList.remove(`error`)
//     })
//     field.addEventListener(`blur`, event => {
//         if (userInputs  == "" || userInputs == " ") {
//             event.target.classList.add(`error`)
//         } 
//         // else {
//         //     event.target.classList.remove(`error`)
//         // }
//     })
// })




// function inputValidation(test) {
//     var test = input.value.trim()

// }


// userInputs.forEach(field => {
//     // step 4.3. blur (opposite of focus) on the field (b/c it's the target)
//     field.addEventListener(`blur`, event => { 
//         // step 4.2. if statement: if value === "" then add .error
//         let userValue = inputUsername.value.trim();
//         let passValue = inputPass.value.trim();
//         if (userValue == "" ||  passValue == "") {
//             // step 4.1. add .error to #input
//             event.target.classList.add(`error`)
//             console.log(`username is ${userValue}, password is ${passValue}`)
//         } else {
//             event.target.classList.remove(`error`);
//         }
//     }) 
// })



///////////////////////////////////////
// THIS IS ALL YOUR SHIT FROM STEP 4 //
///////////////////////////////////////



// var userInputs = document.querySelectorAll("input")
// var test = document.querySelector
// test.forEach(field => {
//     if (userInputs) {
//         field.classList.add(`error`);
//     }
// })


// if value is "", it's false
// if else, it's true

// for each of the inputs //

// get value of the inputs
// switch(true) execute some code, 


// function > for each > blur > stuff
// 