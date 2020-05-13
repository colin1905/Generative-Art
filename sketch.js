const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = []

function setup(){
  createCanvas(530, 530, SVG)
  PALETTE = [
    color(255, 52, 154), // pink
    color(4, 0, 152),    // blue
  ]
  noLoop() // stops p5 from continuously executing the code
  angleMode(DEGREES)
  rectMode(CENTER)
}

//draw continuously executes the lines of code contained in its block
//until the program stops or noLoop() is called
function draw(){ 
 //testlines()
 outlineShape()

}



function outlineShape(){
  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3
  const hexagonTrue = randomSelectTwo()

  stroke(strokeColor)
  strokeWeight(weight)
  push()
  translate(width/2, height/2)
  if (hexagonTrue){
    hexagon(0, 0, CRYSTAL_SIZE / 2)
  } else{
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)}
  pop()
  
}
 
function testlines(){
  strokeWeight(3)
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2

  const rando2 = floor(random(0, PALETTE.length))
  const strokeColor = getRandomFromPalette();


  noFill()
  stroke(0)
  push()
    translate(width/2, height/2)
    stroke(PALETTE[0])
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(strokeColor)
    const angle = 360 / numShapes
    for(let i = 0; i < numShapes; i++){
      line(0, 0, 0, CRYSTAL_SIZE / 2)
      rotate(angle)
    }
  pop()
}

function randomSelectTwo (){
  const rando = random(1)
  if (rando > 0.5){
    return true
  } else {
    return false
  }
}

function getRandomFromPalette (){
  const rando2 = floor(random(0, PALETTE.length))
  return PALETTE[rando2]
}