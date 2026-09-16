---
title: "Unit 4: Linear Momentum"
unit: 4
---

# Unit 4 — Linear Momentum

> [!summary] Big Idea
> Momentum is the second great conservation law. Where energy handles "how fast at the end," momentum handles **collisions and explosions** — anything where objects interact briefly and violently. Momentum is a vector, so direction matters and it can be conserved even when kinetic energy isn't.

---

## 4.1 — Linear Momentum

Momentum is mass times velocity:

$$\vec{p} = m\vec{v}$$

- Unit: kg·m/s (no special name)
- **Vector** — same direction as velocity. In one dimension, sign carries direction.
- Depends on reference frame, since $v$ does.
- Total momentum of a system is the **vector sum** of each object's momentum: $\vec{p}_{\text{sys}} = \sum m_i\vec{v}_i$

### Momentum vs. Kinetic Energy

| | Momentum | Kinetic Energy |
|---|---|---|
| Formula | $p = mv$ | $K = \tfrac{1}{2}mv^2$ |
| Type | Vector | Scalar |
| Sign | Can be negative | Always $\geq 0$ |
| Relation | — | $K = \dfrac{p^2}{2m}$ |

The relation $K = \dfrac{p^2}{2m}$ is useful: two objects with the same momentum have kinetic energies inversely proportional to their masses.

> [!example] Example
> A 0.15 kg baseball at 40 m/s: $p = 6$ kg·m/s. A 1500 kg car at 0.004 m/s has the same momentum. Same $p$, but $K_{\text{ball}} = 120$ J while $K_{\text{car}} = 0.012$ J.

### Momentum of the Center of Mass

The total momentum of a system equals the total mass times the velocity of the center of mass:

$$\vec{p}_{\text{sys}} = M_{\text{total}}\,\vec{v}_{\text{cm}}$$

If total momentum is conserved, the center of mass moves at constant velocity — no matter what the pieces do.

---

## 4.2 — Change in Momentum and Impulse

### Impulse

Impulse is the effect of a force acting over a time interval:

$$\vec{J} = \vec{F}_{\text{avg}}\,\Delta t$$

Unit: N·s, which equals kg·m/s — the same as momentum.

### Impulse-Momentum Theorem

The net impulse on an object equals its change in momentum:

$$\vec{J}_{\text{net}} = \Delta\vec{p} = m\vec{v}_f - m\vec{v}_i$$

This is Newton's Second Law rewritten. In fact, Newton's original form was

$$\vec{F}_{\text{net}} = \frac{\Delta\vec{p}}{\Delta t}$$

which reduces to $F = ma$ when mass is constant.

> [!warning] $\Delta p$ Is a Vector Subtraction
> A ball hits a wall at $+10$ m/s and bounces back at $-10$ m/s. $\Delta v = -10 - (+10) = -20$ m/s — **not** zero. Sign conventions are everything in momentum problems. Set them before you write anything.

### Impulse From a Graph

On a graph of force vs. time, impulse is the **area** under the curve. For a realistic collision (a spike-shaped curve), the area still equals $\Delta p$ even though the force is never constant.

> [!tip] Same $\Delta p$, Different Force
> Airbags, crumple zones, bending your knees when landing, and catching a ball by pulling your hands back all do the same thing: **increase $\Delta t$** so that $F_{\text{avg}} = \dfrac{\Delta p}{\Delta t}$ is smaller. The momentum change is fixed by the situation; the time is what you control.

> [!example] Example: Ball Off a Bat
> A 0.15 kg ball arrives at 40 m/s and leaves at 50 m/s in the opposite direction. Contact time 0.002 s. Average force?
>
> Take the ball's final direction as positive: $v_i = -40$, $v_f = +50$.
>
> $$\Delta p = 0.15(50 - (-40)) = 0.15(90) = 13.5 \text{ kg·m/s}$$
> $$F_{\text{avg}} = \frac{13.5}{0.002} = 6750 \text{ N}$$

> [!example] Example: Force vs. Time Graph
> A force on a 2 kg cart rises linearly from 0 to 20 N over 4 s. Cart starts at rest. Final speed?
>
> Impulse $=$ triangle area $= \tfrac{1}{2}(4)(20) = 40$ N·s $= \Delta p$.
>
> $v_f = \dfrac{40}{2} = 20$ m/s.

---

