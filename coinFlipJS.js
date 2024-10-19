//THIS ONLY WORKS USING P5.JS!!!

new p5();
let startingMoney = 5000;
let NLevels = 100000;
let gainOnWin = 8;
let loseOnLoss = 4;

function findNumber(){
  let topResult = 0;
  let bottomResult = 0;
  for(let i = 0; i < NLevels; i++){
    for(let j = 0; j < i+1; j++){
      if((startingMoney + (j*(gainOnWin + loseOnLoss)) - (i*loseOnLoss)) < 0){
        topResult++;
      }
    else{
        bottomResult++;
      }
    }
  }
  return bottomResult/topResult;
}
let proportionLossesToWin;

function setup() {
  createCanvas(400, 400);
  
  proportionLossesToWin = findNumber();
  
}

function draw() {
  background(220);
  
  text("deterministically calculated results: " + proportionLossesToWin, 20, 20)
  text("$ gained on each win / $ lost on each loss: " + gainOnWin/loseOnLoss, 20, 60)
  text("difference: " + abs(proportionLossesToWin - (gainOnWin/loseOnLoss)), 20, 90)
}