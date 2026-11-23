---
title: "Unit 8: Beyond the Basics: Trig, Complex Numbers, Conics & Calculus"
unit: 8
---

# Unit 8: Beyond the Basics: Trig, Complex Numbers, Conics & Calculus

The MATHCOUNTS toolbox stops at middle-school topics. High school contests (OML, ARML, AMC 12, state leagues) also test the topics below. Everything here is 🚀 for middle school and ⭐ for high school.

## Unit Circle Essentials
<!-- contests: oml amc12 aime -->

| $\theta$ | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ |
|---|---|---|---|---|---|
| $\sin$ | $0$ | $\frac12$ | $\frac{\sqrt2}2$ | $\frac{\sqrt3}2$ | $1$ |
| $\cos$ | $1$ | $\frac{\sqrt3}2$ | $\frac{\sqrt2}2$ | $\frac12$ | $0$ |
| $\tan$ | $0$ | $\frac{\sqrt3}3$ | $1$ | $\sqrt3$ | — |

**ASTC** (All Students Take Calculus): the positive functions in quadrants I, II, III, IV are All, Sin, Tan, Cos.

Also memorize $\sin 15^\circ=\dfrac{\sqrt6-\sqrt2}4$ and $\cos15^\circ=\dfrac{\sqrt6+\sqrt2}4$.

---

## Identities
<!-- contests: oml amc12 aime -->
- **Pythagorean:** $\sin^2\theta+\cos^2\theta=1$, $\ 1+\tan^2\theta=\sec^2\theta$, $\ 1+\cot^2\theta=\csc^2\theta$
- **Sum/difference:**
$$\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B$$
$$\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B$$
$$\tan(A\pm B)=\frac{\tan A\pm\tan B}{1\mp\tan A\tan B}$$
- **Double angle:** $\sin2\theta=2\sin\theta\cos\theta$, $\ \cos2\theta=\cos^2\theta-\sin^2\theta=1-2\sin^2\theta=2\cos^2\theta-1$, $\ \tan2\theta=\dfrac{2\tan\theta}{1-\tan^2\theta}$
- **Half angle:** $\sin\frac\theta2=\pm\sqrt{\frac{1-\cos\theta}2}$, $\ \cos\frac\theta2=\pm\sqrt{\frac{1+\cos\theta}2}$, $\ \tan\frac\theta2=\dfrac{1-\cos\theta}{\sin\theta}=\dfrac{\sin\theta}{1+\cos\theta}$
- **Product-to-sum:** $\sin A\cos B=\frac12[\sin(A+B)+\sin(A-B)]$, and similarly for the others.
- **Cofunctions:** $\sin(90^\circ-\theta)=\cos\theta$, etc.

> [!tip] Given $\sin\theta=\frac35$ in Q2…
> Draw the 3-4-5 reference triangle and attach the quadrant signs: $\cos\theta=-\frac45$, $\tan\theta=-\frac34$. Then plug into the double-angle formulas.

---

## Equations & Graphs
<!-- contests: oml amc12 -->
- Solve for the **reference angle**, then list every quadrant where the sign matches, then add the period: $\sin$ and $\cos$ repeat every $2\pi$, $\tan$ every $\pi$.
- With $\sin 2x$ and $x\in[0,2\pi)$, solve for $2x\in[0,4\pi)$, then divide by 2. This gives **twice** as many solutions.
- Factor, don't divide: $2\sin x\cos x=\sin x$ becomes $\sin x(2\cos x-1)=0$.
- **Graph of** $y=A\sin(B(x-C))+D$: amplitude $|A|$, period $\frac{2\pi}{|B|}$, phase shift $C$, midline $y=D$.
- $a\sin x+b\cos x=\sqrt{a^2+b^2}\sin(x+\varphi)$. Its max is $\sqrt{a^2+b^2}$.
- Period of $\tan(Bx)$ is $\frac\pi{|B|}$.

---

## Inverse Functions including Triangles
<!-- contests: oml amc12 aime -->
| | Range |
|---|---|
| $\arcsin x$ | $\left[-\frac\pi2,\frac\pi2\right]$ |
| $\arccos x$ | $[0,\pi]$ |
| $\arctan x$ | $\left(-\frac\pi2,\frac\pi2\right)$ |

- $\sin(\arccos x)=\sqrt{1-x^2}$. In general, draw the triangle: for $\theta=\arctan\frac34$, the opposite side is 3, the adjacent 4, and the hypotenuse 5.
- $\arcsin x+\arccos x=\frac\pi2$.
- $\arctan a+\arctan b=\arctan\dfrac{a+b}{1-ab}$ (adjust by $\pi$ if $ab>1$).
- Watch the ranges: $\arcsin(\sin\frac{5\pi}6)=\frac\pi6$, **not** $\frac{5\pi}6$.

### Solving triangles
- **Law of Sines:** $\dfrac a{\sin A}=\dfrac b{\sin B}=\dfrac c{\sin C}=2R$
- **Law of Cosines:** $c^2=a^2+b^2-2ab\cos C$
- **Area:** $\frac12ab\sin C$. **Heron:** $\sqrt{s(s-a)(s-b)(s-c)}$. Also $rs$ and $\dfrac{abc}{4R}$.
- **SSA ambiguous case:** given $a$, $b$, and $A$ with $h=b\sin A$: no triangle if $a<h$, one if $a=h$ or $a\ge b$, and **two** if $h<a<b$.

