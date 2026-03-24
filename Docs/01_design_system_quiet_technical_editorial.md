# Quiet Technical Editorial — Design System

## Zweck
Dieses Dokument ist die visuelle und strukturelle Source of Truth für die gesamte Bewerbungs-Website.

Die Website richtet sich an Rollen in:
- AI
- Software Engineering
- Data Science
- Business Analysis

Die Seite soll:
- professionell wirken
- modern wirken
- technisch glaubwürdig sein
- ruhig und fokussiert bleiben
- nicht trocken wirken
- nicht verspielt wirken

Dieses Dokument ersetzt ein gemischtes Referenz-Board.
Ab jetzt gilt ein einziges konsistentes System.

---

## 1. Designrichtung

### Name
Quiet Technical Editorial

### Kerngedanke
Eine persönliche technische Portfolio-Website mit:
- editorieller Klarheit
- starker Typografie
- modularer Struktur
- kontrollierter Motion
- glaubwürdiger technischer Ästhetik

Die Seite soll sich anfühlen wie:
- eine hochwertige technische Personal Brand
- eine präzise Bewerbungs-Landingpage
- ein ruhiges, modernes Portfolio

Die Seite soll sich nicht anfühlen wie:
- ein Startup-Marketing-Onepager
- ein Data-Dashboard
- ein hyperanimiertes Kreativportfolio
- ein klassischer Lebenslauf in HTML

---

## 2. Produktprinzipien

### 2.1 Klarheit vor Dekoration
Die Website muss schnell diese Fragen beantworten:
- Wer ist diese Person?
- Welche Rollen sucht sie?
- Was kann sie?
- Welche Projekte belegen das?
- Wie kann man sie erreichen?

### 2.2 Ein System für alle Sektionen
Alle Sektionen müssen sich wie ein Produkt anfühlen:
- gleiche Typografie-Logik
- gleiche Kartenlogik
- gleiche Radius-/Border-Sprache
- gleiche Abstandslogik
- gleiche Button-Sprache
- gleiche visuelle Ruhe

### 2.3 Struktur vor Stil-Effekten
Layout, Informationshierarchie, Lesbarkeit und Responsiveness sind wichtiger als visuelle Show-Effekte.

### 2.4 Motion ist sekundär
Motion darf Qualität und Hierarchie unterstützen.
Motion darf keine essenzielle Information transportieren, die ohne Animation verloren geht.

### 2.5 Responsive Interpretation statt exakter Screenshot-Kopie
Referenzbilder dienen nur für:
- Komposition
- Hierarchie
- Layoutidee
- Struktur

Referenzbilder definieren nicht:
- Farben
- Typografie
- Spacing-System
- Card-System
- Motion-System

---

## 3. Visuelle Persönlichkeit

### Schlüsselwörter
- präzise
- ruhig
- kompetent
- technisch
- modern
- hochwertig

### Wirkung
Die Seite soll kommunizieren:
- Kompetenz
- Struktur
- Ruhe
- Produktdenken
- selbstbewusste Sachlichkeit

---

## 4. Farbwelt

### Ziel
Ein helles, ruhiges, professionelles Farbsystem mit genau einer dominanten Akzentfarbe.

### Basisfarben
- background: #F6F6F3
- surface: #FCFCFA
- surface-muted: #F0F2EE
- text-primary: #12151B
- text-secondary: #5F6773
- text-tertiary: #8A919C
- border: #D8DEE6
- border-strong: #BCC5D0

### Akzentfarbe
- accent: #2F6E73
- accent-hover: #255A5E
- accent-soft: #D9E9EA

### Regeln
- Genau eine dominante Akzentfarbe.
- Keine section-spezifischen Farbthemen.
- Die Mindmap darf tonale Varianten nutzen, aber im selben Farbsystem bleiben.
- Keine Neonfarben.
- Keine starken Gradients als Hauptsprache.

---

