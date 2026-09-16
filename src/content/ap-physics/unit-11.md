---
title: "Unit 11: Electric Circuits"
unit: 11
---

# Unit 11 — Electric Circuits

> [!summary] Big Idea
> A circuit is a closed path for charge. A battery raises charge to a higher potential; resistors let it fall back down, releasing energy as heat or light. Two conservation laws run the whole unit: **charge** (Kirchhoff's junction rule) and **energy** (Kirchhoff's loop rule). Everything else — series, parallel, Ohm's law — follows from those.

---

## 11.1 — Electric Current

### Definition

Current is the rate at which charge passes through a cross-section of a conductor:

$$I = \frac{\Delta Q}{\Delta t}$$

- Unit: ampere (A). $1 \text{ A} = 1 \text{ C/s}$.
- Scalar with a sign/direction along the wire.
- **Conventional current** is the direction **positive** charge would flow — from high potential to low potential, from the $+$ terminal through the circuit to the $-$ terminal. In metals the actual carriers are electrons moving the **opposite** way. Use conventional current always; the physics is identical.

### Microscopic Model — Drift Velocity

In a wire, electrons zip around randomly at ~$10^6$ m/s but drift along the wire at only ~$10^{-4}$ m/s (a fraction of a millimeter per second). The current is

$$I = nqv_dA$$

- $n$ — number of charge carriers per unit volume
- $q$ — charge of each carrier ($e$ for electrons)
- $v_d$ — drift velocity
- $A$ — cross-sectional area

The light turns on instantly not because electrons race to it, but because the **field** propagates at nearly light speed and pushes all electrons in the wire at once — like water in a full hose.

> [!example] Example
> A current of 1 A in a copper wire ($n \approx 8.5 \times 10^{28}$ m⁻³, $A = 1$ mm² $= 10^{-6}$ m²):
>
> $v_d = \dfrac{I}{nqA} = \dfrac{1}{(8.5 \times 10^{28})(1.6 \times 10^{-19})(10^{-6})} \approx 7 \times 10^{-5}$ m/s.

### Current Is the Same Along an Unbranched Wire

Charge doesn't pile up anywhere in steady state. Whatever current enters a segment leaves it. This is why current is the same everywhere in a series circuit.

---

## 11.2 — Simple Circuits

### Components and Symbols

| Component | Function |
|---|---|
| Battery / cell | Maintains a potential difference (emf $\varepsilon$); long line is $+$ |
| Resistor | Converts electrical energy to heat; has resistance $R$ |
| Wire | Ideal: zero resistance, no potential drop |
| Switch | Open = break in path (no current); closed = complete path |
| Capacitor | Stores charge; blocks steady DC current once charged |
| Ammeter | Measures current; placed **in series**; ideal has zero resistance |
| Voltmeter | Measures potential difference; placed **in parallel** across the component; ideal has infinite resistance |
| Light bulb | A resistor that glows; brightness ∝ power |

### Electromotive Force (emf)

The **emf** $\varepsilon$ of a battery is the potential difference it maintains between its terminals when no current flows. It's the energy per unit charge the battery gives to charges passing through it (from chemical energy). Unit: volts. Despite the name, it is **not a force**.

### A Complete Circuit

Current flows only around a **closed** loop. An open switch, a broken wire, or a burned-out bulb anywhere in a single-loop circuit stops **all** current in that loop.

### Series and Parallel Connections

**Series** — components connected end to end along a single path.
- Same **current** through each.
- Potential differences **add** to the total.

**Parallel** — components connected across the same two points (nodes).
- Same **potential difference** across each.
- Currents **add** to the total.

> [!tip] Identify by Nodes, Not by Drawing
> Two components are in parallel if both their ends connect to the same two nodes. They're in series if the only path from one leads directly into the other with no junction between. Redraw messy circuits to make this clear.

### Circuit Reasoning Without Numbers

- Adding a resistor in **series** increases total resistance → less current from the battery.
- Adding a resistor in **parallel** decreases total resistance → **more** current from the battery.
- Bulbs in series share the battery voltage — dimmer than a single bulb. Remove one → all go out.
- Bulbs in parallel each get full battery voltage — all as bright as a single bulb. Remove one → others unaffected (for an ideal battery).

---

## 11.3 — Resistance, Resistivity, and Ohm's Law

### Resistance

Resistance is how much a component opposes current for a given potential difference:

$$R = \frac{\Delta V}{I}$$

