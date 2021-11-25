var bearImg,dogwalking,girlwalking,lionImg,snakeImg
,wolfImg,backgroundImg
var bg,girl,dog,lion,snake,wolf, ipath,bear
var bgMusic,bite,gameOver,jump;

function preload() {

  bearImg = loadAnimation("bear.png","bear2.png","bear3.png")
  dogwalking= loadAnimation("d1.png","d1.png","d2.png","d2.png","d2.png","d3.png","d3.png","d3.png","d4.png","d4.png")
  girlwalking= loadAnimation("g1.png","g2.png","g3.png","g4.png")
  lionImg = loadAnimation("lion.png","lion2.png","lion3.png",)
  wolfImg = loadAnimation("wolf.png","wolf2.png","wolf3.png","wolf4.png")
  
  backgroundImg= loadImage("background.png")

  bgMusic = loadSound("bg.mp3")
  bite= loadSound("bite.wav")
  gameOver= loadSound("gameOver.mp3")
  jump= loadSound("jump.wav")

  girlwalking.loop = true
  dogwalking.loop =  true
  bearImg.loop = true
  lionImg.loop = true
  wolfImg.loop = true
  bgMusic.loop = true
}

function setup() {
  createCanvas(810,600)

  bg = createSprite(490,200)
  bg.addImage(backgroundImg)
  bg.velocityX = -2
  bg.scale = 3
  bgMusic.play()

  girl = createSprite(250,450)
  girl.addAnimation("walk",girlwalking)
  girl.scale = 2

  dog = createSprite(100,480)
  dog.addAnimation("dogwalk",dogwalking)
  dog.scale = 0.8

ipath = createSprite(440,550,850,5)
ipath.visible = false
  

}

function draw() {
  background("grey")

  if(bg.x < 0){
    bg.x = bg.width/2
  }

  if(keyDown("space") && girl.y > 450 && dog.y >450){
    girl.velocityY = -15
    dog.velocityY = -15

  }
  girl.velocityY = girl.velocityY+0.8
  dog.velocityY = dog.velocityY+0.8

  girl.collide(ipath)
  dog.collide(ipath)

  spawnLions()

  spawnwWolf()
  spawnBear()
  drawSprites()
}
function spawnLions(){
  if(frameCount % 300 == 0 ){
   lion = createSprite(800,500,20,20)
   lion.addAnimation("lion",lionImg)
   lion.frameDelay = 10
   lion.scale = 2
   lion.velocityX = -6
}
}

function spawnBear(){
  if(frameCount % 350 == 0 ){
   bear = createSprite(800,500,20,20)
   bear.addAnimation("bear",bearImg)
   bear.frameDelay = 10
   bear.scale = 2
   bear.velocityX = -6
}
}

function spawnwWolf(){
  if(frameCount % 150 == 0 ){
   wolf = createSprite(800,500,20,20)
   wolf.addAnimation("wolf",wolfImg)
   wolf.frameDelay = 10
   wolf.scale = 2
   wolf.velocityX = -6
}
}