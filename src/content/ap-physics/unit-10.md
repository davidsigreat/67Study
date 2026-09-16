---
title: "Unit 10: Electric Force, Field, and Potential"
unit: 10
---

# Unit 10 — Electric Force, Field, and Potential

> [!summary] Big Idea
> Everything in this unit parallels gravity from Physics 1 — with one twist: charge comes in **two signs**, so forces can repel as well as attract. Coulomb's law is Newton's gravitation with $q$ replacing $m$. Electric field is force per charge; electric potential is energy per charge. Capacitors store charge and energy in a field.

| Gravity | Electricity |
|---|---|
| $F = \dfrac{Gm_1m_2}{r^2}$ (always attractive) | $F = \dfrac{kq_1q_2}{r^2}$ (attract or repel) |
| $g = \dfrac{F}{m} = \dfrac{GM}{r^2}$ | $E = \dfrac{F}{q} = \dfrac{kQ}{r^2}$ |
| $U_g = -\dfrac{Gm_1m_2}{r}$ | $U_E = \dfrac{kq_1q_2}{r}$ |
| — | $V = \dfrac{U_E}{q} = \dfrac{kQ}{r}$ |

---

## 10.1 — Electric Charge and Electric Force

### Charge

Electric charge is a fundamental property of matter, like mass.

- Two kinds: **positive** (protons) and **negative** (electrons). Like charges repel; opposite charges attract.
- Unit: coulomb (C). The elementary charge $e = 1.6 \times 10^{-19}$ C. A proton has $+e$, an electron $-e$.
- Charge is **quantized**: any charge is an integer multiple of $e$. ($q = ne$)
- Charge is **conserved**: it can move between objects but is never created or destroyed. The net charge of an isolated system is constant.
- Neutral objects have equal amounts of positive and negative charge, not zero charge.

### Coulomb's Law

The force between two point charges:

$$F = \frac{k\,|q_1q_2|}{r^2}, \qquad k = \frac{1}{4\pi\varepsilon_0} = 9.0 \times 10^9 \ \text{N·m}^2\text{/C}^2$$

- $r$ is the distance between the charges (center to center).
- Direction: along the line joining them. Repulsive if same sign, attractive if opposite.
- Inverse-square: double the distance → one quarter the force.
- The two forces are a Newton's Third Law pair — equal magnitude, opposite direction, regardless of which charge is bigger.

> [!warning] Use Magnitudes, Then Assign Direction
> Compute $F$ with absolute values. Then draw the direction from the signs. Plugging signed charges into the formula and interpreting a negative result is error-prone with multiple charges.

> [!example] Example: Electron and Proton
> Hydrogen atom: $r = 5.3 \times 10^{-11}$ m.
>
> $$F = \frac{(9 \times 10^9)(1.6 \times 10^{-19})^2}{(5.3 \times 10^{-11})^2} = 8.2 \times 10^{-8} \text{ N}$$
>
> Gravitational force between them: $3.6 \times 10^{-47}$ N. Electricity wins by 39 orders of magnitude — this is why gravity is irrelevant at atomic scales.

### Superposition

The net force on a charge from several other charges is the **vector sum** of the individual forces. Compute each pairwise force, resolve into components, add.

> [!example] Example: Three Charges in a Line
> $q_1 = +2\ \mu$C at $x = 0$, $q_2 = -3\ \mu$C at $x = 1$ m, $q_3 = +1\ \mu$C at $x = 2$ m. Net force on $q_3$?
>
> From $q_1$ (repulsive, pushes $q_3$ in $+x$): $F_{13} = \dfrac{(9 \times 10^9)(2 \times 10^{-6})(1 \times 10^{-6})}{4} = 4.5 \times 10^{-3}$ N, $+x$
> From $q_2$ (attractive, pulls $q_3$ in $-x$): $F_{23} = \dfrac{(9 \times 10^9)(3 \times 10^{-6})(1 \times 10^{-6})}{1} = 2.7 \times 10^{-2}$ N, $-x$
>
> Net: $4.5 \times 10^{-3} - 2.7 \times 10^{-2} = -2.25 \times 10^{-2}$ N (toward $q_2$).

