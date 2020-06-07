//variables for wall and car
var car , wall;

//variables for weight and speed
var speed , weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = 10;

  wall = createSprite(1500,200,60, height/2);

  car.collide(wall);
}

function draw() {
  background(255,255,255);

  car.velocityX = speed;

  car.collide(wall);
  wall.collide(car);
  
  isTouching();

  drawSprites();

  console.log(car.width/2 + wall.width/2 );

  car.debug;
  wall.debug;
}

function isTouching () {
  if (car.x - wall.x < car.width/2  + wall.width/2 &&
    wall.x - car.x < car.width/2 + wall.width/2 + 2  
    /*wall.y - car.y < car.height/2 + wall.height/2*/ 
    /*car.y - wall.y < car.height/2 + wall.height/2*/) {
      if (0.5*weight*speed*speed/22500 < 100) {
        car.shapeColor = "green";
      }
      if (0.5*weight*speed*speed/22500 > 100 && 0.5*weight*speed*speed/22500 <180) {
        car.shapeColor = "yellow";
      }
      if (0.5*weight*speed*speed/22500 > 180) {
        car.shapeColor = "red";
      }

      car.velocityX = 0;

    } else {
      wall.shapeColor = "black";
      car.shapeColor = "black";
    }
} 