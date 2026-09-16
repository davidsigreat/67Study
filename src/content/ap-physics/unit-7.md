---
title: "Unit 7: Oscillations"
unit: 7
---

# Unit 7 — Oscillations

> [!summary] Big Idea
> Anything with a **restoring force proportional to displacement** oscillates in **simple harmonic motion (SHM)**. Springs and pendulums are the two examples on the exam. The math is the same for both: a sine or cosine in time, a period that doesn't depend on amplitude, and energy sloshing between kinetic and potential.

---

## 7.1 — Defining Simple Harmonic Motion

### The Condition for SHM

An object undergoes simple harmonic motion when the net force on it is a **linear restoring force**:

$$F_{\text{net}} = -kx$$

- **Restoring**: always points toward the equilibrium position ($x = 0$).
- **Linear**: proportional to displacement. Twice the displacement, twice the force.
- The minus sign encodes "toward equilibrium."

By Newton's Second Law, the acceleration is also proportional and opposite to displacement:

$$a = -\frac{k}{m}x$$

This is the signature of SHM. If you can show $a \propto -x$, the motion is simple harmonic.

### Vocabulary

| Term | Symbol | Meaning |
|---|---|---|
| Equilibrium position | $x = 0$ | Where $F_{\text{net}} = 0$; the object would sit at rest here |
| Displacement | $x$ | Position relative to equilibrium |
| Amplitude | $A$ | Maximum displacement from equilibrium ($x$ ranges from $-A$ to $+A$) |
| Period | $T$ | Time for one complete cycle (s) |
| Frequency | $f$ | Cycles per second (Hz); $f = 1/T$ |
| Angular frequency | $\omega$ | $\omega = 2\pi f = \dfrac{2\pi}{T}$ (rad/s) |

### Mass on a Spring

A mass attached to an ideal spring on a frictionless surface: $F = -kx$ exactly. SHM.

For a **vertical** spring, gravity shifts the equilibrium position down by $\dfrac{mg}{k}$, but the motion about that new equilibrium is still SHM with the same $k$. Measure $x$ from the new equilibrium and gravity disappears from the analysis.

### Simple Pendulum

A mass on a string of length $L$. The restoring force is the tangential component of gravity, $-mg\sin\theta$. For **small angles** ($\theta \lesssim 15°$), $\sin\theta \approx \theta$ (in radians), so

$$F \approx -mg\theta = -\frac{mg}{L}x$$

where $x = L\theta$ is the arc displacement. This is a linear restoring force with effective "$k$" $= \dfrac{mg}{L}$. Approximately SHM.

> [!warning] Small-Angle Approximation
> A pendulum is SHM **only for small amplitudes**. At large angles, the restoring force is $\sin\theta$, not $\theta$, and the period gets longer. The AP exam will always say "small angle" or give you an angle small enough to assume it.

### Where Things Are Maximum

| Position | $x$ | $v$ | $a$ and $F$ |
|---|---|---|---|
| Equilibrium | $0$ | **max** ($\pm v_{\max}$) | $0$ |
| Turning points ($\pm A$) | **max** | $0$ | **max** (pointing toward center) |

> [!tip] Velocity and Acceleration Are Out of Step
> At the extremes, the object stops but the force is strongest. At the center, the object is fastest but the force is zero. They are never maximum at the same time.

---

## 7.2 — Frequency and Period of SHM

### Mass–Spring System

$$T = 2\pi\sqrt{\frac{m}{k}}, \qquad f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}, \qquad \omega = \sqrt{\frac{k}{m}}$$

- Larger mass → longer period (more inertia to reverse).
- Stiffer spring → shorter period (stronger restoring force).
- **Does not depend on amplitude.** A larger swing covers more distance but at proportionally higher speed.
- **Does not depend on $g$.** A mass-spring oscillates with the same period on the Moon.

### Simple Pendulum (small angles)

$$T = 2\pi\sqrt{\frac{L}{g}}, \qquad f = \frac{1}{2\pi}\sqrt{\frac{g}{L}}$$

- Longer string → longer period.
- Stronger gravity → shorter period.
- **Does not depend on mass.** Heavy and light bobs on equal strings swing in step.
- **Does not depend on amplitude** (for small angles).

> [!example] Example: Scaling
> A spring-mass system has period 2 s. Quadruple the mass → $T = 2\sqrt{4} = 4$ s. Instead, double the amplitude → $T$ stays 2 s.
>
> A pendulum has period 2 s. Quadruple its length → $T = 4$ s. Take it to the Moon ($g \approx 1.6$ m/s²) → $T = 2\sqrt{9.8/1.6} \approx 5$ s.

> [!example] Example: Finding $k$ From Oscillation
> A 0.5 kg mass on a spring completes 10 oscillations in 5 s. Spring constant?
>
> $T = 0.5$ s. $T^2 = 4\pi^2\dfrac{m}{k} \Rightarrow k = \dfrac{4\pi^2 m}{T^2} = \dfrac{4\pi^2(0.5)}{0.25} \approx 79$ N/m.

