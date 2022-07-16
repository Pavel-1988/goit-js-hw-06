const categories = document.querySelectorAll("li.item")
console.log(`Number of categories: ${categories.length}`)


const category = document.querySelectorAll("li.item")
category.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}
    Elements: ${el.lastElementChild.children.length} ` )
})


//===============

// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });
// ?????
//===============

// const totalCategories = document.querySelectorAll(".item"); //* обращаемся ко всем item
// const categoriesArray = [...totalCategories] //* спредим все в из totalCategories в массив
//   .map(categories => `Category: ${categories.children[0].textContent}
// Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n"); //* делаем все с новой строки
// console.log(categoriesArray);