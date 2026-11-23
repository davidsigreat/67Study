---
title: "Unit 6: Combinatorics & Probability"
unit: 6
---

# Unit 6: Combinatorics & Probability

## Factorials ⭐
<!-- contests: all -->

$n!=n(n-1)\cdots2\cdot1$ is the number of ways to arrange $n$ different objects. $0!=1$.

Know them through $10!=3{,}628{,}800$: 1, 2, 6, 24, 120, 720, 5040, 40320, 362880.

## Combinations ⭐
<!-- contests: all -->

Choosing $k$ of $n$ when **order doesn't matter**:
$$\binom nk=\frac{n!}{k!(n-k)!}$$

Also note $\binom nk=\binom n{n-k}$, $\binom n2=\frac{n(n-1)}2$, and $\sum_k\binom nk=2^n$.

## Permutations
<!-- contests: mathcounts oml amc8 amc10 amc12 aime -->

Choosing and arranging $k$ of $n$ when **order matters**: $P(n,k)=\frac{n!}{(n-k)!}=\binom nk\cdot k!$.

## Constructive Counting ⭐
<!-- contests: mathcounts amc8 amc10 amc12 aime -->

Build one outcome step by step, then multiply the number of choices at each step.

> [!example] Five-digit numbers
> The first digit has 9 choices (1–9) and each of the others has 10, so there are $9\cdot10^4=90{,}000$.

**Restrictions first:** fill the most restricted positions before the free ones.

## Complementary Counting ⭐
<!-- contests: mathcounts amc8 amc10 amc12 aime -->

Count = total − what you **don't** want. Reach for this whenever you see "at least one" or "not all".

> [!example] Arrangements of ABCCC with the C's not all together
> There are $\frac{5!}{3!}=20$ arrangements in all. Gluing CCC into one block gives $3!=6$ arrangements, so the answer is $20-6=14$.

## Arrangements of Letters ⭐
<!-- contests: mathcounts amc8 amc10 amc12 -->

$$\frac{(\text{total letters})!}{(\text{repeats of letter 1})!\,(\text{repeats of letter 2})!\cdots}$$

PIGGLES: $\frac{7!}{2!}=2520$. MISSISSIPPI: $\frac{11!}{4!\,4!\,2!}=34650$.

**Circular arrangements** of $n$ distinct objects: $(n-1)!$. If flipping counts as the same (necklaces or keychains), use $\frac{(n-1)!}2$.

**Glue / gap methods:** for objects that must be together, glue them into one block and multiply by the arrangements inside the block. For objects that must **not** be adjacent, arrange the others first, then place these in the gaps.

## Frobenius Coin Problem (Chicken-Nugget Theorem)
<!-- contests: mathcounts amc10 amc12 aime -->

If coins (or boxes) come in sizes $a$ and $b$ with $\gcd(a,b)=1$, the largest amount you **can't** make is $ab-a-b$. The number of amounts you can't make is $\frac{(a-1)(b-1)}2$.

Example: with boxes of 5 and 7, you can't buy exactly $35-5-7=23$ nuggets.

## Casework ⭐
<!-- contests: mathcounts amc8 amc10 amc12 aime -->

Split into disjoint cases, count each one, and add.

> [!example] "Words" of at most 4 letters from A–E, no repeats
> $5+5\cdot4+5\cdot4\cdot3+5\cdot4\cdot3\cdot2=5+20+60+120=205$

Make sure the cases don't overlap and together cover everything.

## Counting Pathways ⭐
<!-- contests: mathcounts amc8 amc10 amc12 -->

- **Grid walking:** label each point with the sum of the labels of the points that feed into it (Pascal-style).
- On a plain grid, going $r$ right and $u$ up gives $\binom{r+u}{r}$ paths.
- With a forbidden point, subtract the paths through it: (paths to the point) × (paths from the point).

## Counting with Symmetry
<!-- contests: mathcounts amc10 amc12 aime -->

Count one representative, then multiply by the number of symmetric copies. If you've counted each object $k$ times, divide by $k$. Watch out for objects that are symmetric themselves.

## Distribution Problems (Stars and Bars) ⭐
<!-- contests: mathcounts amc10 amc12 aime -->

Putting $n$ **identical** items into $k$ **distinct** boxes:
- if boxes may be empty: $\binom{n+k-1}{k-1}$
- if each box needs at least one: $\binom{n-1}{k-1}$

