function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const sec = document.querySelector('body');
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');



const onChangeBody = (event) => {
  sec.style.backgroundColor = "#4caf50";
  color.textContent = event.currentTarget.backgroundColor.value;
}



btn.addEventListener("click", onChangeBody)
btn.addEventListener("change", onChangeColor)


  
  

//тут поменял цвет боди на конкретный
// const changeBody = () => {
//   sec.style.backgroundColor = "#4caf50"
// }
