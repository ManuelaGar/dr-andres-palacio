import { mkdir, rm } from 'node:fs/promises'
import sharp from 'sharp'

const SRC = 'assets/source'
const OUT = 'public/images'

const jobs = [
  { file: 'andres-palacio.jpg', name: 'andres-palacio', widths: [480, 800, 1200] },
  { file: 'andres-palacio.jpg', name: 'andres-palacio-face', extract: { left: 374, top: 260, width: 1300, height: 1300 }, widths: [128] },
  { file: 'firma-andres-palacio.png', name: 'firma', heights: [128] }
]

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

for (const job of jobs) {
  const sizes = job.widths?.map((w) => ({ width: w })) ?? job.heights.map((h) => ({ height: h }))
  for (const size of sizes) {
    const label = size.width ?? `h${size.height}`
    const source = sharp(`${SRC}/${job.file}`)
    const base = (job.extract != null ? source.extract(job.extract) : source).resize(size)
    await base.clone().avif({ quality: 55 }).toFile(`${OUT}/${job.name}-${label}.avif`)
    await base.clone().webp({ quality: 78 }).toFile(`${OUT}/${job.name}-${label}.webp`)
    if (job.heights != null) {
      await base.clone().png({ compressionLevel: 9 }).toFile(`${OUT}/${job.name}-${label}.png`)
    } else {
      await base.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(`${OUT}/${job.name}-${label}.jpg`)
    }
  }
}
