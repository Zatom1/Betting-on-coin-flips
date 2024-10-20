# Betting-on-coin-flips
A simple rust program that empirically tests a question proposed by one of my friends: You are offered a bet---you begin with S dollars, and a coin is flipped N times, with you losing L dollars each time it lands on tails and winning W dollars each time it lands on heads. Given that L &lt; W, should you take the bet? Find out in the readme...

The answer is, as long as N>>S/L, S>0, and you never land your coin on the edge, the ratio of losses over wins approaches W/L. 

The numerical answer here follows the equation: 

$$\mathrm{f} =  \sum_{k=0}^{N} (\frac{\sum_{a=0}^{k+1} S+a(W+L)-kL < 0}{\sum_{b=0}^{k+1} S+b(W+L)-kL > 0})$$

Where if you take the limit of the equation as N approaches infinity:

$$\displaystyle \lim_{N \to \infty} (f)$$
