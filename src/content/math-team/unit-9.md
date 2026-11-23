---
title: "Unit 9: Trigonometry Toolbox"
unit: 9
---

# Unit 9: Trigonometry Toolbox

| Meet | Event | Topic |
|---|---|---|
| 1 | 4 | Identities |
| 2 | 4 | Equations & Graphs |
| 3 | 4 | Inverse Functions including Triangles |
| 4 | 4 | Polar Coordinates & DeMoivre's Theorem *(even-odd seasons — this year!)* |

---

## Unit Circle Essentials

| $\theta$ | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ |
|---|---|---|---|---|---|
| $\sin$ | $0$ | $\frac12$ | $\frac{\sqrt2}2$ | $\frac{\sqrt3}2$ | $1$ |
| $\cos$ | $1$ | $\frac{\sqrt3}2$ | $\frac{\sqrt2}2$ | $\frac12$ | $0$ |
| $\tan$ | $0$ | $\frac{\sqrt3}3$ | $1$ | $\sqrt3$ | — |

**ASTC** (All Students Take Calculus): the positive functions in quadrants I, II, III, IV are All, Sin, Tan, Cos.

Also memorize $\sin 15^\circ=\dfrac{\sqrt6-\sqrt2}4$ and $\cos15^\circ=\dfrac{\sqrt6+\sqrt2}4$.

---

## Identities (Meet 1)

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

## Equations & Graphs (Meet 2)

- Solve for the **reference angle**, then list every quadrant where the sign matches, then add the period: $\sin$ and $\cos$ repeat every $2\pi$, $\tan$ every $\pi$.
- With $\sin 2x$ and $x\in[0,2\pi)$, solve for $2x\in[0,4\pi)$, then divide by 2. This gives **twice** as many solutions.
- Factor, don't divide: $2\sin x\cos x=\sin x$ becomes $\sin x(2\cos x-1)=0$.
- **Graph of** $y=A\sin(B(x-C))+D$: amplitude $|A|$, period $\frac{2\pi}{|B|}$, phase shift $C$, midline $y=D$.
- $a\sin x+b\cos x=\sqrt{a^2+b^2}\sin(x+\varphi)$. Its max is $\sqrt{a^2+b^2}$.
- Period of $\tan(Bx)$ is $\frac\pi{|B|}$.

---

## Inverse Functions including Triangles (Meet 3)

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

## Polar Coordinates & DeMoivre's Theorem (Meet 4)

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
