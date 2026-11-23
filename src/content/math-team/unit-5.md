---
title: "Unit 5: Geometry"
unit: 5
---

# Unit 5: Geometry

> [!tip] Draw it big
> Most geometry problems get easy once the figure is drawn **to scale** with every length and angle marked. Then add helper lines: altitudes, radii to tangent points, diagonals.

## Polygons ⭐

For an $n$-gon:
- Interior angles sum to $180(n-2)^\circ$. Each angle of a regular $n$-gon is $\frac{180(n-2)}n$ degrees.
- Exterior angles always sum to $360^\circ$.
- Number of diagonals: $\frac{n(n-3)}2$.
- **Convex:** every interior angle is under $180^\circ$. **Concave:** at least one angle is over $180^\circ$.

## Angles ⭐

- **Complementary** angles add to $90^\circ$. **Supplementary** angles add to $180^\circ$. Vertical angles are equal.
- **Parallel lines and a transversal:** corresponding and alternate interior angles are equal, and same-side interior angles are supplementary.
- **Triangle:** the angles sum to $180^\circ$, and an exterior angle equals the sum of the two remote interior angles.

## 2D Area & Perimeter Formulas ⭐

| Shape | Area | Notes |
|---|---|---|
| Rectangle $b\times h$ | $bh$ | diagonal $\sqrt{b^2+h^2}$ |
| Square, side $s$ | $s^2$ | diagonal $s\sqrt2$ |
| Parallelogram | base × height | **not** side × side; diagonals bisect each other |
| Trapezoid | $\frac{b_1+b_2}2h$ | median = average of the bases |
| Rhombus / kite | $\frac{d_1d_2}2$ | diagonals perpendicular |
| Triangle | $\frac12bh$ | see more formulas below |
| Equilateral triangle | $\frac{\sqrt3}4s^2$ | height $\frac{\sqrt3}2s$ |
| Regular hexagon | $\frac{3\sqrt3}2s^2$ | six equilateral triangles |
| Regular octagon | $2(1+\sqrt2)s^2$ | a square with its corners cut off |
| Any regular polygon | $\frac12\cdot\text{apothem}\cdot\text{perimeter}$ | |
| Circle | $\pi r^2$ | circumference $2\pi r$ |
| Sector, angle $\theta$ | $\frac\theta{360}\pi r^2=\frac12r^2\theta_{\text{rad}}$ | arc length $\frac\theta{360}2\pi r=r\theta_{\text{rad}}$ |

## Types of Triangles

Classified by sides as **equilateral**, **isosceles** (base angles equal), or **scalene**. Classified by angles as **acute**, **right**, or **obtuse**.

With $c$ the longest side: $c^2<a^2+b^2$ means acute, $c^2=a^2+b^2$ means right, and $c^2>a^2+b^2$ means obtuse.

## Special Right Triangles ⭐

- **45-45-90:** sides $1:1:\sqrt2$ (half a square).
- **30-60-90:** sides $1:\sqrt3:2$ (half an equilateral triangle). The short leg is opposite $30^\circ$.
- **Pythagorean triples:** 3-4-5, 5-12-13, 8-15-17, 7-24-25, 20-21-29, 9-40-41, and their multiples.

## Parts of a Triangle

| Cevians | Meet at | Facts |
|---|---|---|
| **Medians** (vertex to the midpoint of the opposite side) | **Centroid** | splits each median $2:1$; the average of the vertex coordinates |
| **Angle bisectors** | **Incenter** | center of the inscribed circle; inradius $r=\frac{A}{s}$ |
| **Perpendicular bisectors** | **Circumcenter** | center of the circumscribed circle; $R=\frac{abc}{4A}$. Outside the triangle if obtuse, at the hypotenuse midpoint if right |
| **Altitudes** | **Orthocenter** | |

🚀 **Euler line:** the orthocenter, centroid, and circumcenter are collinear.

## Triangle Area Formulas ⭐

- $\frac12bh$
- $\frac12ab\sin C$
- **Heron:** $\sqrt{s(s-a)(s-b)(s-c)}$, with $s=\frac{a+b+c}2$
- $rs$ (inradius × semiperimeter)
- $\frac{abc}{4R}$
- Coordinates: the Shoelace formula (below)

**Finding an altitude:** compute the area another way, then $h=\frac{2A}{b}$. In a right triangle, the altitude to the hypotenuse is $\frac{ab}c$.

## Triangle Inequalities

- **Triangle inequality:** each side is less than the sum of the other two. For two sides $a$ and $b$, the third side satisfies $|a-b|<c<a+b$.
- **Angle–side:** the largest side is opposite the largest angle.

## Similar & Congruent Triangles ⭐

- **Similar:** by AA, SAS~, or SSS~. Usually found with parallel lines. With side ratio $k$, perimeters scale by $k$, areas by $k^2$, and volumes by $k^3$.
- **Congruent:** by SSS, SAS, ASA, AAS, or HL (right triangles only). There is **no** SSA congruence.
- **Altitude to the hypotenuse** creates three similar triangles: $h^2=pq$, $a^2=pc$, $b^2=qc$.