## 4.3 — Conservation of Linear Momentum

### The Principle

If the **net external force** on a system is zero, the total momentum of the system is constant:

$$\sum \vec{p}_i = \sum \vec{p}_f$$

Internal forces (the objects pushing on each other) come in Third Law pairs and cancel — they cannot change the system's total momentum.

### When Is Momentum Conserved?

- Exactly conserved when $\vec{F}_{\text{net, ext}} = 0$.
- **Approximately** conserved during a brief collision even if external forces exist, because $\Delta t$ is so small that $F_{\text{ext}}\Delta t \approx 0$. This is why we ignore friction and gravity *during* the instant of a collision.
- Conserved **component by component**: $x$-momentum and $y$-momentum are each conserved separately.
- Kinetic energy is **not** necessarily conserved. Momentum is conserved in every collision; kinetic energy only in elastic ones.

> [!tip] Choose the System to Make External Forces Vanish
> Two carts colliding on a frictionless track: system = both carts; external forces (gravity, normal) are vertical and cancel; horizontal momentum conserved. A cart hitting a wall: if the system is just the cart, the wall exerts an external force and momentum is **not** conserved (the cart reverses). Include Earth and it is — but that's rarely useful.

### One-Dimensional Collisions

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

Set up a sign convention, write the equation, solve. If two unknowns remain, you need a second equation — either the objects stick together (perfectly inelastic), or the collision is elastic (kinetic energy conserved).

> [!example] Example: Perfectly Inelastic Collision
> A 2 kg cart at $+6$ m/s hits a 4 kg cart at rest. They stick together. Final velocity?
>
> $$(2)(6) + (4)(0) = (2 + 4)v_f \Rightarrow v_f = \frac{12}{6} = 2 \text{ m/s}$$
>
> Kinetic energy: before $= \tfrac{1}{2}(2)(36) = 36$ J; after $= \tfrac{1}{2}(6)(4) = 12$ J. 24 J became thermal energy and deformation. Momentum conserved; kinetic energy not.

> [!example] Example: Explosion / Recoil
> A 60 kg person on frictionless ice throws a 2 kg ball at 15 m/s. Their recoil speed?
>
> Initial momentum $= 0$. Final: $(2)(15) + (60)v = 0 \Rightarrow v = -0.5$ m/s (opposite the ball).
>
> Kinetic energy went from 0 to $225 + 7.5 = 232.5$ J — it came from chemical energy in the person's muscles. Momentum is conserved; kinetic energy increased.

### Two-Dimensional Collisions

Conserve $x$ and $y$ momentum separately:

$$\sum p_{x,i} = \sum p_{x,f}, \qquad \sum p_{y,i} = \sum p_{y,f}$$

Resolve every velocity into components first. Two equations, so you can solve for two unknowns (e.g., one final speed and one angle, or two final speeds).

> [!example] Example: Glancing Collision
> A 1 kg puck at $4$ m/s in the $+x$ direction hits a stationary 1 kg puck. Afterward the first puck moves at $2$ m/s at $60°$ above the $x$-axis. Find the second puck's velocity.
>
> $x$: $4 = 2\cos 60° + v_{2x} \Rightarrow v_{2x} = 4 - 1 = 3$ m/s
> $y$: $0 = 2\sin 60° + v_{2y} \Rightarrow v_{2y} = -\sqrt{3} \approx -1.73$ m/s
>
> $v_2 = \sqrt{9 + 3} = \sqrt{12} \approx 3.46$ m/s at $\tan^{-1}(1.73/3) \approx 30°$ below the $x$-axis.

---

## 4.4 — Elastic and Inelastic Collisions

| Type | Momentum | Kinetic Energy | Signature |
|---|---|---|---|
| **Elastic** | Conserved | Conserved | Objects bounce apart; no permanent deformation, no heat |
| **Inelastic** | Conserved | Not conserved (decreases) | Some $K$ → thermal, sound, deformation |
| **Perfectly inelastic** | Conserved | Maximum loss | Objects **stick together**; share one final velocity |
| **Explosion / superelastic** | Conserved | Increases | Stored energy (spring, chemical) released |

> [!warning] Momentum Is Always Conserved
> In every row of that table, momentum is conserved (given no external impulse). The *type* of collision only tells you what happens to kinetic energy. "Inelastic" does **not** mean momentum is lost.

