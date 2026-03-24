# GitHub Pages Deployment

## Voraussetzungen

- Repository auf GitHub
- GitHub Pages in den Repository-Einstellungen aktiviert

## Deployment-Schritte

### 1. GitHub Pages aktivieren

1. Repository öffnen → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `(root)` oder `gh-pages` / `/ (root)`
4. Speichern

### 2. Automatisches Deployment (empfohlen)

Bei jedem Push auf `main` baut der Workflow die Seite und deployed auf `gh-pages`.

- Workflow: `.github/workflows/deploy.yml`
- Der `base`-Pfad wird automatisch aus dem Repository-Namen ermittelt
- URL: `https://<username>.github.io/<repository-name>/`

### 3. Manuelles Deployment

1. `npm run build` lokal ausführen
2. `dist/`-Ordner auf den `gh-pages`-Branch pushen

Oder: Im GitHub-Repository unter **Actions** → **Deploy to GitHub Pages** → **Run workflow** ausführen.

### 4. User-Site (username.github.io)

Falls das Repository `username.github.io` heisst (User-Site):

- `base` muss `/` sein
- In `vite.config.ts`: Vor dem Build `VITE_BASE=/` setzen oder `.env.production` mit `VITE_BASE=/` anlegen

## Checkliste vor Go-Live

- [ ] `src/data/contact.ts`: E-Mail, LinkedIn, GitHub durch echte URLs ersetzen
- [ ] `src/data/projects.ts`: Projekt-Links (`href: '#'`) durch echte URLs ersetzen
- [ ] `public/cv.pdf`: Lebenslauf-PDF hinzufügen (falls CV-Link genutzt wird)
- [ ] `src/data/hero.ts`: Name, Rolle, ggf. Bild anpassen
- [ ] Lokal prüfen: `npm run build` und `npm run preview`
- [ ] Responsive Verhalten auf Mobile testen
- [ ] Interne Navigation (Hash-Links) testen
- [ ] Externe Links (LinkedIn, GitHub) prüfen

## Technische Hinweise

- **Base-Pfad:** Wird aus `GITHUB_REPOSITORY` (CI) oder `VITE_BASE` (lokal) ermittelt
- **Asset-Pfade:** Favicon und CV-Link sind base-pfad-sicher
- **Hash-Navigation:** Interne Links (`#hero`, `#kontakt` etc.) funktionieren unabhängig vom Base-Pfad
