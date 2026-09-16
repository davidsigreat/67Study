---
title: "Unit 3: Work, Energy, and Power"
unit: 3
---

# Unit 3 — Work, Energy, and Power

> [!summary] Big Idea
> Energy is a scalar bookkeeping tool. It lets you skip the forces-and-acceleration path entirely when you only care about start and end states. **Work** is how force transfers energy in or out of a system. When no work crosses the boundary, total energy is conserved — that single idea solves most problems in this unit.

---

## 3.1 — Translational Kinetic Energy

Kinetic energy is the energy an object has because it is moving:

$$K = \frac{1}{2}mv^2$$

- Unit: joule (J). $1 \text{ J} = 1 \text{ N·m} = 1 \text{ kg·m}^2\text{/s}^2$
- Always $\geq 0$. Scalar — direction of motion doesn't matter.
- Depends on $v^2$: doubling speed **quadruples** kinetic energy.
- Depends on the reference frame, since $v$ does.

For a system of objects, total kinetic energy is the sum of each object's kinetic energy.

> [!example] Example
> A 1000 kg car at 20 m/s: $K = \tfrac{1}{2}(1000)(400) = 200{,}000$ J $= 200$ kJ.
> At 40 m/s: $K = 800$ kJ — four times as much. This is why stopping distance scales with $v^2$.

---

## 3.2 — Work

Work is the energy transferred to or from an object by a force acting over a displacement:

$$W = F_{\parallel}\,d = Fd\cos\theta$$

where $\theta$ is the angle between the force vector and the displacement vector.

| $\theta$ | $\cos\theta$ | Work | Meaning |
|---|---|---|---|
| $0°$ | $1$ | $+Fd$ | Force along motion — adds energy |
| $90°$ | $0$ | $0$ | Force perpendicular — no energy transfer |
| $180°$ | $-1$ | $-Fd$ | Force opposes motion — removes energy |

Work is a **scalar** and can be positive, negative, or zero.

### Forces That Do No Work

- **Normal force** on an object sliding along a surface (perpendicular to motion)
- **Tension** in a string swinging a pendulum or ball in a circle (always perpendicular to velocity)
- **Gravity** on an object moving horizontally
- Any force on an object that **doesn't move** ($d = 0$) — holding a heavy box still does zero work, however tired you get

> [!warning] Common Mistake
> "Work = force × distance" is only true when force and displacement are parallel. Carrying a suitcase across a room at constant height does zero work on it — the upward force is perpendicular to the horizontal displacement.

### Work From a Graph

On a graph of force vs. position, **work is the area** between the curve and the position axis. This is how you handle varying forces without calculus.

- Constant force: rectangle, $W = Fd$
- Spring ($F = kx$): triangle, $W = \tfrac{1}{2}kx^2$
- Area below the axis counts as negative work

### Work-Energy Theorem

The **net** work done on an object equals its change in kinetic energy:

$$W_{\text{net}} = \Delta K = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

- Positive net work → object speeds up
- Negative net work → object slows down
- Zero net work → speed unchanged (direction may still change, as in circular motion)

> [!example] Example: Stopping Distance
> A 1000 kg car at 20 m/s brakes with a friction force of 8000 N. Stopping distance?
>
> Friction does negative work: $W = -f d = \Delta K = 0 - \tfrac{1}{2}(1000)(20)^2 = -200{,}000$ J
>
> $$d = \frac{200{,}000}{8000} = 25 \text{ m}$$
>
> No kinematics, no acceleration, no time. Just energy.

> [!example] Example: Work by Gravity on an Incline
> A 5 kg box slides 4 m down a $30°$ incline. Work by gravity? ($g = 10$)
>
> Method 1: component along motion. $W = (mg\sin 30°)(4) = (25)(4) = 100$ J
>
> Method 2: height dropped. $h = 4\sin 30° = 2$ m. $W = mgh = 100$ J
>
> Gravity's work depends only on the **vertical** displacement.

---

## 3.3 — Potential Energy

Potential energy is energy stored in a **system** due to the relative positions of its interacting parts. It belongs to the system (e.g., ball + Earth), not to a single object.

### Gravitational Potential Energy (near Earth's surface)

$$\Delta U_g = mg\,\Delta y$$