Unit: ohm (Ω). $1\ \Omega = 1$ V/A.

### Ohm's Law

For **ohmic** materials (most metals at constant temperature), $R$ is constant — current is directly proportional to voltage:

$$\Delta V = IR$$

A graph of $I$ vs. $\Delta V$ for an ohmic resistor is a straight line through the origin with slope $\dfrac{1}{R}$. (Or $\Delta V$ vs. $I$: slope $= R$.)

**Non-ohmic** devices (light bulb filaments, diodes, LEDs) have curved $I$–$V$ graphs. A filament's resistance increases as it heats — the curve bends toward the $V$-axis. Ohm's law isn't a universal law; it's a description of a class of materials.

### Resistivity — What Determines a Wire's Resistance

$$R = \frac{\rho L}{A}$$

- $\rho$ — **resistivity** of the material (Ω·m). Copper ≈ $1.7 \times 10^{-8}$; rubber ≈ $10^{13}$. Intrinsic to the material.
- $L$ — length of the wire. Longer → more resistance (more collisions along the way).
- $A$ — cross-sectional area. Thicker → less resistance (more parallel paths for charge).

| Change | Effect on $R$ |
|---|---|
| Double length | $\times 2$ |
| Double radius (area $\times 4$) | $\div 4$ |
| Double length **and** double radius | $\div 2$ |
| Same volume, stretch to double length (area halves) | $\times 4$ |

> [!example] Example
> A wire has resistance $R$. It's melted and recast into a wire of half the length. Same volume → area doubles.
>
> $R' = \dfrac{\rho(L/2)}{2A} = \dfrac{R}{4}$.

### Temperature

For metals, resistivity **increases** with temperature (atoms vibrate more, more collisions). This is why a bulb filament's resistance is higher when lit than when cold — and why the initial current surge when you flip a switch can blow a bulb.

### Water Analogy

Voltage is like pressure difference; current is like flow rate; resistance is like a narrow, long pipe. A battery is a pump. It's imperfect but useful for intuition.

---

## 11.4 — Electric Power

### Power Delivered to a Component

Energy per unit time delivered to (or by) a component with current $I$ and potential difference $\Delta V$:

$$P = I\,\Delta V$$

For a resistor, substitute Ohm's law for three equivalent forms:

$$P = I\Delta V = I^2R = \frac{(\Delta V)^2}{R}$$

Unit: watt (W) $=$ J/s.

> [!tip] Which Form to Use
> - **Series** (same $I$): $P = I^2R$ — bigger $R$ gets more power.
> - **Parallel** (same $\Delta V$): $P = \dfrac{\Delta V^2}{R}$ — **smaller** $R$ gets more power.
> Pick the form whose variable is shared. Both are correct; one is faster.

### Where the Energy Goes

- **Battery** supplies power $P = I\varepsilon$ (chemical → electrical).
- **Resistors** dissipate it as thermal energy (and light for bulbs). The sum of resistor powers equals battery power (energy conservation).
- **Bulb brightness** is proportional to the power it dissipates — not to current alone, not to voltage alone.

### Energy Over Time

$$E = P\,\Delta t = I\Delta V\,\Delta t$$

Electric companies bill in **kilowatt-hours**: $1$ kWh $= (1000 \text{ W})(3600 \text{ s}) = 3.6 \times 10^6$ J.

> [!example] Example: Bulb Ratings
> A "60 W, 120 V" bulb: $R = \dfrac{V^2}{P} = \dfrac{14400}{60} = 240\ \Omega$ (when hot). $I = \dfrac{P}{V} = 0.5$ A.
>
> Run it on 60 V instead: $P = \dfrac{60^2}{240} = 15$ W — a quarter as bright (assuming constant $R$).

> [!example] Example: Two Bulbs in Series vs. Parallel
> Bulbs A ($60$ W) and B ($100$ W), both rated 120 V. $R_A = 240\ \Omega$, $R_B = 144\ \Omega$.
>
> **Parallel** on 120 V: each at rated power. B brighter.
> **Series** on 120 V: same current; $P = I^2R$ → **A** brighter (bigger $R$). $I = \dfrac{120}{384} = 0.3125$ A; $P_A = 23$ W, $P_B = 14$ W.

---

## 11.5 — Compound Direct Current (DC) Circuits

### Equivalent Resistance

**Series:**
$$R_{\text{eq}} = R_1 + R_2 + R_3 + \cdots$$
Always **greater** than the largest individual resistor.

