---
title: "Unit 6: Energy and Momentum of Rotating Systems"
unit: 6
---

# Unit 6 — Energy and Momentum of Rotating Systems

> [!summary] Big Idea
> Units 3 and 4 gave us energy and momentum for translation. This unit gives their rotational twins — **rotational kinetic energy** and **angular momentum** — and a third conservation law. Rolling objects, spinning skaters, and orbiting planets all fall out of these ideas.

| Translational | Rotational |
|---|---|
| $K = \tfrac{1}{2}mv^2$ | $K_{\text{rot}} = \tfrac{1}{2}I\omega^2$ |
| $W = Fd$ | $W = \tau\,\Delta\theta$ |
| $P = Fv$ | $P = \tau\omega$ |
| $p = mv$ | $L = I\omega$ |
| $J = F\Delta t = \Delta p$ | $\tau\,\Delta t = \Delta L$ |
| $\sum F_{\text{ext}} = 0 \Rightarrow p$ conserved | $\sum\tau_{\text{ext}} = 0 \Rightarrow L$ conserved |

---

## 6.1 — Rotational Kinetic Energy

A rotating object has kinetic energy because every piece of it is moving:

$$K_{\text{rot}} = \frac{1}{2}I\omega^2$$

- Unit: joules, like any energy. Scalar.
- $I$ and $\omega$ must be about the same axis.
- This is just the sum of $\tfrac{1}{2}m_i v_i^2$ over all pieces, with $v_i = r_i\omega$.

### Total Kinetic Energy of a Moving, Rotating Object

An object that both translates and rotates (a rolling ball, a thrown spinning frisbee) has both kinds:

$$K_{\text{total}} = K_{\text{trans}} + K_{\text{rot}} = \frac{1}{2}mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\omega^2$$

Here $v_{\text{cm}}$ is the speed of the center of mass and $I_{\text{cm}}$ is the rotational inertia about the center of mass.

### Energy Conservation With Rotation

Just add $K_{\text{rot}}$ to the energy accounting from Unit 3:

$$K_{\text{trans},i} + K_{\text{rot},i} + U_i = K_{\text{trans},f} + K_{\text{rot},f} + U_f + \Delta E_{\text{th}}$$

> [!example] Example: Rod Swinging Down
> A uniform rod (mass $M$, length $L$) pivoted at one end is released from rest horizontally. Angular speed when vertical?
>
> The center of mass drops $\dfrac{L}{2}$. $I_{\text{end}} = \tfrac{1}{3}ML^2$.
>
> $$Mg\frac{L}{2} = \frac{1}{2}\left(\frac{1}{3}ML^2\right)\omega^2 \quad\Rightarrow\quad \omega = \sqrt{\frac{3g}{L}}$$
>
> This is the problem Unit 5 said couldn't be done with kinematics (torque varies). Energy makes it two lines.

> [!example] Example: Falling Mass Spinning a Pulley
> A block $m$ falls from rest a distance $h$, unwinding a rope from a disk pulley ($M$, $R$). Speed of the block after falling $h$?
>
> $$mgh = \frac{1}{2}mv^2 + \frac{1}{2}\left(\frac{1}{2}MR^2\right)\omega^2, \qquad \omega = \frac{v}{R}$$
> $$mgh = \frac{1}{2}mv^2 + \frac{1}{4}Mv^2 \quad\Rightarrow\quad v = \sqrt{\frac{2mgh}{m + M/2}}$$
>
> Compare to free fall $\sqrt{2gh}$ — slower, because energy went into the pulley's rotation.

---

## 6.2 — Torque and Work

A torque acting through an angular displacement does work:

$$W = \tau\,\Delta\theta$$

(valid for constant torque; for varying torque, work is the **area under the $\tau$–$\theta$ graph**.)

- Positive when torque and rotation are in the same direction (speeds up rotation).
- Negative when opposite (slows rotation — e.g., friction at a bearing).
- This is the same as $W = Fd$ with $d = r\Delta\theta$ and $F = \tau/r$ — nothing new, just rewritten.

