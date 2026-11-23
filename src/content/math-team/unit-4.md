---
title: "Unit 4: Numbers & Algebra"
unit: 4
---

# Unit 4: Numbers & Algebra

## Types of Numbers ⭐
<!-- contests: mathcounts oml amc8 amc10 amc12 -->

| Set | Members | Example |
|---|---|---|
| Natural (counting) | $1, 2, 3, \dots$ | $7$ |
| Whole | $0, 1, 2, \dots$ | $0$ |
| Integers | $\dots,-2,-1,0,1,2,\dots$ | $-5$ |
| Rational | $\frac pq$ with integers $p$, $q\ne0$; every terminating or repeating decimal | $0.\overline{36}=\frac4{11}$ |
| Irrational | real but not rational | $\sqrt2$, $\pi$, $e$ |
| Imaginary / complex | involve $i=\sqrt{-1}$ | $3-2i$ |

**Repeating decimal → fraction:** for $x=0.3\overline{18}$, compute $1000x-10x=318-3$, so $x=\frac{315}{990}=\frac7{22}$. As a shortcut, $0.\overline{ab}=\frac{ab}{99}$.

## Special Numbers
<!-- contests: mathcounts amc8 amc10 amc12 aime -->

- **Primes:** the 25 primes under 100 are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97. ⭐ Memorize them.
- **Composite:** has more than two divisors. $1$ is neither prime nor composite.
- **Triangular numbers:** $T_n=\frac{n(n+1)}2$, giving 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, …
- **Perfect squares to $30^2$** and **cubes to $10^3$** ⭐. Know them cold.
- **Powers of 2 to $2^{12}=4096$** ⭐.
- **Palindromes** read the same both ways (1441, 90909). There are 9 two-digit, 90 three-digit, and 90 four-digit palindromes.

## Sequences and Series ⭐
<!-- contests: mathcounts oml amc8 amc10 amc12 aime -->

| | Arithmetic | Geometric |
|---|---|---|
| Pattern | add $d$ each time | multiply by $r$ each time |
| $n$th term | $a_n=a_1+(n-1)d$ | $a_n=a_1r^{n-1}$ |
| Sum of $n$ terms | $\frac n2(a_1+a_n)$ | $a_1\frac{1-r^n}{1-r}$ |
| Infinite sum | — | $\frac{a_1}{1-r}$ when $\lvert r\rvert<1$ |

Common sums:
- $1+2+\dots+n=\frac{n(n+1)}2$
- $2+4+\dots+2n=n(n+1)$
- $1+3+5+\dots+(2n-1)=n^2$
- $1^2+2^2+\dots+n^2=\frac{n(n+1)(2n+1)}6$
- $1^3+2^3+\dots+n^3=\left(\frac{n(n+1)}2\right)^2$

**Number of terms** from $a$ to $b$ with step $d$: $\frac{b-a}d+1$. Off-by-one errors here are extremely common.

## Telescoping Sums & Products ⭐
<!-- contests: mathcounts oml amc10 amc12 aime -->

Rewrite each term as a **difference** (for sums) or a **ratio** (for products) so that almost everything cancels.

- **Partial fractions:** $\frac1{k(k+1)}=\frac1k-\frac1{k+1}$, so $\sum_{k=1}^{n}\frac1{k(k+1)}=1-\frac1{n+1}$.
- **Gap of $d$:** $\frac1{k(k+d)}=\frac1d\left(\frac1k-\frac1{k+d}\right)$. The first $d$ and last $d$ terms survive.
- **Radicals:** $\frac1{\sqrt{k+1}+\sqrt k}=\sqrt{k+1}-\sqrt k$.
- **Products:** $\prod_{k=2}^{n}\left(1-\frac1{k^2}\right)=\prod\frac{(k-1)(k+1)}{k\cdot k}=\frac{n+1}{2n}$.
- **Logs:** $\sum\log\frac{k+1}k=\log\frac{n+1}{1}$; a product of logs $\log_2 3\cdot\log_3 4\cdots\log_{n}(n+1)=\log_2(n+1)$.

> [!example] $\sum_{k=1}^{98}\frac1{k(k+2)}$
> $=\frac12\left(1+\frac12-\frac1{99}-\frac1{100}\right)=\frac12\cdot\frac{14651}{9900}=\frac{14651}{19800}$.

## Statistics
<!-- contests: mathcounts amc8 amc10 amc12 -->

