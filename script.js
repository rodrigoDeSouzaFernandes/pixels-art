const pixelBoard = document.getElementById('pixel-board');
const numberInput = document.getElementById('number-input');
let boardLength = 5;

function addPixels() {
  if (boardLength < 41) {
    while (pixelBoard.firstChild) {pixelBoard.removeChild(pixelBoard.firstChild)};
    for (let index = 0; index < boardLength; index += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'div-line';
    for (let i = 0; i < boardLength; i += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    divLine.appendChild(pixelDiv);
    }
    pixelBoard.appendChild(divLine);
    }
    color();
    eraseBoard();
    pixelWidth();
  } else {alert('Por favor, insira um número menor ou igual a 40')}
}
addPixels();


numberInput.addEventListener('change', () => boardLength = numberInput.value);
const addBoard = document.getElementById('add-board');
addBoard.addEventListener('click', addPixels)

//  pintando
const colorsArray = document.getElementsByClassName('color');
const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < colorsArray.length; index += 1) {
    if (colorsArray[index].classList.contains('selected')) {
      colorsArray[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
  });

function color() {
  const pixelsArray = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelsArray.length; index += 1) {
    pixelsArray[index].addEventListener('click', function () {
      const elem = document.getElementsByClassName('selected')[0];
      const elemColor = window.getComputedStyle(elem, null).getPropertyValue('background-color');
      pixelsArray[index].style.backgroundColor = elemColor;
    });
  }
}

function eraseBoard() {  
  const pixelsArray = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelsArray.length; index += 1) {
      pixelsArray[index].style.backgroundColor = 'white';
    }
}

function pixelWidth() {
  const pixelsArray = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelsArray.length; index += 1) {
      pixelsArray[index].style.width = `${410/boardLength}px`;
      pixelsArray[index].style.height = `${410/boardLength}px`;
    }
}