### Elastic Collisions in One Dimension

Two equations — momentum and kinetic energy:

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$
$$\tfrac{1}{2}m_1 v_{1i}^2 + \tfrac{1}{2}m_2 v_{2i}^2 = \tfrac{1}{2}m_1 v_{1f}^2 + \tfrac{1}{2}m_2 v_{2f}^2$$

Solving both simultaneously is algebra-heavy. A shortcut that follows from them: in a 1D elastic collision, the **relative speed of approach equals the relative speed of separation**:

$$v_{1i} - v_{2i} = -(v_{1f} - v_{2f})$$

Use this linear equation together with momentum conservation instead of the quadratic energy equation.

### Special Cases (Target at Rest, Elastic)

| Situation | Result |
|---|---|
| Equal masses | Objects **exchange velocities**. Moving one stops; stationary one leaves at the original speed. |
| Light projectile hits heavy target | Projectile bounces back at nearly its original speed; target barely moves. |
| Heavy projectile hits light target | Projectile continues almost unchanged; target shoots off at nearly **twice** the projectile's speed. |

> [!example] Example: Equal Masses, Elastic
> Cart A (1 kg, 3 m/s) hits stationary cart B (1 kg) elastically. After: A stops, B moves at 3 m/s. Check with the shortcut: approach speed $3 - 0 = 3$; separation speed $3 - 0 = 3$. ✓

> [!example] Example: Unequal Masses, Elastic
> A 2 kg cart at 6 m/s hits a stationary 4 kg cart elastically.
>
> Momentum: $12 = 2v_{1f} + 4v_{2f}$
> Relative speed: $6 - 0 = v_{2f} - v_{1f}$
>
> From the second: $v_{2f} = 6 + v_{1f}$. Substitute: $12 = 2v_{1f} + 24 + 4v_{1f} \Rightarrow v_{1f} = -2$ m/s, $v_{2f} = 4$ m/s.
>
> The lighter cart bounces back. Check $K$: before $36$ J; after $\tfrac{1}{2}(2)(4) + \tfrac{1}{2}(4)(16) = 4 + 32 = 36$ J. ✓

### Ballistic Pendulum — Combining Momentum and Energy

A classic two-stage problem. A bullet embeds in a hanging block, which then swings up to height $h$.

**Stage 1 — collision (momentum conserved, $K$ not):**
$$m v_0 = (m + M)v_1$$

**Stage 2 — swing (energy conserved, momentum not — tension and gravity act):**
$$\tfrac{1}{2}(m + M)v_1^2 = (m + M)gh$$

Combine: $v_0 = \dfrac{m + M}{m}\sqrt{2gh}$.

> [!warning] Don't Conserve Energy Across the Collision
> Students lose points by writing $\tfrac{1}{2}mv_0^2 = (m + M)gh$. That skips the inelastic collision, where most of the kinetic energy is lost. **Momentum through the collision, energy through the swing.** Two separate steps.

### Identifying Collision Type From Data

Given initial and final velocities:
1. Check momentum: $\sum p_i \stackrel{?}{=} \sum p_f$. If not equal, there was an external impulse (or the data is bad).
2. Compute $K_i$ and $K_f$. Equal → elastic. $K_f < K_i$ → inelastic. Same final velocity for all objects → perfectly inelastic.

---

## Unit Summary

> [!summary] What to Have Cold
> - $\vec{p} = m\vec{v}$; vector; $K = \dfrac{p^2}{2m}$
> - $\vec{J} = \vec{F}_{\text{avg}}\Delta t = \Delta\vec{p}$; area under $F$–$t$ graph
> - Longer $\Delta t$ → smaller force for the same $\Delta p$ (airbags, bending knees)
> - $\Delta p$ for a bounce: subtract vectors — reversing direction means $\Delta v = 2v$, not 0
> - Momentum conserved when $F_{\text{net, ext}} = 0$, or approximately during any brief collision
> - Conserve $x$ and $y$ separately in 2D
> - **Every** collision conserves momentum; only **elastic** collisions conserve $K$
> - Perfectly inelastic: stick together, one $v_f$, max $K$ loss
> - Elastic 1D shortcut: approach speed $=$ separation speed
> - Equal masses elastic: swap velocities
> - Ballistic pendulum: momentum for the hit, energy for the swing — never energy across the collision