**Parallel:**
$$\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \cdots$$
Always **less** than the smallest individual resistor.

Two in parallel shortcut: $R_{\text{eq}} = \dfrac{R_1R_2}{R_1 + R_2}$. $N$ identical $R$ in parallel: $R_{\text{eq}} = \dfrac{R}{N}$.

### Reducing a Circuit

1. Find groups that are purely series or purely parallel. Replace each with its equivalent.
2. Redraw. Repeat until one resistor remains.
3. Find total current from $I = \dfrac{\varepsilon}{R_{\text{eq}}}$.
4. **Work backward**, expanding one step at a time. Series → same $I$, split $V$ by $V = IR$. Parallel → same $V$, split $I$ by $I = V/R$.

> [!example] Example: Series-Parallel Combo
> 12 V battery. $R_1 = 2\ \Omega$ in series with a parallel pair $R_2 = 6\ \Omega$, $R_3 = 3\ \Omega$.
>
> Parallel pair: $R_{23} = \dfrac{6 \cdot 3}{9} = 2\ \Omega$. Total: $R_{\text{eq}} = 2 + 2 = 4\ \Omega$. $I_{\text{total}} = 3$ A.
>
> $V_1 = IR_1 = 6$ V. So $V_{23} = 12 - 6 = 6$ V across the pair.
>
> $I_2 = 6/6 = 1$ A; $I_3 = 6/3 = 2$ A. Check: $1 + 2 = 3$ A. ✓
>
> Powers: $P_1 = 18$ W, $P_2 = 6$ W, $P_3 = 12$ W. Total $36$ W $= I\varepsilon = 3 \times 12$. ✓

### Real Batteries — Internal Resistance

A real battery has some internal resistance $r$. The **terminal voltage** (what you measure across its terminals while current flows) is less than the emf:

$$\Delta V_{\text{terminal}} = \varepsilon - Ir$$

- More current drawn → lower terminal voltage.
- Model it as an ideal emf in series with a small resistor $r$ inside the battery.
- A "dead" battery often has a fine emf but huge internal resistance.
- Terminal voltage equals emf only when $I = 0$ (open circuit).

> [!example] Example
> A battery with $\varepsilon = 12$ V and $r = 0.5\ \Omega$ drives a $5.5\ \Omega$ load. $I = \dfrac{12}{6} = 2$ A. Terminal voltage $= 12 - 2(0.5) = 11$ V. Power lost inside the battery: $I^2r = 2$ W.

### Ammeters and Voltmeters in Circuits

- **Ammeter** in series: ideally zero resistance so it doesn't change the current it measures. A real one adds a little resistance and slightly reduces current.
- **Voltmeter** in parallel: ideally infinite resistance so no current diverts through it. A real one draws a little current and slightly lowers the voltage it measures.
- Putting a voltmeter in series stops the circuit (infinite resistance). Putting an ammeter in parallel shorts the component (zero resistance) — and may destroy the meter.

### Short Circuits

A wire (zero resistance) connected in parallel with a resistor takes **all** the current — the resistor gets none. If a wire directly connects the battery terminals, current is limited only by internal resistance: huge current, lots of heat, danger.

---

## 11.6 — Kirchhoff's Loop Rule

### Statement

The sum of potential differences around any **closed loop** is zero:

$$\sum_{\text{loop}} \Delta V = 0$$

This is **conservation of energy**: a charge that goes around a loop and returns to its start has the same potential energy it began with. Whatever it gains in the battery, it loses in the resistors.

### Sign Conventions

Pick a direction to walk around the loop (arbitrary). Assign a current direction to each branch (also arbitrary — if you guess wrong, the answer comes out negative, which is fine).

| Walking through… | $\Delta V$ |
|---|---|
| Battery, $-$ to $+$ (with the emf) | $+\varepsilon$ |
| Battery, $+$ to $-$ (against the emf) | $-\varepsilon$ |
| Resistor, **with** the current | $-IR$ (potential drops) |
| Resistor, **against** the current | $+IR$ |
| Capacitor, from $-$ plate to $+$ plate | $+Q/C$ |

### Potential vs. Position Graphs

A useful way to visualize the loop rule. Start at the battery's $-$ terminal (set $V = 0$), walk around the circuit, and plot $V$:
- Jumps **up** by $\varepsilon$ through the battery.
- Flat along ideal wires.
- Drops by $IR$ across each resistor (steeper drop = bigger $R$ in series).
- Returns to $0$ at the start. The total rise equals the total drop.

