# Betting-on-coin-flips
A simple rust program that empirically tests a question proposed by one of my friends: You are offered a bet---you begin with S dollars, and a coin is flipped N times, with you losing L dollars each time it lands on tails and winning W dollars each time it lands on heads. Given that L &lt; W, should you take the bet? Find out in the readme...

The answer is, as long as N>>S/L, S>0, and you never land your coin on the edge, the ratio of losses over wins approaches W/L. 

The numerical answer here follows the equation: 

$$\mathrm{f} =  \sum_{k=0}^{N} (\frac{\sum_{a=0}^{k+1} S+a(W+L)-kL < 0}{\sum_{b=0}^{k+1} S+b(W+L)-kL > 0})$$

Where if you take the limit of the equation as N approaches infinity:

$$\displaystyle \lim_{N \to \infty} (f)$$

You get the answer to the initial question, and experimental confirmation of our initial statement that the expression approaches W/L.

# File descriptions
## SimulationCoinFlip.js
This program runs individual simulations of the question using random chance to determine coin flip results. It runs each simulation 10 coin flips at a time, (which can be modified in code to run more slowly/quickly) and graphs the amount of money at each point in the simulation over time. The graph scales according to how many iterations have occured and the current $ value, so it can look quite chaotic at times.
## coinFlipJS.js, coinFlipRust.rs
These are javascript and rust versions of the exact same program. These programs iteratively, deterministically calculate the solution to the set of summations outlined above. These are not incredibly optimized programs, so they will take a bit of time when making the 5 billion comparisons required to solve this problem. Not sure why, but the javascript program is much faster than the rust one- usually around 17 seconds v.s. ~80 seconds.
