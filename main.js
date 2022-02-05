const btnChangeColor = document.querySelector('.change-color');
const colorId = document.querySelector('.color-id');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const getRandomColor = () => {
  return Math.floor(Math.random() * hex.length);
};

btnChangeColor.addEventListener('click', () => {
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomColor()];
  }

  colorId.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