- **Mean** = sum ÷ count. **Median** = the middle value of the sorted list. **Mode** = the most frequent value. **Range** = max − min.
- 🚀 **Geometric mean** of $n$ numbers: $\sqrt[n]{\text{product}}$. For positive numbers, AM ≥ GM ≥ HM.
- Missing value: new total = new mean × new count.
- Adding $c$ to every value shifts the mean and median by $c$ but leaves the range and standard deviation unchanged.
- Standard deviation: $\sigma=\sqrt{\frac{\sum(x_i-\bar x)^2}{n}}$ (population).

## Absolute Value
<!-- contests: mathcounts oml amc8 amc10 amc12 -->

$|x|$ is the distance from $x$ to $0$. $|a-b|$ is the distance between $a$ and $b$, a very useful way to read absolute-value equations.

- $|x|<a \iff -a<x<a$
- $|x|>a \iff x<-a$ or $x>a$
- With several absolute values, split the number line at each zero and solve piece by piece.

## Measurements & Conversions
<!-- contests: mathcounts amc8 -->

| Length | Volume | Weight |
|---|---|---|
| 12 in = 1 ft, 3 ft = 1 yd | 8 fl oz = 1 cup, 2 cups = 1 pt | 16 oz = 1 lb |
| 5280 ft = 1760 yd = 1 mi | 2 pt = 1 qt, 4 qt = 1 gal | 2000 lb = 1 ton |
| 1 km = 1000 m, 1 m = 100 cm | 1 L = 1000 mL = 1000 cm³ | 1 kg = 1000 g |

Square and cubic units convert by the square and cube of the factor: $1\text{ yd}^2=9\text{ ft}^2$ and $1\text{ ft}^3=1728\text{ in}^3$.

## Special Factorizations ⭐
<!-- contests: all -->

- $a^2-b^2=(a+b)(a-b)$
- $a^2+b^2=(a+b)^2-2ab$
- $a^3+b^3=(a+b)(a^2-ab+b^2)$
- $a^3-b^3=(a-b)(a^2+ab+b^2)$
- $x^n-1=(x-1)(x^{n-1}+x^{n-2}+\dots+x+1)$
- $\frac1a+\frac1b=\frac{a+b}{ab}$
- $(a+b)^3=a^3+3a^2b+3ab^2+b^3$
- 🚀 $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$
- 🚀 $x^4+4y^4=(x^2+2xy+2y^2)(x^2-2xy+2y^2)$ (Sophie Germain)

**Factoring checklist:** GCF first → two terms (difference of squares or cubes) → three terms (ac-method) → four terms (grouping) → check whether each factor factors again.

## Rates ⭐
<!-- contests: mathcounts amc8 amc10 amc12 -->

- **Distance:** $d=rt$.
- **Work:** work = rate × time × (number of workers).
- **Combined rates add:** if A takes $a$ hours and B takes $b$ hours, together they take $\frac{ab}{a+b}$ hours.
- **Average speed** is total distance ÷ total time, **not** the average of the speeds. For a round trip at speeds $r_1$ and $r_2$, it's $\frac{2r_1r_2}{r_1+r_2}$.
- **Moving the same direction:** subtract the rates (catching up). **Opposite directions:** add them.
- **Current or wind:** downstream $r+c$, upstream $r-c$.

> [!example] Workers and holes
> 5 workers dig 10 holes in 8 days, so the rate is $\frac{10}{5\cdot8}=\frac14$ hole per worker-day. For 6 workers to dig 20 holes: $\frac14\cdot6\cdot t=20$, so $t=\frac{40}3$ days.

## Proportions & Variation
<!-- contests: mathcounts oml amc8 amc10 -->

- **Direct:** $y=kx$ ($\frac yx$ constant). **Inverse:** $y=\frac kx$ ($xy$ constant). **Joint:** $z=kxy$.
- **Scaling shortcut:** if $z\propto\frac{x^2}{\sqrt y}$, then doubling $x$ and quadrupling $y$ multiplies $z$ by $\frac{4}{2}=2$.

## Percents ⭐
<!-- contests: mathcounts amc8 amc10 -->

- "$x\%$ off" means multiply by $\frac{100-x}{100}$. "$x\%$ more" means multiply by $\frac{100+x}{100}$.
- Successive changes **multiply**: $+20\%$ then $-20\%$ gives $1.2\times0.8=0.96$, a net 4% decrease.
- Percent change $=\frac{\text{new}-\text{old}}{\text{old}}\times100\%$.
- **Mixtures:** (amount)(concentration) adds up.

## Reflections and Rotations of Points
<!-- contests: mathcounts amc8 amc10 -->

