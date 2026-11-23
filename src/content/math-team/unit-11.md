---
title: "Unit 11: Competition Tricks & Speed"
unit: 11
---

# Unit 11: Competition Tricks & Speed

These are cross-topic tools that show up in OML C problems and **Team Events**. Many come from the classic *MATHCOUNTS Toolbox* reference sheet. If you did MATHCOUNTS in middle school, this is your old toolbox, upgraded for high school.

---

## Algebra Tricks

### Simon's Favorite Factoring Trick (SFFT)
When you see $xy+ax+by=c$, add $ab$ to both sides:
$$xy+ax+by+ab=(x+b)(y+a)=c+ab$$

> [!example] Integer solutions
> $xy-4x-3y=0$ becomes $(x-3)(y-4)=12$. Now list the factor pairs of $12$.

### Symmetric sums
- $x^2+y^2=(x+y)^2-2xy$
- $x^3+y^3=(x+y)^3-3xy(x+y)$
- $x^2+\dfrac1{x^2}=\left(x+\dfrac1x\right)^2-2$, and $x^3+\dfrac1{x^3}=\left(x+\dfrac1x\right)^3-3\left(x+\dfrac1x\right)$

### Other factorizations
- $a^2-b^2=(a-b)(a+b)$, so $101^2-99^2=2\cdot200=400$
- $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$
- $x^n-1=(x-1)(x^{n-1}+\dots+x+1)$

### Floor and ceiling
$\lfloor x\rfloor$ is the greatest integer $\le x$, and $\{x\}=x-\lfloor x\rfloor$. For $\lfloor x\rfloor$ equations, write $x=n+f$ with $0\le f<1$.

### Comparing huge numbers
Raise to a common power, or compare logs: $2^{300}$ vs $3^{200}$ becomes $8^{100}$ vs $9^{100}$.

---

## Number Theory

- **Number of factors** of $p_1^{a_1}p_2^{a_2}\cdots$: $(a_1+1)(a_2+1)\cdots$
- **Sum of factors:** $\prod\dfrac{p^{a+1}-1}{p-1}$
- **Product of factors** of $n$: $n^{d(n)/2}$
- **Trailing zeros** of $n!$ (Legendre): $\left\lfloor\frac n5\right\rfloor+\left\lfloor\frac n{25}\right\rfloor+\left\lfloor\frac n{125}\right\rfloor+\cdots$
- **Euclidean algorithm:** $\gcd(a,b)=\gcd(b,a\bmod b)$
- **Modular arithmetic:** you can add, subtract, and multiply remainders. Units digits cycle: $2\to4\to8\to6$, $3\to9\to7\to1$, $7\to9\to3\to1$, $4$ and $9$ alternate.
- **Fermat's little theorem:** $a^{p-1}\equiv1\pmod p$ for a prime $p\nmid a$.
- **Chinese Remainder Theorem:** a system of congruences with coprime moduli has exactly one solution mod their product.
- **Chicken McNugget theorem:** with coprime $a$ and $b$, the largest amount you can't make is $ab-a-b$.
- **Bases:** $(d_k\dots d_1d_0)_b=\sum d_ib^i$. To convert to base $b$, divide repeatedly and read the remainders upward.

---

## Counting Tricks

- **Stars and bars:** $n$ identical items into $k$ distinct boxes gives $\binom{n+k-1}{k-1}$ ways. If each box needs at least one, $\binom{n-1}{k-1}$.
- **Pigeonhole:** $n+1$ items in $n$ boxes means some box holds two.
- **Inclusion–exclusion** (PIE) for "divisible by 2 or 3 or 5" counts.
- **Terms in an expansion:** $(a+b+c)^n$ has $\binom{n+2}{2}$ terms.
- **Regions** from $n$ lines in general position: $\dfrac{n^2+n+2}{2}$.
- **Recursion:** stairs climbed 1 or 2 at a time give Fibonacci numbers. Tilings and "no two adjacent" patterns usually do too.
- **Expected value with states:** define $E_s$ for each state, write equations like $E_0=1+\frac12E_1+\frac12E_0$, and solve.

---

## Geometry Power Tools

- **Shoelace formula** for polygon area from coordinates (Unit 8).
- **Heron's formula:** $\sqrt{s(s-a)(s-b)(s-c)}$.
- **Stewart's theorem:** for a cevian $d$ splitting side $a$ into $m$ and $n$, $b^2m+c^2n=a(d^2+mn)$ ("a man and his dad put a bomb in the sink").
- **Median length:** $m_a=\frac12\sqrt{2b^2+2c^2-a^2}$.
- **British Flag theorem:** for any point $P$ and rectangle $ABCD$, $PA^2+PC^2=PB^2+PD^2$.
- **Ceva:** concurrent cevians satisfy $\dfrac{AF}{FB}\cdot\dfrac{BD}{DC}\cdot\dfrac{CE}{EA}=1$.
- **Menelaus:** a transversal across the three sides gives the same product $=1$ (with signed lengths).
- **Pick's theorem** (lattice polygons): $A=I+\frac B2-1$.
- **Mass points** for ratio problems in triangles.

---

## Speed and Accuracy Habits

1. **Estimate first.** If your exact answer is wildly off, recheck.
2. **Plug in a number** for a variable when checking algebraic identities or "in terms of $k$" answers.
3. **Work backwards** from the answer form: "write as $\frac{\log a}{\log b}$" tells you the solution path.
4. **Use symmetry and invariants.** If swapping $x$ and $y$ leaves the problem unchanged, expect $x=y$ at the optimum.
5. **Know your squares to 30, cubes to 10, and powers of 2 to $2^{12}$.**
6. **Leave radicals in.** Don't convert to decimals until the very end, if at all.

## Countdown / Speed-Round Tricks

- Squaring numbers ending in 5: $n5^2$ = $n(n+1)$ followed by $25$, so $65^2=4225$.
- Near-100 products: $97\times96=(100-3)(100-4)=9300+12=9312$.
- $\dfrac1{7}=0.\overline{142857}$, and $\dfrac{1}{11}=0.\overline{09}$.
- Fractions of $\frac18$: $0.125, 0.375, 0.625, 0.875$.
- Sum of an arithmetic sequence = (average of the first and last) × (number of terms).

---

## Resources

- [OML Meet files and answer keys](https://www.oahumath.org/meets)
- [OML problem writing and rules](https://www.oahumath.org/rules)
- Art of Problem Solving: *Introduction to Algebra*, *Counting & Probability*, *Geometry*, *Number Theory*
- Practice bank: **[OML Practice](/math-team/practice)**
