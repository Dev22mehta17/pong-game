let board;
let boardheight=500;
let boardwidth=500;
let context;

let playerheight=50;
let playerwidth = 10;
let playervelocityY =0;

let player1={
    x:10,
    y:boardheight/2,
    width : playerwidth,
    height : playerheight,
    velocityY : playervelocityY

}
let player2={
    x:boardwidth - playerwidth-10,
    y:boardheight/2,
    width : playerwidth,
    height : playerheight,
    velocityY : playervelocityY

}

window.onload=function(){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d");
    context.fillStyle = "skyblue";
    context.fillRect(player1.x, player1.y, player1.width, player1.height);
    document.addEventListener("keyup", movePlayer);

    requestAnimationFrame(update);

}
function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);
    context.fillStyle = "skyblue";
    // player1.y += player1.velocityY;
    let nextPlayer1Y = player1.y + player1.velocityY;
    if(!outOfBounds(nextPlayer1Y)){
        player1.y = nextPlayer1Y;
    }
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    // player2.y += player2.velocityY;
    let nextPlayer2Y = player2.y + player2.velocityY;
    if(!outOfBounds(nextPlayer2Y)){
        player2.y = nextPlayer2Y;
    }
    context.fillRect(player2.x, player2.y, player2.width, player2.height);
    
}
function outOfBounds(yPosition){
    return (yPosition < 0 || yPosition + playerheight > boardheight);
}
function movePlayer(e){
    if (e.code == "KeyW") {
        player1.velocityY = -5;
    }
    else if (e.code == "KeyS") {
        player1.velocityY = 5;
    }

    if (e.code == "ArrowUp") {
        player2.velocityY = -5;
    }
    else if (e.code == "ArrowDown") {
        player2.velocityY = 5;
    }
}
