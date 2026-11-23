---
title: "Unit 7: Number Theory"
unit: 7
---

# Unit 7: Number Theory

## Prime Factorization ⭐

Write every $n$ as $p_1^{a_1}p_2^{a_2}\cdots$. Almost every number-theory problem starts here. Useful ones to know: $2024=2^3\cdot11\cdot23$, $2025=3^4\cdot5^2$, $2026=2\cdot1013$.

## Number of Factors of a Number ⭐

$$d(n)=(a_1+1)(a_2+1)\cdots$$

Example: $72=2^3\cdot3^2$ has $4\cdot3=12$ divisors. A number has an **odd** number of divisors iff it's a perfect square.

## Sum of the Factors of a Number

$$\sigma(n)=(1+p_1+\dots+p_1^{a_1})(1+p_2+\dots+p_2^{a_2})\cdots$$

Example: $\sigma(72)=(1+2+4+8)(1+3+9)=15\cdot13=195$.

## Product of the Factors of a Number 🚀

$$\prod_{d\mid n}d=n^{d(n)/2}$$

The divisors pair up as $d$ and $\frac nd$.

## Legendre's Formula (Factorials) ⭐

The power of the prime $p$ dividing $n!$ is
$$\left\lfloor\frac np\right\rfloor+\left\lfloor\frac n{p^2}\right\rfloor+\left\lfloor\frac n{p^3}\right\rfloor+\cdots$$

**Trailing zeros** of $n!$ use $p=5$. For example, $100!$ ends in $20+4=24$ zeros.

## Different Bases ⭐

$(d_k\dots d_1d_0)_b=d_kb^k+\dots+d_1b+d_0$. To convert to base $b$, divide by $b$ repeatedly and read the remainders from the bottom up.

Base 2 ↔ base 8 ↔ base 16: group the binary digits in 3s (octal) or 4s (hex). Example: $725_8=111\,010\,101_2$.

## Divisibility Rules ⭐

| By | Test |
|---|---|
| 2, 5, 10 | last digit |
| 4 | last two digits |
| 8 | last three digits |
| 3, 9 | sum of the digits |
| 6 | by both 2 and 3 |
| 11 | alternating sum of the digits |
| 7, 11, 13 | 🚀 $1001=7\cdot11\cdot13$: alternating sum of 3-digit blocks |

## Greatest Common Factor (GCF) and Least Common Multiple (LCM) ⭐

From prime factorizations: the GCF takes the **minimum** exponent of each prime, and the LCM takes the **maximum**.

$$\gcd(a,b)\cdot\operatorname{lcm}(a,b)=ab$$

## Euclidean Algorithm

$\gcd(a,b)=\gcd(b,a\bmod b)$. Example: $\gcd(1071,462)=\gcd(462,147)=\gcd(147,21)=21$.

Also useful: $\gcd(a,b)=\gcd(a-b,b)$, and consecutive integers are always coprime.

## Patterns in Digits When Raised to Powers ⭐

Units digits cycle with period at most 4:

| Base ends in | Cycle |
|---|---|
| 0, 1, 5, 6 | constant |
| 2 | 2, 4, 8, 6 |
| 3 | 3, 9, 7, 1 |
| 4 | 4, 6 |
| 7 | 7, 9, 3, 1 |
| 8 | 8, 4, 2, 6 |
| 9 | 9, 1 |

So the units digit of $3^{158}$ is found from $158\bmod4=2$: it's $9$.

## Modular Arithmetic ⭐

$a\equiv b\pmod m$ means $m\mid(a-b)$. You can add, subtract, multiply, and raise to powers inside a congruence. You can **divide** only by numbers coprime to $m$.

- Squares mod 4 are 0 or 1. Squares mod 8 are 0, 1, or 4. Squares mod 3 are 0 or 1.
- A number is congruent to its digit sum mod 9.
- Use mod arithmetic to find remainders and last digits, and to prove that something can never happen.

## Chinese Remainder Theorem 🚀

If $m$ and $n$ are coprime, the system $x\equiv a\pmod m$, $x\equiv b\pmod n$ has exactly one solution mod $mn$. To find it, list the candidates $a, a+m, a+2m,\dots$ and check them mod $n$.

Example: $x\equiv2\pmod3$ and $x\equiv3\pmod5$ give $x\equiv8\pmod{15}$.

## Fermat's Little Theorem 🚀

For a prime $p$ and $p\nmid a$: $a^{p-1}\equiv1\pmod p$. 🚀 **Euler** generalizes this: $a^{\varphi(n)}\equiv1\pmod n$ when $\gcd(a,n)=1$, with $\varphi(n)=n\prod\left(1-\frac1p\right)$.

Example: $2^{100}\bmod7$: since $2^6\equiv1$, $2^{100}=2^{96}\cdot2^4\equiv16\equiv2$.

## Other Terms

- **Perfect number:** equals the sum of its proper divisors (6, 28, 496).
- **Relatively prime (coprime):** $\gcd=1$.
- **Twin primes:** primes that differ by 2.
- **Digit sum** and **digital root:** repeat the digit sum until one digit is left (≡ $n$ mod 9).
- **Repunits:** 1, 11, 111, …