## 5. Typografie

### Empfehlung
Primär:
- Inter für Body, UI, Meta
- Manrope für Headlines

Fallback:
- Inter als Single-Font-System

### Typografische Rolle
- Headlines: klar, ruhig, stark
- Body: neutral, sehr gut lesbar
- Meta: strukturiert, knapp
- Eyebrows: sparsam

### Type Scale
Desktop:
- H1: 72px / 1.0 / 700
- H2: 40px / 1.1 / 700
- H3: 24px / 1.2 / 650
- H4: 18px / 1.3 / 600
- Body Large: 18px / 1.65 / 400
- Body: 16px / 1.6 / 400
- Meta: 14px / 1.5 / 500
- Eyebrow: 12px / uppercase / tracking 0.14em / 600

Tablet:
- H1: 56px
- H2: 34px
- H3: 22px

Mobile:
- H1: 40px
- H2: 30px
- H3: 20px
- Body Large: 17px
- Body: 15px

### Typografie-Regeln
- H1 maximal 2 Zeilen auf Desktop
- H2 maximal 2 Zeilen
- Absätze kurz halten
- Keine zentimeterlangen Textblöcke
- Keine justified Texte
- Negative Space vor Dekoration

---

## 6. Layoutsystem

### Grid
Desktop:
- 12-Spalten-Grid
- max-width: 1200px
- Gutter: 24px

Tablet:
- vereinfachtes Grid
- reduzierte Komplexität

Mobile:
- 1 Spalte
- horizontales Padding: 20–24px

### Spacing Scale
8px-System:
- 4
- 8
- 12
- 16
- 24
- 32
- 40
- 48
- 64
- 80
- 96
- 120

### Section Spacing
Desktop:
- 96–120px vertikal

Tablet:
- 80–96px

Mobile:
- 56–72px

### Lesebreite
- normale Content-Breite: bis 1200px
- schmale Textblöcke: 720–800px max

---

## 7. Formensprache

### 7.1 Cards
Einsatz:
- Kurzprofil
- Projekte
- Warum ich
- Kontakt
- Mobile-Timeline-Items

Card-Stil:
- Hintergrund: surface
- Border: 1px solid border
- Radius: 24px
- Schatten: sehr subtil
- grosszügiges Padding
- kein Glassmorphism
- keine schweren Material-/Neumorphism-Effekte

### 7.2 Linien
Einsatz:
- Mindmap-Verbindungen
- Timeline
- subtile Divider
- Strukturhinweise

Linienstil:
- dünn
- ruhig
- kontrastarm
- nie rein dekorativ

### 7.3 Chips / Badges
Einsatz:
- Stack
- Projektkontext
- Rollenfokus
- Verfügbarkeit

Stil:
- pill shape
- kleiner Text
- leise Flächen
- zurückhaltende Akzentnutzung

### 7.4 Buttons
Varianten:
- primary
- secondary
- ghost

Primary:
- accent Hintergrund
- heller Text
- leichter Hover-Darken

Secondary:
- surface / transparent
- klare Border

Ghost:
- textbasiert
- minimal

Alle Buttons:
- konsistente Höhe
- klarer Focus State
- keine überdesignten Schatten

---

## 8. Motion-System

### Philosophie
Motion soll erzeugen:
- Weichheit
- Kontinuität
- wahrgenommene Qualität

Motion soll nicht erzeugen:
- Show
- Verzögerung
- Ablenkung

### Erlaubt
- Fade-up bei Section-Reveal
- kleiner Y-Offset beim Eintritt
- leichte Card-Hover-Elevation
- dezente Button-Transitions
- subtile Statuswechsel
- optional sehr ruhige Hero-Bewegung

### Nicht erlaubt
- Parallax-Overkill
- horizontale Scroll-Erlebnisse
- scrollytelling-lastige Timeline
- dragbare Mindmap
- dramatische Page Transitions
- aggressive Text-Reveals

