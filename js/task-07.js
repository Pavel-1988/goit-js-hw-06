const sizeControl = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");

console.log(sizeControl.value) // 56


sizeControl.addEventListener('input', onSizeChange);

function onSizeChange() {
    sizeText.style.fontSize = sizeControl.value + "px";
};

