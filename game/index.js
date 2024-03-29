const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;
let speed = 5;

let downPressed = false;
let upPressed = false;
let lefPressed = false;
let rightPressed = false;


//game loop
function drawGame() {
//  console.log("draw");
  requestAnimationFrame(drawGame);
  clearScreen();
  inputs();
  boundaryCheck();
  drawBlueBall();
}

function boundaryCheck() {
  if( y < radius) {
    y = radius;
  }
  if(y > canvas.height - radius) {
    y = canvas.height - radius;
  }
  if( x < radius) {
    x = radius;
  }
  if(x > canvas.width - radius) {
    x = canvas.width - radius;
  }
  
}

function inputs() {
  if(upPressed) {
    y = y - speed;
  }
  if(downPressed) {
    y = y + speed;
  }
  if(leftPressed) {
    x = x - speed;
  }
  if(rightPressed) {
    x = x + speed;
  }
}
// requestAnimationFrame(func)
// setInterval(drawGame, 1000)

function drawBlueBall() {
  ctx.fillStyle = "Blue";



  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function clearScreen() {
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {

if(event.keyCode == 38) {
   upPressed = true;
 }
if(event.keyCode == 40) {
  downPressed = true;
 }

if(event.keyCode == 37) {
  leftPressed = true;
 }

 if(event.keyCode == 39) {
  rightPressed = true;
  }
}

function keyUp(event) {
  if(event.keyCode == 38) {
    upPressed = false;
  }
  if(event.keyCode == 40) {
   downPressed = false;
  }
 
 if(event.keyCode == 37) {
   leftPressed = false;
  }
 
  if(event.keyCode == 39) {
   rightPressed = false;
   }
 

}

drawGame();
// setInterval(drawGame, 1000 / 60);