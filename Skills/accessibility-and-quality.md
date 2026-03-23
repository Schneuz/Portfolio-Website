---
name: accessibility-and-quality
description: Verwende diese Skill-Anleitung, wenn du Semantik, Linktexte, Fokuszustände, Motion-Reduktion oder Qualitätskontrollen umsetzt.
---

# Ziel
Die Website soll semantisch sauber, zugänglich und robust sein.

# Semantik
- genau eine H1 pro Seite
- Navigation in <nav>
- Hauptinhalt in <main>
- Sektionen mit sinnvollen Überschriften
- Listen als echte Listen
- Buttons nur für Aktionen
- Links nur für Navigation

# Headings
- Headings müssen die Seitenstruktur klar widerspiegeln
- sichtbare Überschriften sollen Regionen verständlich benennen
- Heading-Reihenfolge logisch halten

# Linktexte
- Linktexte müssen den Zweck klar machen
- gute Beispiele:
  - GitHub-Profil öffnen
  - Projektseite ansehen
  - E-Mail senden
- schlechte Beispiele:
  - Mehr
  - Hier
  - Weiterlesen

# Fokuszustände
- sichtbar
- konsistent
- nicht entfernen ohne Ersatz

# Bilder
- sinnvolle Alt-Texte für inhaltlich relevante Bilder
- dekorative Bilder entsprechend neutral behandeln

# Motion
- nicht essenzielle Motion reduzierbar machen
- prefers-reduced-motion respektieren
- Animation nie als einzige Bedeutungsschicht verwenden

# Formulare
- in v1 vermeiden, wenn nicht nötig
- falls später vorhanden:
  - echte Labels
  - klare Instructions
  - nur notwendige Felder

# Qualitätscheck
1. Tastaturbedienung ok?
2. Kontraste ausreichend?
3. Linktexte klar?
4. Headings logisch?
5. Motion reduzierbar?
6. Mobile-Lesbarkeit gut?