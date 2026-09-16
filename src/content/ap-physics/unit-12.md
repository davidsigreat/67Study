---
title: "Unit 12: Magnetism and Electromagnetism"
unit: 12
---

# Unit 12 — Magnetism and Electromagnetism

> [!summary] Big Idea
> Magnetism is electricity in motion. **Moving charges** (currents) create magnetic fields, and magnetic fields push on **moving charges**. Nothing pushes on a stationary charge. The second half — electromagnetic induction — closes the loop: a *changing* magnetic field creates an electric field, which drives current. That's how every generator on Earth works.

Right-hand rules are the whole game. Learn two and practice until they're reflex.

---

## 12.1 — Magnetic Fields

### Magnets and Poles

- Every magnet has a **north** and **south** pole. Like poles repel; opposite poles attract.
- Poles always come in pairs. Cut a magnet in half → two smaller magnets, each with N and S. There are no magnetic monopoles.
- Earth is a giant magnet. Its magnetic **south** pole is near geographic north — that's why a compass's north-seeking end points north.

### The Magnetic Field $\vec{B}$

- Symbol $\vec{B}$; unit **tesla** (T). $1$ T $= 1$ N/(A·m). Earth's field is about $5 \times 10^{-5}$ T; a strong lab magnet ~1 T; a fridge magnet ~$10^{-3}$ T.
- Vector. Direction at any point = the way a compass needle's north end points.
- Field lines run **out of N, into S** outside the magnet, and S → N inside — forming **closed loops**. Unlike electric field lines, they never start or end.
- Closer lines → stronger field.

### Notation for 3D on Paper

| Symbol | Meaning |
|---|---|
| $\odot$ (dot) | Vector **out of** the page (arrow tip coming at you) |
| $\otimes$ (cross) | Vector **into** the page (arrow tail going away) |

### Where Magnetic Fields Come From

All magnetic fields are produced by **moving charges**:
- Currents in wires
- Electrons orbiting and spinning inside atoms (the source of permanent magnetism)

A permanent magnet is a material whose atomic magnetic moments are aligned. In iron, cobalt, nickel (**ferromagnetic** materials) this alignment can be induced and can persist — which is why they stick to magnets and can become magnets. Most materials have randomly oriented atomic moments and show no net magnetism.

### Magnetic Field of a Long Straight Wire

$$B = \frac{\mu_0 I}{2\pi r}$$

- $\mu_0 = 4\pi \times 10^{-7}$ T·m/A (permeability of free space)
- $r$ — perpendicular distance from the wire
- Falls off as $1/r$ (not $1/r^2$)
- Field lines are **concentric circles** around the wire

**Right-Hand Rule #1 (wire → field):** Point your right **thumb** along the current. Your **fingers curl** in the direction of $\vec{B}$.

> [!example] Example
> A wire carries 10 A. At 2 cm away: $B = \dfrac{(4\pi \times 10^{-7})(10)}{2\pi(0.02)} = 10^{-4}$ T — about twice Earth's field.

### Field of a Loop and a Solenoid

- **Single loop:** field inside the loop is perpendicular to its plane. Curl your right fingers with the current; thumb gives the field direction through the center.
- **Solenoid** (many loops): uniform field inside, along the axis, $B = \mu_0 nI$ where $n$ = turns per length. Field outside is weak. A solenoid behaves like a bar magnet; the end where the field exits is its N pole.

### Superposition

Fields from multiple wires or magnets add as vectors. Two parallel wires with currents in the **same** direction: fields cancel between them. **Opposite** directions: fields add between them.

---

## 12.2 — Magnetism and Moving Charges

### Force on a Moving Charge

A charge $q$ moving at velocity $\vec{v}$ through a magnetic field $\vec{B}$ experiences

$$F = |q|vB\sin\theta$$

where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$.

