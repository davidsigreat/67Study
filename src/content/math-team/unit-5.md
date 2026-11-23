---
title: "Unit 5: Algebra II Toolbox — Equations, Functions & Inequalities"
unit: 5
---

# Unit 5: Algebra II Toolbox — Equations, Functions & Inequalities

| Meet | Event | Topic |
|---|---|---|
| 1 | 1 | Quadratic Equations & Functions |
| 1 | 6 | Fractional Expressions & Equations |
| 2 | 1 | Ratios, Proportions & Variations |
| 2 | 6 | Absolute Values & Inequalities |
| 3 | 6 | Relations & Functions |
| 5 | 1 | Polynomial Equations |
| 7 | 6 | Rational Functions |

---

## Quadratic Equations & Functions (Meet 1)

### Solving
$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

**Discriminant** $D=b^2-4ac$: two real roots if $D>0$, one (double) root if $D=0$, none (non-real) if $D<0$. "Zeros are real" means $D\ge 0$.

### Vieta's formulas
For $ax^2+bx+c$ with roots $r$ and $s$:
$$r+s=-\frac{b}{a},\qquad rs=\frac{c}{a}$$
- $r^2+s^2=(r+s)^2-2rs$
- $(r-s)^2=(r+s)^2-4rs$, so $|r-s|=\dfrac{\sqrt{D}}{|a|}$
- $\dfrac1r+\dfrac1s=\dfrac{r+s}{rs}$
- Build a quadratic from its roots: $x^2-(\text{sum})x+(\text{product})=0$

> [!tip] Irrational roots come in pairs
> If $-4+\sqrt7$ is a root of a quadratic with rational coefficients, so is $-4-\sqrt7$. Their product gives you $c/a$ immediately.

### Vertex form
$$f(x)=a(x-h)^2+k,\qquad h=-\frac{b}{2a},\quad k=f(h)$$
- Max/min value is $k$ (a max if $a<0$, a min if $a>0$). Range: $y\le k$ or $y\ge k$.
- Translations: $f(x-h)+k$ shifts **right** $h$ and **up** $k$.

### Optimization ("maximize revenue")
Write revenue as (price)(quantity), with both depending on the number of increments $n$. It's a downward parabola, so the max is at $n=-\frac{b}{2a}$.

> [!example] Two numbers summing to 10
> Minimize $x^2+(10-x)^2=2x^2-20x+100$. The vertex is at $x=5$, so the numbers are $5, 5$.

### Substitution
$(x-4)^2-5(x-4)+6=0$: let $u=x-4$, so $u=2$ or $3$, giving $x=6$ or $7$.

---

## Fractional Expressions & Equations (Meet 1)

- **Simplify:** factor everything, cancel common factors (never cancel terms).
- **Equations:** multiply by the LCD, solve, then **reject values that make an original denominator zero**.
- **Partial fractions:** $\dfrac{4x^2+15x-1}{(x+1)(x-2)(x+3)}=\dfrac{A}{x+1}+\dfrac{B}{x-2}+\dfrac{C}{x+3}$. Plug in $x=-1$, $2$, $-3$ (cover-up method) to read off $A$, $B$, $C$.
- **Work problems:** rates add. If A takes $a$ hours and B takes $b$ hours, together $\frac1a+\frac1b=\frac1t$, so $t=\frac{ab}{a+b}$.

---

## Ratios, Proportions & Variations (Meet 2)

| Type | Equation | Constant |
|---|---|---|
| Direct | $y=kx$ | $k=y/x$ |
| Inverse | $y=\dfrac{k}{x}$ | $k=xy$ |
| Joint | $z=kxy$ | |
| Combined | $z=\dfrac{kx}{y^2}$ | |

> [!tip] Scaling shortcut
> If $z\propto\dfrac{x^2}{y}$ and $x$ doubles while $y$ triples, then $z$ is multiplied by $\dfrac{2^2}{3}=\dfrac43$. There's no need to find $k$.

- In $a:b=c:d$, the product of the means equals the product of the extremes: $ad=bc$.
- Ratios $a:b:c = 2:3:4$ means $a=2k$, $b=3k$, $c=4k$.
- **Componendo:** if $\frac ab=\frac cd$ then $\frac{a+b}{b}=\frac{c+d}{d}$.

