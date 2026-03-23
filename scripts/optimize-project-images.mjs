#!/usr/bin/env node
/**
 * Optimiert Projektbilder: 800px Breite, WebP, ~80% Qualität
 */
import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ASSETS_DIR = join(__dirname, '../src/assets')

const PROJECT_IMAGES = [
  'HighilghtDetection.png',
  'GameHub.png',
  'AgentZeroPipeline.png',
]

const MAX_WIDTH = 800
const WEBP_QUALITY = 82

async function optimize() {
  for (const filename of PROJECT_IMAGES) {
    const inputPath = join(ASSETS_DIR, filename)
    const baseName = filename.replace(/\.png$/i, '')
    const outputPath = join(ASSETS_DIR, `${baseName}.webp`)

    try {
      const meta = await sharp(inputPath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath)

      const inputStat = await stat(inputPath)
      const saved = ((1 - meta.size / inputStat.size) * 100).toFixed(0)
      console.log(
        `✓ ${filename} → ${baseName}.webp (${(meta.size / 1024).toFixed(1)} KB, -${saved}%)`
      )
    } catch (err) {
      console.error(`✗ ${filename}:`, err.message)
    }
  }
}

optimize().catch(console.error)