- Maximum when $\vec{v} \perp \vec{B}$ ($\theta = 90°$): $F = qvB$.
- **Zero** when $\vec{v} \parallel \vec{B}$ ($\theta = 0°$ or $180°$).
- Zero if the charge is **stationary** ($v = 0$).
- Direction: **perpendicular to both** $\vec{v}$ and $\vec{B}$.

**Right-Hand Rule #2 (force on a moving charge):** Point your right **fingers** along $\vec{v}$. **Curl** them toward $\vec{B}$ (or: fingers along $\vec{B}$ after pointing thumb along $\vec{v}$ — different teachers, same result). Your **thumb** (or palm) gives $\vec{F}$ on a **positive** charge. For a **negative** charge, **reverse** the direction.

A cleaner version: **thumb** = $\vec{v}$, **fingers** = $\vec{B}$, **palm pushes** in the direction of $\vec{F}$ on a positive charge.

> [!warning] Negative Charges
> Always do the rule for a positive charge, then flip if the charge is negative. Electrons are the usual trap.

### The Magnetic Force Does No Work

Since $\vec{F}$ is always perpendicular to $\vec{v}$, the magnetic force changes the **direction** of motion but never the **speed**. Kinetic energy is constant. A magnetic field alone can't speed up or slow down a charge — only bend its path.

### Circular Motion in a Uniform Field

A charge entering a uniform $\vec{B}$ perpendicular to its velocity moves in a **circle**. The magnetic force provides the centripetal force:

$$qvB = \frac{mv^2}{r} \quad\Rightarrow\quad r = \frac{mv}{qB}$$

- Faster or heavier → bigger circle. Stronger field or more charge → tighter circle.
- Period: $T = \dfrac{2\pi r}{v} = \dfrac{2\pi m}{qB}$ — **independent of speed**. Faster particles make bigger circles in the same time. (This is the principle of the cyclotron.)
- Positive and negative charges circle in **opposite** directions.

If the velocity has a component along $\vec{B}$, that component is unaffected and the path becomes a **helix**.

> [!example] Example: Electron in a Field
> An electron at $3 \times 10^6$ m/s enters a $0.01$ T field perpendicularly. Radius?
>
> $r = \dfrac{(9.11 \times 10^{-31})(3 \times 10^6)}{(1.6 \times 10^{-19})(0.01)} = 1.7 \times 10^{-3}$ m $\approx 1.7$ mm.

### Mass Spectrometer

Ions with the same speed enter a uniform field; radius depends on $m/q$. Heavier ions curve less. Measuring $r$ gives the mass — this is how isotopes are separated and identified.

$$m = \frac{qBr}{v}$$

### Velocity Selector — Crossed Fields

Perpendicular $\vec{E}$ and $\vec{B}$ fields arranged so the electric and magnetic forces on a moving charge oppose each other. Only charges with the right speed pass straight through:

$$qE = qvB \quad\Rightarrow\quad v = \frac{E}{B}$$

Faster charges are deflected one way, slower the other. Independent of $q$ and $m$.

### Lorentz Force

Total electromagnetic force on a charge:

$$\vec{F} = q\vec{E} + q\vec{v} \times \vec{B}$$

Electric force acts on any charge; magnetic force only on moving ones. Electric force can do work; magnetic force cannot.

---

## 12.3 — Magnetism and Current-Carrying Wires

### Force on a Current-Carrying Wire

A wire is full of moving charges, so a field pushes on it. For a straight wire of length $L$ carrying current $I$ in a uniform field $B$:

$$F = BIL\sin\theta$$

- $\theta$ is the angle between the wire (current direction) and $\vec{B}$.
- Max when wire $\perp$ field; zero when parallel.
- Direction: same right-hand rule as for a moving charge — thumb along $I$ (conventional current, so treat it as positive charge flow), fingers along $\vec{B}$, palm pushes toward $\vec{F}$.

