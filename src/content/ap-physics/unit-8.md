---
title: "Unit 8: Fluids"
unit: 8
---

# Unit 8 — Fluids

> [!summary] Big Idea
> Fluids (liquids and gases) are just matter that flows. Every result in this unit is Newton's laws and conservation of energy applied to a substance that can't hold a shape. Four ideas: **density**, **pressure**, **buoyancy** (Archimedes), and **flow** (continuity + Bernoulli).

---

## 8.1 — Internal Structure and Density

### What Makes a Fluid

A fluid is a substance with no fixed shape — it takes the shape of its container. Liquids have a fixed volume (nearly incompressible); gases expand to fill their container (compressible). Fluids **cannot** sustain a shear force at rest, which is why the pressure force on a submerged surface is always **perpendicular** to that surface.

### Density

$$\rho = \frac{m}{V}$$

- Unit: kg/m³. (Often quoted in g/cm³: $1 \text{ g/cm}^3 = 1000 \text{ kg/m}^3$.)
- Water: $\rho_w = 1000$ kg/m³. Air: about $1.2$ kg/m³. Mercury: $13{,}600$ kg/m³.
- Density is an **intensive** property — it doesn't depend on how much of the substance you have. Half a brick has the same density as a whole brick.
- Gases: density depends strongly on pressure and temperature. Liquids: nearly constant.

For a composite object (a hollow ball, a boat), the **average density** is total mass over total volume, including any empty space inside.

> [!example] Example
> A 2 kg block has volume $0.004$ m³. $\rho = 500$ kg/m³ — half the density of water. It will float half-submerged (see 8.3).

> [!tip] Density Decides Floating
> An object floats if its average density is less than the fluid's; sinks if greater; hovers (neutrally buoyant) if equal. Steel sinks, a steel ship floats — because the ship's average density (steel + air inside the hull) is less than water's.

---

## 8.2 — Pressure

### Definition

Pressure is force per unit area, applied perpendicular to a surface:

$$P = \frac{F_\perp}{A}$$

- Unit: pascal (Pa). $1 \text{ Pa} = 1 \text{ N/m}^2$. Atmospheric pressure $P_{\text{atm}} \approx 1.0 \times 10^5$ Pa $= 100$ kPa.
- Pressure is a **scalar**. At a point in a static fluid, pressure is the same in every direction.
- The force a fluid exerts on a surface is perpendicular to that surface, magnitude $F = PA$.

### Pressure in a Static Fluid Increases With Depth

Consider a column of fluid of height $h$ and cross-section $A$. The fluid below must support the weight of the fluid above it plus whatever pressure is on top:

$$P = P_0 + \rho g h$$

- $P_0$ is the pressure at the top of the column (often $P_{\text{atm}}$ if the surface is open).
- $h$ is the **depth below the surface** — measured downward.
- Depends only on depth, density, and $g$. **Not** on the shape or total volume of the container. A thin tube and a lake have the same pressure at the same depth.
- All points at the same depth in a connected static fluid are at the same pressure.

> [!example] Example: Pressure at Depth
> Pressure 10 m underwater ($g = 10$):
>
> $P = 10^5 + (1000)(10)(10) = 2 \times 10^5$ Pa — double atmospheric. Every 10 m of water adds about one atmosphere.

### Absolute vs. Gauge Pressure

- **Absolute pressure** — the total pressure, including atmospheric: $P_{\text{abs}} = P_{\text{atm}} + \rho g h$.
- **Gauge pressure** — pressure above atmospheric: $P_{\text{gauge}} = \rho g h$. This is what a tire gauge reads.

> [!warning] Which One?
> "Pressure at the bottom of the tank" usually means **absolute** — include $P_{\text{atm}}$. "Net force on the bottom of the tank" from inside vs. outside → the atmospheric parts cancel, leaving gauge pressure × area. Read carefully.

### Pascal's Principle

A pressure change applied to an enclosed, incompressible fluid is transmitted **undiminished** to every part of the fluid and to the container walls.

**Hydraulic lift:** two pistons of areas $A_1$ and $A_2$ connected by fluid.

$$P_1 = P_2 \quad\Rightarrow\quad \frac{F_1}{A_1} = \frac{F_2}{A_2} \quad\Rightarrow\quad F_2 = F_1\frac{A_2}{A_1}$$

A small force on a small piston produces a large force on a large piston. **Energy is still conserved**: the small piston moves farther. $F_1 d_1 = F_2 d_2$, since the same volume of fluid is displaced ($A_1 d_1 = A_2 d_2$).

> [!example] Example: Hydraulic Jack
> A 100 N push on a 0.01 m² piston lifts a car on a 0.5 m² piston.
>
> $F_2 = 100 \cdot \dfrac{0.5}{0.01} = 5000$ N. To lift the car 0.1 m, the small piston must move $0.1 \cdot 50 = 5$ m.

### Barometers and Manometers

A **barometer** balances atmospheric pressure against a column of liquid with vacuum above it: $P_{\text{atm}} = \rho g h$. For mercury, $h \approx 0.76$ m; for water it would be about 10 m.

