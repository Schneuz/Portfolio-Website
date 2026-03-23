---
name: design-tokens-and-foundations
description: Verwende diese Skill-Anleitung, wenn du Farben, Typografie, Spacing, Radii, Shadows, Containerbreiten oder Motion-Tokens definierst.
---

# Ziel
Lege ein zentrales, wiederverwendbares Foundation-System an.

# Farben
Nutze ein ruhiges Light Theme:
- background: #F6F6F3
- surface: #FCFCFA
- surface-muted: #F0F2EE
- text-primary: #12151B
- text-secondary: #5F6773
- text-tertiary: #8A919C
- border: #D8DEE6
- border-strong: #BCC5D0
- accent: #2F6E73
- accent-hover: #255A5E
- accent-soft: #D9E9EA

# Typografie
Bevorzugt:
- Inter für Body/UI
- Manrope für Headlines

Fallback:
- Inter als Single-Font-System

# Type Scale
Desktop:
- H1 72
- H2 40
- H3 24
- H4 18
- Body Large 18
- Body 16
- Meta 14
- Eyebrow 12

Tablet:
- H1 56
- H2 34
- H3 22

Mobile:
- H1 40
- H2 30
- H3 20
- Body Large 17
- Body 15

# Spacing
Nutze ein 8px-System:
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

# Radius
- cards: 24px
- buttons: 16px oder pill
- small UI: 12px

# Shadows
- sehr subtil
- Fokus auf Border + Surface
- keine schweren Schatten

# Motion Tokens
- micro: 120–180ms
- standard: 220–320ms
- reveal: 350–500ms

# Container
- max content width: 1200px
- reading width: 720–800px
- gutters: 24px desktop
- mobile page padding: 20–24px

# Umsetzung
- Tokens zentral anlegen
- keine wilden Einzelwerte in Komponenten verteilen
- Farben, Radius, Shadows und Timing wiederverwendbar definieren