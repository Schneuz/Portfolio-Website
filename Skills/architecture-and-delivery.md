---
name: architecture-and-delivery
description: Verwende diese Skill-Anleitung, wenn du Projektstruktur, Setup, Build, Deployment oder technische Abnahme umsetzt.
---

# Ziel
Die Website soll wartbar, build-stabil und sauber deploybar sein.

# Empfohlener Stack
- Vite
- React
- TypeScript
- Tailwind CSS
- Motion for React
- Lucide React
- GitHub Pages

# Projektstruktur
- src/components/layout
- src/components/sections
- src/components/ui
- src/data
- docs
- skills

# Architekturregeln
- Inhalte nicht hart in Sektionen streuen
- Daten in src/data auslagern
- UI-Komponenten wiederverwendbar bauen
- Sektionen klar trennen
- keine unnötigen Abhängigkeiten einführen

# Setup-Regeln
- Vite-Projekt mit React + TypeScript
- Tailwind über offiziellen Vite-Plugin-Weg
- Motion sparsam und bewusst
- klare Dateibenennung
- kleine, logische Commits

# Build und Prüfung
- Produktionsbuild lokal testen
- Preview prüfen
- Links prüfen
- Responsive Verhalten prüfen
- Asset-Pfade prüfen
- GitHub-Pages-Tauglichkeit prüfen

# GitHub Pages
- Deployment über Branch oder GitHub Actions
- Base-Pfad bei Bedarf korrekt setzen
- keine privaten Daten ins Repo

# Abschlusscheck
1. Build erfolgreich?
2. Navigation funktioniert?
3. Mobile sauber?
4. Projekt-Links klar?
5. Kontakt funktioniert?
6. Designsystem konsistent?