---
title: "Unit 1: Kinematics"
unit: 1
---

# Unit 1 — Kinematics

> [!summary] Big Idea
> Kinematics describes *how* things move — position, velocity, acceleration — without asking *why*. Every later unit (forces, energy, momentum) builds on the vocabulary and graph skills here. AP Physics 1 is **algebra-based**: no calculus. Slopes and areas on graphs do the work derivatives and integrals do in Physics C.

---

## 1.1 — Scalars and Vectors in One Dimension

| Quantity | Symbol | SI Unit | Type |
|---|---|---|---|
| Distance | $d$ | m | Scalar |
| Displacement | $\Delta x$ | m | Vector |
| Speed | $v$ | m/s | Scalar |
| Velocity | $\vec{v}$ | m/s | Vector |
| Acceleration | $\vec{a}$ | m/s² | Vector |
| Time | $t$ | s | Scalar |
| Mass | $m$ | kg | Scalar |

A **scalar** has magnitude only (how much). A **vector** has magnitude *and* direction (how much, which way).

In one dimension, direction is carried by **sign**: pick a positive direction (usually right or up), and anything the other way is negative.

> [!tip] Define Positive First
> Before writing any equation, draw the axis and mark which way is $+$. Half of all sign errors come from skipping this step. Once chosen, every $x$, $v$, and $a$ in the problem uses that convention.

### Distance vs. Displacement

- **Distance** — total path length traveled. Always $\geq 0$.
- **Displacement** — straight-line change in position: $\Delta x = x_f - x_i$. Can be negative or zero.

> [!example] Example: Round Trip
> You walk 4 m east, then 4 m west, back to your start.
>
> - Distance $= 4 + 4 = 8$ m
> - Displacement $= 0$ m (you ended where you started)

### Speed vs. Velocity

- **Average speed** $= \dfrac{\text{total distance}}{\text{total time}}$ — scalar, never negative
- **Average velocity** $= \dfrac{\Delta x}{\Delta t}$ — vector, sign shows direction

For the round trip above taking 8 s: average speed $= 1$ m/s, average velocity $= 0$ m/s.

---

## 1.2 — Displacement, Velocity, and Acceleration

### Position and Displacement

$$\Delta x = x_f - x_i$$

Position $x$ is *where* the object is relative to the origin. Displacement is the *change* in position.

### Velocity

$$v_{\text{avg}} = \frac{\Delta x}{\Delta t}$$

**Instantaneous velocity** is the velocity at a single moment — what a speedometer reads, plus a direction. On a position-vs-time graph it is the slope of the tangent line at that point.

### Acceleration

$$a_{\text{avg}} = \frac{\Delta v}{\Delta t} = \frac{v_f - v_i}{\Delta t}$$

Acceleration is the rate at which velocity changes. An object accelerates if its **speed** changes, its **direction** changes, or both.

> [!warning] Acceleration ≠ "Speeding Up"
> The sign of $a$ alone does not tell you whether an object is speeding up or slowing down. Compare the signs of $v$ and $a$:
>
> | $v$ and $a$ | Result |
> |---|---|
> | Same sign | Speeding up |
> | Opposite signs | Slowing down |
> | $a = 0$ | Constant velocity |
>
> A car moving left ($v < 0$) with $a < 0$ is *speeding up* leftward.

> [!example] Example: Sign of Acceleration
> A ball thrown upward (up is $+$) rises at $+8$ m/s and one second later is moving at $-2$ m/s (falling).
>
> $$a = \frac{v_f - v_i}{\Delta t} = \frac{(-2) - (+8)}{1} = -10 \text{ m/s}^2$$
>
> Acceleration was $-10$ m/s² the entire time — including at the very top, where $v = 0$ for an instant.

---

## 1.3 — Representing Motion: Graphs

Graphs are the heart of AP Physics 1 kinematics. You must be able to read one graph and sketch the other two.

### The Three Graphs

| Graph | Slope means | Area under curve means |
|---|---|---|
| $x$ vs. $t$ | velocity | — |
| $v$ vs. $t$ | acceleration | displacement |
| $a$ vs. $t$ | (not tested) | change in velocity |

### Reading a Position-vs-Time Graph

