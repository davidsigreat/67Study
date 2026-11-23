---
title: "Unit 10: Analytic Geometry & Calculus Toolbox"
unit: 10
---

# Unit 10: Analytic Geometry & Calculus Toolbox

| Meet | Event | Topic |
|---|---|---|
| 4 | 4 | Calculus: Limits & Derivatives *(odd-even seasons)* |
| 5 | 4 | Analytic Geometry: Lines & Circles |
| 6 | 4 | Analytic Geometry: Parabolas, Ellipses & Hyperbolas |
| 7 | 4 | Calculus: Integrals *(even-odd seasons — this year!)* |
| 7 | 4 | Analytic Geometry: Vectors *(odd-even seasons)* |

---

## Lines & Circles (Meet 5)

### Lines
- Slope-intercept $y=mx+b$. Point-slope $y-y_1=m(x-x_1)$. Standard $Ax+By=C$ (slope $-\frac AB$).
- Intercept form $\dfrac xa+\dfrac yb=1$. The triangle it cuts off the axes has area $\frac12|ab|$.
- Distance from $(x_0,y_0)$ to $Ax+By+C=0$: $\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$.
- Distance between parallel lines $Ax+By+C_1=0$ and $Ax+By+C_2=0$: $\dfrac{|C_1-C_2|}{\sqrt{A^2+B^2}}$.
- Angle between lines: $\tan\theta=\left|\dfrac{m_1-m_2}{1+m_1m_2}\right|$.
- **Perpendicular bisector** of $AB$: passes through the midpoint with slope $-1/m_{AB}$.

### Circles
$$(x-h)^2+(y-k)^2=r^2$$
- From $x^2+y^2+Dx+Ey+F=0$, **complete the square**: the center is $\left(-\frac D2,-\frac E2\right)$ and $r^2=\frac{D^2+E^2}4-F$.
- A tangent line at a point $P$ on the circle is perpendicular to the radius to $P$.
- A line is tangent iff its distance to the center equals $r$.
- **Tangent length** from an external point $P$: $\sqrt{(\text{dist to center})^2-r^2}$. You can also plug $P$ into $x^2+y^2+Dx+Ey+F$.
- **Common chord** of two circles: subtract their equations.
- **Circle through three points:** the center is the intersection of two perpendicular bisectors.

---

## Parabolas, Ellipses & Hyperbolas (Meet 6)

| Conic | Standard form (center $(h,k)$) | Key facts |
|---|---|---|
| Parabola | $(x-h)^2=4p(y-k)$ | vertex $(h,k)$, focus $p$ from the vertex, directrix $p$ the other way, latus rectum $\lvert4p\rvert$ |
| Ellipse | $\dfrac{(x-h)^2}{a^2}+\dfrac{(y-k)^2}{b^2}=1$, $a>b$ | $c^2=a^2-b^2$, foci $\pm c$ along the major axis, $e=\frac ca<1$, latus rectum $\frac{2b^2}a$ |
| Hyperbola | $\dfrac{(x-h)^2}{a^2}-\dfrac{(y-k)^2}{b^2}=1$ | $c^2=a^2+b^2$, asymptotes $y-k=\pm\frac ba(x-h)$, $e=\frac ca>1$ |

- **Classify** $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$ by $B^2-4AC$: $<0$ ellipse (or circle), $=0$ parabola, $>0$ hyperbola.
- The ellipse's area is $\pi ab$. The sum of the distances to the foci is $2a$. For a hyperbola, the difference is $2a$.
- Complete the square in **both** variables, factoring out the leading coefficients first.
- **Rectangular hyperbola** $xy=k$: asymptotes are the axes, $a=b=\sqrt{2|k|}$, $e=\sqrt2$.

---

## Vectors (Meet 7, odd-even seasons)

- $\vec v=\langle a,b\rangle$, magnitude $|\vec v|=\sqrt{a^2+b^2}$, unit vector $\dfrac{\vec v}{|\vec v|}$.
- **Dot product:** $\vec u\cdot\vec v=u_1v_1+u_2v_2=|\vec u||\vec v|\cos\theta$. Perpendicular iff the dot product is $0$.
- **Projection** of $\vec u$ onto $\vec v$: $\dfrac{\vec u\cdot\vec v}{|\vec v|^2}\vec v$. The scalar component is $\dfrac{\vec u\cdot\vec v}{|\vec v|}$.
- **3D cross product:** $\vec u\times\vec v$ is perpendicular to both, and $|\vec u\times\vec v|$ is the area of the parallelogram they span.
- Triple product $|\vec u\cdot(\vec v\times\vec w)|$ is the volume of the parallelepiped.
- Resultant force / navigation: add the components. The bearing is measured clockwise from north.

---

## Calculus: Limits & Derivatives (Meet 4, odd-even seasons)

### Limits
- Plug in first. For $\frac00$: factor and cancel, rationalize, or use L'Hôpital: $\lim\frac fg=\lim\frac{f'}{g'}$.
- $\displaystyle\lim_{x\to0}\frac{\sin x}x=1$, $\displaystyle\lim_{x\to0}\frac{1-\cos x}x=0$, $\displaystyle\lim_{n\to\infty}\left(1+\frac1n\right)^n=e$.
- Limits at infinity of rational functions follow the horizontal-asymptote rules.

### Derivatives
| $f$ | $f'$ |
|---|---|
| $x^n$ | $nx^{n-1}$ |
| $e^x$, $a^x$ | $e^x$, $a^x\ln a$ |
| $\ln x$ | $\frac1x$ |
| $\sin x$, $\cos x$, $\tan x$ | $\cos x$, $-\sin x$, $\sec^2x$ |

- **Product** $(fg)'=f'g+fg'$, **quotient** $\left(\frac fg\right)'=\frac{f'g-fg'}{g^2}$, **chain** $(f(g(x)))'=f'(g(x))g'(x)$.
- **Tangent line** at $a$: $y=f(a)+f'(a)(x-a)$.
- Critical points where $f'=0$ or $f'$ is undefined. Inflection points where $f''$ changes sign.
- Implicit differentiation: differentiate both sides, then solve for $\frac{dy}{dx}$.

---

## Calculus: Integrals (Meet 7, even-odd seasons)

$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1),\qquad \int\frac1x\,dx=\ln|x|+C$$
$$\int e^x\,dx=e^x+C,\quad\int\sin x\,dx=-\cos x+C,\quad\int\cos x\,dx=\sin x+C,\quad\int\sec^2x\,dx=\tan x+C$$

- **Fundamental Theorem:** $\displaystyle\int_a^bf(x)\,dx=F(b)-F(a)$.
- **$u$-substitution:** for $\int f(g(x))g'(x)\,dx$, let $u=g(x)$, and change the limits too.
- **Area between curves:** $\int_a^b(\text{top}-\text{bottom})\,dx$. Find the intersection points first.
- **Average value** of $f$ on $[a,b]$: $\dfrac1{b-a}\int_a^bf\,dx$.
- **Volume** of revolution: disks $\pi\int r^2\,dx$, washers $\pi\int(R^2-r^2)\,dx$, shells $2\pi\int(\text{radius})(\text{height})\,dx$.
- **Symmetry:** the integral of an odd function over $[-a,a]$ is $0$. For an even function it's $2\int_0^a$.
- $\int_a^b|f|$: split at the zeros of $f$.