### Comparing With Gravity

Both inverse-square. Key differences: electric force can repel; electric force is enormously stronger for elementary particles; large objects are nearly neutral, so gravity dominates at astronomical scales.

---

## 10.2 — Conservation of Electric Charge and the Process of Charging

### Conductors and Insulators

| | Conductor | Insulator |
|---|---|---|
| Charge carriers | Free electrons move easily | Electrons bound to atoms |
| Excess charge | Spreads over the **surface** | Stays where placed |
| Examples | Metals, salt water, humans | Rubber, glass, plastic, dry air |

In metals, only **electrons** move. A positively charged conductor is one that has **lost** electrons.

### Three Ways to Charge an Object

**1. Friction (contact between insulators)**
Rubbing two different materials transfers electrons from one to the other. Rubber rubbed with fur takes electrons → rubber negative, fur positive. Total charge is conserved: whatever one gains, the other loses.

**2. Conduction (touching a charged object to a conductor)**
Charge flows between them until they share it. Two identical conducting spheres touched together end with **equal** charges: $q_f = \dfrac{q_1 + q_2}{2}$ each. Different-size spheres do not split evenly.

**3. Induction (no contact)**
A charged object brought **near** a neutral conductor pulls opposite charge toward it and pushes like charge to the far side — the conductor becomes **polarized** but remains neutral overall. If the far side is then **grounded** (connected to Earth, an effectively infinite charge reservoir), the pushed-away charge escapes. Remove the ground, then remove the charged object: the conductor is left with a net charge **opposite** to the inducing charge.

> [!example] Example: Charging by Induction
> A negative rod is held near a neutral metal sphere. Electrons in the sphere are repelled to the far side. Touch the far side with a ground wire — electrons flow to Earth. Remove the wire, then the rod. Sphere is now **positive**.

### Polarization of Insulators

An insulator can't have its electrons move freely, but a nearby charge slightly shifts the electron clouds within each molecule. The molecules become tiny dipoles aligned with the field. This is how a charged balloon sticks to a neutral wall, and why a comb picks up bits of paper — the **near** side of each neutral piece is oppositely charged, and since the force is stronger at closer range, the net force is attractive.

> [!tip] Neutral Objects Are Always Attracted
> A charged object (either sign) attracts a neutral object through polarization. It never repels one. If two objects repel, both are charged with the same sign. If they attract, either they're opposite charges or one is neutral.

### Grounding

Connecting a conductor to Earth allows charge to flow until the conductor is at Earth's potential (essentially neutral). Earth is so big its own charge state doesn't change measurably.

### Electroscope

A metal rod with two thin metal leaves at the bottom. When charge reaches the leaves (by conduction or induction), they carry the same sign and repel, spreading apart. The amount of spread indicates the magnitude of charge — but not its sign, unless you know the charge already on it.

---

## 10.3 — Electric Fields

### Definition

A charge creates an electric field in the space around it. The field at a point is the force **per unit positive test charge** that would be placed there:

$$\vec{E} = \frac{\vec{F}}{q} \qquad\Longleftrightarrow\qquad \vec{F} = q\vec{E}$$

- Unit: N/C (equivalently V/m).
- Vector. Points in the direction a **positive** charge would be pushed. A negative charge feels a force **opposite** to $\vec{E}$.
- The field exists whether or not a test charge is present.

### Field of a Point Charge

$$E = \frac{k|Q|}{r^2}$$

- Points **away** from a positive $Q$, **toward** a negative $Q$.
- Inverse-square, like the force.
- Fields from multiple charges add as **vectors** (superposition).

