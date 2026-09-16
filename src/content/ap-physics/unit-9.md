---
title: "Unit 9: Thermodynamics"
unit: 9
---

# Unit 9 — Thermodynamics

> [!summary] Big Idea
> Thermodynamics is Newton's laws and energy conservation applied to **enormous numbers of particles at once**. Temperature is average kinetic energy. Pressure is particles hitting walls. Heat is energy moving because of a temperature difference. The First Law is energy conservation; the Second Law says which direction things go on their own.

---

## 9.1 — Thermodynamic Systems

### Systems and Surroundings

A **thermodynamic system** is the collection of matter you choose to analyze — usually a gas in a container. Everything else is the **surroundings**. Energy can cross the boundary as **heat** or **work**; matter may or may not.

| System type | Energy crosses? | Matter crosses? |
|---|---|---|
| Open | Yes | Yes |
| Closed | Yes | No |
| Isolated | No | No |

AP Physics 2 gases are almost always closed systems — a fixed amount of gas.

### Internal Energy

The **internal energy** $U$ of a system is the total energy of all its particles — kinetic energy of their random motion plus any potential energy of their interactions. For an **ideal gas**, there are no interactions, so internal energy is purely kinetic and depends only on temperature:

$$U = \frac{3}{2}Nk_BT = \frac{3}{2}nRT$$

(for a monatomic ideal gas)

