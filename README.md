# Betting-on-coin-flips
A simple rust program that empirically tests a question proposed by one of my friends: You are offered a bet---you begin with S dollars, and a coin is flipped N times, with you losing L dollars each time it lands on tails and winning W dollars each time it lands on heads. Given that L &lt; W, should you take the bet? Find out in the readme...

The answer is, as long as N>>S/L, S>0, and you never land your coin on the edge, the ratio of losses over wins approaches W/L. 

The numerical answer here follows the equation: 

$$\mathrm{f} =  \sum_{k=0}^{N} (\frac{\sum_{a=0}^{k+1} S+a(W+L)-kL < 0}{\sum_{b=0}^{k+1} S+b(W+L)-kL > 0})$$

Where if you take the limit of the equation as N approaches infinity:

$$\displaystyle \lim_{N \to \infty} (f)$$

You get the answer to the initial question, and experimental confirmation of our initial statement that the expression approaches W/L.

# File descriptions
## SimulationCoinFlip.js (https://editor.p5js.org/Zatom1/sketches/bUerciGqM)
This program runs individual simulations of the question using random chance to determine coin flip results. It runs each simulation 10 coin flips at a time, (which can be modified in code to run more slowly/quickly) and graphs the amount of money at each point in the simulation over time. The graph scales according to how many iterations have occured and the current $ value, so it can look quite chaotic at times.
## coinFlipJS.js, coinFlipRust.rs (https://editor.p5js.org/Zatom1/sketches/8ql1_lnQK)
These are javascript and rust versions of the exact same program. These programs iteratively, deterministically calculate the solution to the set of summations outlined above. These are not incredibly optimized programs, so they will take a bit of time when making the 5 billion comparisons required to solve this problem. Not sure why, but the javascript program is much faster than the rust one- usually around 17 seconds v.s. ~80 seconds.
## treeVisualizerCoinFlips.js (https://editor.p5js.org/Zatom1/sketches/Zt_HJJ7kC)
This program is similar to the SimulationCoinFlip.js program, but it displays a "tree" showing the paths which various simulations take overlaid on each other. The "branches" of the tree are drawn in low opacity to better visualize which points are commonly crossed, and a line of best fit is shown with a slope roughly equal to -5/4 (squished to account for the not-exactly-square space between the tree's nodes. You must click/hold the left click mouse button to make the simulations start running, this is to prevent unmanageable lag once you reach ~150 simulations shown.

### NOTE:
All files ending in .js should be run in the p5.js web editor for greatest ease of use, you can also set up a simple live server using a vscode extension or run the program in any other js environment you may desire, though the web editor is the most consistently simple to use in my experience. The coinFlipRust.exe file can be run like any other .exe in the terminal. The .js files have links on the headings which bring you to a page where you can edit the code of each program and run it in basically any modern web browser.
