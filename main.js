let board = new Array(8);

document.querySelector('#calcular').addEventListener('click', (event) => {
    event.preventDefault();
    let X = document.getElementById('X').value;
    let Y = document.getElementById('Y').value;
    
    selectCell(X, Y);
})


function autoplay(){
    for(i=0; i<8; i++) board[i] = new Array(8);

    ClearBoard();
}


function selectCell(X, Y){
    PaintCell(X, Y);
    Posible1(X ,Y);
    Posible2(X ,Y);
    Posible3(X ,Y);
    Posible4(X ,Y);
    Posible5(X ,Y);
    Posible6(X ,Y);
    Posible7(X ,Y);
    Posible8(X, Y);
}

function PaintCell(X, Y){
    cell = document.getElementById("c" + X + Y);
    cell.style.background="green";
}

function Posible1(X, Y){
    X1 = parseInt(X) + 1;
    Y1 = parseInt(Y) - 2;
    console.log( X1, Y1);
    p1 = document.getElementById("c" + X1 + Y1);
    if(p1) p1.style.background="blue";
}

function Posible2(X, Y){
    X1 = parseInt(X) + 2;
    Y1 = parseInt(Y) - 1;
    console.log( X1, Y1);
    p1 = document.getElementById("c" + X1 + Y1);
    if(p1) p1.style.background="blue";
}

function Posible3(X, Y){
    X1 = parseInt(X) + 1;
    Y1 = parseInt(Y) + 2;
    console.log( X1, Y1);
    p2 = document.getElementById("c" + X1 + Y1);
    if(p2) p2.style.background="blue";
}

function Posible4(X, Y){
    X1 = parseInt(X) + 2;
    Y1 = parseInt(Y) + 1;
    console.log( X1, Y1);
    p1 = document.getElementById("c" + X1 + Y1);
    if(p1) p1.style.background="blue";
}

function Posible5(X, Y){
    X1 = parseInt(X) - 1;
    Y1 = parseInt(Y) - 2;
    console.log( X1, Y1);
    p1 = document.getElementById("c" + X1 + Y1);
    if(p1) p1.style.background="blue";
}

function Posible6(X, Y){
    X1 = parseInt(X) - 2;
    Y1 = parseInt(Y) - 1;
    console.log( X1, Y1);
    p1 = document.getElementById("c" + X1 + Y1);
    if(p1) p1.style.background="blue";
}

function Posible7(X, Y){
    X1 = parseInt(X) - 1;
    Y1 = parseInt(Y) + 2;
    console.log( X1, Y1);
    p1 = document.getElementById("c" + X1 + Y1);
    if(p1) p1.style.background="blue";
}

function Posible8(X, Y){
    X1 = parseInt(X) - 2;
    Y1 = parseInt(Y) + 1;
    console.log( X1, Y1);
    p1 = document.getElementById("c" + X1 + Y1);
    if(p1) p1.style.background="blue";
}


function ClearBoard(){
    for(i=0; i<8; i++){
        for(j=0; j<8; j++){
            board[i][j] = 0;
        }
    }
}


autoplay();