> [!example] Example
> A 0.5 m wire carrying 4 A perpendicular to a 0.2 T field: $F = (0.2)(4)(0.5) = 0.4$ N.

### Force Between Two Parallel Wires

Wire 1 creates a field at wire 2; that field pushes on wire 2's current. Per unit length:

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$

- **Same direction** currents → wires **attract**.
- **Opposite direction** currents → wires **repel**.
- Newton's Third Law: equal and opposite forces on both wires.

> [!tip] Reason It Out
> Two wires, both carrying current up the page. Wire 1's field at wire 2 (to its right) is into the page (RHR #1). Force on wire 2: thumb up, fingers into page, palm pushes **left** — toward wire 1. Attract. ✓

### Torque on a Current Loop — Motors

A rectangular current loop in a uniform field: the two sides perpendicular to $\vec{B}$ feel opposite forces, creating a **torque** that rotates the loop until its plane is perpendicular to the field. Reverse the current every half turn (with a commutator) and you have a **DC motor**.

Magnitude at max: $\tau = NIAB$ where $N$ = number of turns, $A$ = loop area.

### Magnetic Dipoles

A current loop acts like a bar magnet with N and S poles. In an external field it experiences a torque aligning its magnetic moment with the field — the same reason a compass needle turns.

---

## 12.4 — Electromagnetic Induction

### Magnetic Flux

Flux is a measure of how much magnetic field passes through a surface:

$$\Phi_B = BA\cos\theta$$

- $A$ — area of the loop
- $\theta$ — angle between $\vec{B}$ and the **normal** (perpendicular) to the loop's surface
- Unit: weber (Wb) $= $ T·m²
- Max flux when the field is perpendicular to the loop's plane ($\theta = 0$); zero when the field lies in the plane ($\theta = 90°$).

Think of it as "number of field lines threading the loop."

### Faraday's Law

A **changing** magnetic flux through a loop induces an emf in the loop:

$$\varepsilon = -N\frac{\Delta\Phi_B}{\Delta t}$$

- $N$ — number of turns in the coil
- The minus sign is Lenz's law (below).
- Only a **change** in flux induces emf. Constant flux, however large → nothing.

Three ways to change flux — change any of $B$, $A$, or $\theta$:

| Change | Example |
|---|---|
| $B$ changes | Move a magnet toward/away from a coil; ramp current in a nearby electromagnet |
| $A$ changes | Slide a bar along rails; stretch or squash a loop |
| $\theta$ changes | Rotate the loop in the field — this is a **generator** |

If the loop is a closed conductor with resistance $R$, the induced current is $I = \dfrac{\varepsilon}{R}$.

### Lenz's Law

The induced current flows in the direction that creates a magnetic field **opposing the change** in flux.

- Flux **increasing** → induced field points **opposite** to the external field (to fight the increase).
- Flux **decreasing** → induced field points **same** direction as the external field (to fight the decrease).

Then use RHR #1 (curl fingers with the current, thumb along the induced field) to find the current direction.

Lenz's law is **energy conservation**: if the induced current helped the change instead of opposing it, flux would grow faster, inducing more current, forever — free energy. Instead, you must do work against the induced effects to keep the change going, and that work becomes electrical energy.

> [!example] Example: Magnet Approaching a Loop
> A bar magnet's N pole moves toward a loop (field through loop is increasing, pointing away from the magnet). Induced field must point **toward** the magnet to oppose. Loop's induced current makes it a magnet with N facing the approaching N — repelling the magnet. You feel resistance pushing it in. Pull it out → induced current reverses, now attracts, resisting the withdrawal.