The same counts give the number of nonnegative (or positive) integer solutions to $x_1+\dots+x_k=n$.

## Bijections
<!-- contests: amc12 aime usajmo usamo -->

To count a set, find a **one-to-one match** with a set you already know how to count.

- **Lattice paths ↔ strings:** paths from $(0,0)$ to $(m,n)$ using right/up steps match strings of $m$ R's and $n$ U's: $\binom{m+n}m$.
- **Stars and bars** is itself a bijection: solutions to $x_1+\dots+x_k=n$ ↔ arrangements of $n$ stars and $k-1$ bars.
- **Increasing sequences ↔ subsets:** strictly increasing $1\le a_1<a_2<\dots<a_k\le n$ ↔ $k$-element subsets: $\binom nk$. Non-decreasing ↔ multisets: $\binom{n+k-1}k$.
- **Complement / symmetry:** subsets of size $k$ ↔ subsets of size $n-k$.
- **Catalan numbers** $C_n=\frac1{n+1}\binom{2n}n$ (1, 1, 2, 5, 14, 42, …) count balanced parentheses, paths that never go above the diagonal, triangulations of an $(n+2)$-gon, and more.

## Counting Intersections and Regions 🚀
<!-- contests: mathcounts amc10 amc12 aime -->

- $n$ lines in general position: $\binom n2$ intersection points and $\frac{n^2+n+2}2$ regions.
- $n$ circles in general position: at most $n(n-1)$ intersection points.
- Chords between $n$ points on a circle (no three concurrent): $\binom n4$ interior intersections and $1+\binom n2+\binom n4$ regions.

## Sets and Set Notation
<!-- contests: mathcounts oml amc8 -->

$A\cup B$ is the union, $A\cap B$ the intersection, $A'$ the complement, and $\varnothing$ the empty set. A set with $n$ elements has $2^n$ subsets.

## Venn Diagrams ⭐
<!-- contests: mathcounts oml amc8 amc10 -->

Fill from the **center outward**: the triple overlap first, then the pair-only regions, then the single-only regions.

## Principle of Inclusion–Exclusion (PIE) ⭐
<!-- contests: mathcounts amc10 amc12 aime -->

$$|A\cup B|=|A|+|B|-|A\cap B|$$
$$|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|$$

Example: of the numbers 1–100, those divisible by 2, 3, or 5 number $50+33+20-16-10-6+3=74$.

## The Pigeonhole Principle
<!-- contests: mathcounts amc10 amc12 usajmo usamo -->

If $n+1$ objects go into $n$ boxes, some box holds at least 2. More generally, some box holds at least $\left\lceil\frac{\text{objects}}{\text{boxes}}\right\rceil$.

## Probability by Direct Counting ⭐
<!-- contests: mathcounts amc8 amc10 amc12 aime -->

$$P=\frac{\text{favorable outcomes}}{\text{total equally likely outcomes}}$$

Make sure the outcomes really are equally likely. Rolling a sum of 7 with two dice is $\frac6{36}$, not $\frac1{11}$.

## Probability of Multiple Events ⭐
<!-- contests: mathcounts amc8 amc10 amc12 aime -->

- **And** (independent events): multiply.
- **Or:** $P(A)+P(B)-P(A\cap B)$.
- **Not:** $1-P$.
- **Without replacement:** the fractions change as you go, e.g. $\frac5{12}\cdot\frac4{11}$.
- **Conditional:** $P(A\mid B)=\frac{P(A\cap B)}{P(B)}$.

## Conditional Probability ⭐
<!-- contests: amc10 amc12 aime -->

$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}$$

- **Restrict the sample space:** "given that at least one die is a 6" means count only those outcomes.
- **Bayes:** $P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}$. Draw a tree and divide the branch you want by all branches that fit the condition.
- Independent events satisfy $P(A\cap B)=P(A)P(B)$, which is the same as $P(A\mid B)=P(A)$.

> [!example] Two children
> A family has two children and at least one is a boy. The outcomes are BB, BG, GB (equally likely), so $P(\text{both boys})=\frac13$, not $\frac12$.

## Coin Flipping and Binomial Probability ⭐
<!-- contests: mathcounts amc10 amc12 aime -->

The probability of exactly $k$ successes in $n$ independent trials is $\binom nk p^k(1-p)^{n-k}$. For fair coins, that's $\frac{\binom nk}{2^n}$.

## Geometric Probability
<!-- contests: mathcounts amc10 amc12 aime -->