- **Straight line** → constant velocity. Steeper = faster.
- **Horizontal line** → at rest.
- **Curved line** → accelerating. Concave up (∪) means $a > 0$; concave down (∩) means $a < 0$.
- **Slope sign** → direction of motion. Positive slope = moving in $+$ direction.
- Where the graph **crosses the $t$-axis** the object is at the origin — *not* at rest.

### Reading a Velocity-vs-Time Graph

- **Horizontal line** → constant velocity, $a = 0$.
- **Sloped line** → constant acceleration equal to the slope.
- **Crossing the $t$-axis** → the object momentarily stops and *reverses direction*.
- **Area between curve and $t$-axis** → displacement. Area above the axis is positive displacement; below is negative.
- Total **distance** = sum of the absolute values of all the areas.

> [!tip] Area Trick
> Break the area under a $v$–$t$ graph into rectangles and triangles. Rectangle: $v \cdot t$. Triangle: $\tfrac{1}{2} \cdot \text{base} \cdot \text{height}$. Count signs carefully.

> [!example] Example: Area Under v–t
> An object's velocity goes from $0$ to $6$ m/s in $3$ s (straight line), then stays at $6$ m/s for $2$ s.
>
> - Triangle: $\tfrac{1}{2}(3)(6) = 9$ m
> - Rectangle: $(2)(6) = 12$ m
> - Displacement $= 21$ m; acceleration during the first 3 s $= \dfrac{6}{3} = 2$ m/s²

### Translating Between Graphs

| If $x$–$t$ is… | then $v$–$t$ is… | then $a$–$t$ is… |
|---|---|---|
| horizontal line | zero (on the axis) | zero |
| straight sloped line | horizontal line | zero |
| parabola (∪) | rising straight line | positive horizontal line |
| parabola (∩) | falling straight line | negative horizontal line |

### Motion Diagrams

A motion diagram shows an object's position at equal time intervals as dots. Equal spacing → constant velocity. Increasing spacing → speeding up. Decreasing spacing → slowing down.

---

## 1.4 — Representing Motion: Constant-Acceleration Equations

When acceleration is **constant**, four algebraic equations connect $x$, $v$, $a$, and $t$. These are on the AP equation sheet.

| Equation | Missing quantity |
|---|---|
| $v_x = v_{x0} + a_x t$ | $\Delta x$ |
| $x = x_0 + v_{x0}t + \tfrac{1}{2}a_x t^2$ | $v_x$ |
| $v_x^2 = v_{x0}^2 + 2a_x(x - x_0)$ | $t$ |
| $\Delta x = \dfrac{v_{x0} + v_x}{2}\,t$ | $a_x$ |

The fourth is not on the sheet but is often the fastest route: it says displacement equals *average velocity* × time, which is only true for constant acceleration.

> [!warning] Constant Acceleration Only
> These equations fail if $a$ changes during the interval. If a problem has two phases (e.g., speeding up, then coasting), split it into two intervals and solve each separately. The final velocity of phase 1 becomes the initial velocity of phase 2.

### Problem-Solving Recipe

1. Draw a sketch. Mark the positive direction.
2. List the five variables: $x_0$, $x$, $v_0$, $v$, $a$, $t$ — write down what you know and what you want.
3. Pick the equation that contains your three knowns and one unknown (and *excludes* the quantity you don't know and don't need).
4. Solve symbolically first, then plug in numbers with units.
5. Sanity-check sign and magnitude.

> [!example] Example: Braking Car
> A car moving at $20$ m/s brakes uniformly to a stop in $50$ m. Find the acceleration and the stopping time.
>
> Known: $v_0 = 20$, $v = 0$, $\Delta x = 50$. Want $a$ (no $t$) → use $v^2 = v_0^2 + 2a\Delta x$.
>
> $$0 = 20^2 + 2a(50) \quad\Rightarrow\quad a = -\frac{400}{100} = -4 \text{ m/s}^2$$
>
> Now $t$: $v = v_0 + at \Rightarrow 0 = 20 - 4t \Rightarrow t = 5$ s.
>
> Check: $\Delta x = \frac{20 + 0}{2}(5) = 50$ m. ✓

### Free Fall

Near Earth's surface, ignoring air resistance, every object accelerates downward at

$$g \approx 10 \text{ m/s}^2 \quad (9.8 \text{ m/s}^2 \text{ if the problem says so})$$