### Lab Connection — Linearizing Graphs

The AP exam loves "design an experiment" questions here. To find $g$ from a pendulum, plot $T^2$ vs. $L$:

$$T^2 = \frac{4\pi^2}{g}L \quad\Rightarrow\quad \text{slope} = \frac{4\pi^2}{g}$$

A straight line through the origin confirms the relationship; $g = \dfrac{4\pi^2}{\text{slope}}$. For a spring, plot $T^2$ vs. $m$; slope $= \dfrac{4\pi^2}{k}$.

> [!tip] Measure Many Periods
> Time 10 or 20 oscillations and divide — this shrinks the reaction-time error on each period measurement by a factor of 10 or 20. Expect to say this in a lab-design FRQ.

### Springs in Combination

- **Parallel** (side by side, both attached to the mass): $k_{\text{eff}} = k_1 + k_2$ (stiffer)
- **Series** (end to end): $\dfrac{1}{k_{\text{eff}}} = \dfrac{1}{k_1} + \dfrac{1}{k_2}$ (softer)

---

## 7.3 — Representing and Analyzing SHM

### Position as a Function of Time

$$x(t) = A\cos(\omega t + \phi) \qquad \text{or} \qquad x(t) = A\sin(\omega t + \phi)$$

- $A$ — amplitude
- $\omega = \dfrac{2\pi}{T}$ — angular frequency
- $\phi$ — phase constant, set by where the object is at $t = 0$

Two standard starting conditions:

| Released from rest at $x = +A$ | Passing through equilibrium moving in $+x$ |
|---|---|
| $x(t) = A\cos(\omega t)$ | $x(t) = A\sin(\omega t)$ |

### Velocity and Acceleration vs. Time

For $x(t) = A\cos(\omega t)$:

$$v(t) = -A\omega\sin(\omega t), \qquad a(t) = -A\omega^2\cos(\omega t) = -\omega^2 x(t)$$

Maximum values:

$$v_{\max} = A\omega, \qquad a_{\max} = A\omega^2$$

> [!tip] You Don't Need Calculus
> Get $v_{\max} = A\omega$ from energy conservation (7.4). Get $a_{\max} = \dfrac{kA}{m} = A\omega^2$ from Newton's Second Law at the turning point. The shapes of the graphs follow from the physics: $v$ is zero where $x$ is max, $a$ is opposite to $x$.

### Reading the Graphs

For an object starting at $x = +A$:

| Graph | Shape | Zero when | Max when |
|---|---|---|---|
| $x$ vs. $t$ | cosine, starts at $+A$ | $t = T/4, 3T/4, \ldots$ | $t = 0, T/2, \ldots$ |
| $v$ vs. $t$ | negative sine, starts at 0 | $t = 0, T/2, \ldots$ | $t = T/4, 3T/4, \ldots$ |
| $a$ vs. $t$ | negative cosine, starts at $-a_{\max}$ | $t = T/4, 3T/4, \ldots$ | $t = 0, T/2, \ldots$ |

- $a$ vs. $t$ is $x$ vs. $t$ flipped upside down and scaled by $\omega^2$.
- $v$ is a quarter-period ahead of $x$.
- From an $x$–$t$ graph, read $A$ directly (peak height) and $T$ directly (peak-to-peak time).

> [!example] Example: Reading a Graph
> An $x$–$t$ graph shows peaks of $\pm 0.2$ m and a peak at $t = 0$ and the next at $t = 0.8$ s. Find $v_{\max}$ and $a_{\max}$.
>
> $A = 0.2$ m, $T = 0.8$ s, $\omega = \dfrac{2\pi}{0.8} = 7.85$ rad/s.
>
> $v_{\max} = A\omega = 1.57$ m/s; $a_{\max} = A\omega^2 = 12.3$ m/s².

### Force and Acceleration Graphs vs. Position

- $F$ vs. $x$: straight line through the origin with slope $-k$.
- $a$ vs. $x$: straight line through the origin with slope $-\omega^2 = -\dfrac{k}{m}$.

Any straight-line $F$–$x$ (or $a$–$x$) graph through the origin with negative slope means SHM.

### Fractions of a Period

Because the motion is symmetric, some timings are worth memorizing (starting at $+A$):

- $+A \to 0$: $T/4$
- $+A \to -A$: $T/2$
- $+A \to +A$: $T$
- $0 \to A/2$ is **not** $T/8$ — the object is fastest near the center, so it covers the first half of the amplitude in less than half the time. ($A\sin(\omega t) = A/2 \Rightarrow \omega t = \pi/6 \Rightarrow t = T/12$.)

---

## 7.4 — Energy of Simple Harmonic Motion

### Total Energy Is Constant

For an ideal (frictionless) oscillator, mechanical energy is conserved. At any instant:

