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
let userInputs = document.querySelectorAll("input")
let form = document.querySelector('#getstarted')
let inputUsername = document.getElementById('user')
let inputPass = document.getElementById('pass')
let greeting = document.querySelector('#hello');




// Display modal window when you click sign in


signIn.addEventListener(`click`,(event) => {
    modalWindow.style.display = `block`;
})


// Close modal window when you click close 
closeButton.addEventListener(`click`,(event) => {
    modalWindow.style.display = `none`;
})



// Show error when you click submit for BOTH user and password


    // shoe error when you click for both, but individually
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
        //document.getElementsByTagName(`input`).classList.remove(`error`)
        console.log(event);
        event.target.classList.remove(`error`) 
    })
})


// To find what is being targeted, go console > click on whatever shit on the website > look at the dropdown > go to target////////////////////////////////////////////////  




///////////////////////PART 2/////////////////////////
// FUNCTION: WHEN YOU CLICK SUBMIT
// userInputs.addEventListener(`change`, (event) => {
//     if (event.target.value === "") {
//         userInputs.target.classList.add(`error`)
//     }
// })

// let greetingUser = greetinWelcome.textContent;

// let greeting = document.querySelector('#hello');




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
   
    // Error for password w/ value ""
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

// submitButton.addEventListener(`click`, (event) => {

    
// })


// STEP 4. 
// input.addEventListener(`change`, (event) => {
    
// })





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
