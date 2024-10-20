let startingMoney = 10
let money = startingMoney;//stores current amount of $
let moneyArr = []; //stores past $ values
let timer = 0;
let deathCount = 0;
let surviveCount = 0;

let iterations = 100;

class pointInPath{//defines a single point along the tree
  constructor(money, depth, previousMoney){
    this.money = money;//money
    this.depth = depth;//depth in the tree
    this.prevMon = previousMoney;//money of point in the tree which spawned this point, used for creating line visualization and generally understanding where a point came from
  }
  getMoney(){
    return this.money;
  }
  getDepth(){
    return this.depth;
  }
  getPM(){
    return this.prevMon;
  }
}

let tree = [[new pointInPath(startingMoney, 0, 0)]];//creates the tree with an origin point




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
  createCanvas((iterations*15)+20, (iterations*15)+450);
  
  for(let i = 0; i < iterations; i++){
    let layer = [];
    append(tree, layer);//creates the tree's layers, to be filled in later
  } //uncomment to draw tree

}

function draw() {
  timer++;//timer allows for nice graphing

  if(mouseIsPressed||timer==1){ //keeps lag manageable by pausing when you aren't pressing your mouse

  background(220)
  
    for(let i = 0; i < iterations; i++){
      flipACoin();//flip a coin N times per frame, creates 1 entire branch each frame
              if(i>0){append(tree[i], new pointInPath(money, i, moneyArr[i-1]));} //uncomment to draw tree
      sort(moneyArr)

      if(money>0){
        append(moneyArr, money);//store money value in moneyArr

      }
    }
  
     fill(0)

    strokeWeight(1)
  stroke(0, 0, 0, 15)
    // uncomment to draw tree
      let xOffset = 4//offsets for text and lines in the tree
      let yOffset = 15
      let increment = 1;//increment, set higher to speed up simulation especially when simulating a lot of branches
      
    
  for(let layer = 0; layer < tree.length-1; layer+=increment){//loops through each layer, then each point in each layer of the tree and draws a line from it to the point before it.
    for(let p = 0 ; p < tree[layer].length-1; p+=increment){

      let textX = 20+tree[layer][p].getMoney()*xOffset;
      let textY = 150+tree[layer][p].getDepth()*yOffset
      
      let pastTextX = 20+tree[layer][p].getPM()*xOffset;
      let pastTextY = 150+(tree[layer][p].getDepth()-1)*yOffset
      
      line(pastTextX+5, pastTextY-5, textX+5, textY-5)
    }
  }
  
  stroke(0,0,0,255)
  line(20, 150, 1000, 5000)

  stroke(255)
  strokeWeight(0.1)
  fill(20,0,0)
  for(let layer = 0; layer < tree.length-1; layer+=increment){//loops through each layer, then each point in each layer of the tree and draws text of the points "money" value
    for(let p = 0 ; p < tree[layer].length-1; p+=increment){

      let textX = 20+tree[layer][p].getMoney()*xOffset;
      let textY = 150+tree[layer][p].getDepth()*yOffset
      
      let pastTextX = 20+tree[layer][p].getPM()*xOffset;
      let pastTextY = 150+(tree[layer][p].getDepth()-1)*yOffset
      if(tree[layer][p].getMoney()>0){
        text(tree[layer][p].getMoney(), textX, textY)

      }
    }
  }
  
  fill(0)
  text("Death to survival ratio: " + (deathCount/surviveCount), 50, 50)
  text("Number of paths: " + (deathCount+surviveCount), 50, 100)

  //text(moneyArr[moneyArr.length-1]/moneyArr.length, 100, 50)
  fill(220)
  
  }
  
  if(moneyArr.length > iterations-1 || money < 1){
    
    if(moneyArr.length>iterations-1){
      surviveCount++;
    }
    else{
      deathCount++;
    }
    
    money =startingMoney;
    moneyArr = [];
    ///background(220)
  }
}
