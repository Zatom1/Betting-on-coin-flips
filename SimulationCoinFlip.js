let money = 10//stores current amount of $
let moneyArr = []; //stores past $ values
let timer = 0;
let totalCollectedMoney = 0;
let mostMoney = 0;
let itPerSec = 10;//iterations per second, higher number makes the simulation run faster, up until 501, after which the simulation actually runs more slowly. Lower this to see the process of each graph forming and raise it to run a bunch of simulations quickly

let deathCount = 0;
let surviveCount = 0;

function flipACoin(){//function which runs the simulation. It picks a random number between 0 and 1, then has a 1/2 chance of either adding 5 or subtracting 4 to the money value, stopping if money is zero.
  let chance = random(0,1);
  if(money>0){
    if(chance >0.5){
      money+=5;
    }
    else{
      money-=4;
    }
  }
}

function setup() {//boilerplate stuff
  createCanvas(800, 800);
}

function draw() {
  background(220)
  timer++;//timer allows for nice graphing
    for(let i = 0; i< itPerSec; i++){
      flipACoin();//flip a coin 1,000 times per frame
      if(money>0){
        append(moneyArr, money);//store money value in moneyArr

      }
    }
  
  for(let i = 0; i < moneyArr.length; i++){
    fill(0)
    rect(i*(800/moneyArr.length), 800, 800/moneyArr.length, -moneyArr[i]*(200/moneyArr[moneyArr.length-1]))
    // stroke(0)
    // strokeWeight(4)
    // let pointX = i*(width/moneyArr.length)
    // let pointY = height-moneyArr[i]*(200/moneyArr[moneyArr.length-1])
    // if(pointY>400){
    //   point(pointX, pointY)
    //   //line(i*(width/(moneyArr.length-1)), height-moneyArr[i]*(200/moneyArr[moneyArr.length-2]), pointX, pointY)
    // }
  }
  
  strokeWeight(0.5)
  
  text("$ in this sim: " + money, 50, 50)
  text("avg $ on win: " + totalCollectedMoney/(deathCount+surviveCount), 450, 50)
  text("Ratio of losses/wins: " + (deathCount/surviveCount), 200, 50)
  text("Total number of runs: " + (deathCount+surviveCount) + " - most $ won in single run: " + mostMoney, 50, 100)

  fill(220)
  let iterations = 1000
  if(moneyArr.length > iterations || money < 1){
    
    if(moneyArr.length>iterations){
      surviveCount++;
      totalCollectedMoney += money;
      if(money > mostMoney){
        mostMoney = money;
      }
    }
    else{
      deathCount++;
    }
    
    money = 10;
    moneyArr = [];
    ///background(220)
  }
  
  stroke(255,0,0)
  line(0,800,800,600)
  stroke(0)
}