| Transformation | $(x,y)\to$ |
|---|---|
| Reflect over $y=x$ | $(y,x)$ |
| Reflect over the $y$-axis | $(-x,y)$ |
| Reflect over the $x$-axis | $(x,-y)$ |
| Rotate $90^\circ$ clockwise | $(y,-x)$ |
| Rotate $90^\circ$ counterclockwise | $(-y,x)$ |
| Rotate $180^\circ$ | $(-x,-y)$ |

## Linear Equations ⭐
<!-- contests: mathcounts oml amc8 amc10 amc12 -->

- Slope-intercept $y=mx+b$, point-slope $y-y_1=m(x-x_1)$, standard $Ax+By=C$ (slope $-\frac AB$).
- Parallel lines have equal slopes. Perpendicular slopes multiply to $-1$.
- Distance $\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$, midpoint $\left(\frac{x_1+x_2}2,\frac{y_1+y_2}2\right)$.
- Point $(x_0,y_0)$ to line $ax+by+c=0$: $\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$. Between parallel lines: $\dfrac{|c-d|}{\sqrt{a^2+b^2}}$.
- **Systems:** use elimination, substitution, or Cramer's rule. One solution unless the slopes match (then there's none, or infinitely many if the lines coincide).

## Polynomials and Functions
<!-- contests: oml amc10 amc12 aime usajmo usamo -->

- A function gives each input exactly one output. **Domain** = allowed inputs, **range** = possible outputs.
- **Fundamental Theorem of Algebra:** a degree-$n$ polynomial has exactly $n$ roots, counting complex roots and multiplicity.
- **Remainder theorem:** $P(x)\div(x-c)$ leaves remainder $P(c)$. **Factor theorem:** $(x-c)$ is a factor iff $P(c)=0$.
- The sum of the coefficients is $P(1)$. The constant term is $P(0)$.
- **Rational root theorem:** possible rational roots are $\pm\frac{\text{factor of constant}}{\text{factor of leading coefficient}}$.
- Complex and irrational roots of real/rational polynomials come in conjugate pairs.

## Inverse Functions
<!-- contests: oml amc10 amc12 -->

To find $f^{-1}$: swap $x$ and $y$, then solve for $y$. The graph of $f^{-1}$ is the reflection of $f$ over $y=x$. Only one-to-one functions have inverses.

Example: $f(x)=5x+6$ gives $x=5y+6$, so $f^{-1}(x)=\frac{x-6}5$.

## Functional Equations 🚀
<!-- contests: amc12 aime usajmo usamo -->

You're given a rule like $f(x+y)=f(x)+f(y)$ and asked for $f$ (or one value of it).

1. **Plug in easy values:** $x=0$, $y=0$, $y=x$, $y=-x$, $x=1$.
2. **Swap variables** and compare the two equations.
3. **Look for an injective/surjective step:** if $f(a)=f(b)\Rightarrow a=b$, you can cancel $f$.
4. **Substitute to make a system:** for $f(x)+2f\left(\frac1x\right)=x$, replace $x$ by $\frac1x$ and solve the two equations for $f(x)$.
5. **Guess the answer** ($f(x)=x$, $f(x)=cx$, $f(x)=x^2$, constants) and check it. On an olympiad you must also **prove there are no others**.

| Equation (over $\mathbb Q$, or $\mathbb R$ with continuity/monotonicity) | Solutions |
|---|---|
| $f(x+y)=f(x)+f(y)$ (Cauchy) | $f(x)=cx$ |
| $f(x+y)=f(x)f(y)$ | $f(x)=a^x$ or $f\equiv0$ |
| $f(xy)=f(x)+f(y)$ | $f(x)=c\log x$ |
| $f(xy)=f(x)f(y)$ | $f(x)=x^c$ (and $0$, $1$) |

> [!example] $f(x)+2f(1-x)=x^2$
> Replace $x$ by $1-x$: $f(1-x)+2f(x)=(1-x)^2$. Doubling this and subtracting the original gives $3f(x)=2(1-x)^2-x^2$, so $f(x)=\frac{x^2-4x+2}{3}$.

## Floor, Ceiling, and Fractional Part 🚀
<!-- contests: mathcounts amc10 amc12 aime usajmo -->

$\lfloor x\rfloor$ rounds down, $\lceil x\rceil$ rounds up, and $\{x\}=x-\lfloor x\rfloor$. For equations, write $x=n+f$ with integer $n$ and $0\le f<1$.

## Quadratics ⭐
<!-- contests: mathcounts oml amc10 amc12 aime -->

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