## Pythagorean Theorem ⭐

$a^2+b^2=c^2$. In 3D, the diagonal of a box is $\sqrt{l^2+w^2+h^2}$.

## Angle Bisector Theorem ⭐

The bisector from $A$ splits $BC$ so that $\frac{BD}{DC}=\frac{AB}{AC}$.

🚀 The **exterior** angle bisector divides the opposite side **externally** in the same ratio.

## Power of a Point ⭐

For a point $P$ and a circle:
- Two chords through $P$: $PA\cdot PB=PC\cdot PD$
- Two secants from $P$: (outside part)(whole) is equal for both
- Tangent and secant: $PT^2=PA\cdot PB$
- Two tangents from one point are equal.

## Circle Theorems ⭐

| Angle with vertex… | equals |
|---|---|
| at the center | the arc |
| on the circle (inscribed, or tangent-chord) | $\frac12$ the arc |
| inside the circle | $\frac12$(sum of the two intercepted arcs) |
| outside the circle | $\frac12$(far arc − near arc) |

- An angle inscribed in a semicircle is $90^\circ$.
- A radius is perpendicular to a tangent at the point of tangency.
- A radius perpendicular to a chord bisects it.
- Equal chords are equidistant from the center.

## Arc Ratios & Measurements

Arcs are proportional to their central angles. Arc length and sector area are the fraction $\frac\theta{360}$ of the circumference and area.

**Segment** area = sector − triangle $=\frac12r^2(\theta-\sin\theta)$.

## Cyclic Quadrilaterals

Opposite angles are supplementary. 🚀 **Ptolemy:** $ac+bd=pq$ (sides times sides = product of the diagonals). 🚀 **Brahmagupta:** area $=\sqrt{(s-a)(s-b)(s-c)(s-d)}$.

## Named Theorems 🚀

- **Stewart's theorem:** for a cevian $d$ splitting side $a$ into $m$ and $n$, $b^2m+c^2n=a(d^2+mn)$ ("a man and his dad put a bomb in the sink"). The median length is $m_a=\frac12\sqrt{2b^2+2c^2-a^2}$.
- **Shoelace formula:** for vertices listed in order, $A=\frac12\left|\sum(x_iy_{i+1}-x_{i+1}y_i)\right|$.
- **British Flag theorem:** for any point $P$ and rectangle $ABCD$, $PA^2+PC^2=PB^2+PD^2$.
- **Ceva:** cevians $AD$, $BE$, $CF$ are concurrent iff $\frac{AF}{FB}\cdot\frac{BD}{DC}\cdot\frac{CE}{EA}=1$.
- **Menelaus:** a line crossing the sides (extended) gives the same product $=1$ (with signed lengths).
- **Pick's theorem:** for a lattice polygon, $A=I+\frac B2-1$.
- **Mass points:** assign weights to vertices to find segment ratios quickly.

## Circles in the Coordinate Plane

$(x-h)^2+(y-k)^2=r^2$. From $x^2+y^2+Dx+Ey+F=0$, complete the square: the center is $\left(-\frac D2,-\frac E2\right)$ and $r^2=\frac{D^2+E^2}4-F$.

A line is tangent iff its distance from the center equals $r$. Subtracting two circle equations gives the line through their intersection points.

## Transversals & Parallel Lines

When parallel lines are cut by transversals, look for **Z-angles** (alternate interior) and **F-angles** (corresponding). Two transversals across parallel lines create similar triangles ("hourglass" or "nested").

## 3D Geometric Formulas ⭐

| Solid | Volume | Surface area |
|---|---|---|
| Prism | $Bh$ | $2B+Ph$ |
| Cylinder | $\pi r^2h$ | $2\pi r^2+2\pi rh$ |
| Pyramid | $\frac13Bh$ | $B+\frac12P\ell$ |
| Cone | $\frac13\pi r^2h$ | $\pi r^2+\pi r\ell$, with slant $\ell=\sqrt{r^2+h^2}$ |
| Sphere | $\frac43\pi r^3$ | $4\pi r^2$ |
| Cube, edge $s$ | $s^3$ | $6s^2$; space diagonal $s\sqrt3$ |
| 🚀 Regular tetrahedron | $\frac{s^3}{6\sqrt2}$ | $\sqrt3s^2$ |
| 🚀 Frustum | $\frac13\pi h(R^2+Rr+r^2)$ | |

An unrolled cone is a sector with radius $\ell$ and arc length $2\pi r$.

## Euler's Polyhedral Formula

$V-E+F=2$. Example: a cube has $8-12+6=2$.

## Trigonometry (Right-Triangle Basics)

SOH-CAH-TOA: $\sin=\frac{\text{opp}}{\text{hyp}}$, $\cos=\frac{\text{adj}}{\text{hyp}}$, $\tan=\frac{\text{opp}}{\text{adj}}$.

- **Law of sines:** $\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}=2R$
- **Law of cosines:** $c^2=a^2+b^2-2ab\cos C$

More trigonometry is in Unit 8.