- $N$ = number of molecules; $k_B = 1.38 \times 10^{-23}$ J/K (Boltzmann's constant)
- $n$ = number of moles; $R = 8.31$ J/(mol·K) (gas constant)
- $Nk_B = nR$, since $N = nN_A$ and $R = N_A k_B$

> [!tip] Internal Energy Is a State Variable
> $U$ depends only on the current state (temperature) of the gas — not on how it got there. Same $T$ → same $U$. This makes $\Delta U$ path-independent, which is the whole point of 9.4.

### Macroscopic vs. Microscopic

| Macroscopic (what you measure) | Microscopic (what's happening) |
|---|---|
| Pressure $P$ | Particles colliding with walls |
| Temperature $T$ | Average kinetic energy per particle |
| Volume $V$ | Space available to particles |
| Internal energy $U$ | Sum of all particle kinetic energies |

---

## 9.2 — Pressure, Thermal Equilibrium, and the Ideal Gas Law

### Kinetic Theory of Temperature

Temperature is a measure of the **average translational kinetic energy** of the particles:

$$K_{\text{avg}} = \frac{1}{2}m\overline{v^2} = \frac{3}{2}k_BT$$

- $T$ must be in **kelvin**. $T_K = T_{°C} + 273$. Absolute zero ($0$ K) is where particle kinetic energy would be minimum.
- At a given temperature, **all** gases have the same average kinetic energy per particle — regardless of mass.
- Therefore lighter molecules move **faster** on average: $v_{\text{rms}} = \sqrt{\dfrac{3k_BT}{m}} = \sqrt{\dfrac{3RT}{M}}$ where $M$ is molar mass.

> [!example] Example: Speed Comparison
> At the same temperature, hydrogen ($M = 2$ g/mol) vs. oxygen ($M = 32$ g/mol): $\dfrac{v_{H}}{v_{O}} = \sqrt{\dfrac{32}{2}} = 4$. Hydrogen molecules move 4× faster.

### Kinetic Theory of Pressure

Gas pressure comes from countless particles bouncing off the walls. Each collision delivers an impulse; the average force per area is pressure.

Pressure increases when:
- Particles hit **more often** — more particles ($N\uparrow$), or smaller volume ($V\downarrow$), or faster particles ($T\uparrow$)
- Particles hit **harder** — faster particles ($T\uparrow$), more momentum per hit

### Thermal Equilibrium

Two objects in thermal contact exchange energy until they reach the **same temperature**. At that point, energy still flows both ways microscopically, but the net flow is zero. This is thermal equilibrium.

**Zeroth Law:** If A is in equilibrium with C, and B is in equilibrium with C, then A is in equilibrium with B. This is what makes thermometers work.

### The Ideal Gas Law

$$PV = nRT = Nk_BT$$

- $P$ in Pa, $V$ in m³, $T$ in K.
- Describes a gas whose particles have negligible volume and no interactions. Real gases approximate this at low pressure and high temperature.

Handy proportionalities (fixed $n$):

| Held constant | Relationship | Name |
|---|---|---|
| $T$ | $PV = $ const → $P \propto 1/V$ | Boyle's Law (isothermal) |
| $P$ | $V \propto T$ | Charles's Law (isobaric) |
| $V$ | $P \propto T$ | Gay-Lussac's Law (isochoric) |

Comparing two states of the same gas: $\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}$.

> [!example] Example: Heating a Sealed Can
> A sealed can at 300 K and $10^5$ Pa is heated to 450 K. New pressure?
>
> Volume fixed: $\dfrac{P_2}{P_1} = \dfrac{T_2}{T_1} = 1.5 \Rightarrow P_2 = 1.5 \times 10^5$ Pa.

> [!warning] Kelvin Only
> Doubling the Celsius temperature does not double the pressure. $20°\text{C} \to 40°\text{C}$ is $293 \to 313$ K — a 7% increase, not 100%. Every thermodynamic formula uses kelvin.

### $PV$ Diagrams

The state of a gas can be plotted as a point on a graph of $P$ vs. $V$. A **process** is a path between two points. Isotherms (constant $T$) are hyperbolas: higher $T$ → farther from the origin.

---

## 9.3 — Thermodynamics and Forces

### Force From Gas Pressure

A gas at pressure $P$ pushes on a container wall (or piston) of area $A$ with force

$$F = PA$$

perpendicular to the surface. Both sides of a piston push; the **net** force is $(P_{\text{inside}} - P_{\text{outside}})A$.

### Piston Equilibrium

A movable piston is in equilibrium when the net force on it is zero. Typical setup — a vertical cylinder with a piston of mass $m_p$ and area $A$, atmosphere above:

$$P_{\text{gas}}A = P_{\text{atm}}A + m_pg \quad\Rightarrow\quad P_{\text{gas}} = P_{\text{atm}} + \frac{m_pg}{A}$$

If a mass $M$ is placed on the piston, the gas pressure must increase by $\dfrac{Mg}{A}$ to hold it.

> [!example] Example: Adding a Weight
> A frictionless piston ($A = 0.01$ m²) seals gas at $P_{\text{atm}} = 10^5$ Pa. A 10 kg mass is placed on top. New gas pressure once equilibrium is restored? ($g = 10$)
>
> $P_{\text{gas}} = 10^5 + \dfrac{100}{0.01} = 1.1 \times 10^5$ Pa. If temperature is held constant, the gas compresses until $V_2 = V_1 \cdot \dfrac{P_1}{P_2}$.

### Work Done By or On a Gas

When a gas expands against a piston, it does work on the piston. When compressed, work is done on the gas.

$$W_{\text{by gas}} = P\,\Delta V \quad (\text{constant pressure})$$

For a varying pressure, the work is the **area under the $PV$ curve**.

- **Expansion** ($\Delta V > 0$): gas does positive work on surroundings. Gas loses energy through work.
- **Compression** ($\Delta V < 0$): surroundings do positive work on gas. Gas gains energy through work.
- **Constant volume**: no work.

> [!warning] Sign Convention
> The AP Physics 2 equation sheet defines $W$ as work done **on** the gas: $W = -P\Delta V$. Compression → $W > 0$. Expansion → $W < 0$. Some textbooks use the opposite. Pick the AP convention and be consistent — the First Law's form depends on it.

---

## 9.4 — Heat and Energy Transfer

### Heat

**Heat** $Q$ is energy transferred between objects because of a **temperature difference**. It flows spontaneously from hot to cold. Unit: joules.

Heat is not a substance an object "has" — it's energy in transit. An object has internal energy; it receives or gives up heat.

### The First Law of Thermodynamics

Energy conservation for a gas:

$$\Delta U = Q + W$$

with $Q$ = heat added **to** the gas, $W$ = work done **on** the gas (AP convention).

| Term | Positive when | Negative when |
|---|---|---|
| $Q$ | heat flows **into** gas | heat flows **out of** gas |
| $W$ | gas is **compressed** | gas **expands** |
| $\Delta U$ | temperature **rises** | temperature **falls** |

### Special Processes

| Process | Constant | Consequence | First Law becomes |
|---|---|---|---|
| **Isothermal** | $T$ | $\Delta U = 0$ | $Q = -W$ (heat in = work out) |
| **Isobaric** | $P$ | $W = -P\Delta V$ | $\Delta U = Q - P\Delta V$ |
| **Isochoric** (isovolumetric) | $V$ | $W = 0$ | $\Delta U = Q$ |
| **Adiabatic** | no heat exchange | $Q = 0$ | $\Delta U = W$ |

On a $PV$ diagram:
- Isothermal: hyperbola along an isotherm
- Isobaric: horizontal line
- Isochoric: vertical line
- Adiabatic: steeper curve than an isotherm (temperature changes)

> [!example] Example: Isobaric Expansion
> A monatomic ideal gas at $2 \times 10^5$ Pa expands from $0.01$ to $0.03$ m³ at constant pressure while absorbing $10{,}000$ J of heat. Find $W$ and $\Delta U$.
>
> $W = -P\Delta V = -(2 \times 10^5)(0.02) = -4000$ J (gas does work, so $W$ on gas is negative)
>
> $\Delta U = Q + W = 10{,}000 - 4000 = 6000$ J. Temperature rises.

> [!example] Example: Adiabatic Compression
> A gas is compressed rapidly (no time for heat flow) with $3000$ J of work done on it. $\Delta U = +3000$ J — temperature rises. This is why a bicycle pump gets hot.

> [!example] Example: Isothermal Expansion
> A gas expands isothermally, doing $500$ J of work. Since $\Delta U = 0$, it must absorb $Q = 500$ J of heat from surroundings. The energy passes straight through — heat in, work out.

### Cyclic Processes

A gas taken around a closed loop on a $PV$ diagram returns to its starting state, so $\Delta U_{\text{cycle}} = 0$ and $Q_{\text{net}} = -W_{\text{net}}$.

The **net work** done by the gas per cycle equals the **area enclosed** by the loop:
- Clockwise loop → gas does net positive work (heat engine)
- Counterclockwise loop → net work done on gas (refrigerator)

### Heat Transfer Mechanisms

| Mechanism | How | Example |
|---|---|---|
| **Conduction** | Direct contact; particles collide and pass energy | Spoon in hot soup |
| **Convection** | Bulk movement of a fluid carries energy | Hot air rising; boiling water circulation |
| **Radiation** | Electromagnetic waves; no medium needed | Sunlight; heat from a fire on your face |

### Rate of Conduction

$$\frac{Q}{\Delta t} = \frac{kA\,\Delta T}{L}$$

- $k$ — thermal conductivity of the material (W/(m·K)). Metals high; insulators (wood, air, foam) low.
- $A$ — cross-sectional area
- $\Delta T$ — temperature difference across the material
- $L$ — thickness

Thicker, smaller, lower-$k$ → slower heat flow. This is why insulation is thick, foamy, and full of trapped air.

### Specific Heat

The heat required to change an object's temperature:

$$Q = mc\,\Delta T$$

- $c$ — specific heat capacity (J/(kg·K)). Water is unusually high: $4186$ J/(kg·K). Metals are low (copper ≈ 390).
- Objects with high $c$ resist temperature change — they absorb lots of heat for a small $\Delta T$.

### Calorimetry

When hot and cold objects mix in an insulated container, heat lost by one equals heat gained by the other:

$$m_1c_1(T_f - T_1) + m_2c_2(T_f - T_2) = 0$$

> [!example] Example: Mixing Water
> 2 kg of water at 80°C is mixed with 3 kg at 20°C. Final temperature?
>
> $2(T_f - 80) + 3(T_f - 20) = 0 \Rightarrow 5T_f = 220 \Rightarrow T_f = 44°$C.
>
> (Same $c$ cancels. Celsius is fine here because only differences appear.)

---

## 9.5 — Thermodynamics and Collisions

### Microscopic Picture of Pressure

A particle of mass $m$ and speed $v_x$ hitting a wall elastically reverses its $x$-velocity: $\Delta p = 2mv_x$. It returns after crossing the box (length $L$) and back: $\Delta t = \dfrac{2L}{v_x}$. Average force from one particle: $\dfrac{2mv_x}{2L/v_x} = \dfrac{mv_x^2}{L}$.

Summing over $N$ particles and averaging over directions gives

$$PV = \frac{1}{3}Nm\overline{v^2} = \frac{2}{3}N\left(\frac{1}{2}m\overline{v^2}\right) = \frac{2}{3}NK_{\text{avg}}$$

Comparing to $PV = Nk_BT$ yields $K_{\text{avg}} = \dfrac{3}{2}k_BT$ — this is where the kinetic-theory temperature definition comes from.

### Elastic Collisions With a Moving Piston

When a piston **moves inward** (compression), particles bounce off it with **more** speed — like a ball hitting a bat swinging toward it. The gas heats up. This is the microscopic reason adiabatic compression raises temperature.

When a piston **moves outward** (expansion), particles bounce off with **less** speed — the gas cools.

> [!tip] Connecting to the First Law
> Work done on the gas by a moving piston ↔ kinetic energy transferred to particles in collisions ↔ $\Delta U$. Same physics, three descriptions.

### Thermal Contact — Collisions Between Objects

When a hot object touches a cold one, the fast particles in the hot object collide with the slow particles in the cold one at the boundary. On average, the fast ones lose energy and the slow ones gain it. Over many collisions, average kinetic energies (temperatures) equalize. This is conduction at the particle level.

### Maxwell-Boltzmann Distribution

Not all particles in a gas have the same speed. The distribution of speeds is a skewed bell curve:
- Peak at the **most probable speed**; the mean and rms speeds are slightly higher.
- Higher $T$ → curve shifts right and flattens (wider spread).
- Heavier molecules → curve shifts left and narrows.
- Area under the curve = total number of particles (constant).

---

## 9.6 — Probability, Thermal Equilibrium, and Entropy

### Why Heat Flows One Way

Energy could, in principle, spontaneously flow from a cold object to a hot one — nothing in Newton's laws forbids it. It doesn't happen because it is **overwhelmingly improbable**. There are vastly more ways to arrange energy spread out among many particles than concentrated in a few.

### Microstates and Macrostates

- **Macrostate**: what you measure — $P$, $V$, $T$.
- **Microstate**: the exact position and velocity of every particle.
- Many microstates correspond to each macrostate. The macrostate with the **most microstates** is the most probable, and that's the one the system drifts toward.

> [!example] Example: Coins
> Flip 4 coins. There is 1 way to get 4 heads, but 6 ways to get 2 heads. With $10^{23}$ coins (particles), the "half heads" macrostate is so overwhelmingly more likely that you will never observe anything else. Equilibrium is just the most probable arrangement.

### Entropy

**Entropy** $S$ is a measure of the number of microstates corresponding to a macrostate — loosely, a measure of **disorder** or of how spread out energy is.

- More ways to arrange → higher entropy.
- Gas expanding into a bigger volume → more position possibilities → entropy increases.
- Heat flowing into a cold object → its particles gain many new ways to share energy → entropy increases.
- Melting, evaporating, mixing, dissolving → entropy increases.

For heat $Q$ transferred at (approximately constant) temperature $T$:

$$\Delta S = \frac{Q}{T}$$

Unit: J/K. Adding heat at low temperature raises entropy more than adding the same heat at high temperature.

### The Second Law of Thermodynamics

The total entropy of an isolated system **never decreases**. In any spontaneous process, entropy of the universe increases (or stays the same for an idealized reversible process).

Equivalent statements:
- Heat flows spontaneously from **hot to cold**, never the reverse.
- No engine can convert heat **entirely** into work.
- Natural processes are **irreversible** — a broken egg doesn't reassemble.

> [!example] Example: Heat Flow Increases Entropy
> $100$ J flows from a reservoir at $400$ K to one at $200$ K.
>
> $\Delta S_{\text{hot}} = \dfrac{-100}{400} = -0.25$ J/K; $\Delta S_{\text{cold}} = \dfrac{+100}{200} = +0.5$ J/K.
>
> $\Delta S_{\text{total}} = +0.25$ J/K $> 0$. Allowed. The reverse would give $-0.25$ J/K — forbidden.

### Local Decreases Are Fine

Entropy can decrease in one place (a refrigerator makes its inside colder; a freezer turns water into ordered ice) as long as it increases by **more** somewhere else (the heat dumped out the back). The Second Law is about the **total**.

### Heat Engines (Qualitative)

A heat engine takes heat $Q_H$ from a hot reservoir, does work $W$, and dumps waste heat $Q_C$ to a cold reservoir:

$$W = Q_H - Q_C, \qquad e = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}$$

