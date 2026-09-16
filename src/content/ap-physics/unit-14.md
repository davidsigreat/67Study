---
title: "Unit 14: Waves, Sound, and Physical Optics"
unit: 14
---

# Unit 14 — Waves, Sound, and Physical Optics

> [!summary] Big Idea
> A wave transfers **energy without transferring matter**. Everything here — sound, light, strings, water — obeys the same handful of rules: $v = f\lambda$, superposition, reflection at boundaries, and interference. The second half of the unit is where light stops being a ray (Unit 13) and reveals itself as a wave: double slits, diffraction gratings, and thin films only make sense if light has a wavelength.

---

## 14.1 — Properties of Wave Pulses and Waves

### What a Wave Is

A **wave** is a disturbance that travels through a medium (or space), carrying energy and momentum from one place to another. The medium itself does **not** travel with the wave — it oscillates in place and returns.

A **pulse** is a single disturbance; a **wave** (periodic) is a continuous repeating series of pulses.

### Transverse vs. Longitudinal

| Type | Medium oscillates… | Examples |
|---|---|---|
| **Transverse** | Perpendicular to the wave's direction of travel | String waves, light (EM waves), water surface (approximately) |
| **Longitudinal** | Parallel to the wave's direction — compressions and rarefactions | Sound, slinky pushed along its length, seismic P-waves |

Longitudinal waves can be drawn as pressure or density vs. position; the "crests" are compressions.

### Mechanical vs. Electromagnetic

- **Mechanical** waves need a medium (string, air, water). Sound cannot travel through vacuum.
- **Electromagnetic** waves (light, radio, X-rays) need no medium. They travel through vacuum at $c$.

### Wave Speed Depends on the Medium

The speed of a wave is set by the **medium**, not by the source. Shake a rope faster and you get shorter wavelengths, not faster waves.

**String:**
$$v = \sqrt{\frac{F_T}{\mu}}$$
where $F_T$ is the tension and $\mu = m/L$ is the mass per unit length. Tighter or lighter string → faster wave.

**Sound in air:** about $343$ m/s at 20°C; increases with temperature. Faster in liquids (~1500 m/s in water) and solids (~5000 m/s in steel).

**Light in vacuum:** $c = 3.00 \times 10^8$ m/s. Slower in materials by the factor $n$.

### Reflection of Pulses at a Boundary

When a pulse reaches the end of a string:

| End condition | Reflected pulse |
|---|---|
| **Fixed** end (tied to a wall) | **Inverted** (flipped upside down) |
| **Free** end (ring sliding on a pole) | **Upright** (same orientation) |

At a boundary between two strings:
- Light → heavy (slow) string: reflected pulse **inverted**, transmitted pulse upright and **shorter** wavelength.
- Heavy → light (fast) string: reflected pulse **upright**, transmitted pulse upright and **longer** wavelength.

Part of the energy always reflects and part transmits. Frequency stays the same across the boundary; wavelength and speed change together.

---

## 14.2 — Periodic Waves

### Vocabulary

| Term | Symbol | Meaning |
|---|---|---|
| Amplitude | $A$ | Maximum displacement from equilibrium |
| Wavelength | $\lambda$ | Distance between successive identical points (crest to crest) |
| Period | $T$ | Time for one complete cycle at a fixed point |
| Frequency | $f = 1/T$ | Cycles per second (Hz) |
| Wave speed | $v$ | How fast a crest moves through the medium |

### The Wave Equation

$$v = f\lambda = \frac{\lambda}{T}$$

One wavelength passes a point every period. Since $v$ is fixed by the medium, $f$ and $\lambda$ are inversely proportional: higher frequency → shorter wavelength.

> [!example] Example
> A string wave with $v = 20$ m/s and $f = 50$ Hz: $\lambda = 0.4$ m. Double the frequency (same string) → $\lambda = 0.2$ m; $v$ unchanged.

### Two Graphs — Don't Confuse Them

- **Displacement vs. position** (snapshot at one instant): read **wavelength** (crest to crest along the horizontal axis) and amplitude.
- **Displacement vs. time** (one point in the medium): read **period** (crest to crest along the horizontal axis) and amplitude.

They look identical. Check the axis label.

> [!warning] Particle Speed ≠ Wave Speed
> A point on the string moves up and down with a speed that varies (max at equilibrium, zero at crests), in SHM. The wave crest moves along the string at constant $v$. Two different things.