- Only **changes** in $U_g$ are physical. You choose where $U_g = 0$ (the reference height). Pick whatever makes the problem simplest — usually the lowest point.
- Raising an object increases $U_g$; lowering it decreases $U_g$.
- The path doesn't matter — only the change in height.

### Elastic (Spring) Potential Energy

$$U_s = \frac{1}{2}k\,(\Delta x)^2$$

- $\Delta x$ is stretch or compression from the natural length. $U_s = 0$ at natural length.
- Always $\geq 0$ — stretching and compressing both store energy.
- Doubling the stretch **quadruples** the stored energy.

### Gravitational Potential Energy — General Form

For two masses far apart (satellites, planets), the near-surface formula fails. The general form is

$$U_g = -\frac{Gm_1m_2}{r}$$

- Reference: $U_g = 0$ when $r \to \infty$.
- $U_g$ is **negative** for all finite $r$ — bound systems have negative potential energy.
- As $r$ increases, $U_g$ increases (becomes less negative) — you must add energy to separate the masses.

> [!tip] Which Gravitational Formula?
> If the object's height change is tiny compared to Earth's radius (anything you can throw), use $mg\Delta y$. If $r$ changes significantly (orbits, escape velocity), use $-\dfrac{Gm_1m_2}{r}$.

### Conservative vs. Non-Conservative Forces

| Conservative | Non-Conservative |
|---|---|
| Gravity, spring | Friction, air resistance, applied push, tension |
| Work depends only on start and end points | Work depends on the path |
| Work around a closed loop $= 0$ | Work around a closed loop $\neq 0$ |
| Has an associated potential energy | No potential energy |
| Energy stored, fully recoverable | Energy dissipated (usually to thermal) |

The work done by a conservative force equals the **negative** change in its potential energy: $W_{\text{cons}} = -\Delta U$.

---

## 3.4 — Conservation of Energy

### The Principle

The total energy of a **closed system** (no external work) is constant:

$$K_i + U_i = K_f + U_f$$

or, including energy dissipated by friction/drag inside the system:

$$K_i + U_i = K_f + U_f + \Delta E_{\text{thermal}}$$

Energy is never created or destroyed — it changes form or moves between system and environment.

### When External Work Is Done

If a force from outside the system does work, it changes the system's total energy:

$$W_{\text{external}} = \Delta E_{\text{system}} = \Delta K + \Delta U + \Delta E_{\text{thermal}}$$

> [!tip] Choosing the System Decides Where Energy "Goes"
> **Ball alone:** gravity is an external force, does work $W = -mg\Delta y$; no potential energy in the system.
> **Ball + Earth:** gravity is internal, does no "external" work; the system has $U_g$.
> Both give the same answer. The AP exam expects you to state your system and be consistent.

### Problem-Solving Recipe

1. Define the system. Decide whether friction is inside it.
2. Pick the initial and final instants. Sketch both.
3. Set $U_g = 0$ at a convenient height.
4. Write every energy term at each instant. Cross out the zeros.
5. Set totals equal (add $W_{\text{ext}}$ or $\Delta E_{\text{th}}$ if needed). Solve.

> [!example] Example: Roller Coaster
> A cart starts from rest at height 20 m. Speed at the bottom? Speed at a hill of height 15 m? Frictionless, $g = 10$.
>
> $U_g = 0$ at the bottom.
>
> Bottom: $mgh = \tfrac{1}{2}mv^2 \Rightarrow v = \sqrt{2gh} = \sqrt{400} = 20$ m/s
>
> Hill: $mg(20) = mg(15) + \tfrac{1}{2}mv^2 \Rightarrow v = \sqrt{2g(5)} = 10$ m/s
>
> Mass cancels. The shape of the track is irrelevant — only heights matter.

> [!example] Example: Spring Launcher With Friction
> A 0.2 kg block is pushed against a spring ($k = 500$ N/m), compressing it 0.1 m, then released on a surface with $\mu_k = 0.25$. How far does it slide past the spring's natural length? ($g = 10$)
>
> System: block + spring + surface. Friction converts mechanical energy to thermal.
>
> $$\tfrac{1}{2}k x^2 = f \cdot d \quad\Rightarrow\quad \tfrac{1}{2}(500)(0.01) = (0.25)(0.2)(10)\,d$$
> $$2.5 = 0.5\,d \Rightarrow d = 5 \text{ m}$$
>
> (Ignoring friction during the 0.1 m of spring decompression; if included, use $d + 0.1$ on the right.)