A **U-tube manometer** compares two pressures: the difference in fluid heights gives $\Delta P = \rho g\,\Delta h$.

---

## 8.3 — Fluids and Newton's Laws

### Buoyant Force — Where It Comes From

Pressure increases with depth, so the upward pressure force on the bottom of a submerged object is **greater** than the downward pressure force on its top. The net upward force from the fluid is the **buoyant force**.

### Archimedes' Principle

The buoyant force on an object equals the **weight of the fluid it displaces**:

$$F_b = \rho_{\text{fluid}}\,V_{\text{displaced}}\,g$$

- $\rho_{\text{fluid}}$ is the density of the **fluid**, not the object.
- $V_{\text{displaced}}$ is the volume of the object that is **under the surface** — for a fully submerged object, its whole volume; for a floating object, only the submerged part.
- Direction: **up**.
- Does **not** depend on the object's mass, density, or depth (for an incompressible fluid).

> [!warning] Most Common Mistake
> Using the object's density or the object's total volume. $F_b = (\text{fluid density}) \times (\text{submerged volume}) \times g$. Two identical-size blocks, one lead and one wood, both fully submerged, feel the **same** buoyant force.

### Sink, Float, or Hover

Compare $F_b$ (with full submersion) to the object's weight:

| Condition | Result |
|---|---|
| $\rho_{\text{obj}} > \rho_{\text{fluid}}$ | $F_b < mg$ → sinks (accelerates down, or rests on the bottom with a normal force) |
| $\rho_{\text{obj}} = \rho_{\text{fluid}}$ | $F_b = mg$ → neutrally buoyant, hovers |
| $\rho_{\text{obj}} < \rho_{\text{fluid}}$ | $F_b > mg$ if fully submerged → rises, then floats with only part submerged so that $F_b = mg$ |

### Floating Objects

An object floating in equilibrium has $F_b = mg$:

$$\rho_{\text{fluid}} V_{\text{sub}}\, g = \rho_{\text{obj}} V_{\text{obj}}\, g \quad\Rightarrow\quad \frac{V_{\text{sub}}}{V_{\text{obj}}} = \frac{\rho_{\text{obj}}}{\rho_{\text{fluid}}}$$

The **fraction submerged** equals the density ratio. Ice ($\rho \approx 920$ kg/m³) floats in water with 92% below the surface.

> [!example] Example: Wooden Block
> A block of density 600 kg/m³ floats in water. Fraction submerged? $\dfrac{600}{1000} = 0.6$ — 60% underwater, 40% above.
>
> In oil of density 800 kg/m³: $\dfrac{600}{800} = 0.75$ — sits lower.

### Submerged Objects — Newton's Second Law

Draw the FBD: weight down, buoyant force up, plus tension/normal if attached or resting. Then $\sum F = ma$.

> [!example] Example: Apparent Weight
> A 2 kg aluminum block ($\rho = 2700$ kg/m³) hangs from a scale, fully submerged in water. Reading? ($g = 10$)
>
> $V = \dfrac{m}{\rho} = \dfrac{2}{2700} = 7.4 \times 10^{-4}$ m³
>
> $F_b = (1000)(7.4 \times 10^{-4})(10) = 7.4$ N
>
> $T = mg - F_b = 20 - 7.4 = 12.6$ N. The block "weighs" 12.6 N in water — the scale reads the tension.

> [!example] Example: Released Underwater
> A ball of density 500 kg/m³ is released from rest fully underwater. Initial acceleration? ($g = 10$)
>
> $F_b = \rho_w V g$, $\; mg = \rho_{\text{ball}} V g$.
>
> $$a = \frac{F_b - mg}{m} = \frac{(\rho_w - \rho_{\text{ball}})Vg}{\rho_{\text{ball}}V} = \frac{(1000 - 500)}{500}(10) = 10 \text{ m/s}^2 \text{ upward}$$
>
> (Ignoring drag, which in reality would be significant.)

### Buoyancy and the Container

By Newton's Third Law, if the fluid pushes up on the object with $F_b$, the object pushes down on the fluid with $F_b$. So when you put an object in a container of water on a scale, the scale reading increases by $F_b$ — for a floating object, by exactly the object's weight.

---

## 8.4 — Fluids and Conservation Laws

### Ideal Fluid Flow

AP Physics 1 assumes fluids that are:
- **Incompressible** — density constant
- **Non-viscous** — no internal friction
- **Steady** (laminar) — flow pattern doesn't change with time; no turbulence

### Volume Flow Rate

$$Q = \frac{\Delta V}{\Delta t} = Av$$

where $A$ is the cross-sectional area of the pipe and $v$ is the fluid speed. Unit: m³/s.

### Continuity Equation — Conservation of Mass

For an incompressible fluid, the volume flow rate is the same everywhere along a pipe (what goes in must come out):

$$A_1 v_1 = A_2 v_2$$

