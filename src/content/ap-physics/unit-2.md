---
title: "Unit 2: Force and Translational Dynamics"
unit: 2
---

# Unit 2 — Force and Translational Dynamics

> [!summary] Big Idea
> Unit 1 described motion. Unit 2 explains it: a **net force** causes acceleration. The entire unit is one equation, $\sum \vec{F} = m\vec{a}$, applied through free-body diagrams. Master the FBD and every problem — inclines, pulleys, friction, circular motion — is the same problem.

---

## 2.1 — Systems and Center of Mass

A **system** is whatever collection of objects you choose to analyze. Everything outside it is the **environment**. Forces between objects inside the system are **internal**; forces from the environment are **external**.

- A system can be treated as a single object if its internal structure doesn't matter for the question.
- Only **external** forces change a system's motion. Internal forces cancel in pairs (Newton's Third Law).

### Center of Mass

The center of mass is the mass-weighted average position of a system:

$$x_{\text{cm}} = \frac{m_1 x_1 + m_2 x_2 + \cdots}{m_1 + m_2 + \cdots} = \frac{\sum m_i x_i}{\sum m_i}$$

- For a uniform, symmetric object, the center of mass is at the geometric center.
- The center of mass moves as if all the system's mass were concentrated there and all external forces acted on it.
- Internal forces (an explosion, a person walking inside a boat) **cannot** change the velocity of the center of mass.

> [!example] Example: Two Masses on a Rod
> A 2 kg mass at $x = 0$ and a 6 kg mass at $x = 4$ m.
>
> $$x_{\text{cm}} = \frac{(2)(0) + (6)(4)}{2 + 6} = \frac{24}{8} = 3 \text{ m}$$
>
> Closer to the heavier mass, as expected.

---

## 2.2 — Forces and Free-Body Diagrams

A **force** is a push or pull, measured in newtons (N). $1 \text{ N} = 1 \text{ kg·m/s}^2$. Forces are vectors.

### Contact vs. Long-Range Forces

| Type | Examples |
|---|---|
| Contact | normal, friction, tension, spring, applied push/pull, air resistance |
| Long-range (field) | gravity, electric, magnetic |

### Common Forces

| Force | Symbol | Direction | Magnitude |
|---|---|---|---|
| Gravity (weight) | $F_g$, $W$ | toward Earth's center (down) | $mg$ |
| Normal | $F_N$, $N$ | perpendicular to surface, pushing away | whatever is needed — solve for it |
| Tension | $F_T$, $T$ | along the rope, pulling toward the rope | same throughout a massless rope |
| Friction | $F_f$, $f$ | parallel to surface, opposing relative sliding | see 2.7 |
| Spring | $F_s$ | toward equilibrium | $k|\Delta x|$ (see 2.8) |

> [!warning] Normal Force Is Not Always $mg$
> $F_N = mg$ only for an object on a flat surface with no other vertical forces. On an incline $F_N = mg\cos\theta$. In an elevator or with a downward push, it changes. **Always solve for $F_N$ from $\sum F = ma$; never assume it.**

### Drawing a Free-Body Diagram

1. Draw the object as a dot (or a simple box).
2. Draw every force acting **on** the object as an arrow starting at the dot, pointing in the force's direction.
3. Label each arrow with a name (e.g., $F_N$, $F_g$, $T$) — not a number.
4. Do **not** draw forces the object exerts on other things.
5. Do **not** draw velocity, acceleration, or "$ma$" — those are not forces.
6. Choose axes. If the object accelerates, align one axis with $\vec{a}$ (along the incline, toward the center of the circle, etc.).

> [!tip] AP Grading Rules for FBDs
> Arrows must start on the dot and point away from it. Relative lengths should be plausible (longer arrow = bigger force). Extra incorrect forces lose points. "Centripetal force" is not a force — do not draw it.

---

## 2.3 — Newton's Third Law

When object A exerts a force on object B, B exerts a force on A that is **equal in magnitude and opposite in direction**:

$$\vec{F}_{A \text{ on } B} = -\vec{F}_{B \text{ on } A}$$

These two forces form an **interaction pair** (action-reaction pair).

Properties of a Third Law pair:
- Same type of force (both gravitational, both normal, both friction, etc.)
- Act on **different** objects
- Occur simultaneously
- Never cancel each other — they are on different objects, so they never appear on the same FBD

> [!warning] Common Mistake: "Equal and Opposite" ≠ Balanced
> $F_N$ and $F_g$ on a book sitting on a table are **not** a Third Law pair — both act on the book. They happen to be equal because $a = 0$, not because of Newton's Third Law. The pair to $F_g$ (Earth pulls book) is *book pulls Earth*. The pair to $F_N$ (table pushes book) is *book pushes table*.

