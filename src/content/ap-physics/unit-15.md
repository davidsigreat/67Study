---
title: "Unit 15: Modern Physics"
unit: 15
---

# Unit 15 — Modern Physics

> [!summary] Big Idea
> Around 1900, three experiments broke classical physics: blackbody radiation, the photoelectric effect, and atomic spectra. The fix was **quantization** — energy comes in discrete packets. Light behaves as particles (**photons**); particles behave as waves. Then the nucleus turned out to have its own rules: mass converts to energy, and unstable nuclei decay by fixed rules. This unit is mostly conceptual with a few key equations.

---

## 15.1 — Quantum Theory and Wave-Particle Duality

### Photons

Light comes in discrete packets called **photons**. Each photon has energy proportional to its frequency:

$$E = hf = \frac{hc}{\lambda}$$

- $h = 6.63 \times 10^{-34}$ J·s (Planck's constant). In eV·s: $4.14 \times 10^{-15}$.
- Handy combo: $hc = 1240$ eV·nm. So $E(\text{eV}) = \dfrac{1240}{\lambda(\text{nm})}$.
- Higher frequency (bluer, UV, X-ray) → more energy per photon.
- Brighter light = **more photons**, not more energy per photon.

> [!example] Example
> Green light, $\lambda = 500$ nm: $E = \dfrac{1240}{500} = 2.48$ eV per photon. A 1 W green laser emits $\dfrac{1}{2.48 \times 1.6 \times 10^{-19}} \approx 2.5 \times 10^{18}$ photons per second.

### Photon Momentum

Photons have no mass but carry momentum:

$$p = \frac{h}{\lambda} = \frac{E}{c}$$

This is why light exerts radiation pressure and why Compton scattering (15.6) works.

### Wave-Particle Duality

Light shows **wave** behavior (interference, diffraction — Unit 14) **and** particle behavior (photoelectric effect, Compton scattering). Neither picture alone is complete. Which one you observe depends on the experiment.

### Matter Waves — de Broglie

If waves act like particles, particles act like waves. Every object with momentum $p$ has a wavelength:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

- Electrons, protons, atoms — all have wavelengths, and all show diffraction and interference when passed through small enough openings.
- **Electron diffraction** off crystals (Davisson-Germer, 1927) confirmed this. Electron microscopes exploit it: electrons at high $v$ have wavelengths thousands of times shorter than visible light → much finer resolution.
- For everyday objects, $\lambda$ is absurdly small — a thrown baseball has $\lambda \sim 10^{-34}$ m — so wave effects are unobservable.

> [!example] Example: Electron Wavelength
> Electron accelerated through 100 V: $K = 100$ eV $= 1.6 \times 10^{-17}$ J.
>
> $p = \sqrt{2mK} = \sqrt{2(9.11 \times 10^{-31})(1.6 \times 10^{-17})} = 5.4 \times 10^{-24}$ kg·m/s
>
> $\lambda = \dfrac{6.63 \times 10^{-34}}{5.4 \times 10^{-24}} = 1.2 \times 10^{-10}$ m — about the spacing of atoms in a crystal. That's why crystals diffract electrons.

### Probability and the Wave Function

The "wave" for a particle is a **wave function** $\psi$. Its square, $|\psi|^2$, gives the **probability** of finding the particle at each location. Where $|\psi|^2$ is large, the particle is likely; where it's zero, the particle is never found.

- A single electron sent through a double slit still produces an interference pattern **over many trials** — each electron lands at one spot, but the pattern of spots follows the wave's probability distribution.
- Standing electron waves confined to an atom give the allowed energy levels (15.2). Only whole numbers of wavelengths fit — that's why energy is quantized.

### Heisenberg Uncertainty (Qualitative)

You cannot know both the position and momentum of a particle with unlimited precision simultaneously. Confining a particle to a small region (sharp position) forces a large spread in momentum. This is a property of waves, not a limitation of instruments.

---

## 15.2 — The Bohr Model of Atomic Structure

### The Problem With the Classical Atom

Rutherford's nuclear atom (electron orbiting a positive nucleus) can't be stable classically: an accelerating charge radiates, so the electron should spiral into the nucleus in about $10^{-11}$ s. It doesn't. Also, atoms emit only specific colors, not a continuous spectrum.

### Bohr's Postulates (1913)

1. Electrons occupy only certain **allowed orbits** (energy levels), where they do **not** radiate.
2. Each level has a definite energy $E_n$. The lowest is the **ground state** ($n = 1$); higher ones are **excited states**.
3. An electron jumps between levels by **absorbing or emitting a photon** whose energy exactly equals the energy difference:

$$E_{\text{photon}} = hf = |E_i - E_f|$$

### Hydrogen Energy Levels

$$E_n = -\frac{13.6 \text{ eV}}{n^2} \qquad (n = 1, 2, 3, \ldots)$$

| $n$ | $E_n$ |
|---|---|
| 1 | $-13.6$ eV (ground state) |
| 2 | $-3.40$ eV |
| 3 | $-1.51$ eV |
| 4 | $-0.85$ eV |
| $\infty$ | $0$ (ionized) |

- Energies are **negative** — the electron is bound. Zero is the electron free with no kinetic energy.
- Levels get **closer together** as $n$ increases.
- **Ionization energy** of hydrogen = 13.6 eV: the energy to lift the electron from $n = 1$ to $n = \infty$.
- Orbit radius grows as $n^2$.

> [!warning] Negative Energies
> "$-3.4$ eV" is a **higher** energy than "$-13.6$ eV." Going from $n = 1$ to $n = 2$ requires **absorbing** $10.2$ eV. Moving up the ladder means becoming less negative.

### Transitions

Energy of the emitted/absorbed photon between levels $n_i$ and $n_f$:

$$E_{\text{photon}} = 13.6\left|\frac{1}{n_f^2} - \frac{1}{n_i^2}\right| \text{ eV}$$

> [!example] Example: Balmer Line
> Electron drops from $n = 3$ to $n = 2$. Photon energy?
>
> $E = -1.51 - (-3.40) = 1.89$ eV. $\lambda = \dfrac{1240}{1.89} = 656$ nm — the red H-α line, the reason hydrogen glows red.
>
> Drop $n = 2 \to 1$: $10.2$ eV, $\lambda = 122$ nm (ultraviolet).

### Why de Broglie Explains Bohr

An electron orbit is allowed only when a **whole number of electron wavelengths** fits around the circumference: $2\pi r = n\lambda$. Any other orbit would destructively interfere with itself. This turned Bohr's ad-hoc rule into a consequence of matter waves.

### Limits of the Model

Bohr's model works for hydrogen (and one-electron ions like He⁺) but fails for multi-electron atoms. The full quantum treatment (Schrödinger) replaces orbits with probability clouds (orbitals) — but the idea of **discrete energy levels and photon transitions** survives intact and is what AP Physics 2 tests.

---

## 15.3 — Emission and Absorption Spectra

### Continuous vs. Line Spectra

- **Continuous spectrum**: all wavelengths present — a smooth rainbow. Produced by hot dense objects (incandescent filament, the Sun's surface). See 15.4.
- **Emission line spectrum**: only specific bright wavelengths on a dark background. Produced by a hot, low-density **gas** — excited atoms dropping to lower levels emit only the photon energies matching their level differences.
- **Absorption line spectrum**: a continuous spectrum with specific **dark** lines. Produced when white light passes through a **cool gas** — atoms absorb exactly the photons that can lift their electrons to higher levels, then re-emit in random directions.

The emission and absorption lines of a given element are at the **same** wavelengths — the same energy differences.

### Each Element Is Unique

Every element has its own set of energy levels, so its own pattern of lines — a **spectral fingerprint**. This is how:
- Helium was discovered in the Sun (before on Earth) from unexplained absorption lines.
- Astronomers know what distant stars and galaxies are made of.
- Neon signs are red-orange, sodium lamps yellow, mercury lamps blue-white.

### Reading an Energy-Level Diagram

Given a diagram with levels labeled by energy:
- A downward arrow = **emission**; photon energy = length of the arrow.
- An upward arrow = **absorption**; requires a photon with **exactly** that energy (or a collision with sufficient energy).
- Number of possible emission lines from level $n$: all downward transitions to lower levels. From $n = 4$: to 3, 2, 1, then 3 → 2, 3 → 1, 2 → 1 — six lines total.
- Longest wavelength = smallest energy gap (usually adjacent high levels). Shortest wavelength = largest gap (to the ground state).

> [!example] Example: Which Photons Are Absorbed?
> An atom in its ground state ($-10$ eV) has excited states at $-6$ eV and $-3$ eV. Photons of 3, 4, 5, and 7 eV are sent in. Which are absorbed?
>
> Allowed jumps from ground: $4$ eV (to $-6$) and $7$ eV (to $-3$). The 3 eV and 5 eV photons pass through — no level matches. (Once in the $-6$ state, a 3 eV photon *could* be absorbed, but the atom decays back too fast for that to matter at low intensity.)

### Fluorescence

Absorb a high-energy (UV) photon, then decay in **steps**, emitting lower-energy (visible) photons. This is why highlighters and white shirts glow under blacklight.

---

## 15.4 — Blackbody Radiation

### What a Blackbody Is

An idealized object that absorbs **all** radiation hitting it (reflects nothing) and, in turn, emits radiation depending only on its **temperature**. Stars, glowing filaments, and hot coals are close approximations. Any object above absolute zero emits thermal radiation.

### The Spectrum

A blackbody emits a **continuous** spectrum with a characteristic hump. Two facts about that hump:

**Wien's displacement law** — peak wavelength shifts to shorter values as temperature rises:

$$\lambda_{\text{peak}} = \frac{2.9 \times 10^{-3} \text{ m·K}}{T}$$

**Stefan-Boltzmann law** — total power radiated grows steeply with temperature:

$$P = \sigma A T^4 \qquad (\sigma = 5.67 \times 10^{-8} \text{ W/(m}^2\text{·K}^4))$$

| Object | $T$ (K) | $\lambda_{\text{peak}}$ | Appearance |
|---|---|---|---|
| Human body | 310 | 9.4 µm (IR) | Invisible; thermal cameras see it |
| Incandescent bulb | 2800 | 1 µm (near IR) | Mostly wasted as heat; yellowish |
| Sun | 5800 | 500 nm (green) | White (broad peak); we evolved to see here |
| Blue star | 20,000 | 145 nm (UV) | Blue-white |

Hotter → **bluer** and **far brighter**. Doubling $T$ → 16× the power.

### The Ultraviolet Catastrophe

Classical physics predicted that a blackbody should emit **infinite** energy at short wavelengths — obviously wrong. In 1900, Planck fixed it by assuming the oscillators in the walls could only have energies in multiples of $hf$. With energy quantized, high-frequency modes are hard to excite and the spectrum turns over at short wavelengths, matching experiment. This was the birth of quantum theory — Planck himself thought it was a mathematical trick.

> [!tip] Reading the Graph
> On an intensity-vs-wavelength graph: a hotter body's curve is **higher everywhere** (never crosses a cooler one) and its **peak is farther left**. Area under the curve ∝ $T^4$.

---

## 15.5 — The Photoelectric Effect

### The Experiment

Shine light on a metal surface. Electrons (**photoelectrons**) are ejected. Measure their kinetic energy and how many come out.

### What Classical Physics Predicted (Wrongly)

Light is a wave, so its energy is spread out and depends on intensity. Any frequency should eventually eject electrons if bright enough; brighter light should give faster electrons; dim light should require a time delay while electrons "soak up" energy.

### What Actually Happens

1. **Threshold frequency**: below a certain $f_0$ (depends on the metal), **no** electrons are ejected — no matter how intense the light.
2. Above $f_0$, electrons come out **instantly**, even in very dim light.
3. The **maximum kinetic energy** of ejected electrons depends on the light's **frequency** — not its intensity.
4. **Intensity** affects only the **number** of electrons (the current), not their energy.

### Einstein's Explanation (1905)

Light arrives as **photons**, each with energy $hf$. One photon gives all its energy to one electron. The electron needs a minimum energy — the **work function** $\phi$ — to escape the metal. Whatever's left over is kinetic energy:

$$K_{\max} = hf - \phi$$

- If $hf < \phi$: no ejection. Threshold: $f_0 = \dfrac{\phi}{h}$ (or $\lambda_0 = \dfrac{hc}{\phi}$).
- Brighter light = more photons = more electrons, each with the same $K_{\max}$.
- $K_{\max}$ increases linearly with $f$; slope of the $K_{\max}$–$f$ graph is $h$; $f$-intercept is $f_0$; $K$-intercept is $-\phi$.

Electrons deeper in the metal lose some energy getting out, so $K_{\max}$ is the maximum — most emerge slower.

### Stopping Potential

To measure $K_{\max}$, apply a reverse voltage that just barely stops the fastest electrons:

$$eV_{\text{stop}} = K_{\max} \quad\Rightarrow\quad V_{\text{stop}} = \frac{hf - \phi}{e}$$

Stopping potential depends on frequency, not intensity. Doubling intensity doubles the current but leaves $V_{\text{stop}}$ unchanged.

> [!example] Example: Sodium
> Sodium's work function is $2.3$ eV. Light of $\lambda = 400$ nm ($E = 3.1$ eV) shines on it.
>
> $K_{\max} = 3.1 - 2.3 = 0.8$ eV. $V_{\text{stop}} = 0.8$ V. Threshold: $\lambda_0 = \dfrac{1240}{2.3} = 539$ nm — anything redder than yellow-green does nothing.

> [!example] Example: Finding $h$ From Data
> $K_{\max} = 1.0$ eV at $f = 8 \times 10^{14}$ Hz, and $2.0$ eV at $f = 10.4 \times 10^{14}$ Hz.
>
> Slope $= \dfrac{1.0 \text{ eV}}{2.4 \times 10^{14} \text{ Hz}} = 4.2 \times 10^{-15}$ eV·s $\approx h$. ✓ Work function from either point: $\phi = 4.2 \times 10^{-15} \times 8 \times 10^{14} - 1.0 = 2.3$ eV.

> [!warning] Common Confusion
> - Intensity ↔ **number** of photons ↔ **current**
> - Frequency ↔ **energy per photon** ↔ **$K_{\max}$ and stopping potential**
> Swap these and you get every conceptual question wrong.

---

## 15.6 — Compton Scattering

### The Experiment (1923)

Fire X-rays at a target (graphite). Some scatter off electrons. The scattered X-rays have a **longer** wavelength than the incoming ones — and the shift depends on the scattering angle.

Classically, scattered light should have the same frequency as the incoming light (the electron oscillates at the driving frequency and re-radiates it). It doesn't.

### The Explanation

Treat it as a **collision between two particles**: a photon (with $E = hf$ and $p = h/\lambda$) and an electron at rest. Conserve energy and momentum, like a billiard-ball collision.

- The photon gives some of its energy to the electron (which recoils).
- The photon leaves with **less** energy → lower $f$ → **longer** $\lambda$.
- Larger scattering angle → more energy transferred → larger wavelength shift.

$$\Delta\lambda = \lambda' - \lambda = \frac{h}{m_ec}(1 - \cos\theta)$$

The constant $\dfrac{h}{m_ec} = 2.43 \times 10^{-12}$ m is the **Compton wavelength** of the electron. The shift is tiny — noticeable only for X-rays and gamma rays, where $\lambda$ itself is comparably small.

| Angle | $\Delta\lambda$ |
|---|---|
| $0°$ (straight through) | 0 |
| $90°$ | $2.43 \times 10^{-12}$ m |
| $180°$ (backscatter) | $4.86 \times 10^{-12}$ m (maximum) |

### Why It Matters

Compton scattering was the clincher for photons as **real particles with momentum**, not just energy packets. The photoelectric effect showed quantized energy; Compton showed quantized momentum obeying the same conservation laws as marbles.

> [!example] Example
> An X-ray with $\lambda = 0.050$ nm scatters at $90°$. New wavelength?
>
> $\lambda' = 0.0500 + 0.00243 = 0.0524$ nm. Photon energy drops from $24.8$ keV to $23.7$ keV; the electron gains $1.1$ keV.

---

## 15.7 — Fission, Fusion, and Nuclear Decay

### The Nucleus

- Made of **protons** and **neutrons** (collectively **nucleons**), bound by the **strong nuclear force** — short range, very strong, overcomes proton–proton electric repulsion.
- Notation: $^A_Z\text{X}$ where $Z$ = number of protons (atomic number, defines the element), $A$ = number of nucleons (mass number), $N = A - Z$ = neutrons.
- **Isotopes**: same $Z$, different $N$. $^{12}_6$C and $^{14}_6$C are both carbon.

### Mass-Energy Equivalence

$$E = mc^2$$

Mass is a form of energy. $c^2 = 9 \times 10^{16}$ J/kg — a tiny mass is an enormous energy.

Useful unit conversion: $1$ u (atomic mass unit) $= 1.66 \times 10^{-27}$ kg $= 931.5$ MeV/$c^2$.

### Binding Energy and Mass Defect

A nucleus weighs **less** than its separated protons and neutrons. The missing mass — the **mass defect** — was released as energy when the nucleus formed:

$$E_{\text{binding}} = (\Delta m)c^2 = (Zm_p + Nm_n - m_{\text{nucleus}})c^2$$

Binding energy is the energy required to pull the nucleus apart. **Binding energy per nucleon** measures stability — it peaks near **iron-56** (about 8.8 MeV/nucleon).

- Nuclei **lighter** than iron can release energy by **fusing** (moving up the curve).
- Nuclei **heavier** than iron can release energy by **splitting** (also moving up the curve).
- Iron is the dead end — neither process releases energy.

### Fission

A heavy nucleus splits into two medium nuclei plus a few neutrons:

$$^{235}_{92}\text{U} + ^1_0\text{n} \rightarrow ^{141}_{56}\text{Ba} + ^{92}_{36}\text{Kr} + 3\,^1_0\text{n} + \sim 200 \text{ MeV}$$

- The products have more binding energy per nucleon than uranium; the difference is released (mostly as kinetic energy of fragments).
- The released neutrons can trigger more fissions → **chain reaction**. Controlled: reactor. Uncontrolled: bomb.
- Check conservation: $Z$: $92 = 56 + 36$ ✓. $A$: $235 + 1 = 141 + 92 + 3$ ✓.

### Fusion

Light nuclei combine into a heavier one:

$$^2_1\text{H} + ^3_1\text{H} \rightarrow ^4_2\text{He} + ^1_0\text{n} + 17.6 \text{ MeV}$$

- Releases far more energy per kilogram than fission.
- Requires extreme temperature and pressure to overcome proton repulsion — the Sun's core, hydrogen bombs, experimental reactors.
- Powers every star. The Sun converts about 4 million tons of mass to energy per second.

> [!example] Example: Energy From Mass Defect
> Mass of $^4_2$He nucleus: $4.0015$ u. $2m_p + 2m_n = 2(1.0073) + 2(1.0087) = 4.0320$ u.
>
> $\Delta m = 0.0305$ u $\Rightarrow E_b = 0.0305 \times 931.5 = 28.4$ MeV. Per nucleon: $7.1$ MeV.

### Conservation Laws in Nuclear Reactions

In every nuclear reaction, these are conserved:
- **Charge** (total $Z$, counting electrons/positrons as $\mp 1$)
- **Nucleon number** (total $A$)
- **Mass-energy** (total, including $mc^2$)
- **Momentum**

Mass alone is **not** conserved — that's the whole point.

---

## 15.8 — Types of Radioactive Decay

### Radioactivity

Unstable nuclei spontaneously transform, emitting particles or photons. Three main types:

| Decay | Emitted particle | Change in $Z$ | Change in $A$ | Penetration |
|---|---|---|---|---|
| **Alpha** ($\alpha$) | $^4_2$He nucleus | $-2$ | $-4$ | Stopped by paper / skin |
| **Beta-minus** ($\beta^-$) | electron $^0_{-1}$e + antineutrino | $+1$ | $0$ | Stopped by thin aluminum |
| **Beta-plus** ($\beta^+$) | positron $^0_{+1}$e + neutrino | $-1$ | $0$ | Same as $\beta^-$ |
| **Gamma** ($\gamma$) | high-energy photon | $0$ | $0$ | Needs thick lead / concrete |

### Alpha Decay

Heavy nuclei shed a tightly bound helium nucleus:

$$^{238}_{92}\text{U} \rightarrow ^{234}_{90}\text{Th} + ^4_2\text{He}$$

Check: $Z$: $92 = 90 + 2$; $A$: $238 = 234 + 4$. ✓ The daughter is two elements to the left on the periodic table.

### Beta-Minus Decay

A neutron becomes a proton, emitting an electron and an antineutrino. Happens in nuclei with **too many neutrons**:

$$^{14}_6\text{C} \rightarrow ^{14}_7\text{N} + ^0_{-1}\text{e} + \bar{\nu}$$

The electron comes from the nucleus, not from the atom's electron cloud. $A$ unchanged; element moves one to the **right**.

### Beta-Plus Decay

A proton becomes a neutron, emitting a positron (antielectron) and a neutrino. Happens in nuclei with **too many protons**:

$$^{22}_{11}\text{Na} \rightarrow ^{22}_{10}\text{Ne} + ^0_{+1}\text{e} + \nu$$

Element moves one to the **left**. Used in PET scans — the positron annihilates with an electron, producing two gamma rays.

### Gamma Decay

After alpha or beta decay, the daughter nucleus is often in an excited state. It drops to its ground state by emitting a gamma photon — the nuclear equivalent of an atomic emission line, but at MeV instead of eV. No change in $Z$ or $A$.

$$^{60}_{28}\text{Ni}^* \rightarrow ^{60}_{28}\text{Ni} + \gamma$$

### Balancing Decay Equations

Superscripts ($A$) must sum equally on both sides. Subscripts ($Z$) must sum equally. Identify the unknown particle from what's missing.

> [!example] Example
> $^{210}_{84}\text{Po} \rightarrow \ ? \ + ^4_2\text{He}$. Daughter: $A = 206$, $Z = 82$ → $^{206}_{82}$Pb (lead).
>
> $^{40}_{19}\text{K} \rightarrow ^{40}_{20}\text{Ca} + \ ?$. Missing: $A = 0$, $Z = -1$ → $\beta^-$ (plus antineutrino).

### Half-Life

Radioactive decay is **random** for any single nucleus but statistically predictable for a large sample. The **half-life** $T_{1/2}$ is the time for **half** of the nuclei in a sample to decay.

$$N = N_0\left(\frac{1}{2}\right)^{t/T_{1/2}}$$

- After 1 half-life: $\tfrac{1}{2}$ remains. After 2: $\tfrac{1}{4}$. After 3: $\tfrac{1}{8}$. After $n$: $\left(\tfrac{1}{2}\right)^n$.
- Half-life is a constant for each isotope — unaffected by temperature, pressure, or chemistry.
- Activity (decays per second) is proportional to $N$, so it halves with the same half-life.
- The sample never reaches exactly zero; it approaches it asymptotically.

| Isotope | $T_{1/2}$ | Use |
|---|---|---|
| Carbon-14 | 5730 yr | Dating organic remains |
| Uranium-238 | 4.5 billion yr | Dating rocks |
| Iodine-131 | 8 days | Medical (thyroid) |
| Technetium-99m | 6 hours | Medical imaging |

> [!example] Example: Carbon Dating
> A bone has $\tfrac{1}{8}$ the C-14 of a living sample. Age?
>
> $\tfrac{1}{8} = \left(\tfrac{1}{2}\right)^3$ → three half-lives → $3 \times 5730 = 17{,}190$ years.

> [!example] Example: Non-Integer Half-Lives
> A sample of I-131 (8-day half-life): what fraction remains after 20 days?
>
> $\left(\tfrac{1}{2}\right)^{20/8} = \left(\tfrac{1}{2}\right)^{2.5} = 0.177$ — about 18%.

### Decay Series

Heavy elements like U-238 decay through a **chain** of alpha and beta steps until reaching a stable nucleus (Pb-206). Each step has its own half-life; the slowest one controls the overall rate.

### Energy in Decay

The mass of the parent exceeds the total mass of the products; the difference appears as kinetic energy of the products (and photon energy for gamma). Momentum conservation means a heavy daughter recoils slowly while the light alpha or beta carries most of the kinetic energy.

---

## Unit Summary

> [!summary] What to Have Cold
> - Photon: $E = hf = \dfrac{hc}{\lambda}$; $hc = 1240$ eV·nm; $p = h/\lambda$. Brighter = more photons, not bigger ones
> - de Broglie: $\lambda = h/p$; matter waves; electron diffraction; $|\psi|^2$ = probability
> - Bohr hydrogen: $E_n = -13.6/n^2$ eV; photon energy = level difference; ionization 13.6 eV
> - Emission lines (hot gas, bright), absorption lines (cool gas, dark) — same wavelengths; element fingerprint
> - Blackbody: continuous; hotter → peak shifts blue ($\lambda_{\text{peak}} \propto 1/T$), power $\propto T^4$; UV catastrophe fixed by quantization
> - Photoelectric: $K_{\max} = hf - \phi$; threshold $f_0 = \phi/h$; intensity → current only; frequency → $K_{\max}$ and $V_{\text{stop}}$; slope of $K$–$f$ graph is $h$
> - Compton: photon–electron collision; scattered $\lambda$ **longer**; shift grows with angle; proves photon momentum
> - $E = mc^2$; $1$ u $= 931.5$ MeV; mass defect = binding energy; peak stability at Fe-56
> - Fission: heavy splits, chain reaction. Fusion: light combine, powers stars, more energy per kg
> - Conserve $Z$, $A$, mass-energy, momentum. Balance equations by subscripts and superscripts
> - $\alpha$: $Z-2$, $A-4$. $\beta^-$: $Z+1$. $\beta^+$: $Z-1$. $\gamma$: no change. Penetration: $\alpha < \beta < \gamma$
> - Half-life: $N = N_0(\tfrac{1}{2})^{t/T_{1/2}}$; constant per isotope; random per nucleus, predictable per sample
