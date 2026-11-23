---
title: "Unit 7: Algebra II Toolbox — Counting, Probability & Sequences"
unit: 7
---

# Unit 7: Algebra II Toolbox — Counting, Probability & Sequences

| Meet | Event | Topic |
|---|---|---|
| 6 | 1 | Permutations & Combinations |
| 6 | 6 | Arithmetic & Geometric Sequences & Series |
| 7 | 1 | Probability |

---

## Permutations & Combinations (Meet 6)

$$P(n,r)={}_nP_r=\frac{n!}{(n-r)!}\qquad C(n,r)=\binom nr=\frac{n!}{r!\,(n-r)!}$$

| Situation | Count |
|---|---|
| Order matters, no repeats | $P(n,r)$ |
| Order doesn't matter | $\binom nr$ |
| Arrange letters with repeats (MISSISSIPPI) | $\dfrac{11!}{1!\,4!\,4!\,2!}$ |
| $n$ people around a circle | $(n-1)!$ |
| Circle where flips are the same (necklace) | $\dfrac{(n-1)!}{2}$ |
| Choosing with repetition (stars & bars) | $\binom{n+k-1}{k-1}$ ways to put $n$ identical items in $k$ boxes |
| Subsets of an $n$-set | $2^n$ |

### Strategies
- **Complementary counting:** "at least one" = total − none.
- **Glue method:** if A and B must sit together, treat them as one block, then multiply by $2!$ for their internal order.
- **Gap method:** if A and B must *not* be together, arrange the others first, then place A and B in the gaps.
- **Casework:** split by the first digit, by how many of a type are chosen, and so on, then add.
- **Lattice paths:** from $(0,0)$ to $(a,b)$ moving right or up, there are $\binom{a+b}{a}$ paths.
- **Committees** with conditions: e.g. "at least 2 women": add the cases for 2, 3, …, or use the complement.

### Useful identities
- $\binom nr=\binom n{n-r}$, $\binom nr=\binom{n-1}{r-1}+\binom{n-1}{r}$ (Pascal's rule)
- $\sum_{r=0}^n\binom nr=2^n$
- **Hockey stick:** $\binom rr+\binom{r+1}r+\dots+\binom nr=\binom{n+1}{r+1}$
- **Binomial theorem:** $(a+b)^n=\sum\binom nk a^{n-k}b^k$. The $(k+1)$th term is $\binom nk a^{n-k}b^k$.

> [!tip] "Number of diagonals of an $n$-gon"
> $\binom n2-n=\dfrac{n(n-3)}{2}$. "Number of triangles from $n$ points, no three collinear": $\binom n3$.

---

## Arithmetic & Geometric Sequences & Series (Meet 6)

| | Arithmetic | Geometric |
|---|---|---|
| $n$th term | $a_n=a_1+(n-1)d$ | $a_n=a_1r^{n-1}$ |
| Sum of $n$ terms | $S_n=\dfrac n2(a_1+a_n)=\dfrac n2[2a_1+(n-1)d]$ | $S_n=a_1\dfrac{1-r^n}{1-r}$ |
| Infinite sum | — | $S=\dfrac{a_1}{1-r}$ if $\lvert r\rvert<1$ |
| Mean of neighbors | $a_n=\dfrac{a_{n-1}+a_{n+1}}2$ | $a_n^2=a_{n-1}a_{n+1}$ |

- **Arithmetic means** between $a$ and $b$: insert $k$ terms, so $d=\dfrac{b-a}{k+1}$.
- **Geometric means:** $r=\left(\dfrac ba\right)^{1/(k+1)}$.
- Count terms: from $a$ to $b$ by step $d$ there are $\dfrac{b-a}{d}+1$ terms.
- $1+2+\dots+n=\dfrac{n(n+1)}2$, $\ 1^2+\dots+n^2=\dfrac{n(n+1)(2n+1)}6$, $\ 1^3+\dots+n^3=\left(\dfrac{n(n+1)}2\right)^2$
- **Repeating decimal** as a geometric series: $0.\overline{36}=\dfrac{36/100}{1-1/100}=\dfrac{36}{99}=\dfrac4{11}$.
- **Bouncing ball** dropped from $h$ with ratio $r$: total distance $=h+\dfrac{2hr}{1-r}$.
- **Telescoping:** $\dfrac1{k(k+1)}=\dfrac1k-\dfrac1{k+1}$.

> [!warning] Unknown three terms
> For three terms in an AP, write them as $a-d,\ a,\ a+d$. For a GP, write $\frac ar,\ a,\ ar$. The algebra becomes much easier.

---

## Probability (Meet 7)

$$P(E)=\frac{\text{favorable outcomes}}{\text{total equally-likely outcomes}}$$

- $P(\text{not }E)=1-P(E)$
- $P(A\text{ or }B)=P(A)+P(B)-P(A\text{ and }B)$
- **Independent:** $P(A\text{ and }B)=P(A)P(B)$
- **Conditional:** $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$
- **Without replacement:** multiply the changing fractions: $P(\text{2 red})=\frac{5}{12}\cdot\frac4{11}$.
- **Binomial:** exactly $k$ successes in $n$ trials is $\binom nk p^k(1-p)^{n-k}$.
- **Odds** in favor $=P(E):P(\text{not }E)$. If the odds are $a:b$, then $P=\dfrac a{a+b}$.
- **Expected value:** $E=\sum x_iP(x_i)$.
- **Geometric probability:** (favorable length/area) ÷ (total length/area).

> [!tip] Two dice
> Sums 2 to 12 occur $1,2,3,4,5,6,5,4,3,2,1$ ways out of 36. A sum of 7 is the most likely, at $\frac16$.

> [!example] At least one
> The probability of at least one 6 in four rolls is $1-\left(\frac56\right)^4=\frac{671}{1296}$.