Efficiency is always less than 1 because $Q_C$ can never be zero — dumping heat is what makes the entropy books balance. The theoretical maximum (Carnot) is $e_{\max} = 1 - \dfrac{T_C}{T_H}$.

---

## Unit Summary

> [!summary] What to Have Cold
> - $U = \tfrac{3}{2}Nk_BT = \tfrac{3}{2}nRT$ for a monatomic ideal gas; depends only on $T$
> - $K_{\text{avg}} = \tfrac{3}{2}k_BT$; same for all gases at the same $T$; lighter → faster
> - $PV = nRT = Nk_BT$; **kelvin**; $\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}$
> - $F = PA$; piston equilibrium: $P_{\text{gas}} = P_{\text{atm}} + \dfrac{mg}{A}$
> - Work on gas $W = -P\Delta V$ (compression positive); area under $PV$ curve
> - First Law: $\Delta U = Q + W$. Isothermal: $\Delta U = 0$. Isochoric: $W = 0$. Adiabatic: $Q = 0$
> - Cycle: $\Delta U = 0$; net work = enclosed area; clockwise = engine
> - Conduction rate $\dfrac{Q}{t} = \dfrac{kA\Delta T}{L}$; $Q = mc\Delta T$; calorimetry: heat lost = heat gained
> - Compression → particles bounce off faster → gas heats (microscopic view of $W$)
> - Entropy = number of microstates; $\Delta S = Q/T$; Second Law: $\Delta S_{\text{universe}} \geq 0$
> - Heat flows hot → cold because it's overwhelmingly probable; local decreases allowed if total increases
