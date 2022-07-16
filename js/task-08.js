
const form = document.querySelector(".login-form")


form.addEventListener('submit',onFormSubmet)

// function onFormSubmet(event) {
//     event.preventDefault();
//     const formElements = event.currentTarget.elements
//     console.dir(formElements) // HTMLFormControlsCollection(3)
//     const mail = formElements.email.value
//     const password = formElements.password.value
//     console.log(mail,password) // lllxxxzzz32@gmail.com adf

// }

//*ниже тожк самое

function onFormSubmet(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements
    console.dir(formElements)
    const mail = formElements.email.value
    const password = formElements.password.value
    const subscription = formElements.subscription.value
    console.log(mail, password) 
    
    const formData = {
        
    }

}