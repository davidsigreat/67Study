---
title: "Unit 5: Torque and Rotational Dynamics"
unit: 5
---

# Unit 5 — Torque and Rotational Dynamics

> [!summary] Big Idea
> Everything from Units 1–2 has a rotational twin. Angle replaces position, angular velocity replaces velocity, **torque** replaces force, and **rotational inertia** replaces mass. The equations look identical — learn the translation table and you already know this unit.

| Translational | Rotational | Link |
|---|---|---|
| $x$ (m) | $\theta$ (rad) | $s = r\theta$ |
| $v$ (m/s) | $\omega$ (rad/s) | $v = r\omega$ |
| $a$ (m/s²) | $\alpha$ (rad/s²) | $a_t = r\alpha$ |
| $m$ (kg) | $I$ (kg·m²) | $I = \sum mr^2$ |
| $F$ (N) | $\tau$ (N·m) | $\tau = rF\sin\theta$ |
| $\sum F = ma$ | $\sum \tau = I\alpha$ | — |

---

## 5.1 — Rotational Kinematics

### Angular Quantities

- **Angular position** $\theta$ — measured in **radians**. One full revolution $= 2\pi$ rad $= 360°$.
- **Angular displacement** $\Delta\theta = \theta_f - \theta_i$
- **Angular velocity** $\omega = \dfrac{\Delta\theta}{\Delta t}$ (rad/s). Sign: counterclockwise is conventionally positive.
- **Angular acceleration** $\alpha = \dfrac{\Delta\omega}{\Delta t}$ (rad/s²)

Every point on a rigid rotating object has the **same** $\omega$ and $\alpha$, regardless of its distance from the axis.

### Constant Angular Acceleration Equations

Same form as linear kinematics, with $x \to \theta$, $v \to \omega$, $a \to \alpha$:

| Rotational | Linear twin |
|---|---|
| $\omega = \omega_0 + \alpha t$ | $v = v_0 + at$ |
| $\theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2$ | $x = x_0 + v_0 t + \tfrac{1}{2}at^2$ |
| $\omega^2 = \omega_0^2 + 2\alpha\,\Delta\theta$ | $v^2 = v_0^2 + 2a\,\Delta x$ |

Graphs behave the same way: slope of $\theta$–$t$ is $\omega$; slope of $\omega$–$t$ is $\alpha$; area under $\omega$–$t$ is $\Delta\theta$.

> [!example] Example: Spinning Up
> A wheel starts from rest and reaches $20$ rad/s in $4$ s with constant $\alpha$. How many revolutions?
>
> $\alpha = 5$ rad/s². $\Delta\theta = \tfrac{1}{2}(5)(16) = 40$ rad $= \dfrac{40}{2\pi} \approx 6.4$ revolutions.

> [!warning] Radians, Not Degrees or Revolutions
> Every rotational formula assumes radians. Convert revolutions (× $2\pi$) and rpm (÷ 60, × $2\pi$) before plugging in. $\omega = 2\pi f = \dfrac{2\pi}{T}$.

---

## 5.2 — Connecting Linear and Rotational Motion

A point at distance $r$ from the rotation axis moves along a circular arc. Its linear quantities relate to the angular ones by:

$$s = r\theta, \qquad v = r\omega, \qquad a_t = r\alpha$$

- $s$ is arc length traveled; $v$ is tangential (linear) speed; $a_t$ is tangential acceleration.
- Points farther from the axis move **faster** (larger $v$) even though $\omega$ is the same.
- The point also has centripetal acceleration $a_c = \dfrac{v^2}{r} = r\omega^2$ toward the axis, even at constant $\omega$.

> [!example] Example: Merry-Go-Round
> A platform rotates at $\omega = 2$ rad/s. A child at $r = 1$ m moves at $2$ m/s; a child at $r = 3$ m moves at $6$ m/s. Both complete a revolution in the same $T = \dfrac{2\pi}{\omega} = \pi$ s.

### Rolling Without Slipping (preview)