---

## Polar Coordinates & DeMoivre's Theorem
<!-- contests: oml amc12 aime -->
### Converting
$$x=r\cos\theta,\quad y=r\sin\theta,\quad r^2=x^2+y^2,\quad \tan\theta=\frac yx$$
- **Check the quadrant** of $\theta$! For $(-2,-2)$, $\theta=\frac{5\pi}4$, not $\frac\pi4$.
- A negative $r$ means going the opposite way: $(-2,\theta)=(2,\theta+\pi)$.
- **Distance** between $(r_1,\theta_1)$ and $(r_2,\theta_2)$: $\sqrt{r_1^2+r_2^2-2r_1r_2\cos(\theta_1-\theta_2)}$ (law of cosines).
- **Polar → Cartesian equations:** multiply through to create $r\cos\theta$, $r\sin\theta$, and $r^2$.
  $r=\dfrac{4}{2-\sin\theta}$ becomes $2r-r\sin\theta=4$, so $2\sqrt{x^2+y^2}=4+y$. Square to get $4x^2+3y^2-8y-16=0$.
- $\sin2\theta=\dfrac{2xy}{r^2}$, $\ \cos2\theta=\dfrac{x^2-y^2}{r^2}$.

### Polar graphs
- $r=a\pm b\sin\theta$ or $a\pm b\cos\theta$ is a **limaçon** (a cardioid if $|a|=|b|$, with an inner loop if $|a|<|b|$).
- $r=a\cos n\theta$ is a **rose**: $n$ petals if $n$ is odd, $2n$ if $n$ is even.
- $r=\dfrac{ep}{1\pm e\cos\theta}$ is a **conic** with eccentricity $e$.

### Complex numbers in polar (cis) form
$$z=a+bi=r(\cos\theta+i\sin\theta)=r\operatorname{cis}\theta$$
- **Multiply:** multiply the moduli, **add** the angles. **Divide:** divide the moduli, subtract the angles.
- **DeMoivre:** $(r\operatorname{cis}\theta)^n=r^n\operatorname{cis}(n\theta)$
- **$n$th roots** of $r\operatorname{cis}\theta$:
$$\sqrt[n]r\operatorname{cis}\left(\frac{\theta+2\pi k}{n}\right),\quad k=0,1,\dots,n-1$$
  The roots are evenly spaced, $\frac{2\pi}n$ apart, on a circle of radius $\sqrt[n]r$.
- Useful forms: $1+i=\sqrt2\operatorname{cis}\frac\pi4$, $\ \frac{\sqrt3}2+\frac12i=\operatorname{cis}\frac\pi6$, $\ \frac12+\frac{\sqrt3}2i=\operatorname{cis}\frac\pi3$.
- **Roots of unity** sum to $0$. A geometric series of powers of $\operatorname{cis}\frac{2\pi}{n}$ collapses in blocks of $n$.

> [!example] Jan 2021 A
> $\left(\frac{\sqrt3}2+\frac12i\right)^{2021}=\operatorname{cis}(2021\cdot30^\circ)$. Since $60630^\circ \equiv 150^\circ \pmod{360^\circ}$, the answer is $-\frac{\sqrt3}2+\frac12i$.

> [!tip] Answer form
> Read whether the problem wants $a+bi$ or $r\operatorname{cis}\theta$, and the allowed range of $\theta$ ($0\le\theta<2\pi$ or $0\le\theta<\pi$).

---

## Roots of Unity 🚀
<!-- contests: amc12 aime usajmo usamo -->

The solutions of $z^n=1$ are $\omega^k=\operatorname{cis}\frac{360^\circ k}{n}$ for $k=0,1,\dots,n-1$: the vertices of a regular $n$-gon on the unit circle.

- They add to $0$ (for $n\ge2$): $1+\omega+\dots+\omega^{n-1}=0$.
- $z^n-1=(z-1)(z-\omega)\cdots(z-\omega^{n-1})$. Plugging in a value of $z$ turns products over roots into something easy.
- For a primitive cube root $\omega$: $\omega^2+\omega+1=0$ and $\omega^3=1$.
- $\prod_{k=1}^{n-1}(1-\omega^k)=n$ (from $\frac{z^n-1}{z-1}$ at $z=1$).
- Powers of a root cycle with period $n$, so reduce exponents mod $n$.

> [!example] $x^{2026}$ divided by $x^2+x+1$
> The roots of $x^2+x+1$ are $\omega,\omega^2$ with $\omega^3=1$. Since $2026\equiv1\pmod 3$, $\omega^{2026}=\omega$, so the remainder is $x$.

## Complex Numbers
<!-- contests: oml amc10 amc12 aime -->

### Powers of $i$
$i^1=i$, $i^2=-1$, $i^3=-i$, $i^4=1$. Reduce the exponent **mod 4**: $i^{2025}=i^1=i$ and $i^{403}=i^3=-i$.