### Rotational Work-Energy Theorem

$$W_{\text{net}} = \Delta K_{\text{rot}} = \frac{1}{2}I\omega_f^2 - \frac{1}{2}I\omega_i^2$$

### Rotational Power

$$P = \tau\omega$$

The rotational analog of $P = Fv$. A car engine delivers power as (torque) × (angular speed) — this is why an engine's power peaks at a certain rpm.

> [!example] Example: Braking a Flywheel
> A flywheel ($I = 4$ kg·m²) spins at $\omega = 30$ rad/s. A brake applies a constant friction torque of $6$ N·m. Through what angle does it turn before stopping?
>
> $$-\tau\,\Delta\theta = 0 - \frac{1}{2}I\omega^2 \Rightarrow \Delta\theta = \frac{\tfrac{1}{2}(4)(900)}{6} = 300 \text{ rad} \approx 48 \text{ rev}$$

> [!example] Example: Motor Power
> A motor spins a shaft at 1200 rpm while providing 5 N·m of torque. Power?
>
> $\omega = 1200 \cdot \dfrac{2\pi}{60} = 40\pi \approx 126$ rad/s. $P = \tau\omega = 5(126) \approx 630$ W.

---

## 6.3 — Angular Momentum and Angular Impulse

### Angular Momentum of a Rigid Object

$$L = I\omega$$

- Unit: kg·m²/s
- Vector — direction along the rotation axis (right-hand rule: curl fingers with the rotation, thumb points along $\vec{L}$). In AP Physics 1 you'll mostly treat it as signed: counterclockwise positive, clockwise negative.
- Depends on the axis chosen.

### Angular Momentum of a Point Object

A single object moving in a straight line **can** have angular momentum about a point — if its path doesn't pass through that point:

$$L = mvr_\perp = mvr\sin\theta$$

where $r_\perp$ is the perpendicular distance from the reference point to the object's line of motion. Equivalently $L = r\,p_\perp$.

- An object moving straight **toward or away from** the reference point has $L = 0$ about it.
- An object moving past the point at constant velocity has **constant** $L$ (both $v$ and $r_\perp$ are constant).

> [!tip] Why This Matters
> A ball thrown at the edge of a stationary door carries angular momentum $mvr_\perp$ about the hinge, even though the ball itself isn't spinning. When the ball hits, that angular momentum transfers to the door. This is the setup for almost every "collision with a rotating object" problem.

### Angular Impulse

A torque acting over time changes angular momentum:

$$\tau_{\text{net}}\,\Delta t = \Delta L = I\omega_f - I\omega_i$$

This is Newton's Second Law in its most general rotational form:

$$\tau_{\text{net}} = \frac{\Delta L}{\Delta t}$$

It reduces to $\tau = I\alpha$ when $I$ is constant — but unlike $\tau = I\alpha$, it also works when $I$ **changes** (a skater pulling in their arms).

Angular impulse is the **area under a $\tau$–$t$ graph**.

> [!example] Example: Spinning Up a Disk
> A constant torque of $2$ N·m acts on a disk ($I = 0.5$ kg·m²) at rest for $3$ s. Final $\omega$?
>
> $\Delta L = 6$ kg·m²/s $\Rightarrow \omega = \dfrac{6}{0.5} = 12$ rad/s.

---

## 6.4 — Conservation of Angular Momentum

### The Principle

If the **net external torque** on a system is zero, its total angular momentum is constant:

$$\sum L_i = \sum L_f \qquad \text{or} \qquad I_i\omega_i = I_f\omega_f$$

Internal torques (parts of the system pushing on each other) come in pairs and cancel — they cannot change total $L$.

### Changing $I$ Changes $\omega$

This is the part with no translational analog. An object's mass can't change on its own — but its **rotational inertia** can, just by rearranging where the mass is. If $L$ is conserved and $I$ decreases, $\omega$ must increase.

