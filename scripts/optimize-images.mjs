import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const INPUT_DIR = 'public/images';
const TEMP_DIR = 'public/images-optimized';

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  // Create temp directory
  if (!existsSync(TEMP_DIR)) {
    await mkdir(TEMP_DIR, { recursive: true });
  }

  // Get all image files
  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const outputPath = join(TEMP_DIR, file.replace(/\.(jpg|jpeg|png)$/i, '.jpg'));

    try {
      const inputStats = await stat(inputPath);
      const originalSize = inputStats.size;
      totalOriginalSize += originalSize;

      // Optimize image
      await sharp(inputPath)
        .resize(1920, 1920, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(outputPath);

      const outputStats = await stat(outputPath);
      const optimizedSize = outputStats.size;
      totalOptimizedSize += optimizedSize;

      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      const sizeKB = (optimizedSize / 1024).toFixed(2);
      
      console.log(`✓ ${file.padEnd(40)} ${sizeKB.padStart(8)} KB (saved ${savings}%)`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }

  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  const originalMB = (totalOriginalSize / 1024 / 1024).toFixed(2);
  const optimizedMB = (totalOptimizedSize / 1024 / 1024).toFixed(2);

  console.log(`\n📊 Summary:`);
  console.log(`   Original:  ${originalMB} MB`);
  console.log(`   Optimized: ${optimizedMB} MB`);
  console.log(`   Saved:     ${totalSavings}%`);
  console.log(`\n✅ Optimized images saved to: ${TEMP_DIR}`);
  console.log(`\n⚠️  Manual step: Review images in ${TEMP_DIR}, then:`);
  console.log(`   1. Delete files in ${INPUT_DIR}`);
  console.log(`   2. Move files from ${TEMP_DIR} to ${INPUT_DIR}`);
  console.log(`   3. Delete ${TEMP_DIR}`);
}

optimizeImages().catch(console.error);