> [!example] Example: Truck vs. Bug
> A truck hits a bug. The force the truck exerts on the bug equals the force the bug exerts on the truck. The bug is destroyed and the truck isn't because $a = F/m$ — same $F$, wildly different $m$.

---

## 2.4 — Newton's First Law

If the net force on an object is zero, its velocity does not change: an object at rest stays at rest, and an object in motion continues at constant velocity in a straight line.

$$\sum \vec{F} = 0 \quad \Longleftrightarrow \quad \vec{a} = 0 \quad \Longleftrightarrow \quad \vec{v} = \text{constant}$$

This is also called the law of **inertia**. **Mass** is the measure of inertia — how much an object resists changes in its velocity.

### Equilibrium

An object with $\sum \vec{F} = 0$ is in **translational equilibrium**. This includes both at rest (static) and moving at constant velocity (dynamic). Both look the same in the equations.

$$\sum F_x = 0, \qquad \sum F_y = 0$$

> [!tip] Constant Velocity Means Zero Net Force
> A car cruising at a steady 30 m/s has zero net force on it — the engine's forward push exactly balances friction and drag. "Moving" does not require a net force. **Changing** motion does.

> [!example] Example: Hanging Sign
> A 40 N sign hangs from two ropes, each at $30°$ above horizontal. Find the tension in each.
>
> By symmetry both tensions are equal. Vertical: $2T\sin 30° = 40 \Rightarrow T = 40$ N. Horizontal components cancel automatically.

---

## 2.5 — Newton's Second Law

The acceleration of an object is proportional to the net force on it and inversely proportional to its mass:

$$\vec{a} = \frac{\sum \vec{F}}{m} \qquad \text{or} \qquad \sum \vec{F} = m\vec{a}$$

- Acceleration points in the **same direction** as the net force.
- Apply it **one axis at a time**: $\sum F_x = ma_x$, $\sum F_y = ma_y$.
- If the object doesn't accelerate along an axis, set that sum to zero.

### Standard Procedure

1. FBD.
2. Choose axes (one along $\vec{a}$).
3. Write $\sum F = ma$ for each axis, using components.
4. Solve. Check units and signs.

> [!example] Example: Box on a Frictionless Incline
> A box of mass $m$ slides down a frictionless incline at angle $\theta$. Find $a$ and $F_N$.
>
> Axes: $x$ down the incline, $y$ perpendicular to it. Gravity components: $mg\sin\theta$ along $x$, $mg\cos\theta$ along $-y$.
>
> $x$: $mg\sin\theta = ma \Rightarrow a = g\sin\theta$
> $y$: $F_N - mg\cos\theta = 0 \Rightarrow F_N = mg\cos\theta$
>
> Mass cancels — all objects slide down a frictionless incline with the same acceleration.

> [!example] Example: Elevator Scale
> A 60 kg person stands on a scale in an elevator accelerating upward at $2$ m/s². What does the scale read? ($g = 10$)
>
> Up positive: $F_N - mg = ma \Rightarrow F_N = m(g + a) = 60(12) = 720$ N.
>
> The scale reads the normal force — 720 N, more than their weight of 600 N. If the elevator accelerated *downward* at 2 m/s², $F_N = 60(8) = 480$ N.

### Connected Objects (Pulleys, Trains)

Objects connected by a taut rope share the same **magnitude** of acceleration. Draw a separate FBD for each object, write $\sum F = ma$ for each, and solve the system.

> [!example] Example: Atwood Machine
> Masses $m_1 = 3$ kg and $m_2 = 5$ kg hang over a frictionless, massless pulley. Find $a$ and $T$. ($g = 10$)
>
> Take "$m_2$ down, $m_1$ up" as positive for both.
>
> $m_2$: $m_2 g - T = m_2 a$
> $m_1$: $T - m_1 g = m_1 a$
>
> Add: $(m_2 - m_1)g = (m_1 + m_2)a \Rightarrow a = \dfrac{2(10)}{8} = 2.5$ m/s²
>
> Then $T = m_1(g + a) = 3(12.5) = 37.5$ N.

> [!tip] Shortcut for Connected Systems
> Treat the whole system as one object: $a = \dfrac{\text{net external force along the motion}}{\text{total mass}}$. For the Atwood machine that's $\dfrac{(m_2 - m_1)g}{m_1 + m_2}$ immediately. Then go back to one FBD to find tension.

---

## 2.6 — Gravitational Force

### Near Earth's Surface

