
const input = document.querySelector("#validation-input")
const inputLenght = input.getAttribute('data-length')


input.addEventListener("blur", onInputBlur)


function onInputBlur() {
    if (input.value <= inputLenght) {
        input.classList.add = ("#validation-input.valid")
        }
    
}