> [!example] Example: Loop Entering a Field Region
> A rectangular loop moves right into a region where $\vec{B}$ points into the page. Flux (into page) increases → induced field must point out of the page → current is **counterclockwise** (RHR #1: thumb out, fingers curl CCW). Once fully inside (flux constant) → **no** current. Leaving → flux decreases → induced field into page → current **clockwise**.

### Motional emf

A conducting bar of length $L$ moving at speed $v$ perpendicular to a field $B$:

$$\varepsilon = BLv$$

Derivation: charges in the bar move with it; magnetic force $qvB$ pushes them to one end until the electric field from the separated charges balances it: $qE = qvB \Rightarrow E = vB \Rightarrow \Delta V = EL = BLv$. (Or from Faraday: $\Delta\Phi/\Delta t = B\,\Delta A/\Delta t = BLv$.)

If the bar slides on rails completing a circuit with resistance $R$:
- Current $I = \dfrac{BLv}{R}$
- The field pushes back on this current with force $F = BIL = \dfrac{B^2L^2v}{R}$, **opposing the motion** (Lenz).
- To keep the bar at constant $v$, you push with that force; your power $Fv = \dfrac{B^2L^2v^2}{R}$ equals $I^2R$, the power dissipated. Energy conserved.

> [!example] Example: Sliding Bar
> $L = 0.5$ m, $v = 4$ m/s, $B = 0.3$ T, $R = 2\ \Omega$.
>
> $\varepsilon = (0.3)(0.5)(4) = 0.6$ V. $I = 0.3$ A. Force to maintain: $F = (0.3)(0.3)(0.5) = 0.045$ N. Power: $0.045 \times 4 = 0.18$ W $= I^2R = (0.09)(2)$. ✓

### Generators

Rotate a coil in a magnetic field at angular speed $\omega$: $\theta = \omega t$, so $\Phi = BA\cos(\omega t)$ and the emf oscillates — **alternating current**. Peak emf $\varepsilon_{\max} = NBA\omega$. Faster rotation, more turns, bigger loop, or stronger field → larger emf.

### Transformers

Two coils on a shared iron core. AC in the **primary** creates changing flux; the **secondary** sees the same $\Delta\Phi/\Delta t$ per turn:

$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$

Step-up ($N_s > N_p$) raises voltage; step-down lowers it. Ideal transformer conserves power: $V_pI_p = V_sI_s$, so raising voltage lowers current. This is why power lines run at high voltage — less $I^2R$ loss. Transformers **only work with AC** — DC gives constant flux, no induction.

### Eddy Currents and Magnetic Braking

A conducting sheet moving through a field (or a field changing through it) has swirling induced currents — **eddy currents**. By Lenz's law they oppose the motion, producing a drag force with no physical contact. Used in train brakes, exercise bikes, and why a magnet falls slowly through a copper pipe.

---

## Unit Summary

> [!summary] What to Have Cold
> - Field lines: out of N, into S, closed loops; no monopoles; tesla
> - Straight wire: $B = \dfrac{\mu_0 I}{2\pi r}$, circles around wire. **RHR #1**: thumb = $I$, fingers curl = $\vec{B}$
> - Force on moving charge: $F = qvB\sin\theta$. **RHR #2**: thumb = $\vec{v}$, fingers = $\vec{B}$, palm = $\vec{F}$ (flip for negative). Zero if $v = 0$ or $\vec{v} \parallel \vec{B}$
> - Magnetic force does **no work**; speed constant; circular motion $r = \dfrac{mv}{qB}$, $T = \dfrac{2\pi m}{qB}$
> - Velocity selector: $v = E/B$
> - Wire in field: $F = BIL\sin\theta$. Parallel wires: same direction attract, opposite repel
> - Flux $\Phi = BA\cos\theta$; Faraday $\varepsilon = -N\dfrac{\Delta\Phi}{\Delta t}$; only **changing** flux induces
> - Lenz: induced current opposes the **change** in flux (energy conservation)
> - Motional emf $\varepsilon = BLv$; induced current is braked by $F = BIL$; work in = heat out
> - Generator: rotating loop → AC, $\varepsilon_{\max} = NBA\omega$
> - Transformer: $V_s/V_p = N_s/N_p$; power conserved; AC only