- **Vertex** at $x=-\frac b{2a}$. The max/min value is $c-\frac{b^2}{4a}$.
- **Discriminant** $b^2-4ac$: positive means 2 real roots, zero means 1, negative means 0 real roots (2 complex).
- **Completing the square:** $ax^2+bx+c=a\left(x+\frac b{2a}\right)^2+c-\frac{b^2}{4a}$.

## Vieta's Formulas ⭐
<!-- contests: oml amc10 amc12 aime usajmo usamo -->

For $ax^2+bx+c$: $\ r_1+r_2=-\frac ba$, $\ r_1r_2=\frac ca$.

For $ax^3+bx^2+cx+d$: $\ \sum r=-\frac ba$, $\ \sum r_ir_j=\frac ca$, $\ r_1r_2r_3=-\frac da$.

In general, the signs alternate. Useful combinations:
- $r_1^2+r_2^2=(r_1+r_2)^2-2r_1r_2$
- $\frac1{r_1}+\frac1{r_2}=\frac{r_1+r_2}{r_1r_2}$
- $|r_1-r_2|=\frac{\sqrt{b^2-4ac}}{|a|}$

## Polynomial Toolkit 🚀
<!-- contests: oml amc12 aime usajmo usamo -->

- **Remainders:** dividing $P(x)$ by a degree-2 divisor leaves a remainder $ax+b$. Find $a$ and $b$ by plugging in the divisor's roots. Example: $x^{100}\div(x^2-1)$: plug $x=\pm1$ to get $a+b=1$, $-a+b=1$, so the remainder is $1$.
- **Build a polynomial from its roots:** if $P(x)-x$ has roots $1,2,3$ and $P$ is monic cubic, then $P(x)=(x-1)(x-2)(x-3)+x$.
- **Reversed roots:** the roots of $x^nP\!\left(\frac1x\right)$ are the reciprocals $\frac1{r_i}$.
- **Shifted roots:** the roots of $P(x-k)$ are $r_i+k$.
- **Newton's sums:** with power sums $p_k=\sum r_i^k$ and elementary sums $e_1=\sum r_i$, $e_2=\sum r_ir_j$, $e_3=r_1r_2r_3$:
  - $p_1=e_1$
  - $p_2=e_1p_1-2e_2$
  - $p_3=e_1p_2-e_2p_1+3e_3$
  - For a cubic $x^3+bx^2+cx+d$ and $k\ge3$: $p_k+bp_{k-1}+cp_{k-2}+dp_{k-3}=0$.
- **Plug in a root:** if $r$ is a root of $x^2=x+1$, then $r^3=r\cdot r^2=r^2+r=2r+1$. Reduce high powers this way.
- **Integer values:** for integer-coefficient $P$, $(a-b)\mid P(a)-P(b)$. This settles "can $P(2)=5$ and $P(7)=13$?" (no: $5\nmid8$).
- **Lagrange / finite differences:** a degree-$n$ polynomial is fixed by $n+1$ values; its $n$th differences are constant.

## Inequalities: AM-GM & Friends ⭐
<!-- contests: oml amc10 amc12 aime usajmo usamo -->

For positive reals:

$$\underbrace{\sqrt{\tfrac{a^2+b^2}{2}}}_{\text{QM}}\ \ge\ \underbrace{\tfrac{a+b}{2}}_{\text{AM}}\ \ge\ \underbrace{\sqrt{ab}}_{\text{GM}}\ \ge\ \underbrace{\tfrac{2}{\frac1a+\frac1b}}_{\text{HM}}$$

with equality exactly when $a=b$ (same for $n$ variables).

- **Trivial inequality:** $x^2\ge0$. Most inequalities are this in disguise: $a^2+b^2\ge2ab$ is $(a-b)^2\ge0$.
- **Use AM-GM to find a min/max:** make the product (or sum) constant. $x+\frac4x\ge2\sqrt{4}=4$, equality at $x=2$. For $x^2+\frac{16}{x}$, split as $x^2+\frac8x+\frac8x\ge3\sqrt[3]{64}=12$, equality at $x=2$.
- **Fixed perimeter → square has the biggest area; fixed sum → equal parts maximize the product.**
- **Cauchy–Schwarz:** $(a_1^2+\dots+a_n^2)(b_1^2+\dots+b_n^2)\ge(a_1b_1+\dots+a_nb_n)^2$. Handy form (Titu/Engel): $\frac{x_1^2}{y_1}+\dots+\frac{x_n^2}{y_n}\ge\frac{(x_1+\dots+x_n)^2}{y_1+\dots+y_n}$.
- 🚀 **Power mean, rearrangement, Jensen** (convex $f$: $\frac{f(a)+f(b)}2\ge f\!\left(\frac{a+b}2\right)$), and **Schur** show up on olympiads.

