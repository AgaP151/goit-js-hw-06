const CategoriesEl = document.querySelector("#categories");
const newArray = CategoriesEl.children;
console.log(`Number of categories: ${newArray.length}`);

[...newArray].forEach(element => {
    const name = element.firstElementChild.textContent;
    console.log("")
    console.log(`Category: ${name}`);
    const quantity = element.lastElementChild.children.length;
    console.log(`Elements: ${quantity}`)
});