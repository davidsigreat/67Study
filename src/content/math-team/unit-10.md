---
title: "Unit 10: Proofs & Olympiad Techniques"
unit: 10
---

# Unit 10: Proofs & Olympiad Techniques

The AMC and AIME only check your final answer. The **USAJMO** and **USAMO** grade your **proof**: a complete argument that the answer is right and nothing else works. This unit is the toolbox for that. Many of these ideas (invariants, extremal arguments, pigeonhole) also crack hard AMC and AIME problems.

## What Counts as a Proof ⭐
<!-- contests: usajmo usamo -->

A proof is a chain of statements where each one follows from earlier ones, from the problem's hypotheses, or from a well-known theorem you name.

- **Prove both directions** for "iff" and "find all" problems: show your answers work, **and** show nothing else does.
- **"Clearly" is not a proof.** If a step needs more than a line to justify, justify it.
- **An example is not a proof** of a "for all" statement, but **one counterexample disproves** it.
- **Cite theorems by name** (AM-GM, Fermat's little theorem, power of a point) and check that their conditions hold.
- **Equality cases:** for an inequality, state when equality holds and show it can happen.

## Direct Proof, Contradiction & Contrapositive ⭐
<!-- contests: aime usajmo usamo -->

- **Direct:** assume the hypothesis, derive the conclusion.
- **Contrapositive:** "if $P$ then $Q$" is the same as "if not $Q$ then not $P$". Example: to show "if $n^2$ is even then $n$ is even", show "if $n$ is odd then $n^2$ is odd".
- **Contradiction:** assume the conclusion is false and derive something impossible.

> [!example] $\sqrt2$ is irrational
> Suppose $\sqrt2=\frac pq$ in lowest terms. Then $p^2=2q^2$, so $p$ is even. Write $p=2k$: $4k^2=2q^2$, so $q$ is even too. That contradicts lowest terms.

## Induction ⭐
<!-- contests: amc12 aime usajmo usamo -->

To prove a statement $P(n)$ for all $n\ge n_0$:

1. **Base case:** prove $P(n_0)$.
2. **Inductive step:** assume $P(k)$ and prove $P(k+1)$.

- **Strong induction:** assume $P(n_0),\dots,P(k)$ all hold.
- **Strengthen the hypothesis** when the induction gets stuck: proving something stronger can make the step easier.
- Induction works on anything you can order: grid sizes, number of points, number of moves.

> [!example] $1+3+\dots+(2n-1)=n^2$
> Base: $1=1^2$. Step: if the sum up to $2k-1$ is $k^2$, adding $2k+1$ gives $k^2+2k+1=(k+1)^2$.

## The Extremal Principle
<!-- contests: amc12 aime usajmo usamo -->

Look at the **largest**, **smallest**, **first**, or **last** object, and show something must happen there.

- Consider the point with the largest $x$-coordinate, the shortest edge, the minimum counterexample.
- **Infinite descent:** if a solution gives a strictly smaller positive-integer solution, there can't be any solutions at all (there would be a smallest one).

> [!example] Points in a plane
> Finitely many points, not all on one line. Among all pairs (a point $P$, a line through two or more of the points that misses $P$), pick the pair with the **smallest** distance from $P$ to the line. Arguing about that pair proves Sylvester–Gallai: that line passes through exactly two of the points.

## Pigeonhole Principle (Advanced) ⭐
<!-- contests: amc10 amc12 aime usajmo usamo -->

If $n+1$ objects go into $n$ boxes, some box has at least two. More generally, $N$ objects in $k$ boxes put at least $\lceil N/k\rceil$ in some box.

The hard part is **choosing the boxes**:

- **Remainders:** among any $n+1$ integers, two have the same remainder mod $n$, so their difference is divisible by $n$.
- **Prefix sums:** any $n$ integers contain a nonempty run whose sum is divisible by $n$ (look at the $n$ prefix sums mod $n$).
- **Regions:** among 5 points in a unit square, two are within $\frac{\sqrt2}2$ (split into four $\frac12\times\frac12$ squares).
- **Pairs:** from $\{1,\dots,2n\}$, any $n+1$ numbers include two consecutive ones (boxes $\{1,2\},\{3,4\},\dots$).

## Invariants & Monovariants ⭐
<!-- contests: amc10 amc12 aime usajmo usamo -->

For "can you ever reach…?" and "does this process stop?" problems.

- **Invariant:** a quantity that never changes under the allowed moves (a sum, a parity, a value mod $n$, a product). If the start and target have different values, the target is unreachable.
- **Monovariant:** a quantity that only goes up (or only down). If it's a positive integer that strictly decreases, the process must stop.

> [!example] Erasing numbers
> The numbers $1,2,\dots,10$ are on a board. A move erases $a$ and $b$ and writes $|a-b|$. Can the last number be $0$? The **parity of the sum** never changes ($a+b$ and $|a-b|$ have the same parity). The sum starts at $55$ (odd), so the last number is odd and can't be $0$.

## Coloring Arguments
<!-- contests: amc10 amc12 aime usajmo usamo -->

Color a board or a set cleverly so a counting mismatch appears.

- **Checkerboard:** removing two opposite corners from an $8\times8$ board leaves 32 squares of one color and 30 of the other. Each domino covers one of each, so no tiling exists.
- **Mod-$k$ coloring:** to tile with $1\times k$ pieces, color square $(i,j)$ with $(i+j)\bmod k$. Each piece covers every color once.
- **Graph coloring:** among any 6 people, three are mutual friends or three are mutual strangers (Ramsey $R(3,3)=6$).

## Constructions & Answer-Finding
<!-- contests: aime usajmo usamo -->

Many olympiad problems say "find the largest $n$ such that…". These need two parts:

1. **A bound:** prove $n$ can't be bigger.
2. **A construction:** give an explicit example showing $n$ is achieved.

- Try small cases and look for a pattern in the best examples.
- Good constructions are often **symmetric**, **periodic**, or **greedy**.
- If you can't prove the bound, a correct construction alone may still earn partial credit.

## Writing It Up ⭐
<!-- contests: usajmo usamo -->

- **State the answer first** ("The answer is $n=4$"), then prove it.
- **Organize with claims:** "Claim 1: … Proof: …". Graders can award points per claim.
- **Define every variable** before using it, and draw/label any figure you reference.
- **Don't skip casework:** list the cases and show they cover everything.
- **Cross out** anything wrong rather than leaving contradictions on the page.
- Read the problem once more before you finish. Did you prove exactly what was asked?

## Where to Practice
<!-- contests: usajmo usamo -->

- Past **USAJMO / USAMO** problems and solutions on the AoPS wiki and forums.
- *Problem-Solving Strategies* (Arthur Engel): invariants, extremal principle, pigeonhole, induction.
- *The Art and Craft of Problem Solving* (Paul Zeitz): a gentler introduction to proof-based contests.
- *Euclidean Geometry in Mathematical Olympiads* (Evan Chen) for geometry.
- Write full solutions for problems you've already solved. Writing is a separate skill from solving.