> [!warning] Always check the equality case
> An inequality only gives the true min/max if equality can actually happen with values allowed by the problem. On a USAJMO/USAMO proof, state the equality case explicitly.

> [!example] Max of $xy$ if $2x+3y=12$, $x,y>0$
> AM-GM on $2x$ and $3y$: $6=\frac{2x+3y}2\ge\sqrt{6xy}$, so $xy\le6$, with equality at $2x=3y=6$.

## Exponent Rules ⭐
<!-- contests: mathcounts oml amc8 amc10 amc12 -->

$x^ax^b=x^{a+b}$, $\ \frac{x^a}{x^b}=x^{a-b}$, $\ (x^a)^b=x^{ab}$, $\ x^ny^n=(xy)^n$, $\ x^0=1$, $\ x^{-n}=\frac1{x^n}$, $\ x^{m/n}=\sqrt[n]{x^m}$

To solve exponential equations, rewrite both sides with the same base, or substitute $u=b^x$ to get a quadratic.

## Logarithms
<!-- contests: oml amc12 aime -->

$\log_ab=c\iff a^c=b$.

| | |
|---|---|
| $\log_a b+\log_a c=\log_a bc$ | $\log_a b-\log_a c=\log_a\frac bc$ |
| $\log_a b^n=n\log_a b$ | $\log_{a^n}b=\frac1n\log_a b$ |
| $\frac{\log_a b}{\log_a c}=\log_c b$ (change of base) | $\log_a b\cdot\log_b c=\log_a c$ (chains telescope) |
| $a^{\log_a x}=x$ | $\log_a b=\frac1{\log_b a}$ |

> [!warning] Extraneous roots
> After combining logs, check every solution in the **original** equation. Each argument must be positive.

## Simon's Favorite Factoring Trick ⭐
<!-- contests: mathcounts amc10 amc12 aime usajmo -->

When you see $xy+ax+by$, add $ab$ to both sides: $(x+b)(y+a)=c+ab$. Then list the factor pairs.

> [!example] $\frac1x+\frac1y=\frac2{15}$ in distinct positive integers
> Clearing fractions gives $2xy-15x-15y=0$. Multiply by 2 and add 225: $(2x-15)(2y-15)=225$. The factor pair $9\times25$ gives $x=12$, $y=20$, so $x+y=32$.

## Simplifying Radicals ⭐
<!-- contests: mathcounts oml amc8 amc10 amc12 aime -->

- Pull out square factors: $\sqrt{72}=6\sqrt2$.
- **No radicals in a denominator.** Rationalize: $\frac1{\sqrt2}=\frac{\sqrt2}2$.
- For a binomial denominator, multiply by the conjugate: $\frac{18}{4-\sqrt7}=\frac{18(4+\sqrt7)}{9}=8+2\sqrt7$.
- With three terms in the denominator, group into two and conjugate twice.
- Combine radicals of the same index: $\sqrt[3]{12x^2}\cdot\sqrt[3]{4x^4}=\sqrt[3]{48x^6}=2x^2\sqrt[3]6$.
- 🚀 **Denesting:** $\sqrt{a\pm2\sqrt b}=\sqrt m\pm\sqrt n$ where $m+n=a$ and $mn=b$. For example, $\sqrt{7+4\sqrt3}=2+\sqrt3$.

## Comparing Huge Numbers
<!-- contests: mathcounts amc8 amc10 amc12 -->

Take the same root of both numbers, or compare logs. For $5^{10}$ vs $3^{20}$, take tenth roots: $5$ vs $9$, so $3^{20}$ is larger.

## Clock Arithmetic
<!-- contests: mathcounts amc8 -->

The minute hand moves $6^\circ$ per minute and the hour hand $0.5^\circ$ per minute. At $H{:}M$, the angle between them is $\left|\dfrac{60H-11M}2\right|$ (use $360^\circ$ minus that if it's over $180^\circ$).

Example: at 3:30, $\left|\frac{180-330}2\right|=75^\circ$.

## Complex Numbers
<!-- contests: oml amc10 amc12 aime -->

$i=\sqrt{-1}$, $i^2=-1$, and the powers of $i$ cycle with period 4. A complex number $a+bi$ has conjugate $a-bi$ and modulus $\sqrt{a^2+b^2}$. Divide by multiplying the top and bottom by the conjugate. (More in Unit 8.)