$$F_g = mg, \qquad g \approx 10 \text{ m/s}^2$$

**Weight** is the gravitational force on an object. **Mass** is the amount of matter (inertia). Mass is the same everywhere; weight changes with $g$.

### Newton's Law of Universal Gravitation

Any two masses attract each other with a force

$$F_g = \frac{G m_1 m_2}{r^2}, \qquad G = 6.67 \times 10^{-11} \ \text{N·m}^2\text{/kg}^2$$

where $r$ is the distance between their **centers**. The force on each mass is a Third Law pair — equal magnitude, opposite direction.

- Doubling the distance → force drops to $\tfrac{1}{4}$.
- Tripling the distance → force drops to $\tfrac{1}{9}$.

### Gravitational Field

The gravitational field strength at a distance $r$ from a mass $M$ is the force per unit mass:

$$g = \frac{F_g}{m} = \frac{GM}{r^2}$$

At Earth's surface $g = \dfrac{GM_E}{R_E^2} \approx 9.8$ m/s². A field is a vector — it points toward the mass creating it.

> [!example] Example: Altitude
> At a height of one Earth radius above the surface ($r = 2R_E$), $g = \dfrac{GM_E}{(2R_E)^2} = \dfrac{g_{\text{surface}}}{4} \approx 2.5$ m/s².

### Inertial vs. Gravitational Mass

The mass in $F = ma$ (inertial) and the mass in $F_g = mg$ (gravitational) are experimentally identical. That is why all objects fall with the same acceleration.

### Apparent Weight

What a scale reads is the **normal force**, not $mg$. In free fall (elevator cable cut, orbiting astronaut) the normal force is zero — "weightless" — even though gravity still acts.

---

## 2.7 — Kinetic and Static Friction

Friction is a contact force parallel to the surface that opposes the **relative sliding** between two surfaces.

### Kinetic Friction (sliding)

$$F_{f,k} = \mu_k F_N$$

Acts opposite to the direction the object slides relative to the surface. Roughly independent of speed and contact area.

### Static Friction (not sliding)

$$F_{f,s} \leq \mu_s F_N$$

Static friction adjusts to whatever value is needed to prevent sliding — up to a **maximum** of $\mu_s F_N$. If the required force exceeds that maximum, the object breaks loose and kinetic friction takes over.

- Typically $\mu_s > \mu_k$: it's harder to start something sliding than to keep it sliding.
- $\mu$ is dimensionless and depends only on the two materials.
- Friction can point in the direction of motion (e.g., the ground pushing your foot forward when you walk, or a box on an accelerating truck bed).

> [!warning] Static Friction Is an Inequality
> Do not write $F_{f,s} = \mu_s F_N$ unless the problem says the object is *about to slip* (the maximum case). Otherwise solve for the friction needed from $\sum F = ma$ and then check whether it's below the maximum.

> [!example] Example: Will It Slide?
> A 10 kg box sits on a floor with $\mu_s = 0.5$, $\mu_k = 0.3$. You push horizontally with 40 N.
>
> $F_N = mg = 100$ N. Max static friction $= 0.5(100) = 50$ N. Since $40 < 50$, the box does **not** move; friction is exactly $40$ N (not 50).
>
> Now push with 60 N. $60 > 50$ → box slides. Kinetic friction $= 0.3(100) = 30$ N. $a = \dfrac{60 - 30}{10} = 3$ m/s².

> [!example] Example: Incline With Friction
> A block slides down an incline at angle $\theta$ with kinetic friction coefficient $\mu_k$.
>
> $F_N = mg\cos\theta$. Along incline: $mg\sin\theta - \mu_k mg\cos\theta = ma$
>
> $$a = g(\sin\theta - \mu_k\cos\theta)$$
>
> If the block is at rest and just about to slip: $\tan\theta = \mu_s$.

---

## 2.8 — Spring Forces

An ideal spring exerts a **restoring force** proportional to its displacement from its natural (unstretched) length:

$$\vec{F}_s = -k\,\Delta\vec{x}$$

- $k$ is the **spring constant** (N/m). Stiffer spring → larger $k$.
- $\Delta x$ is the stretch or compression from equilibrium.
- The minus sign means the force always points **back toward** the equilibrium position.
- Magnitude: $|F_s| = k|\Delta x|$.