For a wheel of radius $R$ rolling without slipping, the center moves at $v_{\text{cm}} = R\omega$ and accelerates at $a_{\text{cm}} = R\alpha$. The contact point is momentarily at rest relative to the ground. Full treatment in Unit 6.

### Belts, Gears, Chains

Two wheels connected by a belt or in contact at their rims share the same **tangential speed** at the point of contact:

$$r_1\omega_1 = r_2\omega_2$$

The smaller wheel spins faster.

---

## 5.3 — Torque

Torque is the rotational effect of a force — how effectively a force causes rotation about a chosen axis:

$$\tau = rF\sin\theta = r_{\perp}F = rF_{\perp}$$

- $r$ is the distance from the **axis** (pivot) to the point where the force is applied.
- $\theta$ is the angle between $\vec{r}$ and $\vec{F}$.
- $r_\perp = r\sin\theta$ is the **lever arm** (moment arm): the perpendicular distance from the axis to the force's line of action.
- $F_\perp = F\sin\theta$ is the component of the force perpendicular to $\vec{r}$.
- Unit: N·m (not joules — torque is not energy, even though the units match).

| Situation | Torque |
|---|---|
| Force perpendicular to $r$ ($\theta = 90°$) | Maximum: $\tau = rF$ |
| Force parallel to $r$ ($\theta = 0°$ or $180°$) — pushing straight toward/away from the pivot | Zero |
| Force applied **at** the pivot ($r = 0$) | Zero |

### Sign Convention

Counterclockwise torque is **positive**; clockwise is **negative**. (Or pick your own and be consistent within a problem — but state it.)

> [!tip] Think Like a Door
> Pushing a door at the handle (large $r$) is easy. Pushing near the hinge (small $r$) is hard. Pushing parallel to the door (toward the hinge) does nothing. That's $\tau = rF\sin\theta$.

### Net Torque

Torques from multiple forces add (with signs). The net torque about a chosen axis determines the angular acceleration about that axis.

> [!example] Example: Wrench
> A 20 N force applied 0.3 m from a bolt at $60°$ to the wrench handle.
>
> $\tau = (0.3)(20)\sin 60° \approx 5.2$ N·m. Applying the same force perpendicular would give $6$ N·m.

### Where Does Gravity Act?

For torque purposes, the entire weight of an object acts at its **center of mass**. For a uniform rod of length $L$ pivoted at one end, gravity's torque is $mg \cdot \dfrac{L}{2}$.

---

## 5.4 — Rotational Inertia

Rotational inertia (moment of inertia) is an object's resistance to changes in its rotational motion — the rotational analog of mass:

$$I = \sum m_i r_i^2$$

for a collection of point masses, each at distance $r_i$ from the axis.