> [!example] Example: Single Loop, Two Batteries
> Loop with $\varepsilon_1 = 12$ V, $\varepsilon_2 = 6$ V opposing it, and resistors $2\ \Omega$ and $4\ \Omega$. Find $I$.
>
> Assume clockwise current, driven by $\varepsilon_1$. Walk clockwise:
>
> $+12 - I(2) - 6 - I(4) = 0 \Rightarrow 6 = 6I \Rightarrow I = 1$ A.
>
> Positive → the guess was right. $\varepsilon_2$ is being **charged** (current enters its $+$ terminal).

### Multi-Loop Circuits

For circuits that can't be reduced with series/parallel rules (e.g., two batteries in different branches), write:
- A loop equation for each independent loop
- A junction equation (11.7) for each independent junction

Then solve the system of equations. Number of unknowns = number of branch currents.

> [!tip] Choose Loops That Include What You Need
> Any closed path works, including the outer perimeter. You need as many independent equations as unknowns. Every component should appear in at least one loop.

---

## 11.7 — Kirchhoff's Junction Rule

### Statement

At any junction (node) where wires meet, the total current flowing **in** equals the total current flowing **out**:

$$\sum I_{\text{in}} = \sum I_{\text{out}}$$

This is **conservation of charge**: charge doesn't accumulate at a junction in steady state.

### Applying It

- Assign a direction and label to each branch current.
- At each junction: sum of arrows pointing in = sum pointing out.
- If a circuit has $N$ junctions, only $N - 1$ junction equations are independent (the last one is implied).

