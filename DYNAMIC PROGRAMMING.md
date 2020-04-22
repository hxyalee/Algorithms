# DYNAMIC PROGRAMMING
* Build an optimal solution to the problem from optimal soultions for subproblems
	
* Subproblems are chosen in a way which allows recursive construction of optimal solutions to problems from optimal solutions to smaller size problems

* Efficiency of DP comes from the fact that the set of subproblems needed to solve larger problems heavily overlap: each subproblem is solved only once and its solution is stored in a table for multiple use for solving many larger problems

## Activity Selection
* Instance: A list of activities *a<sub>i</sub>*, 1  $\leq$