---
title: "Unit 6: Algebra II Toolbox — Exponents, Logs, Complex Numbers & Matrices"
unit: 6
---

# Unit 6: Algebra II Toolbox — Exponents, Logs, Complex Numbers & Matrices

| Meet | Event | Topic |
|---|---|---|
| 3 | 1 | Exponents & Radicals |
| 4 | 1 | Exponents & Logarithms |
| 4 | 6 | Complex Numbers |
| 5 | 6 | Matrices & Determinants |

---

## Exponents & Radicals (Meet 3)

| Rule | |
|---|---|
| $a^m a^n = a^{m+n}$ | $\dfrac{a^m}{a^n}=a^{m-n}$ |
| $(a^m)^n=a^{mn}$ | $(ab)^n=a^nb^n$ |
| $a^0=1$ | $a^{-n}=\dfrac1{a^n}$ |
| $a^{m/n}=\sqrt[n]{a^m}=\left(\sqrt[n]a\right)^m$ | $\left(\dfrac ab\right)^{-n}=\left(\dfrac ba\right)^n$ |

- **Same base:** rewrite both sides as powers of a common base, then set the exponents equal: $16^{3x-4}=64^{5x/3}$ becomes $2^{12x-16}=2^{10x}$.
- **Hidden quadratics:** $3^{2x}-12\cdot3^x+27=0$. Let $u=3^x$.
- **Nested radicals:** $\sqrt{x\sqrt{x\sqrt{x}}}=x^{7/8}$. Work from the inside out, or use exponents.
- **Infinite nest:** $\sqrt{a+\sqrt{a+\cdots}}=y$ gives $y^2=a+y$.
- Comparing $2^{100}$ and $3^{60}$: raise both to the power $1/20$, giving $2^5=32$ vs $3^3=27$.

---

## Exponents & Logarithms (Meet 4)

$$\log_b x = y \iff b^y = x \qquad (b>0,\ b\ne1,\ x>0)$$

| Law | |
|---|---|
| $\log_b(MN)=\log_bM+\log_bN$ | $\log_b\dfrac MN=\log_bM-\log_bN$ |
| $\log_b M^p = p\log_b M$ | $\log_{b^q}M=\dfrac1q\log_bM$ |
| Change of base: $\log_b a=\dfrac{\log a}{\log b}$ | $\log_b a\cdot\log_a b=1$ |
| $b^{\log_b x}=x$ | $a^{\log_b c}=c^{\log_b a}$ |

- **Chain products telescope:** $\log_3 2\cdot\log_5 27\cdot\log_8 49\cdot\log_7 25 = \dfrac{\log2}{\log3}\cdot\dfrac{3\log3}{\log5}\cdot\dfrac{2\log7}{3\log2}\cdot\dfrac{2\log5}{\log7}=4$
- **Bases that are powers of each other:** $\log_{25}x=\frac12\log_5x$ and $\log_{1/9}x=-\frac12\log_3 x$.
- **$x^{\ln x}=e^{28}x^3$:** take $\ln$ of both sides, giving $(\ln x)^2=28+3\ln x$, a quadratic in $\ln x$.
- **Known values:** $\log2\approx0.3010$, $\log3\approx0.4771$, $\log 5=1-\log2$, $\log 7\approx0.8451$.
- Domain of $f(x)=k\log_b(Ax+B)$: $Ax+B>0$.

> [!warning] Extraneous solutions
> After using $\log a+\log b=\log ab$, the combined equation can have roots that make an **original** argument negative. Plug every candidate back into the original logs. In Jan 2024 C, $\log_4(-x)+\log_4(6-x)=2$ gives $x=8$ or $-2$. Only $-2$ works.

---

## Complex Numbers (Meet 4)

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

## Matrices & Determinants (Meet 5)

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
