---
title: "Unit 13: Geometric Optics"
unit: 13
---

# Unit 13 — Geometric Optics

> [!summary] Big Idea
> Geometric optics treats light as **rays** traveling in straight lines. Two rules — reflection and refraction — plus a handful of ray-drawing conventions let you predict where any mirror or lens forms an image, how big it is, and whether it's upside down. One equation, $\dfrac{1}{d_o} + \dfrac{1}{d_i} = \dfrac{1}{f}$, covers every mirror and lens; the whole skill is getting the signs right.

---

## 13.1 — Reflection

### Law of Reflection

When light hits a surface, the angle of incidence equals the angle of reflection:

$$\theta_i = \theta_r$$

Both angles are measured from the **normal** — the line perpendicular to the surface at the point of contact. The incident ray, reflected ray, and normal all lie in the same plane.

> [!warning] Measure From the Normal
> Not from the surface. A ray hitting a mirror at $30°$ from the surface has an angle of incidence of $60°$. The AP exam will draw it ambiguously on purpose.

### Specular vs. Diffuse Reflection

- **Specular**: smooth surface (mirror, still water). Parallel incoming rays leave parallel. You see a clear image.
- **Diffuse**: rough surface (paper, wall). Each tiny facet obeys the law of reflection, but the normals point every which way, so rays scatter. You see the object, not an image of your surroundings. This is how you see almost everything.

### Plane Mirrors

The image in a flat mirror is:
- **Virtual** — light doesn't actually pass through it; rays only *appear* to diverge from it
- **Upright**
- **Same size** as the object
- Located as far **behind** the mirror as the object is in front: $d_i = -d_o$
- **Left-right reversed** (more precisely, front-back reversed)

To see your full height in a plane mirror, the mirror needs to be only **half** your height — regardless of how far you stand from it.

### Real vs. Virtual Images

| | Real | Virtual |
|---|---|---|
| Light rays | Actually converge at the image | Only appear to diverge from the image |
| Can be projected on a screen? | Yes | No |
| Side of mirror/lens | Same side as outgoing light | Opposite side from outgoing light |
| Orientation (single mirror/lens) | Always inverted | Always upright |
| Sign of $d_i$ | Positive | Negative |

> [!tip] The Screen Test
> If you could put a piece of paper there and see the image on it, it's real. The image in your bathroom mirror fails this test — it's virtual.

---

## 13.2 — Images Formed by Mirrors

### Spherical Mirrors

A spherical mirror is a section of a sphere of radius $R$ (the **radius of curvature**). The **center of curvature** $C$ is the sphere's center. The **focal point** $F$ is halfway between the mirror and $C$:

$$f = \frac{R}{2}$$

- **Concave** (converging) mirror: reflective surface on the inside of the sphere. Parallel rays reflect **through** $F$. $f > 0$.
- **Convex** (diverging) mirror: reflective surface on the outside. Parallel rays reflect as if coming **from** $F$ behind the mirror. $f < 0$.

### The Mirror Equation and Magnification

$$\frac{1}{d_o} + \frac{1}{d_i} = \frac{1}{f}$$

$$M = \frac{h_i}{h_o} = -\frac{d_i}{d_o}$$

### Sign Conventions (Mirrors)

| Quantity | Positive | Negative |
|---|---|---|
| $d_o$ | Object in front of mirror (always, for real objects) | — |
| $d_i$ | Image in **front** (real) | Image **behind** (virtual) |
| $f$, $R$ | Concave | Convex |
| $h_i$, $M$ | Upright | Inverted |

- $|M| > 1$: enlarged. $|M| < 1$: reduced. $|M| = 1$: same size.

### Ray Diagrams — Three Principal Rays (Mirrors)

Draw any two; the third is a check. The image is where they intersect (or appear to, when traced backward).