Springs in AP Physics 1 are massless and ideal (Hooke's Law holds for the range considered).

> [!example] Example: Hanging Mass
> A 2 kg mass hangs at rest from a spring, stretching it 0.1 m. Find $k$. ($g = 10$)
>
> $\sum F = 0$: $k\Delta x = mg \Rightarrow k = \dfrac{20}{0.1} = 200$ N/m.

> [!tip] Graph of $F_s$ vs. $\Delta x$
> A straight line through the origin; slope $= k$. This shows up in lab-based questions — find $k$ from the slope of the best-fit line, not from a single data point.

---

## 2.9 — Circular Motion

An object moving in a circle at constant speed is **accelerating** because its velocity's direction changes. The acceleration points toward the center of the circle — **centripetal** ("center-seeking") acceleration:

$$a_c = \frac{v^2}{r}$$

Since $\vec{a}$ points toward the center, so does the net force:

$$\sum F_{\text{toward center}} = m\frac{v^2}{r}$$

> [!warning] Centripetal Force Is Not a New Force
> "Centripetal force" is just the name for whatever real force (or combination) points toward the center: tension, gravity, friction, normal force. **Never draw a "centripetal force" arrow on an FBD.** Identify the actual force providing it.

### Period, Frequency, Speed

For uniform circular motion with period $T$ (time for one revolution):

$$v = \frac{2\pi r}{T}, \qquad f = \frac{1}{T}$$

### Setting Up Circular Motion Problems

1. FBD with real forces.
2. Choose the **radial** direction (toward center) as positive. The tangential direction is perpendicular.
3. Radial axis: $\sum F_{\text{radial}} = m\dfrac{v^2}{r}$. Forces toward the center are positive; away from the center are negative.
4. If the speed is constant, the tangential net force is zero.

> [!example] Example: Horizontal Circle (Conical Pendulum / Turn)
> A car rounds a flat curve of radius $50$ m. $\mu_s = 0.8$. Max speed without sliding? ($g = 10$)
>
> Static friction points toward the center and supplies the centripetal force.
>
> $\mu_s mg = m\dfrac{v^2}{r} \Rightarrow v = \sqrt{\mu_s g r} = \sqrt{0.8 \cdot 10 \cdot 50} = 20$ m/s.

> [!example] Example: Vertical Circle — Bottom and Top
> A 0.5 kg ball on a string swings in a vertical circle of radius 1 m at speed 5 m/s at both the top and bottom. Find tension at each. ($g = 10$)
>
> **Bottom** (center is up): $T - mg = m\dfrac{v^2}{r} \Rightarrow T = 0.5(10) + 0.5\dfrac{25}{1} = 17.5$ N
>
> **Top** (center is down): $T + mg = m\dfrac{v^2}{r} \Rightarrow T = 12.5 - 5 = 7.5$ N
>
> Tension is greatest at the bottom. At the top, the **minimum** speed to keep the string taut is when $T = 0$: $v_{\min} = \sqrt{gr}$.

> [!example] Example: Banked Curve (No Friction)
> On a frictionless banked curve at angle $\theta$, the horizontal component of the normal force provides the centripetal force.
>
> Vertical: $F_N\cos\theta = mg$. Horizontal: $F_N\sin\theta = m\dfrac{v^2}{r}$.
>
> Divide: $\tan\theta = \dfrac{v^2}{rg}$.

### Non-Uniform Circular Motion

If speed changes, there is also a **tangential** acceleration $a_t$ (from a tangential net force). The total acceleration has both radial and tangential components; $a_c = v^2/r$ still gives the radial part using the instantaneous speed.

> [!tip] Where Is the Force Pointing?
> Ask "what would happen if this force vanished?" If the object would fly off in a straight line tangent to the circle, that force was the one providing the centripetal acceleration. Nothing ever pushes an object *outward* in circular motion — the outward "feeling" is inertia trying to go straight.

---

## Unit Summary

> [!summary] What to Have Cold
> - FBD rules: forces **on** the object only, from a dot, labeled, no velocity/acceleration/"centripetal" arrows
> - $\sum \vec{F} = m\vec{a}$ applied one axis at a time; axis along $\vec{a}$
> - Third Law pairs: same type, opposite direction, **different objects**, never cancel
> - $F_N$ is solved for, never assumed. Incline: $F_N = mg\cos\theta$, $a = g\sin\theta$ (frictionless)
> - $F_g = \dfrac{Gm_1m_2}{r^2}$, $\quad g = \dfrac{GM}{r^2}$, inverse-square
> - $F_{f,k} = \mu_k F_N$; $\quad F_{f,s} \leq \mu_s F_N$ (inequality!)
> - $F_s = -k\Delta x$, restoring
> - Circular: $a_c = \dfrac{v^2}{r}$ toward center, supplied by real forces; $v = \dfrac{2\pi r}{T}$
> - Connected objects share $|a|$; whole-system shortcut for $a$, single FBD for $T$