regardless of mass. With **up as positive**, $a = -g$ throughout the flight — going up, at the peak, and coming down.

Facts for an object launched straight up and landing at the same height:

- At the peak, $v = 0$ but $a = -g$ (still accelerating).
- Time up $=$ time down.
- Speed at any height on the way down equals speed at that height on the way up.
- Peak height: $h = \dfrac{v_0^2}{2g}$. Total flight time: $t = \dfrac{2v_0}{g}$.

> [!warning] "Dropped" vs. "Thrown"
> *Dropped* or *released* means $v_0 = 0$. *Thrown downward* means $v_0$ is negative (with up positive). Read the problem's verb.

> [!example] Example: Drop from a Cliff
> A rock is dropped from a 45 m cliff. How long does it fall and how fast does it land? Use $g = 10$ m/s².
>
> Up positive: $\Delta y = -45$, $v_0 = 0$, $a = -10$.
>
> $$\Delta y = v_0 t + \tfrac{1}{2}at^2 \Rightarrow -45 = -5t^2 \Rightarrow t = 3 \text{ s}$$
> $$v = v_0 + at = -30 \text{ m/s}$$
>
> Landing speed $30$ m/s, moving downward.

---

## 1.5 — Reference Frames and Relative Motion

Every measurement of position or velocity is made **relative to something**. A passenger walking forward on a train at 2 m/s is moving at 2 m/s relative to the train — but at 32 m/s relative to the ground if the train moves at 30 m/s.

### Relative Velocity in One Dimension

If A moves relative to B, and B moves relative to C:

$$v_{A/C} = v_{A/B} + v_{B/C}$$

Read the subscripts like fractions: the middle letters "cancel." Signs carry direction.

> [!example] Example: Walking on a Train
> Train moves east (positive) at $+30$ m/s. A passenger walks toward the back at $2$ m/s relative to the train.
>
> $$v_{P/G} = v_{P/T} + v_{T/G} = (-2) + (+30) = +28 \text{ m/s}$$
>
> Ground observer sees the passenger moving east at 28 m/s.

### What Changes and What Doesn't

| Quantity | Depends on reference frame? |
|---|---|
| Position | Yes |
| Velocity | Yes |
| Acceleration | **No** (between frames moving at constant velocity) |

> [!note] Inertial Frames
> A reference frame moving at constant velocity is **inertial** — Newton's laws hold in it. Unless told otherwise, assume the ground is inertial. Accelerating frames (a car speeding up, a spinning ride) are non-inertial; you will not be asked to work inside one in Physics 1.

---

## 1.6 — Vectors and Motion in Two Dimensions

### Vector Components

Any vector $\vec{A}$ at angle $\theta$ from the $+x$-axis splits into perpendicular pieces:

$$A_x = A\cos\theta, \qquad A_y = A\sin\theta$$

Recombine with

$$A = \sqrt{A_x^2 + A_y^2}, \qquad \theta = \tan^{-1}\!\left(\frac{A_y}{A_x}\right)$$

> [!tip] Cos or Sin?
> $\cos$ goes with the side **adjacent** to the angle you're given. If the angle is measured from the horizontal, $x$ uses $\cos$. If it's measured from the vertical, swap them. Don't memorize "x is always cos."

### Adding Vectors

Add vectors **component by component**:

$$R_x = A_x + B_x, \qquad R_y = A_y + B_y$$

then rebuild $R$ and $\theta$ from the components. Graphically: place vectors **tip-to-tail**; the resultant runs from the first tail to the last tip.

### The Key Idea: Independence of Perpendicular Motions

Motion in the $x$-direction and motion in the $y$-direction are **completely independent**. Each dimension gets its own set of kinematic equations. The only quantity shared between them is **time** $t$.

---

## 1.7 — Projectile Motion

A projectile is anything moving under gravity alone after launch. Ignoring air resistance:

| | Horizontal ($x$) | Vertical ($y$, up positive) |
|---|---|---|
| Acceleration | $a_x = 0$ | $a_y = -g$ |
| Velocity | $v_x = v_0\cos\theta$ (constant) | $v_y = v_0\sin\theta - gt$ |
| Position | $x = v_0\cos\theta \cdot t$ | $y = y_0 + v_0\sin\theta\cdot t - \tfrac{1}{2}gt^2$ |