> [!example] Example: Two-Loop Circuit
> Battery $\varepsilon = 12$ V connects to node A. From A, branch 1 ($R_1 = 4\ \Omega$) and branch 2 ($R_2 = 6\ \Omega$) run to node B. B connects back to the battery through $R_3 = 1\ \Omega$. Find all currents.
>
> Junction A: $I_{\text{total}} = I_1 + I_2$
> Loop 1 (battery → $R_1$ → $R_3$): $12 - 4I_1 - 1(I_1 + I_2) = 0 \Rightarrow 12 = 5I_1 + I_2$
> Loop 2 (battery → $R_2$ → $R_3$): $12 - 6I_2 - 1(I_1 + I_2) = 0 \Rightarrow 12 = I_1 + 7I_2$
>
> Solve: from the first, $I_2 = 12 - 5I_1$. Substitute: $12 = I_1 + 84 - 35I_1 \Rightarrow 34I_1 = 72 \Rightarrow I_1 = 2.12$ A, $I_2 = 1.41$ A, $I_{\text{total}} = 3.53$ A.
>
> (Check via reduction: $R_{12} = 2.4\ \Omega$, $R_{\text{eq}} = 3.4\ \Omega$, $I = 3.53$ A. ✓ Kirchhoff works even when reduction is possible — it's just slower.)

### The Two Rules Together

| Rule | Conserves | Applies to |
|---|---|---|
| Junction | Charge | Nodes |
| Loop | Energy | Closed paths |

Every circuit problem — no matter how tangled — yields to these two plus $\Delta V = IR$.

---

## 11.8 — Resistor-Capacitor (RC) Circuits

### Charging a Capacitor Through a Resistor

Battery $\varepsilon$, resistor $R$, uncharged capacitor $C$ in series; switch closes at $t = 0$.

**At $t = 0$ (just closed):** Capacitor has no charge, so $\Delta V_C = 0$. It acts like a **wire**. Current is maximum: $I_0 = \dfrac{\varepsilon}{R}$. All the emf is across the resistor.

**As time passes:** Charge builds on the plates, $\Delta V_C = Q/C$ grows, leaving less voltage for the resistor. Current decreases.

**At $t \to \infty$ (fully charged):** $\Delta V_C = \varepsilon$. Current is **zero**. Capacitor acts like an **open switch** (a break in the circuit). $Q_{\max} = C\varepsilon$.

The loop rule at any moment: $\varepsilon - IR - \dfrac{Q}{C} = 0$.

### Time Constant

$$\tau = RC$$

Unit: seconds (Ω·F = s). It sets the timescale:
- After $t = \tau$, the capacitor has reached about $63\%$ of its final charge ($1 - e^{-1}$), and current has dropped to $37\%$ of its initial value ($e^{-1}$).
- After $5\tau$, charging is $> 99\%$ complete — "fully charged" for practical purposes.
- Larger $R$ or larger $C$ → slower charging.

### Discharging

Charged capacitor connected across a resistor at $t = 0$.

**At $t = 0$:** $\Delta V_C = \Delta V_0$, $I_0 = \dfrac{\Delta V_0}{R}$ — maximum.
**Over time:** Charge, voltage, and current all decay toward zero with the same time constant $\tau = RC$. After one $\tau$, all are at $37\%$ of their initial values.

### The Graphs

| Quantity | Charging | Discharging |
|---|---|---|
| $Q$ or $\Delta V_C$ | Rises from 0, levels off at $C\varepsilon$ / $\varepsilon$ | Falls from max toward 0 |
| $I$ | Falls from $\varepsilon/R$ toward 0 | Falls from $\Delta V_0/R$ toward 0 |
| $\Delta V_R$ | Falls from $\varepsilon$ toward 0 | Falls from $\Delta V_0$ toward 0 |

All curves are exponential (concave, approaching an asymptote). AP Physics 2 asks you to sketch and interpret them, and to reason about $t = 0$ and $t \to \infty$ — not to compute intermediate values with $e^{-t/RC}$.

> [!tip] The Two Limits Solve Most Problems
> **Immediately after a switch closes**, treat every uncharged capacitor as a wire. **Long after**, treat every capacitor as an open gap. Then solve the resulting resistor circuit normally. Between those limits, quantities move smoothly from one answer to the other.

> [!example] Example: Capacitor in a Complex Circuit
> Battery 12 V, $R_1 = 2\ \Omega$ in series with a parallel combo of $R_2 = 4\ \Omega$ and capacitor $C$. Switch closes at $t = 0$.
>
> **$t = 0$**: $C$ is a wire, shorting $R_2$. Circuit is just $R_1$. $I = 6$ A through $R_1$, $0$ through $R_2$.
>
> **$t \to \infty$**: $C$ is a gap. Circuit is $R_1 + R_2 = 6\ \Omega$ in series. $I = 2$ A. $\Delta V_C = \Delta V_{R_2} = 2(4) = 8$ V. $Q = 8C$.

### Energy in RC Circuits

While charging, the battery delivers $Q\varepsilon = C\varepsilon^2$ total. The capacitor stores $\tfrac{1}{2}C\varepsilon^2$. The resistor dissipates the other $\tfrac{1}{2}C\varepsilon^2$ — exactly half, no matter what $R$ is. During discharge, the resistor dissipates all the stored energy.

### Capacitors in Combination

**Parallel** (same $\Delta V$; charges add):
$$C_{\text{eq}} = C_1 + C_2 + \cdots$$

**Series** (same $Q$; voltages add):
$$\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$$

Note these are the **reverse** of the resistor rules. Parallel plates side by side effectively make a bigger plate (more $C$); in series, the gap is effectively wider (less $C$).

---

## Unit Summary

> [!summary] What to Have Cold
> - $I = \Delta Q/\Delta t$; conventional current flows $+ \to -$; drift speed tiny
> - Series: same $I$, voltages add, $R_{\text{eq}} = \sum R$. Parallel: same $V$, currents add, $\dfrac{1}{R_{\text{eq}}} = \sum\dfrac{1}{R}$
> - $\Delta V = IR$; ohmic = straight $I$–$V$ line; filaments non-ohmic ($R$ rises with $T$)
> - $R = \dfrac{\rho L}{A}$; longer → more, thicker → less
> - $P = I\Delta V = I^2R = \Delta V^2/R$; series → big $R$ brightest; parallel → small $R$ brightest
> - Reduce circuit → total $I$ → expand backward. Power sums check energy conservation
> - Real battery: $V_{\text{term}} = \varepsilon - Ir$
> - Ammeter series ($R \to 0$); voltmeter parallel ($R \to \infty$)
> - Loop rule: $\sum\Delta V = 0$ (energy). Junction rule: $\sum I_{\text{in}} = \sum I_{\text{out}}$ (charge)
> - RC: $t = 0$ capacitor = wire; $t \to \infty$ capacitor = gap; $\tau = RC$; $63\%/37\%$ at one $\tau$
> - Capacitors: parallel add; series add reciprocals (opposite of resistors)
> - Charging wastes half the battery's energy as heat, regardless of $R$