### Timing
- micro: 120–180ms
- standard: 220–320ms
- reveal: 350–500ms

---

## 9. Sektionen

### 9.1 Navbar
- leicht
- sticky oder semi-sticky
- klare Anchor-Links
- keine massive Navbar
- Name/Marke links
- Sektionen rechts
- optional CTA auf Desktop

### 9.2 Hero
Desktop:
- 60/40 Split
- Text links dominant
- Bild/Portrait rechts
- grosse H1
- Rollenfokus
- 1 kurzer Differenzierungssatz
- CTA-Reihe
- Meta-Reihe

Regeln:
- ruhig
- technisch
- kein lautes Artwork
- Bild integriert, nicht dekorativ

### 9.3 Kurzprofil
- 2x2 Card-Grid
- vier Karten:
  - Wer bin ich
  - Was suche ich
  - Kernskills
  - Interessen

### 9.4 Mindmap
Desktop:
- echte Mindmap-Anmutung
- zentrale Node
- vier Hauptäste
- 4–6 Unterpunkte pro Ast
- ruhige Linien
- systemkonforme Typografie und Farben

Mobile:
- responsive Interpretation
- gestapelte Cluster oder Gruppen
- keine erzwungene Radialstruktur

### 9.5 Projekte
- Intro + Grid
- konsistente Projektkarten
- jede Karte enthält:
  - Titel
  - Kurzbeschreibung
  - Kontext
  - Stack
  - Status
  - CTAs

### 9.6 Timeline
Desktop:
- horizontal
- eine ruhige Linie
- Milestone-Dots
- Zeitraum + Titel + 1 Zeile Kontext

Mobile:
- vertikal oder gestapelt
- kein horizontaler Zwangs-Scroll

### 9.7 Warum ich
- 3 ruhige Differenzierungsblöcke
- kurze Titel
- 2–3 Zeilen Erklärung
- kein übertriebenes Selbstmarketing

### 9.8 Kontakt
- Abschlusstext
- E-Mail
- LinkedIn
- GitHub
- optional CV
- kein Formular in v1

---

## 10. Content-Regeln

### Allgemein
- prägnant
- konkret
- scanbar
- keine Buzzword-Listen
- keine Fülltexte

### Heading-Pattern
Jede Sektion:
- optional Eyebrow
- H2
- kurzer Intro-Satz

### Projekttexte
Jede Karte erklärt:
- was es ist
- deinen Beitrag
- den Tech-Stack
- wohin der CTA führt

---

## 11. Responsive Regeln

### Global
- mobile-first
- kein horizontal overflow
- keine Desktop-Logik erzwingen
- jede Sektion muss in kleiner Breite verständlich bleiben

### Spezifisch
- Hero-Bild unter Text auf Mobile
- Kurzprofil zu 1 Spalte
- Mindmap zu Gruppenblöcken
- Projekte 1-spaltig
- Timeline vertikal/gestapelt
- Kontaktlinks sauber stacken

---

## 12. Accessibility Regeln

- genau eine H1
- semantische sections
- sichtbare Focus States
- ausreichender Kontrast
- klare Linktexte
- keine icon-only Hauptaktionen
- sinnvolle Alt-Texte
- ausreichend grosse Klickflächen
- Motion darf reduziert werden

---

## 13. Technische Umsetzung

### Stack
- Vite
- React
- TypeScript
- Tailwind CSS
- Motion for React
- Lucide React
- GitHub Pages

### Struktur
- src/components/layout
- src/components/sections
- src/components/ui
- src/data

### Tokens zentral definieren
- Farben
- Radius
- Spacing
- Shadow
- Container
- Motion-Timings

---

## 14. Finale Regel
Wenn eine Designentscheidung die Seite:
- weniger lesbar
- weniger konsistent
- weniger responsiv
- gimmickhafter

macht, gehört sie nicht in dieses System.