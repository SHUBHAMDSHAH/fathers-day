var canvas, backgroundImage;
var father1,father2,lovedad;
var father1image,father2image,lovedadimage;
var car1,car2,car3,car4,cars;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function preload(){
  father1image=loadImage("sprites/father.png");
  father2image=loadImage("sprites/lovely father.png");
  lovedadimage=loadImage("sprites/i love dad.png")
}

function setup(){
  canvas = createCanvas(1800,600);
  database = firebase.database();
  
 form = new Form();
  
}
function draw(){
  form.display();
}