Horizontal motion is **constant velocity**. Vertical motion is **free fall**. Time links them.

> [!tip] Solve for Time First
> Almost every projectile problem is: (1) use the $y$-equations to find $t$, (2) plug $t$ into $x = v_x t$ to find range. Or the reverse if you're given range. $t$ is the bridge.

### Horizontal Launch ($\theta = 0$)

$v_{y0} = 0$, so the vertical motion is identical to dropping the object from rest. Fall time depends *only* on height:

$$t = \sqrt{\frac{2h}{g}}, \qquad \text{Range} = v_0 t$$

> [!example] Example: Ball Off a Table
> A ball rolls off a 1.25 m high table at $3$ m/s. Where does it land? ($g = 10$)
>
> $$t = \sqrt{\frac{2(1.25)}{10}} = 0.5 \text{ s}, \qquad x = (3)(0.5) = 1.5 \text{ m}$$
>
> A ball rolling off at $6$ m/s hits the floor at the *same time* — just twice as far away.

### Angled Launch, Level Ground

Launched at speed $v_0$, angle $\theta$, landing at the same height:

- $v_{x0} = v_0\cos\theta$, $\quad v_{y0} = v_0\sin\theta$
- At the peak: $v_y = 0$, $v_x$ unchanged, speed is at its **minimum** (but not zero)
- Time to peak: $t_{\text{up}} = \dfrac{v_0\sin\theta}{g}$; total time $= 2t_{\text{up}}$
- Max height: $H = \dfrac{(v_0\sin\theta)^2}{2g}$
- Range: $R = v_0\cos\theta \cdot t_{\text{total}} = \dfrac{v_0^2\sin(2\theta)}{g}$
- Range is maximum at $\theta = 45°$; complementary angles ($30°$ and $60°$) give equal range
- The path is symmetric: launch speed = landing speed, launch angle = landing angle (below horizontal)

> [!example] Example: Kicked Ball
> A ball is kicked at $20$ m/s at $30°$ above horizontal on level ground. ($g = 10$)
>
> $v_{x0} = 20\cos 30° \approx 17.3$ m/s; $v_{y0} = 20\sin 30° = 10$ m/s
>
> Time in air: $0 = 10t - 5t^2 \Rightarrow t = 2$ s
>
> Range: $x = 17.3 \times 2 \approx 34.6$ m
>
> Max height: $H = \dfrac{10^2}{2(10)} = 5$ m

> [!warning] Common Mistakes
> - Putting $g$ in the horizontal equations. $a_x = 0$. Always.
> - Saying velocity is zero at the peak. Only $v_y = 0$; $v_x$ is still $v_0\cos\theta$.
> - Saying acceleration is zero at the peak. It is $-g$ the whole flight.
> - Using the full $v_0$ in a vertical equation. Use the component $v_0\sin\theta$.

### Projectile Graphs

| Graph | Shape |
|---|---|
| $x$ vs. $t$ | straight line (constant $v_x$) |
| $v_x$ vs. $t$ | horizontal line |
| $y$ vs. $t$ | parabola opening down |
| $v_y$ vs. $t$ | straight line with slope $-g$, crossing zero at the peak |
| $a_y$ vs. $t$ | horizontal line at $-g$ |

---

## Unit Summary

> [!summary] What to Have Cold
> - Scalars vs. vectors; distance vs. displacement; speed vs. velocity
> - $v_{\text{avg}} = \Delta x / \Delta t$, $\quad a_{\text{avg}} = \Delta v / \Delta t$
> - Speeding up when $v$ and $a$ share a sign; slowing when opposite
> - $x$–$t$ slope = velocity; $v$–$t$ slope = acceleration; $v$–$t$ area = displacement
> - Four constant-acceleration equations and which variable each one omits
> - Free fall: $a = -g$ always, including at the peak where $v = 0$
> - Relative velocity: $v_{A/C} = v_{A/B} + v_{B/C}$; acceleration is frame-independent
> - Components: $A_x = A\cos\theta$, $A_y = A\sin\theta$ (angle from horizontal)
> - Projectiles: $x$ is constant velocity, $y$ is free fall, $t$ connects them; $45°$ gives max range
