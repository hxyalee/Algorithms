# DYNAMIC PROGRAMMING
* Build an optimal solution to the problem from optimal soultions for subproblems
	
* Subproblems are chosen in a way which allows recursive construction of optimal solutions to problems from optimal solutions to smaller size problems

* Efficiency of DP comes from the fact that the set of subproblems needed to solve larger problems heavily overlap: each subproblem is solved only once and its solution is stored in a table for multiple use for solving many larger problems

## Activity Selection
* Instance: A list of activities *a<sub>i</sub>*, *1  <= i <= n* with starting times *s<sub>i</sub>* and finishing times *f<sub>i</sub>*. No two activities can take place simultaneously.
* Task: Find a subset of compativle activities of **maximal total duration**
> *Note: Greedy method was used to solve a similar problem in the past: finding a subset with the **largest possible number** of compatible activities, but Greedy method **does not ** work with this problem.*
-