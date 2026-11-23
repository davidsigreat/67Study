---
title: "Unit 4: Algebra I Toolbox"
unit: 4
---

# Unit 4: Algebra I Toolbox

This unit covers every **Algebra I** event in the OML season, in meet order. Each section lists the formulas and tricks the A/B/C problems keep reusing.

| Meet | Event | Topic |
|---|---|---|
| 1 | 3 | Numbers |
| 1 | 5 | Sets |
| 2 | 3 | Linear Equations in One Variable |
| 3 | 3 | Age, Motion & Number Problems |
| 3 | 5 | Operations with Polynomials |
| 4 | 3 | Factoring Expressions & Equations |
| 4 | 5 | Linear Inequalities |
| 5 | 3 | Systems of Linear Equations |
| 5 | 5 | Equations with Decimals & Percents |
| 6 | 3 | Fractions & Mixed Expressions |
| 7 | 3 | Radical Operations |
| 7 | 5 | Statistics |

---

## Numbers (Meet 1)

### Number sets
- **Natural** $\{1,2,3,\dots\}$ ⊂ **Whole** $\{0,1,2,\dots\}$ ⊂ **Integers** ⊂ **Rationals** ⊂ **Reals**
- **Rational:** any $\frac{p}{q}$ with integers $p$ and $q\ne 0$. Every terminating or repeating decimal is rational.
- **Irrational:** examples are $\sqrt{2}$, $\pi$, $e$, and $0.101001000\dots$ (non-repeating).

### Repeating decimals → fractions
$$0.\overline{ab} = \frac{ab}{99}, \qquad 0.a\overline{b} = \frac{ab-a}{90}$$

> [!example] $0.3\overline{18}$
> Let $x=0.3181818\dots$. Then $1000x-10x = 318-3$, so $x=\dfrac{315}{990}=\dfrac{7}{22}$.

### Divisibility, primes, GCF/LCM
- Divisible by **3/9**: the digit sum is divisible by 3/9. By **4**: the last two digits. By **8**: the last three. By **11**: the alternating digit sum.
- $\gcd(a,b)\cdot\operatorname{lcm}(a,b)=ab$
- Number of divisors of $p^a q^b r^c$: $(a+1)(b+1)(c+1)$
- Sum of divisors: $(1+p+\dots+p^a)(1+q+\dots+q^b)\cdots$

### Properties and operations
- Closure, commutative, associative, distributive, identity, inverse. Know which properties hold for which sets. For example, the integers are **not** closed under division.
- Custom operations ("$a\star b = 2a-b$"): substitute carefully, and evaluate inner operations first.

---

## Sets (Meet 1)

| Notation | Meaning |
|---|---|
| $A\cup B$ | union (in A **or** B) |
| $A\cap B$ | intersection (in **both**) |
| $A'$ or $A^c$ | complement |
| $A - B$ | in A but not B |
| $\varnothing$ | empty set |
| $A\subseteq B$ | every element of A is in B |

- A set with $n$ elements has $2^n$ subsets and $2^n-1$ proper subsets.
- **Inclusion–exclusion:** $|A\cup B| = |A|+|B|-|A\cap B|$
- Three sets: $|A\cup B\cup C| = |A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|$
- **De Morgan:** $(A\cup B)' = A'\cap B'$ and $(A\cap B)' = A'\cup B'$

> [!tip] Venn diagrams
> For survey problems, always fill a Venn diagram **from the center outward**: triple overlap first, then the pairs, then the singles.

---

## Linear Equations in One Variable (Meet 2)

- Clear fractions by multiplying by the LCD, and clear decimals by multiplying by a power of 10.
- **Literal equations:** collect the terms with the target variable on one side, factor it out, then divide.
$$ax+b = cx+d \;\Rightarrow\; x(a-c) = d-b \;\Rightarrow\; x=\frac{d-b}{a-c}$$
- **Identity** (true for all $x$) vs. **contradiction** (no solution): watch for $0=0$ or $0=5$.

