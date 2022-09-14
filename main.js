// create global variable to use for call back
let color = 'black';
// stops drawing once user clicks
let click = true;

function populateBoard(size) {
    let board = document.querySelector('.board');
    // clear out any existing squares on the board
    // grabs all div squares on board and removes them
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    // this creates 16 columns/rows that will repeat that will repeat
    // each column/row will have a width of 1/16 the width of the container
    // repeat(number, width);
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    // creating 256 (16x16) grid square divs 
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        // changes square to desired color after mousing over
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        // this appends square into board inside the targetElement, after its last child
        // insertAdjacentElement(position, element);
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

// will display square size according to user input
function changeSize(input) {
    // will populateBoard if input is between 2 and 100
    if(input >= 2 && input <= 100) {
      document.querySelector('.error').style.display = 'none';
      populateBoard(input);
    } else {
      document.querySelector('.error').style.display = 'flex';
    }
} 

// stops drawing when user clicks mouse
// displays random colors when button is clicked
function colorSquare() {
  if(click) {
    if(color === 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}
// resets board when reset button is clicked
function resetBoard() {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.style.backgroundColor = 'white');
}
  // adding style within JS
  const mode = document.querySelector('.mode');
  mode.style.cssText = 'color: rgb(190, 190, 190); font-weight: bold; font-size: 23px;'
  
  // stops drawing when user clicks mouse
  document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
      click = !click;
      if(click) {
        document.querySelector('.mode').textContent = 'Mode: Coloring';
      } else {
        document.querySelector('.mode').textContent = 'Mode: NOT Coloring';
     }
    }
  });

  /* randomizes background color upon reload
  function randomBackgroundColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
 
    document.body.style.background = bgColor;
  }

randomBackgroundColor();
*/