$$E_{\text{total}} = K + U = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \text{constant}$$

Evaluate at the turning point ($v = 0$, $x = A$) or at equilibrium ($x = 0$, $v = v_{\max}$):

$$E_{\text{total}} = \frac{1}{2}kA^2 = \frac{1}{2}mv_{\max}^2$$

Consequences:
- Total energy is proportional to **$A^2$**. Doubling the amplitude quadruples the energy.
- $v_{\max} = A\sqrt{\dfrac{k}{m}} = A\omega$ — this is where that formula comes from.

### Speed at Any Position

$$\frac{1}{2}kA^2 = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 \quad\Rightarrow\quad v = \sqrt{\frac{k}{m}(A^2 - x^2)} = \omega\sqrt{A^2 - x^2}$$

> [!example] Example: Speed at Half Amplitude
> At $x = A/2$: $v = \omega\sqrt{A^2 - A^2/4} = \omega A\dfrac{\sqrt{3}}{2} \approx 0.87\,v_{\max}$.
>
> Halfway out in position, but still at 87% of max speed — because $U \propto x^2$, only a quarter of the energy is potential at $x = A/2$.

### Energy vs. Position Graph

- $U = \tfrac{1}{2}kx^2$: an upward parabola with vertex at the origin.
- $E_{\text{total}}$: a horizontal line at height $\tfrac{1}{2}kA^2$.
- $K = E_{\text{total}} - U$: an inverted parabola, max at $x = 0$, zero at $x = \pm A$.
- The turning points are where the $U$ parabola meets the $E_{\text{total}}$ line.

### Energy vs. Time Graph

- $K$ and $U$ each oscillate between 0 and $E_{\text{total}}$.
- They oscillate at **twice** the frequency of the motion — kinetic energy peaks every time the object passes through the center, which happens twice per cycle.
- $K + U$ is a flat line.

### Pendulum Energy

Same idea with gravitational potential energy: $U = mgh$ where $h = L(1 - \cos\theta)$ is the height above the lowest point.

$$mgL(1 - \cos\theta_{\max}) = \frac{1}{2}mv_{\max}^2 \quad\Rightarrow\quad v_{\max} = \sqrt{2gL(1 - \cos\theta_{\max})}$$

### Vertical Spring — Where's the Energy?

For a mass hanging on a vertical spring, there is both gravitational and elastic potential energy. Two valid approaches:

1. **Track both** $U_g$ and $U_s$ explicitly, measuring $x$ from the spring's natural length.
2. **Measure from the new equilibrium** and use only $\tfrac{1}{2}kx^2$ — the gravitational and elastic terms combine to behave exactly like a single spring about the shifted equilibrium.

Both give the same answers. Method 2 is faster; method 1 is safer if you're asked about the spring's actual stretch.

> [!example] Example: Vertical Spring
> A 2 kg mass hangs from a spring ($k = 200$ N/m). It is pulled 0.1 m below equilibrium and released. Max speed? ($g = 10$)
>
> Method 2: $\tfrac{1}{2}kA^2 = \tfrac{1}{2}mv_{\max}^2 \Rightarrow v_{\max} = A\sqrt{k/m} = 0.1\sqrt{100} = 1$ m/s.
>
> Gravity never appears. It only set where equilibrium is ($0.1$ m below natural length, since $mg/k = 0.1$ m).

### Damping (Qualitative)

Real oscillators lose energy to friction and air resistance. The amplitude decreases over time while the period stays approximately the same. Energy goes to thermal energy. AP Physics 1 only asks you to describe this, not calculate it.

---

## Unit Summary

> [!summary] What to Have Cold
> - SHM condition: $F = -kx$, equivalently $a = -\dfrac{k}{m}x$. Linear restoring force
> - Spring: $T = 2\pi\sqrt{m/k}$ — depends on $m$, $k$; not on $A$ or $g$
> - Pendulum: $T = 2\pi\sqrt{L/g}$ — depends on $L$, $g$; not on $m$ or $A$ (small angles)
> - $\omega = 2\pi f = 2\pi/T$; $v_{\max} = A\omega$; $a_{\max} = A\omega^2$
> - At $\pm A$: $v = 0$, $|a|$ max. At $0$: $|v|$ max, $a = 0$
> - $x(t) = A\cos(\omega t)$ if released from rest at $+A$; $A\sin(\omega t)$ if starting at equilibrium
> - $a$–$t$ graph is the $x$–$t$ graph inverted; $v$ leads $x$ by a quarter period
> - $E = \tfrac{1}{2}kA^2 = \tfrac{1}{2}mv_{\max}^2$; energy $\propto A^2$
> - $v = \omega\sqrt{A^2 - x^2}$
> - $K$ and $U$ oscillate at $2f$; their sum is constant
> - Lab: plot $T^2$ vs. $L$ (or $m$); slope gives $g$ (or $k$); time many oscillations
> - Vertical spring: measure from the shifted equilibrium and gravity drops out
