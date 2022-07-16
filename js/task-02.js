const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")
// 
const elements = ingredients.map(option => {
  const ingredientsEl = document. createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = option;
  
  return ingredientsEl
})

ingredientsList.append(...elements)


//======================
// const ulEl = document.querySelector('#ingredients');
// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
// ulEl.innerHTML = list;