---

## Age, Motion & Number Problems (Meet 3)

- **Age:** the difference between two people's ages never changes. Make a table with columns *Now / Past / Future*.
- **Motion:** $d=rt$. Opposite directions: rates **add**. Same direction (catching up): rates **subtract**. Round trip: total distance ÷ total time is **not** the average of the speeds.
$$\text{average speed} = \frac{2d}{d/r_1+d/r_2} = \frac{2r_1r_2}{r_1+r_2}$$
- **Current/wind:** downstream $r+c$, upstream $r-c$.
- **Consecutive integers:** $n, n+1, n+2$. Consecutive even or odd: $n, n+2, n+4$.
- **Digit problems:** a two-digit number with digits $t$ and $u$ is $10t+u$. Reversed, it's $10u+t$.

---

## Operations with Polynomials (Meet 3)

- Special products:
$$(a\pm b)^2=a^2\pm 2ab+b^2,\quad (a+b)(a-b)=a^2-b^2$$
$$(a\pm b)^3 = a^3\pm 3a^2b+3ab^2\pm b^3$$
- **Long and synthetic division:** remainder theorem, $P(x)\div(x-c)$ leaves remainder $P(c)$.
- Degree of a product = sum of the degrees. Leading coefficient of a product = product of the leading coefficients.
- The **sum of the coefficients** of $P(x)$ is $P(1)$. The constant term is $P(0)$.

---

## Factoring Expressions & Equations (Meet 4)

### Factoring checklist (in order)
1. **GCF** first, always.
2. **Two terms:** difference of squares $a^2-b^2$, sum or difference of cubes:
$$a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)$$
3. **Three terms:** trinomial. Use the **ac-method** for $ax^2+bx+c$.
4. **Four terms:** grouping (2+2 or 3+1, where the 3 is a perfect square trinomial).
5. **Factor again:** check every factor for further factoring.

> [!example] 3+1 grouping (Jan 2018 C)
> $a^2-x^2-4ab+4xy+4b^2-4y^2 = (a^2-4ab+4b^2)-(x^2-4xy+4y^2)$
> $=(a-2b)^2-(x-2y)^2 = (a-2b+x-2y)(a-2b-x+2y)$

### Substitution
If the same chunk repeats, call it $u$: in $(x+k)^2-2(x+k)-8=0$, let $u=x+k$, so $(u-4)(u+2)=0$.

### Biquadratic
$ax^4+bx^2+c$ is a quadratic in $x^2$. Also, $x^4+4y^4 = (x^2+2y^2)^2-(2xy)^2$ (Sophie Germain).

> [!warning] Never divide by a variable
> When solving $5x^4+7x^3-6x^2=0$, factor out $x^2$. Don't divide by it, or you lose the solution $x=0$.

---

## Linear Inequalities (Meet 4)

- Multiplying or dividing by a **negative** flips the sign.
- **Compound "and"** = intersection. **"or"** = union. Solve each piece, then combine on a number line.
- **Three-part** $a<bx+c<d$: do the same operation to all three parts.
- **No solution** when the left end is past the right end. For $\frac{m}{6}(x-4)<\frac{m}{6}x-3$, the $x$ terms cancel, leaving $-\frac{2m}{3}<-3$. "No solution" means this is false.
- Integer word problems: solve, then pick the largest or smallest **integer** that satisfies the strict or non-strict inequality.

> [!tip] OML format
> Write answers with only "and"/"or" connectives: $-8\le x<7$, or $x\le -2$ or $x>2$.

---

## Systems of Linear Equations (Meet 5)

