let board;
let boardheight=500;
let boardwidth=500;
let context;

window.onload=function(){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d");
}