1. **Parallel ray**: travels parallel to the axis → reflects through $F$ (concave) or as if from $F$ (convex).
2. **Focal ray**: travels through $F$ (concave) or toward $F$ (convex) → reflects parallel to the axis.
3. **Center ray**: travels through $C$ → hits the mirror perpendicularly and reflects straight back along itself.

(A fourth: a ray to the **vertex** — the center of the mirror — reflects symmetrically about the axis.)

### Concave Mirror — Image Depends on Object Position

| Object location | Image location | Type | Orientation | Size |
|---|---|---|---|---|
| Beyond $C$ | Between $F$ and $C$ | Real | Inverted | Reduced |
| At $C$ | At $C$ | Real | Inverted | Same size |
| Between $C$ and $F$ | Beyond $C$ | Real | Inverted | Enlarged |
| At $F$ | No image (rays parallel) | — | — | — |
| Inside $F$ | Behind mirror | **Virtual** | **Upright** | **Enlarged** |

The last row is the makeup/shaving mirror. The first three are how a concave mirror focuses sunlight or forms images in a telescope.

### Convex Mirror — Always the Same Kind of Image

For any object position: **virtual, upright, reduced**, located behind the mirror between the mirror and $F$. Wider field of view than a plane mirror — used for security mirrors and passenger-side car mirrors ("objects are closer than they appear").

> [!example] Example: Concave Mirror
> Object 30 cm from a concave mirror with $f = 10$ cm.
>
> $\dfrac{1}{d_i} = \dfrac{1}{10} - \dfrac{1}{30} = \dfrac{2}{30} \Rightarrow d_i = 15$ cm (positive → real, in front)
>
> $M = -\dfrac{15}{30} = -0.5$ → inverted, half size. Matches "beyond $C$" row ($C = 20$ cm).

> [!example] Example: Concave Mirror, Object Inside $F$
> Object 5 cm from the same mirror.
>
> $\dfrac{1}{d_i} = \dfrac{1}{10} - \dfrac{1}{5} = -\dfrac{1}{10} \Rightarrow d_i = -10$ cm (negative → virtual, behind)
>
> $M = -\dfrac{-10}{5} = +2$ → upright, doubled.

> [!example] Example: Convex Mirror
> Object 20 cm from a convex mirror with $f = -10$ cm.
>
> $\dfrac{1}{d_i} = -\dfrac{1}{10} - \dfrac{1}{20} = -\dfrac{3}{20} \Rightarrow d_i = -6.7$ cm
>
> $M = -\dfrac{-6.7}{20} = +0.33$ → virtual, upright, one-third size.

---

## 13.3 — Refraction

### Index of Refraction

Light slows down in a material. The index of refraction is

$$n = \frac{c}{v}$$

where $c = 3 \times 10^8$ m/s is the speed in vacuum and $v$ is the speed in the material. $n \geq 1$ always.

| Material | $n$ |
|---|---|
| Vacuum | 1 (exactly) |
| Air | 1.0003 ≈ 1 |
| Water | 1.33 |
| Glass | ~1.5 |
| Diamond | 2.42 |

**Frequency** doesn't change when light enters a new medium (it's set by the source). Since $v = f\lambda$, **wavelength** shrinks: $\lambda_n = \dfrac{\lambda_0}{n}$.

### Snell's Law

When light crosses a boundary between materials, it bends:

$$n_1\sin\theta_1 = n_2\sin\theta_2$$

Angles measured from the normal.

- Entering a **higher** $n$ (slower medium): ray bends **toward** the normal.
- Entering a **lower** $n$ (faster medium): ray bends **away** from the normal.
- Hitting the boundary head-on ($\theta_1 = 0$): no bending, just a speed change.
- Some light is always **reflected** at the boundary too (partial reflection).

> [!tip] Why It Bends
> Picture a marching band walking from pavement onto mud at an angle. The side that hits the mud first slows down while the other side is still on pavement — the line pivots toward the normal. Faster-to-slower bends toward; slower-to-faster bends away.