$P=\dfrac{\text{favorable length / area / volume}}{\text{total length / area / volume}}$.

For "two random numbers in $[0,1]$" problems, draw the unit square and shade the region where the condition holds.

## Number of Terms in a Polynomial Expansion 🚀
<!-- contests: amc10 amc12 aime -->

$(a_1+\dots+a_k)^n$ has $\binom{n+k-1}{k-1}$ terms (stars and bars again). For example, $(a+b+c)^{10}$ has $\binom{12}2=66$ terms.

## Pascal's Triangle ⭐
<!-- contests: mathcounts amc8 amc10 amc12 -->

Each entry is the sum of the two above it, and row $n$ holds $\binom n0,\dots,\binom nn$. Row sums are $2^n$, and the alternating sum of a row is $0$.

## The Binomial Theorem ⭐
<!-- contests: mathcounts oml amc10 amc12 aime -->

$$(a+b)^n=\sum_{k=0}^{n}\binom nk a^{n-k}b^k$$

To find the coefficient of a specific term, pick the right $k$. For example, the $x^3$ coefficient in $(2x-1)^5$ is $\binom52\cdot2^3\cdot(-1)^2=80$.

## Hockey Stick Identity 🚀
<!-- contests: amc10 amc12 aime -->

$$\binom rr+\binom{r+1}r+\dots+\binom nr=\binom{n+1}{r+1}$$

The sum along a diagonal of Pascal's triangle equals the entry just below and to the side, like a hockey stick.

## Recursion
<!-- contests: amc10 amc12 aime usajmo usamo -->

Define $a_n$ in terms of earlier terms. Examples:
- Stairs climbed 1 or 2 steps at a time give Fibonacci numbers.
- Tilings of a $2\times n$ board with dominoes are also Fibonacci.
- Binary strings with no two consecutive 1s are also Fibonacci.

Compute small cases, find the pattern, and build up a table.

## Expected Value ⭐
<!-- contests: mathcounts amc10 amc12 aime -->

$E=\sum(\text{value})\cdot P(\text{value})$, and expectation is **linear**: $E[X+Y]=E[X]+E[Y]$, even when $X$ and $Y$ are dependent.

Expected number of trials until the first success: $\frac1p$.

## States 🚀
<!-- contests: amc12 aime -->

For "how long until…" problems, let $E_s$ be the expected remaining steps from state $s$, write one equation per state, and solve the system.

> [!example] Expected flips until two heads in a row
> $E_0=1+\frac12E_1+\frac12E_0$ and $E_1=1+\frac12\cdot0+\frac12E_0$. Solving gives $E_0=6$.

## Burnside's Lemma 🚀
<!-- contests: aime -->

The number of distinct colorings up to symmetry equals the average number of colorings fixed by each symmetry.

Example: 2-colorings of the corners of a square up to rotation: $\frac{16+2+4+2}4=6$.

## Generating Functions 🚀
<!-- contests: aime usajmo usamo -->

Encode a counting problem as the coefficients of a polynomial or power series.

- Ways to make $n$ cents from pennies and nickels: the coefficient of $x^n$ in $\frac{1}{(1-x)(1-x^5)}$.
- **Dice:** the sum of two dice is the coefficient in $(x+x^2+\dots+x^6)^2$.
- **Roots of unity filter:** to add every 3rd coefficient of $P(x)$, use $\frac{P(1)+P(\omega)+P(\omega^2)}3$ with $\omega=e^{2\pi i/3}$. Example: $\binom n0+\binom n3+\binom n6+\cdots$.
- Useful series: $\frac1{1-x}=\sum x^k$, and $\frac1{(1-x)^m}=\sum\binom{k+m-1}{m-1}x^k$.

## Graph Theory Basics 🚀
<!-- contests: aime usajmo usamo -->

A **graph** is a set of vertices joined by edges.

- **Handshake lemma:** the degrees add up to $2E$, so the number of odd-degree vertices is even.
- **Trees:** a connected graph with $V$ vertices and no cycles has exactly $V-1$ edges.
- **Euler path:** uses every edge once. It exists iff the graph is connected and has 0 or 2 odd-degree vertices.
- **Bipartite:** vertices split into two groups with edges only between groups; same as having no odd cycle.
- **Planar graphs:** $V-E+F=2$, and $E\le3V-6$ when $V\ge3$.
- Model problems as graphs: people/handshakes, cities/roads, tournaments (every pair plays once).
