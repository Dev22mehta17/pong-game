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
    velocityY : 0

}
let player2={
    x:boardwidth - playerwidth-10,
    y:boardheight/2,
    width : playerwidth,
    height : playerheight,
    velocityY : 0

}
let ballwidth =10;
let ballheight =10;
let ball={
    x:boardwidth/2,
    y:boardheight/2,
    width : ballwidth,
    height : ballheight,
    velocityX : 1,
    velocityY : 2
}

let player1score =0;
let player2score =0;


window.onload=function(){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d");

    context.fillStyle = "skyblue";
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    requestAnimationFrame(update);
    document.addEventListener("keyup", movePlayer);

}
function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);
    context.fillStyle = "skyblue";
    // player1.y += player1.velocityY;'

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

    context.fillStyle="white";
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    context.fillRect(ball.x, ball.y, ball.width, ball.height);
    if(ball.y <= 0 ||( ball.y + ball.height >= boardwidth)){
        ball.velocityY *= -1;     
}
if(detectcollision(ball,player1)){
    if(ball.x <= player1.x + player1.width){
        ball.velocityX *= -1;
    }
}
else if(detectcollision(ball,player2)){
    if(ball.x + ballwidth>= player2.x){
        ball.velocityX *= -1;
}
}
if(ball.x < 0){
    player2score++;
    resetgame(1);
}
else if(ball.x + ballwidth > boardwidth){
    player1score++;
    resetgame(-1);
}

 context.font = "45px sans-serif";
 context.fillText(player1score, boardwidth/5, 45);
 context.fillText(player2score, boardwidth*4/5 - 45, 45);

 for (let i = 10; i < board.height; i += 25) { 
    context.fillRect(board.width / 2 - 10, i, 5, 5); 
}

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

function detectcollision(a,b){
    return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;

}

function resetgame(direction){
     ball={
        x:boardwidth/2,
        y:boardheight/2,
        width : ballwidth,
        height : ballheight,
        velocityX : direction,
        velocityY : 2
    }

}