> [!example] Example: Air to Water
> Light hits water at $45°$ from the normal.
>
> $1\sin 45° = 1.33\sin\theta_2 \Rightarrow \sin\theta_2 = 0.532 \Rightarrow \theta_2 = 32°$. Bent toward the normal. ✓

### Apparent Depth

Objects underwater look shallower than they are, because rays leaving the water bend away from the normal and appear to come from a higher point. For viewing straight down: $d_{\text{apparent}} = \dfrac{d_{\text{actual}}}{n}$. A pool 2 m deep looks 1.5 m deep.

### Total Internal Reflection

When going from **higher** $n$ to **lower** $n$, the refracted ray bends away from the normal. At some incident angle — the **critical angle** — the refracted ray skims along the surface ($\theta_2 = 90°$). Beyond that, no light escapes; it's all reflected.

$$\sin\theta_c = \frac{n_2}{n_1} \qquad (n_1 > n_2)$$

- Only happens going from slow (high $n$) to fast (low $n$). Air → water: never.
- Water to air: $\theta_c = \sin^{-1}(1/1.33) = 48.8°$.
- Glass to air: $\theta_c \approx 42°$.
- Diamond to air: $\theta_c = 24.4°$ — tiny, so light bounces around inside; that's why diamonds sparkle.

Applications: fiber optics (light trapped in a glass core), prisms in binoculars, the mirrored look of a water surface viewed from below.

> [!example] Example: Critical Angle
> Light in glass ($n = 1.5$) hits the surface with air at $50°$. Escapes?
>
> $\theta_c = \sin^{-1}(1/1.5) = 41.8°$. Since $50° > 41.8°$, **total internal reflection** — nothing gets out.

### Dispersion

$n$ depends slightly on wavelength: in glass, **violet** light has a higher $n$ than **red** (violet bends more). A prism separates white light into a spectrum because each color refracts at a different angle. Rainbows come from dispersion plus internal reflection inside raindrops.

---

## 13.4 — Images Formed by Lenses

### Thin Lenses

A **converging** (convex) lens is thicker in the middle; parallel rays refract through the far focal point. $f > 0$.

A **diverging** (concave) lens is thinner in the middle; parallel rays spread out as if from the near focal point. $f < 0$.

A lens has a focal point on **each** side, at equal distances $f$.

### The Lens Equation — Same as the Mirror Equation

$$\frac{1}{d_o} + \frac{1}{d_i} = \frac{1}{f}, \qquad M = -\frac{d_i}{d_o}$$

### Sign Conventions (Lenses)

| Quantity | Positive | Negative |
|---|---|---|
| $d_o$ | Object on incoming side (always, for real objects) | — |
| $d_i$ | Image on the **opposite** side from the object (real) | Image on the **same** side as the object (virtual) |
| $f$ | Converging | Diverging |
| $h_i$, $M$ | Upright | Inverted |

> [!warning] The One Difference From Mirrors
> Mirrors: real images are in **front** (same side as the object). Lenses: real images are on the **far side** (light passes through). Both are "the side the light ends up on." The equations and signs are identical; only the picture differs.

### Ray Diagrams — Three Principal Rays (Lenses)

1. **Parallel ray**: parallel to the axis → refracts through the far $F$ (converging) or away from the near $F$ (diverging).
2. **Focal ray**: through the near $F$ (converging) or toward the far $F$ (diverging) → refracts parallel to the axis.
3. **Center ray**: straight through the center of the lens, **undeviated**.

The center ray is the easiest and most reliable. Draw it first.

### Converging Lens — Image Table

| Object location | Image location | Type | Orientation | Size |
|---|---|---|---|---|
| Beyond $2F$ | Between $F$ and $2F$ (far side) | Real | Inverted | Reduced |
| At $2F$ | At $2F$ | Real | Inverted | Same size |
| Between $2F$ and $F$ | Beyond $2F$ | Real | Inverted | Enlarged |
| At $F$ | No image | — | — | — |
| Inside $F$ | Same side as object | **Virtual** | **Upright** | **Enlarged** |

