const categories = document.querySelectorAll("li.item")
console.log(`Number of categories: ${categories.length}`)


const category = document.querySelectorAll("li.item")
category.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent} 
    Elements: ${el.lastElementChild.children.length} ` )
    
})