> [!example] Example: Pendulum Speed
> A pendulum bob is released from rest when the string makes angle $\theta$ with vertical. String length $L$. Speed at the bottom?
>
> Height dropped: $h = L - L\cos\theta = L(1 - \cos\theta)$
>
> $$v = \sqrt{2gL(1 - \cos\theta)}$$
>
> Tension does no work (perpendicular to motion), so mechanical energy is conserved.

### Energy Bar Charts

A common AP representation. Draw a bar for each energy type ($K$, $U_g$, $U_s$, $E_{\text{th}}$) at the initial and final instant. The total height must be the same at both instants (for a closed system). Bars for $U_g$ can be negative if you put the reference level above the object.

### Energy Graphs

On a graph of potential energy vs. position:
- The force is the **negative slope**: where $U$ decreases with $x$, force points in $+x$.
- Equilibrium positions are where the slope is zero (bottom of a valley = stable, top of a hill = unstable).
- Total energy is a horizontal line; $K = E_{\text{total}} - U$ at each point. The object can only exist where $K \geq 0$, i.e., where the $U$ curve is below the total-energy line.

---

## 3.5 — Power

Power is the **rate** at which energy is transferred or work is done:

$$P = \frac{\Delta E}{\Delta t} = \frac{W}{\Delta t}$$

- Unit: watt (W). $1 \text{ W} = 1 \text{ J/s}$.
- A kilowatt-hour (kWh) is a unit of **energy**, not power: $1 \text{ kWh} = 3.6 \times 10^6$ J.

### Power in Terms of Force and Velocity

If a constant force acts on an object moving at velocity $v$:

$$P = F_{\parallel}v = Fv\cos\theta$$

This gives **instantaneous** power. A car engine's power output at a given moment is (thrust force) × (speed).

> [!example] Example: Lifting at Constant Speed
> A motor lifts a 50 kg crate at a steady 2 m/s. Power? ($g = 10$)
>
> Constant speed → $F = mg = 500$ N. $P = Fv = 500 \times 2 = 1000$ W.

> [!example] Example: Climbing Stairs
> A 60 kg student climbs 3 m of stairs in 4 s. Average power against gravity?
>
> $$P = \frac{mgh}{t} = \frac{60 \cdot 10 \cdot 3}{4} = 450 \text{ W}$$

> [!example] Example: Car at Top Speed
> A car's top speed on level ground is where engine power equals the power dissipated by drag. If drag force is $F_d$ at speed $v_{\max}$, then $P_{\text{engine}} = F_d v_{\max}$. Since drag grows with $v^2$, power needed grows with $v^3$ — doubling top speed requires 8× the power.

> [!tip] Power From Graphs
> On an energy-vs-time graph, power is the **slope**. On a power-vs-time graph, energy transferred is the **area**.

---

## Unit Summary

> [!summary] What to Have Cold
> - $K = \tfrac{1}{2}mv^2$; scalar; scales with $v^2$
> - $W = Fd\cos\theta$; zero when $F \perp d$; area under $F$–$x$ graph
> - Work-energy theorem: $W_{\text{net}} = \Delta K$
> - $\Delta U_g = mg\Delta y$ (near surface); $U_g = -\dfrac{Gm_1m_2}{r}$ (general); $U_s = \tfrac{1}{2}kx^2$
> - Conservative forces (gravity, spring): path-independent, $W = -\Delta U$. Non-conservative (friction): dissipates to thermal
> - Closed system: $K_i + U_i = K_f + U_f + \Delta E_{\text{th}}$. Open system: $W_{\text{ext}} = \Delta E_{\text{sys}}$
> - Define the system; state where $U_g = 0$; mass often cancels
> - $U$–$x$ graph: force $= -$slope; motion only where $E_{\text{tot}} \geq U$
> - $P = \dfrac{W}{t} = Fv\cos\theta$; watt $=$ J/s; kWh is energy
