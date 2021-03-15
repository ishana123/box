var canvas;
var music;
var box1 , box2 , box3 , box4 , box5;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    box1 = createSprite ( 10 , 200 , 80 , 800);
    box1.shapeColor = "green";
    box1.debug = "true";
    box2 = createSprite (20 , 10 , 1600 , 50);
    box2.shapeColor = "blue";
    box2.debug = "true";
    box3 = createSprite (800 , 200 , 80 , 800);
    box3.shapeColor = "pink"
    box3.debug = "trur";
    box4 = createSprite (100 , 600 , 1600 , 50);
    box4.shapeColor = "yellow"; 
    box4.debug = "true";
    box5 = createSprite (random(20 , 750))
    box5.shapeColor = "white";
    box5.debug = "true";
    box5.velocityY = +5;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    drawSprite();

    //add condition to check if box touching surface and make it box
    if(box1.isTouching(box5) && box5.bouceOff(surface)){
        box5.shapeColor = "green";
    }

    if(box2.isTouching(box5) && box5.bounceOff(surface)){
        box5.shapeColor = "blue";
    }

    if(box3.isTouching(box5) && box5.bounceOff(surface)){
        box5.shapeColor = "pink";
    }

    if(box4.isTouching(box5) && box5.bounceOff(surface)){
        box5.shapeColor = "yellow";
    }
     
}
