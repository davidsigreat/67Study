---
title: "Unit 8: Geometry Toolbox"
unit: 8
---

# Unit 8: Geometry Toolbox

| Meet | Event | Topic |
|---|---|---|
| 1 | 2 | Angles in a Plane |
| 2 | 2 | Similar Triangles |
| 2 | 5 | Logic |
| 3 | 2 | Right Triangles |
| 4 | 2 | Convex Polygons |
| 5 | 2 | Circles with Arcs, Chords, Secants & Tangents |
| 6 | 2 | Plane Coordinate Geometry |
| 6 | 5 | Arc Lengths & Circular Regions |
| 7 | 2 | Surface Areas & Volumes of Solids |

> [!tip] Draw it big
> Most geometry C problems become easy once the figure is drawn **to scale**, with every given length and angle marked. Add auxiliary lines: altitudes, radii to tangent points, diagonals.

---

## Angles in a Plane (Meet 1)

- **Complementary** angles add to $90^\circ$. **Supplementary** angles add to $180^\circ$. Vertical angles are equal.
- **Parallel lines cut by a transversal:** corresponding and alternate interior angles are equal, and co-interior (same-side) angles are supplementary.
- **Triangle:** the angles sum to $180^\circ$, and an exterior angle = the sum of the two remote interior angles.
- **Clock angle** at $h$:$m$: $\left|30h-5.5m\right|$ degrees (take $360-$ that if it's over 180).
- **Angle bisectors** of a linear pair are perpendicular.
- "An angle is 3 times its complement": $x=3(90-x)$.

---

## Similar Triangles (Meet 2)

- Similar by **AA**, **SAS~**, or **SSS~**.
- If the ratio of sides is $k$, then the ratio of **perimeters** is $k$, of **areas** is $k^2$, and of **volumes** is $k^3$.
- **Triangle Proportionality:** a line parallel to one side divides the other two sides proportionally.
- **Angle Bisector Theorem:** the bisector from $A$ splits $BC$ into $\dfrac{BD}{DC}=\dfrac{AB}{AC}$.
- **Altitude to the hypotenuse:** $h^2=pq$, $a^2=pc$, $b^2=qc$ (geometric means).
- **Trapezoid diagonals** cut each other in the ratio of the bases. This is the "hourglass" pair of similar triangles.

---

## Logic (Meet 2)

| Statement | Form | Equivalent to |
|---|---|---|
| Conditional | $p\to q$ | contrapositive $\neg q\to\neg p$ |
| Converse | $q\to p$ | inverse $\neg p\to\neg q$ |
| Biconditional | $p\leftrightarrow q$ | $(p\to q)\wedge(q\to p)$ |

- $p\to q$ is **false only** when $p$ is true and $q$ is false.
- **Negations:** $\neg(p\wedge q)=\neg p\vee\neg q$, $\neg(p\vee q)=\neg p\wedge\neg q$, and $\neg(p\to q)=p\wedge\neg q$.
- Negate quantifiers: "not all A are B" = "some A are not B".
- **Valid arguments:** modus ponens ($p\to q$, $p$, so $q$), modus tollens ($p\to q$, $\neg q$, so $\neg p$), and the chain rule.
- Truth tables with $n$ variables have $2^n$ rows.

---

## Right Triangles (Meet 3)

- **Pythagorean triples:** 3-4-5, 5-12-13, 8-15-17, 7-24-25, 20-21-29, 9-40-41, and their multiples.
- **Special triangles:**
  - $45$-$45$-$90$: sides $x : x : x\sqrt2$
  - $30$-$60$-$90$: sides $x : x\sqrt3 : 2x$
- **Converse:** if $c^2<a^2+b^2$ the triangle is acute, and if $c^2>a^2+b^2$ it's obtuse.
- **Altitude to the hypotenuse:** $h=\dfrac{ab}{c}$. The median to the hypotenuse is $\dfrac c2$.
- **Inradius** of a right triangle: $r=\dfrac{a+b-c}{2}$. Circumradius: $R=\dfrac c2$.
- Space diagonal of a box: $\sqrt{l^2+w^2+h^2}$.

---

## Convex Polygons (Meet 4)

- Interior angle sum: $(n-2)\cdot180^\circ$. Each interior angle of a regular $n$-gon: $\dfrac{(n-2)180^\circ}{n}$. Exterior angles sum to $360^\circ$.
- Diagonals: $\dfrac{n(n-3)}2$.
- **Regular polygon area** $=\frac12\,a\,P$ (apothem × perimeter ÷ 2).

| Shape | Area |
|---|---|
| Equilateral triangle, side $s$ | $\dfrac{\sqrt3}4s^2$ (apothem $\frac{s}{2\sqrt3}$, height $\frac{\sqrt3}{2}s$) |
| Regular hexagon, side $s$ | $\dfrac{3\sqrt3}2s^2$ (six equilateral triangles) |
| Regular octagon, side $s$ | $2(1+\sqrt2)s^2$ |
| Rhombus / kite, diagonals $d_1, d_2$ | $\dfrac{d_1d_2}2$ |
| Trapezoid | $\dfrac{b_1+b_2}2h$ = median × height |
| Parallelogram | $bh=ab\sin\theta$ |
| Any quadrilateral, diagonals at angle $\theta$ | $\dfrac12d_1d_2\sin\theta$ |

- **Midpoint quadrilateral** (connecting the midpoints of the sides of any quadrilateral) is a parallelogram with **half** the area.
- **Trapezoid median** = average of the bases. The segment joining the midpoints of the **diagonals** = half the *difference* of the bases.
- Rhombus diagonals are perpendicular bisectors. Kite diagonals are perpendicular.
- **Regular octagon trick:** cut the corners off a square of side $s+s\sqrt2$.

---

## Circles: Arcs, Chords, Secants & Tangents (Meet 5)

| Angle with vertex… | Measure |
|---|---|
| at the center (central) | = arc |
| on the circle (inscribed, or tangent-chord) | $\frac12$ arc |
| inside the circle (two chords) | $\frac12$(sum of the intercepted arcs) |
| outside (secants/tangents) | $\frac12$(far arc − near arc) |

**Power of a Point:**
- Two chords: $AE\cdot EB=CE\cdot ED$
- Two secants from $P$: $PA\cdot PB=PC\cdot PD$ (outside × whole)
- Tangent and secant: $PT^2=PA\cdot PB$
- Two tangents from one point are equal.

- A radius is perpendicular to a tangent at the point of contact. A radius perpendicular to a chord bisects it.
- An inscribed angle in a semicircle is $90^\circ$. In a **cyclic quadrilateral**, opposite angles are supplementary, and **Ptolemy's theorem** holds: $ac+bd=pq$.
- Common external tangent between circles with radii $R$, $r$ and centers $d$ apart: $\sqrt{d^2-(R-r)^2}$. Internal tangent: $\sqrt{d^2-(R+r)^2}$.

---

## Plane Coordinate Geometry (Meet 6)

- Distance $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, midpoint $\left(\frac{x_1+x_2}2,\frac{y_1+y_2}2\right)$.
- Slope $m=\dfrac{\Delta y}{\Delta x}$. Parallel lines have equal slopes, and perpendicular slopes multiply to $-1$.
- Point–line distance: $\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$.
- **Shoelace formula** for the area of a polygon with vertices listed in order:
$$A=\frac12\left|\sum(x_iy_{i+1}-x_{i+1}y_i)\right|$$
- Section formula: the point dividing $AB$ in the ratio $m:n$ is $\left(\frac{nx_1+mx_2}{m+n},\frac{ny_1+my_2}{m+n}\right)$.
- **Centroid** $=\left(\frac{x_1+x_2+x_3}3,\frac{y_1+y_2+y_3}3\right)$.
- **Reflections:** over $y=x$, $(a,b)\to(b,a)$. Over the $x$-axis, $(a,-b)$. Rotating $90^\circ$ counterclockwise, $(a,b)\to(-b,a)$.

---

## Arc Lengths & Circular Regions (Meet 6)

- Circumference $2\pi r$, area $\pi r^2$.
- **Arc length** $=\dfrac\theta{360^\circ}\cdot2\pi r=r\theta$ (with $\theta$ in radians).
- **Sector area** $=\dfrac\theta{360^\circ}\pi r^2=\dfrac12r^2\theta$.
- **Segment area** = sector − triangle $=\dfrac12r^2(\theta-\sin\theta)$.
- **Annulus** (ring) $=\pi(R^2-r^2)$. If a chord of the outer circle is tangent to the inner one with length $c$, the area is $\pi\left(\frac c2\right)^2$.
- **Inscribed/circumscribed:** for a square of side $s$, the incircle has $r=\frac s2$ and the circumcircle $R=\frac{s\sqrt2}2$. For an equilateral triangle, $r=\frac{s}{2\sqrt3}$ and $R=\frac{s}{\sqrt3}$ (so $R=2r$).
- **Lune / shaded-region** problems: add and subtract whole shapes, never measure odd regions directly.

---

## Surface Areas & Volumes (Meet 7)

| Solid | Volume | Surface area |
|---|---|---|
| Prism | $Bh$ | $2B+Ph$ |
| Cylinder | $\pi r^2h$ | $2\pi r^2+2\pi rh$ |
| Pyramid | $\frac13Bh$ | $B+\frac12P\ell$ (slant height $\ell$) |
| Cone | $\frac13\pi r^2h$ | $\pi r^2+\pi r\ell$, $\ \ell=\sqrt{r^2+h^2}$ |
| Sphere | $\frac43\pi r^3$ | $4\pi r^2$ |
| Hemisphere (solid) | $\frac23\pi r^3$ | $3\pi r^2$ |
| Regular tetrahedron, edge $s$ | $\dfrac{s^3}{6\sqrt2}$ | $\sqrt3s^2$ |

- **Frustum** of a cone: $V=\frac13\pi h(R^2+Rr+r^2)$.
- **Euler:** $V-E+F=2$.
- **Scaling** by $k$: surface area ×$k^2$, volume ×$k^3$.
- **Cone unrolled:** the lateral surface is a sector with radius $\ell$ and arc length $2\pi r$, so the sector angle is $\dfrac{r}{\ell}\cdot360^\circ$.
- A sphere inscribed in a cube has $r=\frac s2$. A sphere circumscribing a cube has $r=\frac{s\sqrt3}2$.
