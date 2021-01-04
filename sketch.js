var backgroundImage;
var gameState=0;
var playerCount;
var database;
var position;
var form,player,game;
var allPlayers;
var distance=0;

function setup(){
  createCanvas(400,400);
  database = firebase.database();
  //console.log(database);
  game=new Game();
  game.getState();
  game.start();
  
 
}

function draw(){
 if (playerCount===4){
   game.update(1)
 }
 if (gameState===1){
   clear()
   game.play()
 }
  
}