Also $i+i^2+i^3+i^4=0$, so long sums of powers of $i$ collapse.

### Arithmetic
- $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$
- **Divide** by multiplying by the conjugate: $\dfrac{5+2i}{3-7i}\cdot\dfrac{3+7i}{3+7i}=\dfrac{1+41i}{58}$
- **Conjugate** $\overline{a+bi}=a-bi$. $z\bar z = |z|^2 = a^2+b^2$.
- **Absolute value** $|a+bi|=\sqrt{a^2+b^2}$. $|zw|=|z||w|$ and $|z^n|=|z|^n$.
- $(1+i)^2=2i$ and $(1-i)^2=-2i$. Learn these. $(1+i)^{2015}$ becomes easy.

### Equations with $z$ and $\bar z$
Let $z=a+bi$, expand, then set the **real parts equal and the imaginary parts equal**.

> [!example] $z^2-12=6\bar z$, $z$ non-real
> $(a^2-b^2-12)+2abi=6a-6bi$. Imaginary parts: $2ab=-6b$, and $b\ne0$, so $a=-3$. Real parts: $9-b^2-12=-18$, so $b^2=15$. Therefore $z=-3\pm\sqrt{15}i$.

### Square roots of $a+bi$
Solve $(x+yi)^2=a+bi$: $x^2-y^2=a$ and $2xy=b$. Use $x^2+y^2=\sqrt{a^2+b^2}$ to finish quickly.

For example, $\sqrt{9-40i}$: $x^2+y^2=41$ and $x^2-y^2=9$, so $x^2=25$ and $y^2=16$. Since $xy<0$, the roots are $\pm(5-4i)$.

---

## Matrices & Determinants
<!-- contests: oml -->

- **Size** $m\times n$ (rows × columns). $AB$ exists iff the columns of $A$ = the rows of $B$. In general $AB\ne BA$.
- $2\times2$ determinant: $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$
- **Inverse:** $\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1}=\dfrac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$ (only when $\det\ne0$)
- $3\times3$ determinant: **Sarrus' rule** (diagonals) or cofactor expansion along a row with zeros.
- Properties:
  - $\det(AB)=\det A\det B$
  - $\det(kA)=k^n\det A$ for an $n\times n$ matrix
  - $\det(A^T)=\det A$
  - $\det(A^{-1})=\frac{1}{\det A}$
  - Swapping two rows flips the sign. A row of zeros or two equal rows gives $\det=0$.
- **Triangle area** from vertices: $\dfrac12\left|\det\begin{bmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{bmatrix}\right|$
- Solve $AX=B$ with $X=A^{-1}B$ (the order matters!).

---


## Lines & Circles
<!-- contests: oml amc10 amc12 aime -->
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

## Parabolas, Ellipses & Hyperbolas
<!-- contests: oml amc12 -->
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

## Vectors
<!-- contests: oml amc12 -->
- $\vec v=\langle a,b\rangle$, magnitude $|\vec v|=\sqrt{a^2+b^2}$, unit vector $\dfrac{\vec v}{|\vec v|}$.
- **Dot product:** $\vec u\cdot\vec v=u_1v_1+u_2v_2=|\vec u||\vec v|\cos\theta$. Perpendicular iff the dot product is $0$.
- **Projection** of $\vec u$ onto $\vec v$: $\dfrac{\vec u\cdot\vec v}{|\vec v|^2}\vec v$. The scalar component is $\dfrac{\vec u\cdot\vec v}{|\vec v|}$.
- **3D cross product:** $\vec u\times\vec v$ is perpendicular to both, and $|\vec u\times\vec v|$ is the area of the parallelogram they span.
- Triple product $|\vec u\cdot(\vec v\times\vec w)|$ is the volume of the parallelepiped.
- Resultant force / navigation: add the components. The bearing is measured clockwise from north.

---

## Calculus: Limits & Derivatives
<!-- contests: oml -->
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

## Calculus: Integrals
<!-- contests: oml -->
$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1),\qquad \int\frac1x\,dx=\ln|x|+C$$
$$\int e^x\,dx=e^x+C,\quad\int\sin x\,dx=-\cos x+C,\quad\int\cos x\,dx=\sin x+C,\quad\int\sec^2x\,dx=\tan x+C$$

- **Fundamental Theorem:** $\displaystyle\int_a^bf(x)\,dx=F(b)-F(a)$.
- **$u$-substitution:** for $\int f(g(x))g'(x)\,dx$, let $u=g(x)$, and change the limits too.
- **Area between curves:** $\int_a^b(\text{top}-\text{bottom})\,dx$. Find the intersection points first.
- **Average value** of $f$ on $[a,b]$: $\dfrac1{b-a}\int_a^bf\,dx$.
- **Volume** of revolution: disks $\pi\int r^2\,dx$, washers $\pi\int(R^2-r^2)\,dx$, shells $2\pi\int(\text{radius})(\text{height})\,dx$.
- **Symmetry:** the integral of an odd function over $[-a,a]$ is $0$. For an even function it's $2\int_0^a$.
- $\int_a^b|f|$: split at the zeros of $f$.
