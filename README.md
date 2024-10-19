# Betting-on-coin-flips
A simple rust program that empirically tests a question proposed by one of my friends: You are offered a bet---you begin with S dollars, and a coin is flipped N times, with you losing L dollars each time it lands on tails and winning W dollars each time it lands on heads. Given that L &lt; W, should you take the bet? Find out in the readme...

The answer is, as long as N>>S/L, S>0, and you never land your coin on the edge, the ratio of losses over wins approaches W/L. 