### Energy and Amplitude

The energy (and power) carried by a wave is proportional to the **square** of the amplitude: $E \propto A^2$. Doubling the amplitude quadruples the energy. Frequency also matters for mechanical waves ($E \propto f^2 A^2$), but $A^2$ is the relationship most often tested.

### Intensity

For a wave spreading in all directions from a point source, energy spreads over a sphere of area $4\pi r^2$:

$$I = \frac{P}{4\pi r^2}$$

Intensity (W/m²) falls off as $1/r^2$. Double the distance → one quarter the intensity. Since $I \propto A^2$, amplitude falls as $1/r$.

---

## 14.3 — Boundary Behavior of Waves and Polarization

### Superposition

When two waves occupy the same place at the same time, the resulting displacement is the **sum** of the individual displacements. Then the waves pass through each other **unchanged** — they don't bounce off or destroy each other.

- Crest + crest → bigger crest (**constructive** interference)
- Crest + trough of equal amplitude → zero momentarily (**destructive** interference)
- The waves emerge from the overlap exactly as they went in.

### Standing Waves — Preview

Two identical waves traveling in opposite directions (e.g., a wave and its reflection) superpose into a **standing wave**: a pattern that oscillates in place with fixed **nodes** (zero displacement) and **antinodes** (maximum displacement). Full treatment in 14.6.

### Reflection, Transmission, and Absorption

At any boundary, some wave energy reflects, some transmits, some may be absorbed. Smooth surfaces reflect specularly; rough surfaces scatter. For sound, hard surfaces reflect (echoes), soft surfaces absorb (acoustic panels).

### Polarization

A transverse wave can oscillate in any direction perpendicular to its travel. **Polarization** restricts it to one direction.

- **Only transverse waves can be polarized.** Longitudinal waves (sound) cannot — there's only one direction to oscillate. Polarization is proof that light is transverse.
- Ordinary light (sun, bulb) is **unpolarized** — a random mix of all orientations.
- A **polarizing filter** (polaroid) transmits only the component along its axis.

**Unpolarized light through one filter:** intensity drops to **half**, and the light emerges polarized along the filter axis.

