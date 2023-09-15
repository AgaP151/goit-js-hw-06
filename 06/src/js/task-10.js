function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxess(amount) {
  let divHeight = 30;
  let divWidth = 30;
  let divArray = [];

  for (let i = 1; i <= amount; i +=1) {
    const divColor = getRandomHexColor();

    const box = document.createElement('div');
    box.style.cssText = `height: ${divHeight}px; width: ${divWidth}px; background-color: ${divColor}`;

    divArray.push(box);

    divHeight += 10;
    divWidth += 10; 
  }
  boxessEl.append(...divArray);

}
const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxessEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxess(inputEl.value))

destroyBtn.addEventListener('click', () => boxessEl.innerHTML = '')
