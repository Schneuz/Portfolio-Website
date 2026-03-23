# Wie dieses System in Cursor verwendet wird

## Das ist kein Systemprompt
Diese Dateien sind **kein Cursor-Systemprompt**.

Sie sind:
- ein Design-System-Dokument
- Skill-Dateien
- eine Arbeitsgrundlage für den Cursor-Chat / Agent / Plan Mode

## Grundprinzip
- Das Designsystem definiert den Zielzustand.
- Die Skills definieren Arbeitsregeln.
- Die Screenshots sind nur ergänzende Strukturreferenzen.

## Projektstruktur
Lege diese Dateien im Projekt ab:

docs/
  01_design_system_quiet_technical_editorial.md
  02_cursor_usage.md

skills/
  quiet-technical-editorial-design-system.md
  design-tokens-and-foundations.md
  section-composition-and-hierarchy.md
  accessibility-and-quality.md
  architecture-and-delivery.md

## Wie du Cursor steuerst
Wenn du im Cursor-Chat arbeitest, referenzierst du die Dateien im Prompt.

Beispiel:
- „Arbeite nach `docs/01_design_system_quiet_technical_editorial.md`“
- „Verwende zusätzlich diese Skills: ...“

## Reihenfolge
1. Designsystem festlegen
2. Foundations/Tokens bauen
3. Globales Layout bauen
4. Datenstruktur bauen
5. Sektionen einzeln umsetzen
6. Feinschliff
7. Deployment

## Wichtiger Grundsatz
Die Screenshots dürfen:
- Komposition beeinflussen
- Struktur beeinflussen
- Hierarchie beeinflussen

Die Screenshots dürfen nicht:
- Farben definieren
- Typografie definieren
- Radius/Border definieren
- Motion definieren
- das Designsystem ersetzen

## Standard-Zusatz für Screenshot-Prompts
Die beigefügte Referenz ist nur für visuelle Richtung, Komposition, Hierarchie und UI-Stimmung gedacht.
Übernimm nicht blind die exakte Anordnung aus dem Screenshot.
Baue die Sektion responsive und mobile-first.
Desktop darf sich an der Referenz orientieren, aber Tablet und Mobile müssen sinnvoll umgebrochen werden.
Keine Layout-Entscheidung darf nur für die Screenshot-Größe optimiert sein.
Wenn die Referenz nur den Desktop zeigt, entwickle zusätzlich eine saubere Tablet- und Mobile-Variante.