**Polarized light through a second filter** at angle $\theta$ to the polarization (Malus's law):
$$I = I_0\cos^2\theta$$

- $\theta = 0°$: all passes. $\theta = 90°$ (crossed polarizers): **nothing** passes. $\theta = 45°$: half.

> [!example] Example: Three Polarizers
> Unpolarized light ($I_0$) → filter A (vertical) → filter B (45°) → filter C (horizontal).
>
> After A: $I_0/2$, vertical. After B: $(I_0/2)\cos^2 45° = I_0/4$, at 45°. After C: $(I_0/4)\cos^2 45° = I_0/8$, horizontal.
>
> Without B, A and C are crossed and **nothing** gets through. Inserting a filter between crossed polarizers lets light through.

**Polarization by reflection:** Light reflecting off a horizontal surface (water, road) becomes partly horizontally polarized. Polarized sunglasses have a **vertical** axis to block that glare.

---

## 14.4 — Electromagnetic Waves

### What They Are

Oscillating electric and magnetic fields, **perpendicular to each other** and to the direction of travel. Transverse. Self-sustaining — a changing $\vec{E}$ creates $\vec{B}$, a changing $\vec{B}$ creates $\vec{E}$. Produced by **accelerating charges** (antennas, hot atoms, electrons changing energy levels).

- Need no medium. Travel at $c = 3.00 \times 10^8$ m/s in vacuum.
- $c = f\lambda$. Frequency set by the source; wavelength adjusts.
- Carry energy and momentum. Can exert radiation pressure.

### The Spectrum

Ordered by increasing frequency (decreasing wavelength):

| Region | $\lambda$ (approx.) | Notes |
|---|---|---|
| Radio | > 1 m | AM/FM, TV, cell |
| Microwave | 1 mm – 1 m | Ovens, radar, Wi-Fi |
| Infrared | 700 nm – 1 mm | Heat radiation, remotes |
| **Visible** | **400 – 700 nm** | Violet (400) → red (700); ROYGBIV |
| Ultraviolet | 10 – 400 nm | Sunburn, fluorescence |
| X-ray | 0.01 – 10 nm | Medical imaging |
| Gamma | < 0.01 nm | Nuclear decay |

All are the same phenomenon at different frequencies. All travel at $c$ in vacuum. Higher frequency → more energy per photon (Unit 15).

> [!tip] Memory Aid
> **R**aging **M**artians **I**nvaded **V**enus **U**sing **X**-ray **G**uns — radio, micro, IR, visible, UV, X, gamma. Low $f$ → high $f$.

### In Materials

Speed drops to $v = c/n$. Frequency unchanged; wavelength shrinks to $\lambda/n$. This is what refraction (Unit 13) is really about.

---

## 14.5 — The Doppler Effect

### What It Is

When a source and observer move relative to each other, the observed frequency differs from the emitted frequency.

- **Approaching** → waves bunch up → observed frequency **higher** (higher pitch, bluer light).
- **Receding** → waves stretch out → observed frequency **lower** (lower pitch, redder light).

The **source's** frequency doesn't change — only what the observer receives.

### Why

**Moving source:** each successive crest is emitted from a position closer to (or farther from) the observer, so crests arrive closer together (or farther apart). The wavelength in the medium actually changes.

**Moving observer:** the observer runs into crests more often (or less often). Wavelength in the medium is unchanged; the observer's relative speed to the crests changes.

### Qualitative Rules (what AP Physics 2 tests)

| Source | Observer | Observed $f$ |
|---|---|---|
| Toward | Still | Higher |
| Away | Still | Lower |
| Still | Toward | Higher |
| Still | Away | Lower |
| Both approaching | — | Higher (both effects add) |
| Same velocity, same direction | — | Unchanged |

Moving **sideways** (perpendicular to the line between them) → no Doppler shift at that instant.

### Formula (for sound; reference only)

$$f' = f\left(\frac{v \pm v_o}{v \mp v_s}\right)$$

Top signs for approach, bottom for recession. $v$ is the wave speed in the medium. Not on the AP equation sheet — reasoning matters more than plugging.

> [!example] Example: Ambulance
> A siren at 700 Hz approaches a stationary listener at 30 m/s ($v = 340$ m/s).
>
> $f' = 700\left(\dfrac{340}{340 - 30}\right) = 768$ Hz. After passing: $700\left(\dfrac{340}{370}\right) = 643$ Hz. The famous "nee-yow."

### Applications

- **Radar guns** — reflected microwaves from a car are shifted; the shift gives speed.
- **Astronomy** — light from distant galaxies is **redshifted** → they're receding → the universe is expanding.
- **Medical ultrasound** — Doppler shift of blood cells gives flow speed.
- **Sonic boom** — when $v_s \geq v$, waves pile up into a shock cone.

---

## 14.6 — Wave Interference and Standing Waves

### Interference of Two Sources

Two sources emitting identical waves in phase. At any point:

- **Path difference** $\Delta d = |d_2 - d_1|$
- $\Delta d = m\lambda$ ($m = 0, 1, 2, \ldots$) → crests meet crests → **constructive** (loud/bright)
- $\Delta d = (m + \tfrac{1}{2})\lambda$ → crest meets trough → **destructive** (quiet/dark)

If the sources are out of phase by half a cycle, swap the conditions.

> [!example] Example: Two Speakers
> Two speakers emit 340 Hz in phase ($\lambda = 1$ m). A listener is 5 m from one and 6.5 m from the other. $\Delta d = 1.5\lambda$ → destructive. They hear very little. Move to $\Delta d = 2$ m → loud.

### Beats

Two waves of **slightly different** frequencies superpose into a wave whose amplitude pulses at the **beat frequency**:

$$f_{\text{beat}} = |f_1 - f_2|$$

Musicians tune by eliminating beats. A 440 Hz and 442 Hz tone together warble twice per second.

### Standing Waves

A wave and its reflection (same $f$, $A$, opposite direction) superpose. Certain points — **nodes** — never move; midway between them, **antinodes** oscillate with maximum amplitude. The pattern doesn't travel; it stands.

- Adjacent nodes are $\lambda/2$ apart. Adjacent antinodes are $\lambda/2$ apart. Node to adjacent antinode: $\lambda/4$.
- Only specific wavelengths "fit" the boundaries → **resonance** at specific frequencies (**harmonics**).

### Strings Fixed at Both Ends

Nodes at both ends. The string must hold a whole number of half-wavelengths:

$$\lambda_n = \frac{2L}{n}, \qquad f_n = \frac{nv}{2L} = nf_1 \qquad (n = 1, 2, 3, \ldots)$$

- $n = 1$: **fundamental** (first harmonic). One antinode in the middle. $\lambda_1 = 2L$.
- $n = 2$: second harmonic. Two antinodes. $\lambda_2 = L$.
- All harmonics present — integer multiples of $f_1$.
- Count antinodes (or "loops") to get $n$.

Wave speed from $v = \sqrt{F_T/\mu}$. Tighten the string → higher $v$ → higher $f_1$. That's tuning a guitar.

### Pipes Open at Both Ends

**Antinodes** (of displacement) at both open ends. Same math as the string:

$$\lambda_n = \frac{2L}{n}, \qquad f_n = \frac{nv}{2L} \qquad (n = 1, 2, 3, \ldots)$$

All harmonics. Flute, open organ pipe.

### Pipes Closed at One End

**Node** at the closed end, **antinode** at the open end. The pipe holds an odd number of quarter-wavelengths:

$$\lambda_n = \frac{4L}{n}, \qquad f_n = \frac{nv}{4L} \qquad (n = 1, 3, 5, \ldots \text{ — odd only})$$

- Fundamental: $\lambda_1 = 4L$, one quarter wave. Half the frequency of an open pipe the same length.
- **Only odd harmonics.** No 2nd, 4th, etc. Clarinet, bottle, closed organ pipe.

| System | Ends | $\lambda_1$ | Harmonics |
|---|---|---|---|
| String (fixed–fixed) | N–N | $2L$ | All |
| Open–open pipe | A–A | $2L$ | All |
| Closed–open pipe | N–A | $4L$ | Odd only |

> [!example] Example: Resonance Tube
> A tuning fork of 512 Hz is held over a tube with water; the first resonance is at an air column of 16.5 cm. Speed of sound?
>
> First resonance of a closed pipe: $L = \lambda/4 \Rightarrow \lambda = 0.66$ m. $v = f\lambda = 512 \times 0.66 = 338$ m/s.
>
> Next resonance at $3\lambda/4 = 49.5$ cm.

> [!example] Example: Guitar String
> A 0.65 m string has a fundamental of 110 Hz. Wave speed? Third harmonic?
>
> $\lambda_1 = 1.3$ m; $v = 110 \times 1.3 = 143$ m/s. $f_3 = 330$ Hz. Press the string to halve its length → $f_1$ doubles to 220 Hz (one octave).

### Sound: Pitch, Loudness, Timbre

- **Pitch** ↔ frequency. Human range ~20 Hz – 20 kHz.
- **Loudness** ↔ intensity (∝ amplitude²). Measured in decibels (logarithmic).
- **Timbre** — the mix of harmonics — is why a violin and a flute at the same pitch sound different.

---

## 14.7 — Diffraction

### What It Is

Waves **bend around obstacles** and **spread out after passing through openings**. This is diffraction, and it's a property of all waves — water, sound, light.

- Significant when the opening or obstacle is **comparable to or smaller than** the wavelength.
- Opening much larger than $\lambda$ → wave passes nearly straight through, sharp shadow.
- Opening comparable to $\lambda$ → wave spreads widely, like a new point source.

This is why you can hear around a corner (sound $\lambda$ ~ meters, comparable to doorways) but can't see around one (light $\lambda$ ~ $10^{-7}$ m, tiny compared to doorways).

### Single-Slit Diffraction

Light through a single narrow slit of width $a$ produces a **central bright band** flanked by dimmer fringes. The dark fringes (minima) occur at

$$a\sin\theta = m\lambda \qquad (m = 1, 2, 3, \ldots)$$

- The central maximum is **twice as wide** as the other bright fringes and far brighter.
- **Narrower slit → wider pattern.** (Counterintuitive — squeeze the opening and the light spreads more.)
- **Longer wavelength → wider pattern.** Red spreads more than blue.

### Resolution

Diffraction limits how well any optical instrument can distinguish two close objects. Larger aperture (telescope mirror, camera lens) → less diffraction → better resolution. Shorter wavelength also helps — electron microscopes use tiny wavelengths.

---

## 14.8 — Double-Slit Interference and Diffraction Gratings

### Young's Double-Slit Experiment

Light through two narrow slits separated by distance $d$. Each slit diffracts; the two spreading waves interfere on a screen, producing alternating bright and dark fringes. This was the decisive evidence that light is a wave.

**Bright fringes** (constructive, path difference $= m\lambda$):
$$d\sin\theta_m = m\lambda \qquad (m = 0, \pm 1, \pm 2, \ldots)$$

**Dark fringes** (destructive):
$$d\sin\theta = \left(m + \tfrac{1}{2}\right)\lambda$$

$m$ is the **order**. $m = 0$ is the central bright fringe, straight ahead.

### Small-Angle Approximation

For a screen at distance $L \gg d$, the fringes are nearly evenly spaced. Position of the $m$-th bright fringe from center:

$$y_m \approx \frac{m\lambda L}{d}$$

Fringe spacing:
$$\Delta y = \frac{\lambda L}{d}$$

| Change | Fringe spacing |
|---|---|
| Longer $\lambda$ (red vs. blue) | Wider |
| Larger $L$ (screen farther) | Wider |
| Larger $d$ (slits farther apart) | **Narrower** |
| Put the whole thing in water ($\lambda \to \lambda/n$) | Narrower |

> [!example] Example
> Red laser ($\lambda = 650$ nm) through slits $0.1$ mm apart onto a screen $2$ m away.
>
> $\Delta y = \dfrac{(650 \times 10^{-9})(2)}{10^{-4}} = 0.013$ m $= 1.3$ cm between bright fringes.
>
> Switch to green (530 nm): $\Delta y = 1.06$ cm. Fringes closer.

> [!tip] Measuring Wavelength
> Rearrange: $\lambda = \dfrac{d\,\Delta y}{L}$. A ruler, a screen, and a slit pair with known spacing measure the wavelength of light to within a few percent. Classic AP lab.

### Diffraction Gratings

Many parallel slits (hundreds per mm). Same bright-fringe condition:

$$d\sin\theta_m = m\lambda$$

where $d$ = slit spacing $= \dfrac{1}{\text{lines per unit length}}$.

Differences from two slits:
- Bright fringes are **much sharper and brighter** (many waves reinforcing at exactly the right angle, cancelling everywhere else).
- Angles are large, so **don't** use the small-angle approximation — solve $\sin\theta$ exactly.
- Separates colors cleanly → **spectroscopy**. White light → full spectrum at each order (except $m = 0$, which stays white). Violet is closest to center, red farthest.

Maximum order visible: $m_{\max} = \dfrac{d}{\lambda}$ (since $\sin\theta \leq 1$).

> [!example] Example: Grating
> A grating has 500 lines/mm. $d = \dfrac{1}{500}$ mm $= 2 \times 10^{-6}$ m. For $\lambda = 600$ nm:
>
> $m = 1$: $\sin\theta = 0.3 \Rightarrow \theta = 17.5°$. $m = 2$: $\sin\theta = 0.6 \Rightarrow 36.9°$. $m = 3$: $\sin\theta = 0.9 \Rightarrow 64.2°$. $m = 4$: $\sin\theta = 1.2$ — impossible. Only three orders on each side.

### Combined Single- and Double-Slit

Real double slits have finite width $a$, so the double-slit fringes are **modulated** by the single-slit envelope — bright fringes near the center, fading out, with "missing orders" where a double-slit maximum lands on a single-slit minimum.

---

## 14.9 — Thin-Film Interference

### Setup

Light hits a thin transparent film (soap bubble, oil on water, anti-reflective coating). Some reflects off the **top** surface; some enters, reflects off the **bottom** surface, and comes back out. These two reflected waves interfere.

Two effects decide whether they reinforce or cancel:

### Effect 1 — Path Difference

The second wave travels an extra distance of about $2t$ (down and back) **inside the film**, where the wavelength is $\lambda_n = \dfrac{\lambda}{n_{\text{film}}}$.

### Effect 2 — Phase Change on Reflection

A wave reflecting off a **higher-$n$** medium (slow) flips by half a wavelength — like a pulse hitting a fixed end. Reflecting off a **lower-$n$** medium — no flip.

Count how many of the two reflections flip:
- **Both flip or neither flips** → no net phase shift from reflection. Constructive when $2t = m\lambda_n$; destructive when $2t = (m + \tfrac{1}{2})\lambda_n$.
- **Exactly one flips** → half-wave net shift. Conditions **swap**: constructive when $2t = (m + \tfrac{1}{2})\lambda_n$; destructive when $2t = m\lambda_n$.

### Working Recipe

1. Identify the three media: above / film / below. Note their $n$ values.
2. Top reflection: flips if $n_{\text{film}} > n_{\text{above}}$.
3. Bottom reflection: flips if $n_{\text{below}} > n_{\text{film}}$.
4. Count flips (0, 1, or 2). Two counts as zero.
5. Use $\lambda_n = \lambda/n_{\text{film}}$ for the path-difference condition.
6. Apply the right table.

| Flips | Constructive (bright) | Destructive (dark) |
|---|---|---|
| 0 or 2 | $2t = m\lambda_n$ | $2t = (m + \tfrac{1}{2})\lambda_n$ |
| 1 | $2t = (m + \tfrac{1}{2})\lambda_n$ | $2t = m\lambda_n$ |

$m = 0, 1, 2, \ldots$

> [!example] Example: Soap Bubble
> Air ($n = 1$) / soap ($n = 1.33$) / air ($n = 1$). Top: air → soap, flip. Bottom: soap → air, no flip. **One flip.**
>
> Minimum thickness for bright reflection of $\lambda = 532$ nm: $2t = \tfrac{1}{2}\lambda_n \Rightarrow t = \dfrac{\lambda}{4n} = \dfrac{532}{4(1.33)} = 100$ nm.
>
> As the bubble thins to $t \to 0$: $2t = 0 = m\lambda_n$ with $m = 0$ → **destructive** → the top of a bubble goes black just before it pops.

> [!example] Example: Anti-Reflective Coating
> Air ($n = 1$) / MgF₂ ($n = 1.38$) / glass ($n = 1.5$). Top: flip. Bottom: flip. **Two flips = zero.**
>
> For no reflection at $\lambda = 550$ nm: destructive → $2t = \tfrac{1}{2}\lambda_n \Rightarrow t = \dfrac{550}{4(1.38)} = 100$ nm.
>
> The coating cancels reflection at green (middle of the spectrum). Reflections of red and violet aren't fully cancelled — that's why coated lenses look faintly purple.

> [!example] Example: Oil on Water
> Air (1) / oil (1.45) / water (1.33). Top: flip. Bottom: oil → water, $1.33 < 1.45$, **no** flip. One flip.
>
> Different thicknesses across the puddle satisfy the bright condition for different $\lambda$ → rainbow swirls.

### Air Wedge

Two glass plates touching at one edge with a thin gap widening toward the other edge. The "film" is **air** between glass. Top reflection (glass → air): no flip. Bottom reflection (air → glass): flip. One flip. At the contact line ($t = 0$): dark. Fringes appear as the gap grows — each successive dark fringe is where $t$ increased by $\lambda/2$. Used to measure tiny thicknesses and to check optical flatness.

---

## Unit Summary

> [!summary] What to Have Cold
> - Wave = energy transfer, medium stays. Transverse (light, string) vs. longitudinal (sound)
> - $v = f\lambda$; $v$ set by medium ($v = \sqrt{F_T/\mu}$ on strings); $f$ set by source
> - Fixed end → inverted reflection; free end → upright. Into slower medium → inverted
> - $E \propto A^2$; intensity $\propto 1/r^2$
> - Superposition: displacements add, waves pass through unchanged
> - Polarization: transverse only. Unpolarized → filter: $I_0/2$. Malus: $I = I_0\cos^2\theta$. Crossed = zero
> - EM waves: $\vec{E} \perp \vec{B} \perp$ travel; $c = 3 \times 10^8$; visible 400–700 nm; radio→gamma
> - Doppler: approach = higher $f$; recede = lower. Source $f$ unchanged
> - Interference: $\Delta d = m\lambda$ constructive, $(m + \tfrac{1}{2})\lambda$ destructive. Beats $= |f_1 - f_2|$
> - Standing waves: string / open pipe $f_n = \dfrac{nv}{2L}$, all $n$. Closed pipe $f_n = \dfrac{nv}{4L}$, odd $n$ only
> - Diffraction: matters when opening $\lesssim \lambda$. Single slit minima $a\sin\theta = m\lambda$; narrower slit → wider spread
> - Double slit / grating: $d\sin\theta = m\lambda$ bright. Small angle: $\Delta y = \dfrac{\lambda L}{d}$
> - Thin film: count reflection flips (flip when going to higher $n$); use $\lambda_n = \lambda/n$; 1 flip swaps the conditions