Identical to the concave mirror table with $C \to 2F$. The last row is a **magnifying glass**. The first row is a **camera** or the eye.

### Diverging Lens — Always the Same

**Virtual, upright, reduced**, on the same side as the object, inside $F$. Same behavior as a convex mirror. Used to correct nearsightedness.

> [!example] Example: Converging Lens
> Object 15 cm from a converging lens with $f = 10$ cm.
>
> $\dfrac{1}{d_i} = \dfrac{1}{10} - \dfrac{1}{15} = \dfrac{1}{30} \Rightarrow d_i = 30$ cm (far side, real)
>
> $M = -\dfrac{30}{15} = -2$ → inverted, doubled. (Between $2F$ and $F$ → beyond $2F$, enlarged. ✓)

> [!example] Example: Magnifying Glass
> Object 6 cm from the same lens.
>
> $\dfrac{1}{d_i} = \dfrac{1}{10} - \dfrac{1}{6} = -\dfrac{1}{15} \Rightarrow d_i = -15$ cm (same side, virtual)
>
> $M = +2.5$ → upright, 2.5× larger.

> [!example] Example: Diverging Lens
> Object 20 cm from a diverging lens with $f = -10$ cm.
>
> $\dfrac{1}{d_i} = -\dfrac{1}{10} - \dfrac{1}{20} = -\dfrac{3}{20} \Rightarrow d_i = -6.7$ cm; $M = +0.33$.

### Lens Power

Optometrists use **power** in diopters: $P = \dfrac{1}{f}$ with $f$ in meters. A $+2$ D lens has $f = 0.5$ m; $-4$ D has $f = -0.25$ m. Powers of thin lenses in contact simply add.

### The Eye and Corrective Lenses

The eye is a converging lens forming a real, inverted image on the retina. The lens changes shape to adjust $f$ (accommodation).

| Condition | Problem | Image falls… | Fix |
|---|---|---|---|
| **Nearsighted** (myopia) | Eye too long / lens too strong | In front of retina | **Diverging** lens (spreads rays before they enter) |
| **Farsighted** (hyperopia) | Eye too short / lens too weak | Behind retina | **Converging** lens (adds convergence) |

### Multiple Lenses

The image from the first lens becomes the **object** for the second. Work through one lens at a time. If lens 1's image falls on the far side of lens 2, it's a **virtual object** for lens 2 ($d_o < 0$). Total magnification is the product: $M = M_1M_2$.

Telescopes and microscopes are two converging lenses: the objective makes a real image; the eyepiece magnifies it like a magnifying glass.

---

## Unit Summary

> [!summary] What to Have Cold
> - $\theta_i = \theta_r$, from the **normal**
> - Plane mirror: virtual, upright, same size, $d_i = -d_o$, left-right reversed
> - Real image: rays converge, can be projected, inverted. Virtual: rays appear to diverge, can't project, upright
> - $f = R/2$; $\dfrac{1}{d_o} + \dfrac{1}{d_i} = \dfrac{1}{f}$; $M = -\dfrac{d_i}{d_o}$ for **every** mirror and lens
> - Concave mirror / converging lens: $f > 0$; image type depends on object position; inside $F$ → virtual, upright, enlarged
> - Convex mirror / diverging lens: $f < 0$; always virtual, upright, reduced
> - Three rays: parallel → through $F$; through $F$ → parallel; through $C$ (mirror) or center (lens) → straight
> - $n = c/v$; $\lambda$ shrinks by $n$, $f$ unchanged
> - Snell: $n_1\sin\theta_1 = n_2\sin\theta_2$; toward normal when slowing, away when speeding up
> - TIR: only high $n \to$ low $n$; $\sin\theta_c = n_2/n_1$
> - Dispersion: violet bends more than red
> - Nearsighted → diverging lens; farsighted → converging