---

## Absolute Values & Inequalities (Meet 2)

- $|x|=a$ means $x=\pm a$ (if $a\ge0$, otherwise there's no solution).
- $|x|<a$ means $-a<x<a$. $|x|>a$ means $x<-a$ or $x>a$.
- Several absolute values: split at the **critical points** where each inside is zero, then solve on each interval.
- **Quadratic/rational inequalities:** find the zeros and undefined points, then test a sign chart.
- $|a+b|\le|a|+|b|$ (triangle inequality).
- **Distance interpretation:** $|x-3|+|x+1|$ is the total distance from $x$ to $3$ and to $-1$. Its minimum is $4$, reached anywhere between them.

---

## Relations & Functions (Meet 3)

- **Function:** each input has exactly one output (vertical line test).
- **Domain** restrictions: denominators $\ne0$, even roots $\ge0$, log arguments $>0$.
- **Composition:** $(f\circ g)(x)=f(g(x))$. Its domain is the $x$ in dom $g$ with $g(x)$ in dom $f$.
- **Inverse:** swap $x$ and $y$, then solve for $y$. $f^{-1}$ exists iff $f$ is one-to-one (horizontal line test). The graphs reflect over $y=x$.
- **Even** $f(-x)=f(x)$ (symmetric about the $y$-axis). **Odd** $f(-x)=-f(x)$ (symmetric about the origin).
- **Transformations** of $y=af(b(x-h))+k$: vertical stretch $a$, horizontal stretch $\frac1b$, shift $(h,k)$.
- **Functional equations:** plug in clever values ($x=0$, $x=1$, $x\to\frac1x$) and solve the resulting system.

> [!example] Functional equation
> If $f(x)+2f\!\left(\tfrac1x\right)=3x$, replace $x$ with $\tfrac1x$ to get $f\!\left(\tfrac1x\right)+2f(x)=\tfrac3x$. Solving the two equations gives $f(x)=\dfrac{2}{x}-x$.

---

## Polynomial Equations (Meet 5)

- **Rational Root Theorem:** possible rational roots are $\pm\dfrac{\text{factors of the constant}}{\text{factors of the leading coefficient}}$.
- **Factor Theorem:** $(x-c)$ is a factor iff $P(c)=0$. **Remainder Theorem:** $P(x)\div(x-c)$ leaves $P(c)$.
- **Vieta for a cubic** $ax^3+bx^2+cx+d$ with roots $r$, $s$, $t$:
$$r+s+t=-\frac ba,\quad rs+rt+st=\frac ca,\quad rst=-\frac da$$
- Quartic: the signs alternate ($-\frac ba$, $+\frac ca$, $-\frac da$, $+\frac ea$).
- Complex roots of real polynomials come in conjugate pairs. Irrational roots $a\pm\sqrt b$ come in pairs for rational coefficients.
- **Descartes' rule of signs:** the number of positive roots is at most the number of sign changes in $P(x)$, and differs from it by an even number. Use $P(-x)$ for negative roots.
- **Multiplicity:** an even multiplicity touches the axis, an odd one crosses it.
- Sum of the squares of the roots: $(r+s+t)^2-2(rs+rt+st)$.

---

## Rational Functions (Meet 7)

For $f(x)=\dfrac{P(x)}{Q(x)}$ in lowest terms:
- **Vertical asymptotes:** zeros of $Q$ (after canceling). Canceled factors give **holes**.
- **Horizontal asymptote** (compare degrees $n=\deg P$, $m=\deg Q$):
  - $n<m$: $y=0$
  - $n=m$: $y=$ ratio of the leading coefficients
  - $n=m+1$: a **slant** asymptote, the quotient from long division
- **$x$-intercepts:** zeros of $P$ (not holes). **$y$-intercept:** $f(0)$.
- A graph **can** cross a horizontal asymptote. Solve $f(x)=L$ to find where.
- The coordinates of a **hole** at $x=c$: cancel the factor, then plug $c$ into what's left.
