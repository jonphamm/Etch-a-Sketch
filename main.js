let board = document.querySelector('.board');
// this creates 16 columns/rows that will repeat that will repeat
// each column/row will have a width of 1/16 the width of the container
// repeat(number, width);
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

// creating 256 (16x16) grid square divs 
for(let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'blue';
    // this appends square into board inside the targetElement, after its last child
    // insertAdjacentElement(position, element);
    board.insertAdjacentElement('beforeend', square);
}