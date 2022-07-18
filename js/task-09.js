function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');



const onChangeBody = (event) => {
  body.style.backgroundColor = getRandomHexColor ();
  color.textContent = body.style.backgroundColor
}



btn.addEventListener("click", onChangeBody)



  
  