Key facts:
- Unit: kg·m²
- Depends on **mass** and on **how far the mass is from the axis**. Mass far from the axis contributes much more (it's $r^2$).
- Depends on the **choice of axis**. The same object has different $I$ about different axes.
- Is a scalar; always positive.

### Common Shapes (given on the exam when needed)

| Object | Axis | $I$ |
|---|---|---|
| Point mass / thin hoop | Center | $MR^2$ |
| Solid disk / cylinder | Center | $\tfrac{1}{2}MR^2$ |
| Solid sphere | Center | $\tfrac{2}{5}MR^2$ |
| Hollow sphere | Center | $\tfrac{2}{3}MR^2$ |
| Thin rod | Center, perpendicular | $\tfrac{1}{12}ML^2$ |
| Thin rod | End, perpendicular | $\tfrac{1}{3}ML^2$ |

> [!tip] Ranking Without Numbers
> For the same mass and radius: hoop $>$ hollow sphere $>$ disk $>$ solid sphere. The more mass concentrated at the rim, the larger $I$. You will be asked to rank objects this way.

### Combining Objects

Rotational inertias about the **same axis** simply add: $I_{\text{total}} = I_1 + I_2 + \cdots$. A disk with a point mass glued to its rim has $I = \tfrac{1}{2}MR^2 + mR^2$.

### Parallel Axis Theorem

To find $I$ about an axis parallel to one through the center of mass, a distance $d$ away:

$$I = I_{\text{cm}} + Md^2$$

This is how the rod-about-end result comes from the rod-about-center one: $\tfrac{1}{12}ML^2 + M\left(\tfrac{L}{2}\right)^2 = \tfrac{1}{3}ML^2$.

> [!example] Example: Two Masses on a Massless Rod
> Two 2 kg masses at the ends of a 1 m massless rod. $I$ about the center? About one end?
>
> Center: $I = 2(0.5)^2 + 2(0.5)^2 = 1$ kg·m²
> End: $I = 2(0)^2 + 2(1)^2 = 2$ kg·m²
>
> Same object, double the rotational inertia about the end.

---

## 5.5 — Rotational Equilibrium and Newton's First Law in Rotational Form

An object is in **rotational equilibrium** when the net torque on it is zero:

$$\sum \tau = 0 \quad\Longleftrightarrow\quad \alpha = 0 \quad\Longleftrightarrow\quad \omega = \text{constant}$$

Just as with Newton's First Law, "equilibrium" includes both not rotating and rotating at constant $\omega$.

### Static Equilibrium — Both Conditions

An object completely at rest satisfies **both**:

$$\sum \vec{F} = 0 \qquad \text{and} \qquad \sum \tau = 0 \ \text{(about any axis)}$$

> [!tip] Choose the Axis Wisely
> When $\sum \tau = 0$, you may compute torques about **any** point — the result is zero about all of them. Put the axis at the location of an **unknown force** so that force contributes zero torque and drops out of the equation. This is the single most useful trick in statics.

### Procedure for Static Equilibrium Problems

1. FBD with each force at its actual point of application. Weight acts at the center of mass.
2. Choose a pivot (usually at an unknown force).
3. Write $\sum \tau = 0$ about that pivot. Solve for one unknown.
4. Write $\sum F_x = 0$, $\sum F_y = 0$ for the remaining unknowns.

> [!example] Example: Plank on Two Supports
> A uniform 4 m, 20 kg plank rests on supports at its ends. A 60 kg person stands 1 m from the left end. Find the force from each support. ($g = 10$)
>
> Pivot at the left support (eliminates $F_L$). Take counterclockwise positive.
>
> $\sum \tau = 0$: $F_R(4) - (600)(1) - (200)(2) = 0 \Rightarrow F_R = \dfrac{600 + 400}{4} = 250$ N
>
> $\sum F_y = 0$: $F_L + F_R = 800 \Rightarrow F_L = 550$ N
>
> Check: pivot at the right end gives $F_L(4) = 600(3) + 200(2) = 2200 \Rightarrow F_L = 550$ N. ✓

> [!example] Example: Ladder Against a Wall
> A uniform ladder of weight $W$ and length $L$ leans against a frictionless wall at angle $\theta$ from the floor. Friction from the floor keeps it in place. Find the wall's normal force.
>
> Pivot at the floor contact (eliminates floor normal and friction).
>
> Torque from weight: $W \cdot \dfrac{L}{2}\cos\theta$ (clockwise). Torque from wall: $N_{\text{wall}} \cdot L\sin\theta$ (counterclockwise).
>
> $N_{\text{wall}} L\sin\theta = W\dfrac{L}{2}\cos\theta \Rightarrow N_{\text{wall}} = \dfrac{W}{2\tan\theta}$
>
> Floor friction must equal $N_{\text{wall}}$ (horizontal balance); floor normal equals $W$.

### Balance and Tipping

An object on a surface stays balanced as long as its center of mass is **above its base of support**. If the center of mass moves past the edge of the base, gravity's torque about that edge tips it over. Lower center of mass and wider base → more stable.

---

## 5.6 — Newton's Second Law in Rotational Form

Net torque causes angular acceleration, resisted by rotational inertia:

$$\sum \tau = I\alpha \qquad \text{or} \qquad \alpha = \frac{\sum\tau}{I}$$

- $\alpha$ is in the same rotational direction as the net torque.
- Torques and $I$ must be about the **same axis** — usually the actual rotation axis (the pivot or the center of mass).
- Same procedure as linear: extended FBD, choose positive rotation direction, sum torques, solve.

> [!example] Example: Pulley With Mass
> A block of mass $m$ hangs from a rope wrapped around a solid disk pulley (mass $M$, radius $R$) that is free to rotate. Find the block's acceleration.
>
> **Block** (down positive): $mg - T = ma$
> **Pulley** ($\tau = TR$, $I = \tfrac{1}{2}MR^2$): $TR = \tfrac{1}{2}MR^2\alpha$
> **Constraint** (rope doesn't slip): $a = R\alpha$
>
> From the pulley: $T = \tfrac{1}{2}MR\alpha = \tfrac{1}{2}Ma$. Substitute: $mg - \tfrac{1}{2}Ma = ma$
>
> $$a = \frac{mg}{m + \tfrac{1}{2}M} = \frac{g}{1 + \dfrac{M}{2m}}$$
>
> Less than $g$: some of the gravitational pull goes into spinning up the pulley. If $M \to 0$, $a \to g$ and $T \to 0$ as expected.

> [!warning] Tension Is Not the Same on Both Sides of a Massive Pulley
> With a massless pulley, tension is uniform through the rope. With a pulley that has rotational inertia, the two sides of the rope must have **different** tensions — otherwise net torque on the pulley is zero and it couldn't accelerate. Label them $T_1$ and $T_2$.

> [!example] Example: Rod Released From Horizontal
> A uniform rod (mass $M$, length $L$) is pivoted at one end and released from rest horizontally. Initial angular acceleration?
>
> Torque from gravity about the pivot: $\tau = Mg\dfrac{L}{2}$. $I_{\text{end}} = \tfrac{1}{3}ML^2$.
>
> $$\alpha = \frac{Mg L/2}{\tfrac{1}{3}ML^2} = \frac{3g}{2L}$$
>
> The tip's tangential acceleration is $a_t = L\alpha = \tfrac{3}{2}g > g$. The tip of a falling rod accelerates **faster** than free fall — a coin on the tip would be left behind.

### Angular Acceleration Is Not Constant When Torque Changes

As the rod above swings down, the lever arm of gravity shrinks ($\tfrac{L}{2}\cos\theta$), so torque and $\alpha$ decrease. Kinematic equations for constant $\alpha$ **don't** apply across the swing — use energy (Unit 6) for the final speed.

> [!tip] Which Approach?
> - Given torques and want $\alpha$ at an instant → $\sum\tau = I\alpha$
> - Constant $\alpha$ and want $\theta$, $\omega$, or $t$ → rotational kinematics
> - Varying torque and want $\omega$ at a later position → energy conservation (Unit 6)

---

## Unit Summary

> [!summary] What to Have Cold
> - Radians. $\omega = \dfrac{2\pi}{T} = 2\pi f$. Rotational kinematics = linear kinematics with swapped letters
> - $v = r\omega$, $a_t = r\alpha$, $a_c = r\omega^2$; outer points move faster at the same $\omega$
> - $\tau = rF\sin\theta = r_\perp F$; zero if the force points at the pivot or acts at the pivot; CCW positive
> - Weight acts at the center of mass
> - $I = \sum mr^2$; mass far from the axis dominates; depends on axis. Hoop $>$ hollow sphere $>$ disk $>$ solid sphere
> - Parallel axis: $I = I_{\text{cm}} + Md^2$
> - Static equilibrium: $\sum F = 0$ **and** $\sum\tau = 0$; put the pivot at an unknown force
> - $\sum\tau = I\alpha$; massive pulley → unequal tensions; constraint $a = R\alpha$
> - Varying torque → $\alpha$ not constant → use energy, not kinematics