**Narrower pipe → faster flow.** This is why water speeds up when you partially cover the end of a hose, and why a river runs fast through a narrow gorge.

> [!example] Example: Nozzle
> Water flows at 2 m/s through a 4 cm diameter pipe into a 2 cm diameter nozzle. Exit speed?
>
> Area $\propto d^2$, so $A_1/A_2 = 4$. $v_2 = 4 \times 2 = 8$ m/s.

### Bernoulli's Equation — Conservation of Energy

Along a streamline in an ideal fluid:

$$P_1 + \rho g y_1 + \frac{1}{2}\rho v_1^2 = P_2 + \rho g y_2 + \frac{1}{2}\rho v_2^2$$

or

$$P + \rho g y + \frac{1}{2}\rho v^2 = \text{constant}$$

Each term is an **energy per unit volume**:
- $P$ — pressure (work done by pressure forces per volume)
- $\rho g y$ — gravitational potential energy per volume
- $\tfrac{1}{2}\rho v^2$ — kinetic energy per volume

> [!tip] Bernoulli Is Energy Conservation
> Divide $mgh + \tfrac{1}{2}mv^2 + (\text{pressure work}) = \text{const}$ by volume and you get Bernoulli. It is not a new law.

### Key Consequences

**Same height, different speed:** faster fluid has **lower pressure**.
$$P_1 + \tfrac{1}{2}\rho v_1^2 = P_2 + \tfrac{1}{2}\rho v_2^2$$
Combined with continuity, a narrow section of pipe has fast flow and low pressure. This is the Venturi effect — the basis of airplane wings (qualitatively), carburetors, and why a shower curtain gets sucked inward.

**Static fluid ($v = 0$ everywhere):** Bernoulli reduces to $P_1 + \rho g y_1 = P_2 + \rho g y_2$, which is just $P = P_0 + \rho g h$ from 8.2.

**Torricelli's theorem — draining tank:** A tank open to the atmosphere drains through a small hole a depth $h$ below the surface. At the surface and at the hole, $P = P_{\text{atm}}$; the surface moves negligibly slowly.

$$\rho g h = \frac{1}{2}\rho v^2 \quad\Rightarrow\quad v = \sqrt{2gh}$$

The water exits at the same speed it would have if dropped from height $h$ — energy conservation again.

> [!example] Example: Water Tower
> Water exits a spigot 20 m below the surface of an open reservoir. Exit speed? ($g = 10$)
>
> $v = \sqrt{2(10)(20)} = 20$ m/s.

> [!example] Example: Pipe Rising and Narrowing
> Water enters a pipe at ground level at $2$ m/s and $P_1 = 3 \times 10^5$ Pa. It exits 5 m higher through a section with half the area. Exit pressure? ($g = 10$)
>
> Continuity: $v_2 = 4$ m/s.
>
> $$P_2 = P_1 + \tfrac{1}{2}\rho(v_1^2 - v_2^2) + \rho g(y_1 - y_2)$$
> $$= 3 \times 10^5 + \tfrac{1}{2}(1000)(4 - 16) + (1000)(10)(0 - 5)$$
> $$= 3 \times 10^5 - 6000 - 50{,}000 = 2.44 \times 10^5 \text{ Pa}$$
>
> Pressure dropped because the water both sped up and climbed.

### Problem-Solving Recipe for Flow

1. Identify two points along the flow. Label $P$, $y$, $v$ at each.
2. Use **continuity** to relate the speeds if the areas are known.
3. Use **Bernoulli** to relate pressures and heights.
4. Open to atmosphere → $P = P_{\text{atm}}$. Large tank surface → $v \approx 0$.

> [!warning] Watch the Height Reference
> Pick $y = 0$ anywhere convenient, but use the same reference for both points. Only the *difference* $y_1 - y_2$ matters.

---

## Unit Summary

> [!summary] What to Have Cold
> - $\rho = m/V$; water $= 1000$ kg/m³; floats if $\rho_{\text{obj}} < \rho_{\text{fluid}}$
> - $P = F/A$; pascal; $P_{\text{atm}} \approx 10^5$ Pa; scalar, same in all directions at a point
> - $P = P_0 + \rho g h$; depends only on depth, not container shape; gauge $= \rho g h$, absolute adds $P_{\text{atm}}$
> - Pascal: $F_1/A_1 = F_2/A_2$; hydraulic lift trades force for distance; energy conserved
> - Archimedes: $F_b = \rho_{\text{fluid}} V_{\text{sub}} g$ — **fluid** density, **submerged** volume; independent of depth
> - Floating: $V_{\text{sub}}/V = \rho_{\text{obj}}/\rho_{\text{fluid}}$
> - Submerged FBD: weight, buoyancy, tension/normal → $\sum F = ma$
> - Continuity: $A_1 v_1 = A_2 v_2$; narrow → fast
> - Bernoulli: $P + \rho g y + \tfrac{1}{2}\rho v^2 = $ const; fast → low pressure
> - Torricelli: draining speed $v = \sqrt{2gh}$