> [!example] Example: Between Two Charges
> $+Q$ at $x = 0$ and $-Q$ at $x = 2$ m. Field at $x = 1$ m?
>
> From $+Q$: points away, in $+x$, magnitude $\dfrac{kQ}{1}$.
> From $-Q$: points toward, also in $+x$, magnitude $\dfrac{kQ}{1}$.
>
> Both point the same way: $E = \dfrac{2kQ}{1}$ in $+x$. (For $+Q$ and $+Q$, they'd cancel at the midpoint.)

### Field Lines

Rules for drawing and reading them:
- Start on positive charges, end on negative charges (or go off to infinity).
- The tangent to a field line gives the direction of $\vec{E}$.
- **Density** of lines indicates field **strength** — closer together, stronger field.
- Lines never cross (the field has one direction at each point).
- Number of lines leaving/entering a charge is proportional to its magnitude.

| Configuration | Pattern |
|---|---|
| Single $+$ | Radially outward |
| Single $-$ | Radially inward |
| $+$ and $-$ (dipole) | Curved lines from $+$ to $-$ |
| $+$ and $+$ | Lines repel; zero field at the midpoint |
| Parallel plates ($+$ and $-$) | Uniform, parallel lines from $+$ plate to $-$ plate |

### Uniform Field — Parallel Plates

Between two large, closely spaced, oppositely charged parallel plates the field is **uniform** (same magnitude and direction everywhere, ignoring edges):

$$E = \frac{\Delta V}{d}$$

where $\Delta V$ is the potential difference between the plates and $d$ is their separation. Direction: from $+$ plate to $-$ plate.

### Motion of a Charge in a Uniform Field

A charge $q$ in a uniform field $E$ feels a constant force $F = qE$, so it has constant acceleration $a = \dfrac{qE}{m}$. This is **projectile motion** with $E$ playing the role of $g$:

- Released from rest → accelerates along the field lines (positive with $E$, negative against).
- Enters perpendicular to the field → parabolic path, exactly like a thrown ball.

> [!example] Example: Electron Between Plates
> An electron enters a uniform field $E = 1000$ N/C, initially moving perpendicular to the field at $2 \times 10^6$ m/s. Plates are $0.1$ m long. Deflection on exit?
>
> $a = \dfrac{eE}{m_e} = \dfrac{(1.6 \times 10^{-19})(1000)}{9.11 \times 10^{-31}} = 1.76 \times 10^{14}$ m/s² (toward the positive plate)
>
> Time in field: $t = \dfrac{0.1}{2 \times 10^6} = 5 \times 10^{-8}$ s
>
> Deflection: $y = \tfrac{1}{2}at^2 = \tfrac{1}{2}(1.76 \times 10^{14})(2.5 \times 10^{-15}) = 0.22$ m — larger than realistic plate spacing; it would hit the plate. Gravity is negligible here ($g = 10 \ll 10^{14}$).

### Conductors in Electrostatic Equilibrium

When charges in a conductor have stopped moving:
- $E = 0$ **inside** the conductor. (If it weren't, free electrons would move.)
- All excess charge sits on the **surface**.
- $\vec{E}$ at the surface is **perpendicular** to the surface.
- Charge concentrates at **sharp points** (higher field there — lightning rods).
- A hollow conductor **shields** its interior from external fields (Faraday cage).

---

## 10.4 — Electric Potential Energy

### Two Point Charges

The potential energy of a system of two point charges separated by $r$:

$$U_E = \frac{kq_1q_2}{r}$$

- **Signs matter here** — plug in signed charges.
- $U_E > 0$ for like charges (they repel; you did work pushing them together; they'd fly apart and gain kinetic energy).
- $U_E < 0$ for opposite charges (they attract; bound system, like gravity).
- Reference: $U_E = 0$ at $r = \infty$.
- Belongs to the **system**, not to one charge.

Compare gravity: $U_g = -\dfrac{Gm_1m_2}{r}$ is always negative because masses always attract.

### Multiple Charges

Add the potential energies of every **pair**:

$$U_{\text{total}} = \frac{kq_1q_2}{r_{12}} + \frac{kq_1q_3}{r_{13}} + \frac{kq_2q_3}{r_{23}} + \cdots$$

Scalars — no components. This is the work needed to assemble the configuration from infinity.

### Energy Conservation With Charges

$$K_i + U_{E,i} = K_f + U_{E,f}$$

The go-to tool for "how fast when it reaches…" questions. Coulomb's law gives varying force, so kinematics won't work — energy does.

> [!example] Example: Two Protons Released
> Two protons are held $1 \times 10^{-10}$ m apart and released. Speed of each when very far apart?
>
> $U_i = \dfrac{(9 \times 10^9)(1.6 \times 10^{-19})^2}{10^{-10}} = 2.3 \times 10^{-18}$ J. $U_f = 0$.
>
> By symmetry each proton gets half: $\tfrac{1}{2}m_pv^2 = 1.15 \times 10^{-18} \Rightarrow v = \sqrt{\dfrac{2(1.15 \times 10^{-18})}{1.67 \times 10^{-27}}} = 3.7 \times 10^4$ m/s.

### In a Uniform Field

Moving a charge $q$ a distance $d$ **along** a uniform field $E$:

$$\Delta U_E = -qEd$$

A positive charge moving with the field loses potential energy (gains kinetic). Exactly like a mass falling in gravity: $\Delta U_g = -mgd$.

---

## 10.5 — Electric Potential

### Definition

Electric potential is potential energy **per unit charge**:

$$V = \frac{U_E}{q} \qquad\Longleftrightarrow\qquad U_E = qV$$

- Unit: volt (V). $1 \text{ V} = 1 \text{ J/C}$.
- **Scalar.** No direction, no components. This makes it much easier to work with than field.
- Exists at every point in space whether a test charge is there or not.
- Only **differences** in potential are physical. You can set $V = 0$ wherever convenient (infinity for point charges; one plate or the ground for circuits).

> [!tip] Field vs. Potential
> **Field** $E$ — vector, N/C, force per charge. **Potential** $V$ — scalar, volts, energy per charge. Field tells you which way a charge is pushed; potential tells you how much energy it has. They're related by $E = -\dfrac{\Delta V}{\Delta x}$ — field points from high $V$ to low $V$, downhill.

### Potential of a Point Charge

$$V = \frac{kQ}{r}$$

- Signed: positive $Q$ → positive $V$; negative $Q$ → negative $V$.
- $1/r$, not $1/r^2$.
- Multiple charges: **add the scalars**. No vectors.

> [!example] Example: Two Charges, Potential at Midpoint
> $+Q$ and $-Q$ separated by $2$ m. At the midpoint: $V = \dfrac{kQ}{1} + \dfrac{k(-Q)}{1} = 0$.
>
> But the **field** there is $\dfrac{2kQ}{1}$, not zero (see 10.3). Zero potential does not mean zero field, and vice versa.

### Potential Difference and Work

The work done by the electric field on a charge moving from A to B is

$$W_{\text{field}} = -\Delta U = -q\,\Delta V = -q(V_B - V_A)$$

The work **you** must do to move it (at constant speed, against the field) is $+q\Delta V$.

- Positive charges naturally move from high $V$ to low $V$ (like water flowing downhill).
- Negative charges naturally move from low $V$ to high $V$.
- Moving perpendicular to the field → $\Delta V = 0$ → no work.

### The Electron-Volt

The energy gained by a charge $e$ accelerated through $1$ V:

$$1 \text{ eV} = 1.6 \times 10^{-19} \text{ J}$$

A convenient unit for atomic and particle physics. A charge $q = ne$ through $\Delta V$ gains $n\,\Delta V$ eV.

> [!example] Example: Accelerating an Electron
> An electron starts from rest and moves through a potential difference of $500$ V. Final speed?
>
> $K = e\Delta V = 500$ eV $= 8 \times 10^{-17}$ J.
>
> $v = \sqrt{\dfrac{2K}{m_e}} = \sqrt{\dfrac{2(8 \times 10^{-17})}{9.11 \times 10^{-31}}} = 1.3 \times 10^7$ m/s.

### Uniform Field and Potential

In a uniform field (parallel plates), potential changes linearly with position along the field:

$$\Delta V = -Ed \qquad \text{or} \qquad |E| = \frac{|\Delta V|}{d}$$

The plate at higher potential is the positive one. Field points from high $V$ to low $V$.

### Equipotential Lines and Surfaces

An **equipotential** is a set of points all at the same potential.

Rules:
- Equipotentials are always **perpendicular** to field lines.
- Moving a charge along an equipotential requires **no work**.
- Field points from **higher** to **lower** potential.
- Where equipotentials are **closely spaced**, the field is **strong** (large $\Delta V$ over small $d$).
- The surface of a conductor in equilibrium is an equipotential; the whole conductor is at one potential.

| Configuration | Equipotentials |
|---|---|
| Point charge | Concentric spheres (circles in 2D) |
| Parallel plates | Planes parallel to the plates, evenly spaced |
| Dipole | Curved surfaces; the perpendicular bisector is $V = 0$ |

> [!tip] Reading an Equipotential Map
> Given contour lines labeled with voltages: field direction is perpendicular to the lines, pointing toward decreasing $V$. Field magnitude ≈ $\dfrac{\Delta V}{\Delta d}$ between adjacent lines. Work to move $q$ from one line to another $= q\,\Delta V$, independent of path.

---

## 10.6 — Capacitors

### What a Capacitor Is

Two conductors separated by an insulator (or vacuum), storing opposite charges $+Q$ and $-Q$. The standard model is two **parallel plates**.

### Capacitance

$$C = \frac{Q}{\Delta V}$$

- Unit: farad (F). $1 \text{ F} = 1 \text{ C/V}$. Real capacitors are µF, nF, pF.
- Capacitance is a property of the **geometry**, not of $Q$ or $V$. Doubling $Q$ doubles $V$; $C$ stays the same.
- $Q$ means the charge on **one** plate. Net charge on the capacitor is zero.

### Parallel-Plate Capacitor

$$C = \frac{\kappa\varepsilon_0 A}{d}$$

- $A$ — plate area; $d$ — plate separation
- $\varepsilon_0 = 8.85 \times 10^{-12}$ F/m (permittivity of free space)
- $\kappa$ — dielectric constant of the insulating material between the plates ($\kappa = 1$ for vacuum/air; $> 1$ for everything else)

Bigger plates or closer spacing → more capacitance.

### Field and Potential Inside

Between the plates the field is uniform:

$$E = \frac{\Delta V}{d} = \frac{Q}{\kappa\varepsilon_0 A}$$

### Energy Stored

Work is required to move charge onto the plates against the growing potential difference. That work is stored in the electric field:

$$U_C = \frac{1}{2}Q\Delta V = \frac{1}{2}C(\Delta V)^2 = \frac{Q^2}{2C}$$

All three forms are equivalent via $Q = C\Delta V$. Choose the one using the quantities that are **held constant** in the situation.

### Dielectrics

Inserting an insulator between the plates **increases** capacitance by factor $\kappa$. The dielectric's molecules polarize, producing an internal field that partially cancels the plates' field.

| Scenario | Constant | Result of inserting dielectric |
|---|---|---|
| Battery **connected** | $\Delta V$ | $C\uparrow$, so $Q\uparrow$ by $\kappa$; $E$ unchanged; $U\uparrow$ |
| Battery **disconnected** (isolated) | $Q$ | $C\uparrow$, so $\Delta V\downarrow$ by $\kappa$; $E\downarrow$; $U\downarrow$ |

> [!warning] What's Held Fixed?
> Every capacitor "what happens if…" question hinges on this. Connected to a battery → $\Delta V$ fixed. Disconnected → $Q$ fixed (charge has nowhere to go). Decide first, then work through $C = Q/\Delta V$.

> [!example] Example: Pulling Plates Apart
> An isolated charged capacitor has its plates pulled to twice the separation. What happens?
>
> $Q$ fixed. $C \to C/2$. $\Delta V = Q/C \to 2\Delta V$. $E = \Delta V/d$ → unchanged (since $E = Q/\varepsilon_0 A$ depends only on $Q$ and $A$). $U = Q^2/2C \to 2U$ — you did work pulling the attracting plates apart.

> [!example] Example: Energy Stored
> A $10\ \mu$F capacitor charged to $100$ V stores $U = \tfrac{1}{2}(10^{-5})(10^4) = 0.05$ J and holds $Q = 10^{-3}$ C on each plate.

---

## 10.7 — Conservation of Electric Energy

### The Big Principle

Electric potential energy is just another form of energy. Total energy (kinetic + electric potential + any other) is conserved for a closed system:

$$K_i + U_{E,i} + U_{\text{other},i} = K_f + U_{E,f} + U_{\text{other},f}$$

Work done by external agents (a battery, your hand pushing a charge) adds or removes energy.

### Charge Moving Through a Potential Difference

$$\Delta K = -q\,\Delta V$$

A positive charge speeds up moving toward lower potential. A negative charge speeds up moving toward higher potential. This one line handles accelerators, cathode-ray tubes, and "find the speed" problems.

> [!example] Example: Proton Between Plates
> A proton is released from rest at the positive plate of a capacitor with $\Delta V = 200$ V. Speed at the negative plate?
>
> $\tfrac{1}{2}m_pv^2 = e\Delta V = 200$ eV $= 3.2 \times 10^{-17}$ J $\Rightarrow v = \sqrt{\dfrac{2(3.2 \times 10^{-17})}{1.67 \times 10^{-27}}} \approx 2 \times 10^5$ m/s.

### Charge Approaching a Fixed Charge

Kinetic energy converts to potential energy as like charges approach; closest approach is where $K = 0$.

> [!example] Example: Closest Approach
> An alpha particle ($q = 2e$, $K = 5$ MeV) fired head-on at a gold nucleus ($Q = 79e$). Distance of closest approach?
>
> $K = \dfrac{kqQ}{r_{\min}} \Rightarrow r_{\min} = \dfrac{(9 \times 10^9)(2)(79)(1.6 \times 10^{-19})^2}{5 \times 10^6 \times 1.6 \times 10^{-19}} = 4.5 \times 10^{-14}$ m.
>
> This is Rutherford's experiment — the result showed the nucleus is tiny.

### Capacitor Energy in Circuits

When a capacitor charges from a battery, the battery supplies energy $Q\Delta V$, but the capacitor stores only $\tfrac{1}{2}Q\Delta V$. The other half is dissipated as heat in the wires (or radiated) — regardless of resistance. When a capacitor discharges through a resistor, all $\tfrac{1}{2}C\Delta V^2$ becomes thermal energy in the resistor.

### Sharing Charge Between Capacitors

Connecting a charged capacitor to an uncharged one: **charge** is conserved (redistributes until both have the same $\Delta V$), but **energy is lost** (some becomes heat/radiation during the transfer).

> [!example] Example: Two Equal Capacitors
> $C_1 = C$ charged to $V_0$ is connected in parallel to identical uncharged $C_2$.
>
> Charge: $CV_0 = 2CV_f \Rightarrow V_f = V_0/2$.
> Energy before: $\tfrac{1}{2}CV_0^2$. After: $2 \times \tfrac{1}{2}C(V_0/2)^2 = \tfrac{1}{4}CV_0^2$. Half the energy is lost.

---

## Unit Summary

> [!summary] What to Have Cold
> - Charge quantized ($q = ne$), conserved; like repel, opposite attract; neutral is always attracted (polarization)
> - Coulomb: $F = \dfrac{k|q_1q_2|}{r^2}$; magnitudes then direction; superpose as vectors
> - Charging: friction (insulators), conduction (touch), induction (near + ground → opposite charge)
> - Conductors: charge on surface, $E = 0$ inside, surface is an equipotential, $E \perp$ surface
> - $\vec{E} = \vec{F}/q$; point charge $E = kQ/r^2$; away from $+$, toward $-$; lines dense = strong
> - Uniform field between plates: $E = \Delta V/d$; charge does projectile motion
> - $U_E = kq_1q_2/r$ (signed); $V = kQ/r$ (signed, scalar, add directly)
> - $\Delta K = -q\Delta V$; $1$ eV $= 1.6 \times 10^{-19}$ J
> - Equipotentials $\perp$ field lines; field points high $V \to$ low $V$; close lines = strong field; no work along an equipotential
> - $C = Q/\Delta V = \kappa\varepsilon_0 A/d$; $U = \tfrac{1}{2}C\Delta V^2 = \tfrac{1}{2}Q\Delta V = Q^2/2C$
> - Battery connected → $\Delta V$ fixed; disconnected → $Q$ fixed. Dielectric raises $C$ by $\kappa$
> - Energy conserved: charged particles trade $K$ and $U_E$; capacitors sharing charge lose energy
