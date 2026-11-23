---
title: "Unit 2: LaTeX for Math Team Answers"
unit: 2
---

# Unit 2: LaTeX for Math Team Answers

The practice bank takes answers in **LaTeX**, the language mathematicians use to type math. You type plain text like `\frac{3}{2}` and it renders as $\frac{3}{2}$. As you type, a preview under the answer box shows exactly how your answer reads.

> [!tip] You only need about 20 commands
> You don't need to learn all of LaTeX. The tables below cover nearly every OML answer. The toolbar buttons above the answer box insert the common ones for you.

## The Basics

| You want | Type | Result |
|---|---|---|
| Fraction | `\frac{3}{2}` | $\frac{3}{2}$ |
| Negative fraction | `-\frac{25}{4}` | $-\frac{25}{4}$ |
| Exponent | `x^2` or `x^{10}` | $x^2$, $x^{10}$ |
| Square root | `\sqrt{5}` | $\sqrt{5}$ |
| Cube / nth root | `\sqrt[3]{2}` | $\sqrt[3]{2}$ |
| Coefficient × root | `4\sqrt{5}` | $4\sqrt{5}$ |
| Multiplication dot | `3\cdot 4` | $3\cdot 4$ |
| Pi | `\pi` | $\pi$ |
| Subscript | `\log_2 8` or `a_{10}` | $\log_2 8$, $a_{10}$ |
| Plus-or-minus | `\pm 3` | $\pm 3$ |

> [!warning] Braces matter
> `x^10` renders as $x^10$ because only the first character goes up. Use braces for anything longer than one character: `x^{10}`, `\sqrt{12}`, `\frac{x+1}{2}`.

## Answer Types You'll See at OML

### Numbers and expressions

| Answer | Type |
|---|---|
| $\frac{3+3\sqrt{5}}{2}$ | `\frac{3+3\sqrt{5}}{2}` |
| $288+288\sqrt{2}$ | `288+288\sqrt{2}` |
| $\frac{\log 2}{2\log 3}$ | `\frac{\log 2}{2\log 3}` |
| $e^{-4}$ | `e^{-4}` |
| $8^{1/4}$ | `8^{1/4}` or `8^{\frac14}` |

### Several answers

Separate multiple solutions with **commas**. Order doesn't matter.

| Answer | Type |
|---|---|
| $x = 1, 2$ | `1, 2` |
| $6\pm 2\sqrt{3}$ | `6\pm2\sqrt{3}` (the checker expands $\pm$ into both answers) |
| $0, -\frac{y}{2}, \frac{5y}{2}$ | `0, -\frac{y}{2}, \frac{5y}{2}` |

You can skip a leading `x=`, since `x=4` and `4` are graded the same. Use "and"/"or" in words if you like: `80 and 317`.

### Complex numbers

| Answer | Type |
|---|---|
| $3-i$ | `3-i` |
| $\frac{3}{34}-\frac{5}{34}i$ | `\frac{3}{34}-\frac{5}{34}i` |
| $-3+\sqrt{15}\,i$ | `-3+\sqrt{15}i` |
| $\bar z$ (conjugate) | `\bar{z}` |
| $2\operatorname{cis}\frac{\pi}{12}$ | `2\operatorname{cis}\frac{\pi}{12}` (or just `2cis\frac{\pi}{12}`) |
| $4\operatorname{cis}60^\circ$ | `4\operatorname{cis}60^\circ` |

### Inequalities, sets, and intervals

| Answer | Type |
|---|---|
| $x\ge -2$ | `x\ge -2` |
| $-8\le x<7$ | `-8\le x<7` |
| $x\le -2$ or $x>2$ | `x\le -2 \text{ or } x>2` (or just type `x\le-2 or x>2`) |
| $\{y \mid y\le -2\}$ | `\{y \mid y\le -2\}` |
| $(-\infty, 3]$ | `(-\infty, 3]` |
| $\varnothing$ | `\varnothing` |
| $A\cup B$, $A\cap B$ | `A\cup B`, `A\cap B` |

`-2\le x` and `x\ge -2` are graded as the same answer.

### Geometry and trig

| Answer | Type |
|---|---|
| $150^\circ$ | `150^\circ` (or just `150`) |
| $\frac{\pi}{6}$ | `\frac{\pi}{6}` |
| $\triangle ABC$, $\angle A$ | `\triangle ABC`, `\angle A` |
| $\overline{AB}$ | `\overline{AB}` |
| $\sqrt{2}:2$ (ratio) | `\sqrt{2}:2` |
| $\sin^2\theta$ | `\sin^2\theta` |
| $\theta$, $\alpha$, $\beta$ | `\theta`, `\alpha`, `\beta` |

### Points, equations, and matrices

| Answer | Type |
|---|---|
| $(2\sqrt{3}, 2)$ | `(2\sqrt{3}, 2)` |
| $y=-x$ | `y=-x` |
| $11x^2+36y^2+30x-9=0$ | `11x^2+36y^2+30x-9=0` |
| $\begin{bmatrix}1&2\\3&4\end{bmatrix}$ | `\begin{bmatrix}1&2\\3&4\end{bmatrix}` |
| $\begin{vmatrix}a&b\\c&d\end{vmatrix}$ | `\begin{vmatrix}a&b\\c&d\end{vmatrix}` |

## How the Checker Grades You

1. **Exact match:** after ignoring spacing and harmless differences like `\dfrac` vs `\frac` or `x^{2}` vs `x^2`. → **✓ Correct**
2. **Same value, different form:** for example `1.5` for $\frac{3}{2}$, `(x-3)(x+2)` for $x^2-x-6$, or `\sqrt{-4}` for $2i$. The checker tests this by evaluating both answers, including random values for any variables. → **✓ Correct value — check the form**
3. **Different value** → **✗ Not quite**

> [!note] You can always override
> If you're sure you're right (for instance, an equivalent form the checker can't recognize), click **"I was right (mark correct)."** If the checker accepted something a real grader wouldn't, click **"Actually I was wrong."** Both update your stats.

## Keyboard Flow

- **Enter** submits your answer. **Shift+Enter** adds a new line.
- **Enter** again goes to the next problem.
- The toolbar inserts a snippet at the cursor and wraps any selected text: select `3` and click the root button to get `\sqrt{3}`.

## Practice Drill

Try typing these. Check the preview against the target before moving on.

1. $\dfrac{\sqrt{7}}{9}$
2. $-2\pm\sqrt{3}\,i$
3. $\dfrac{cd}{a+bc}<x\le\dfrac{bd}{b^2-a}$
4. $8^{\frac14}\operatorname{cis}\dfrac{5\pi}{12}$
5. $\{x : x<\tfrac{64}{3}\}$

> [!example] Answers
> 1. `\frac{\sqrt{7}}{9}`
> 2. `-2\pm\sqrt{3}i`
> 3. `\frac{cd}{a+bc}<x\le\frac{bd}{b^2-a}`
> 4. `8^{\frac14}\operatorname{cis}\frac{5\pi}{12}`
> 5. `\{x : x<\frac{64}{3}\}`