| Situation | $I$ | $\omega$ |
|---|---|---|
| Skater pulls arms in | decreases | increases (spins faster) |
| Skater extends arms | increases | decreases |
| Diver tucks | decreases | increases (more flips) |
| Collapsing star | decreases enormously | increases enormously (pulsar) |
| Person walks toward center of spinning platform | decreases | increases |

> [!warning] Kinetic Energy Is Not Conserved Here
> When the skater pulls their arms in, $L = I\omega$ stays constant, but $K = \tfrac{1}{2}I\omega^2 = \dfrac{L^2}{2I}$ **increases** because $I$ decreased. The extra energy comes from the work the skater's muscles do pulling the arms inward against the "outward" tendency. $L$ conserved; $K$ not.

> [!example] Example: Skater
> A skater spins at $2$ rad/s with arms out ($I = 3$ kg·m²). They pull their arms in ($I = 1$ kg·m²). New $\omega$? Change in $K$?
>
> $3(2) = 1\,\omega_f \Rightarrow \omega_f = 6$ rad/s
>
> $K_i = \tfrac{1}{2}(3)(4) = 6$ J; $K_f = \tfrac{1}{2}(1)(36) = 18$ J. Kinetic energy tripled.

### Rotational Collisions

When objects collide and stick to (or push off) a rotating body, angular momentum about the rotation axis is conserved — the pivot can exert a force but no torque about itself.

> [!example] Example: Clay Hits a Rod
> A rod (mass $M$, length $L$, pivoted at one end, $I = \tfrac{1}{3}ML^2$) hangs at rest. A piece of clay (mass $m$) moving horizontally at speed $v$ hits and sticks to the far end. Angular speed just after?
>
> Before: clay's angular momentum about pivot $= mvL$ (it's moving perpendicular to $r = L$). Rod: 0.
> After: $(I_{\text{rod}} + mL^2)\,\omega$
>
> $$mvL = \left(\frac{1}{3}ML^2 + mL^2\right)\omega \quad\Rightarrow\quad \omega = \frac{mv}{\left(\frac{M}{3} + m\right)L}$$
>
> Linear momentum is **not** conserved here — the pivot exerts an external force. Angular momentum about the pivot is, because the pivot force has zero lever arm.

> [!example] Example: Disk Dropped on Spinning Disk
> A disk ($I_1$) spins at $\omega_1$. An identical disk at rest is dropped onto it and friction brings them to a common $\omega$.
>
> $I_1\omega_1 = (I_1 + I_1)\omega \Rightarrow \omega = \dfrac{\omega_1}{2}$.
>
> Kinetic energy: $K_f = \tfrac{1}{2}(2I_1)\left(\dfrac{\omega_1}{2}\right)^2 = \tfrac{1}{4}I_1\omega_1^2 = \tfrac{1}{2}K_i$. Half the energy became heat — a perfectly inelastic rotational collision.

### Combining Translation and Rotation in a System

The total angular momentum of a system about a point includes both the spin of each part and the "orbital" angular momentum $mvr_\perp$ of each part's center of mass about that point. Conservation applies to the total.

---

## 6.5 — Rolling

### Rolling Without Slipping

A wheel rolls without slipping when the contact point has **zero velocity relative to the surface**. This ties translation and rotation together:

$$v_{\text{cm}} = R\omega, \qquad a_{\text{cm}} = R\alpha, \qquad \Delta x_{\text{cm}} = R\,\Delta\theta$$

Velocity of points on the wheel (relative to ground):
- Bottom (contact point): $0$
- Center: $v_{\text{cm}}$
- Top: $2v_{\text{cm}}$

### Friction in Rolling