- Methods: **elimination**, substitution, Cramer's rule:
$$x=\frac{\begin{vmatrix}e&b\\f&d\end{vmatrix}}{\begin{vmatrix}a&b\\c&d\end{vmatrix}},\quad y=\frac{\begin{vmatrix}a&e\\c&f\end{vmatrix}}{\begin{vmatrix}a&b\\c&d\end{vmatrix}}\quad\text{for}\quad\begin{cases}ax+by=e\\cx+dy=f\end{cases}$$
- **Consistent/inconsistent/dependent:** for $a_1x+b_1y=c_1$ and $a_2x+b_2y=c_2$:
  - one solution if $\frac{a_1}{a_2}\ne\frac{b_1}{b_2}$
  - none if $\frac{a_1}{a_2}=\frac{b_1}{b_2}\ne\frac{c_1}{c_2}$
  - infinitely many if all three ratios are equal
- **Three variables:** eliminate the same variable twice to get a 2×2 system.
- **Symmetric trick:** if the equations look alike, add them all or subtract them.

---

## Equations with Decimals & Percents (Meet 5)

- $p\%$ of $x$ = $\frac{p}{100}x$. "Increase by $p\%$" means ×$(1+\frac{p}{100})$.
- Successive changes **multiply**: $+20\%$ then $-20\%$ is $1.2\times0.8=0.96$, a 4% decrease.
- Percent change $= \dfrac{\text{new}-\text{old}}{\text{old}}\times100\%$
- **Mixture:** (amount)(concentration) adds up: $a\cdot p_1+b\cdot p_2=(a+b)p$.
- Simple interest $I=Prt$. Compound interest $A=P\left(1+\frac{r}{n}\right)^{nt}$.

---

## Fractions & Mixed Expressions (Meet 6)

- **Complex fractions:** multiply the top and bottom by the LCD of all the little fractions.
- Add and subtract with an LCD. **Factor first** so the LCD is as small as possible.
- Mixed numbers: $3\frac{2}{5} = \frac{17}{5}$.
- **State the restrictions:** values that make any denominator zero, including those in the original expression.

> [!example] Complex fraction
> $\dfrac{\frac{1}{x}-\frac{1}{y}}{\frac{1}{x^2}-\frac{1}{y^2}}$. Multiply by $x^2y^2$: $\dfrac{xy^2-x^2y}{y^2-x^2}=\dfrac{xy(y-x)}{(y-x)(y+x)}=\dfrac{xy}{x+y}$.

---

## Radical Operations (Meet 7)

- $\sqrt{ab}=\sqrt a\sqrt b$ for $a,b\ge0$. $\sqrt{x^2}=|x|$.
- **Rationalize:** multiply by the conjugate, e.g. $\dfrac{1}{\sqrt5-\sqrt3}\cdot\dfrac{\sqrt5+\sqrt3}{\sqrt5+\sqrt3}=\dfrac{\sqrt5+\sqrt3}{2}$.
- **Denesting:** $\sqrt{a+2\sqrt b} = \sqrt m+\sqrt n$ where $m+n=a$ and $mn=b$.
  For example, $\sqrt{7+4\sqrt3}=\sqrt{7+2\sqrt{12}}=2+\sqrt3$.
- **Radical equations:** isolate, square, and **check for extraneous roots**.
- Like radicals combine only when the index and radicand match.

---

## Statistics (Meet 7)

| Measure | Formula / note |
|---|---|
| Mean | $\bar x = \frac{\sum x_i}{n}$ |
| Median | middle value (average of the two middle values if $n$ is even) |
| Mode | most frequent (can be several or none) |
| Range | max − min |
| Population variance | $\sigma^2 = \frac{\sum (x_i-\bar x)^2}{n}$ |
| Sample variance | $s^2 = \frac{\sum (x_i-\bar x)^2}{n-1}$ |
| Standard deviation | square root of the variance |
| IQR | $Q_3 - Q_1$. Outliers lie beyond $1.5\cdot\text{IQR}$ of the quartiles |

- Adding a constant $c$ to every value shifts the mean, median, and mode by $c$ but leaves the range and SD **unchanged**.
- Multiplying every value by $k$ multiplies the mean, median, range, and SD by $|k|$, and the variance by $k^2$.
- **Missing value:** new total = new mean × new count.