- For rolling without slipping on a **flat** surface at constant velocity: **no** friction needed (idealized).
- For rolling **down an incline** or accelerating: **static** friction acts at the contact point. It's static because the contact point isn't sliding. It provides the torque that makes the wheel spin faster as it speeds up.
- Static friction at the contact point does **no work** (the contact point doesn't move relative to the surface), so mechanical energy is conserved for rolling without slipping.
- If the object **slips** (skids), kinetic friction acts, does negative work, and $v \neq R\omega$.

### Kinetic Energy of a Rolling Object

$$K = \frac{1}{2}mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\omega^2 = \frac{1}{2}mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\frac{v_{\text{cm}}^2}{R^2} = \frac{1}{2}mv_{\text{cm}}^2\left(1 + \frac{I_{\text{cm}}}{mR^2}\right)$$

Writing $I_{\text{cm}} = \beta mR^2$ (where $\beta = 1$ for a hoop, $\tfrac{1}{2}$ for a disk, $\tfrac{2}{5}$ for a solid sphere):

$$K = \frac{1}{2}mv_{\text{cm}}^2(1 + \beta)$$

### Rolling Down an Incline — Energy Method

Released from rest at height $h$, rolling without slipping:

$$mgh = \frac{1}{2}mv^2(1 + \beta) \quad\Rightarrow\quad v = \sqrt{\frac{2gh}{1 + \beta}}$$

| Object | $\beta$ | $v$ at bottom | $a$ down incline |
|---|---|---|---|
| Sliding (frictionless) | 0 | $\sqrt{2gh}$ | $g\sin\theta$ |
| Solid sphere | $\tfrac{2}{5}$ | $\sqrt{\tfrac{10}{7}gh}$ | $\tfrac{5}{7}g\sin\theta$ |
| Solid disk | $\tfrac{1}{2}$ | $\sqrt{\tfrac{4}{3}gh}$ | $\tfrac{2}{3}g\sin\theta$ |
| Hoop | 1 | $\sqrt{gh}$ | $\tfrac{1}{2}g\sin\theta$ |

The acceleration formula is $a = \dfrac{g\sin\theta}{1 + \beta}$.

> [!tip] The Race
> Roll a sphere, a disk, and a hoop down the same incline. The **sphere wins**, then the disk, then the hoop — regardless of mass or radius. A larger fraction of the hoop's energy goes into rotation, leaving less for translation. Mass and radius cancel out entirely; only the shape ($\beta$) matters. A frictionless sliding block beats all of them.

> [!example] Example: Rolling Down — Force Method
> Solid sphere on an incline at angle $\theta$. Find $a$ using forces.
>
> Along incline: $mg\sin\theta - f = ma$
> Torque about center (friction is the only force with a lever arm): $fR = I\alpha = \tfrac{2}{5}mR^2 \cdot \dfrac{a}{R} \Rightarrow f = \tfrac{2}{5}ma$
>
> Substitute: $mg\sin\theta - \tfrac{2}{5}ma = ma \Rightarrow a = \tfrac{5}{7}g\sin\theta$. ✓ Matches the energy method.
>
> Friction required: $f = \tfrac{2}{7}mg\sin\theta$. If $\mu_s mg\cos\theta$ is less than this, the sphere **slips**.

---

## 6.6 — Motion of Orbiting Satellites

### Circular Orbits

Gravity is the only force, and it provides the centripetal acceleration:

$$\frac{GMm}{r^2} = \frac{mv^2}{r} \quad\Rightarrow\quad v = \sqrt{\frac{GM}{r}}$$

- Orbital speed depends only on the central mass $M$ and orbital radius $r$ — **not** on the satellite's mass.
- Higher orbit → slower speed.
- Period: $T = \dfrac{2\pi r}{v} = 2\pi\sqrt{\dfrac{r^3}{GM}}$, so $T^2 \propto r^3$ (**Kepler's Third Law**).

### Energy of a Circular Orbit

Using $v^2 = \dfrac{GM}{r}$:

$$K = \frac{1}{2}mv^2 = \frac{GMm}{2r}, \qquad U = -\frac{GMm}{r}, \qquad E_{\text{total}} = K + U = -\frac{GMm}{2r}$$

- Total energy is **negative** — the satellite is bound.
- $K = -\tfrac{1}{2}U$ and $E = -K$ for any circular orbit.
- To move to a **higher** orbit, you must **add** energy (fire engines forward), even though the satellite ends up moving **slower**. The potential energy gain exceeds the kinetic energy loss.

### Elliptical Orbits — Conservation Laws

For a non-circular orbit, gravity always points toward the central body, so it exerts **zero torque** about it. Angular momentum is conserved:

$$L = mvr_\perp = \text{constant}$$

Total mechanical energy is also conserved (gravity is conservative):

$$\frac{1}{2}mv^2 - \frac{GMm}{r} = \text{constant}$$

Consequences:
- At **perigee** (closest approach): $r$ is smallest, so $v$ is **fastest**. $K$ is max, $U$ is most negative.
- At **apogee** (farthest): $r$ largest, $v$ **slowest**. $K$ is min, $U$ is least negative.
- Kepler's Second Law (equal areas in equal times) is just angular momentum conservation.

> [!example] Example: Perigee and Apogee Speeds
> A satellite's perigee is at $r_p = 7000$ km with speed $v_p = 8$ km/s. Apogee is at $r_a = 14{,}000$ km. Speed at apogee?
>
> At both points velocity is perpendicular to $r$, so $L = mvr$:
>
> $$v_p r_p = v_a r_a \Rightarrow v_a = 8 \cdot \frac{7000}{14000} = 4 \text{ km/s}$$

### Escape Velocity

The minimum launch speed to escape to infinity with zero leftover kinetic energy. Set total energy to zero:

$$\frac{1}{2}mv_{\text{esc}}^2 - \frac{GMm}{R} = 0 \quad\Rightarrow\quad v_{\text{esc}} = \sqrt{\frac{2GM}{R}}$$

Note $v_{\text{esc}} = \sqrt{2}\,v_{\text{circular orbit at } R}$. Independent of the projectile's mass. For Earth, about 11.2 km/s.

> [!warning] Weightlessness in Orbit
> Astronauts float not because gravity is weak up there — at 400 km altitude $g$ is still about 8.7 m/s². They float because they and the station are **both in free fall**, accelerating toward Earth at the same rate. There's no normal force, so no sensation of weight.

---

## Unit Summary

> [!summary] What to Have Cold
> - $K_{\text{rot}} = \tfrac{1}{2}I\omega^2$; total $K = \tfrac{1}{2}mv_{\text{cm}}^2 + \tfrac{1}{2}I_{\text{cm}}\omega^2$
> - $W = \tau\Delta\theta$; $P = \tau\omega$; area under $\tau$–$\theta$ graph
> - $L = I\omega$ (rigid body); $L = mvr_\perp$ (point object moving past a reference point)
> - $\tau_{\text{net}}\Delta t = \Delta L$; works even when $I$ changes
> - $\sum\tau_{\text{ext}} = 0 \Rightarrow L$ conserved. Pull mass in → $I\downarrow$, $\omega\uparrow$, $K\uparrow$
> - Rotational collisions: conserve $L$ about the pivot; linear $p$ is **not** conserved if a pivot force acts
> - Rolling without slipping: $v_{\text{cm}} = R\omega$; static friction, does no work
> - Rolling race: sphere beats disk beats hoop; mass and radius irrelevant; $v = \sqrt{\dfrac{2gh}{1 + \beta}}$
> - Circular orbit: $v = \sqrt{\dfrac{GM}{r}}$; $T^2 \propto r^3$; $E = -\dfrac{GMm}{2r} = -K$
> - Elliptical orbit: $L$ and $E$ conserved; fastest at perigee, slowest at apogee
> - $v_{\text{esc}} = \sqrt{\dfrac{2GM}{R}}$
