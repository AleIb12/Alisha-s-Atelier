const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  try {
    // Define all favicon configurations
    const faviconConfigs = [
      { 
        input: 'favicon.svg', 
        output: 'favicon-32.png', 
        size: 32,
        description: '32x32 standard favicon'
      },
      { 
        input: 'favicon-192-template.svg', 
        output: 'favicon-192.png', 
        size: 192,
        description: '192x192 PWA icon'
      },
      { 
        input: 'favicon-512-template.svg', 
        output: 'favicon-512.png', 
        size: 512,
        description: '512x512 PWA icon'
      }
    ];

    console.log('🎨 Generating favicons from SVG templates...\n');

    for (const config of faviconConfigs) {
      const svgPath = path.join(__dirname, 'public', config.input);
      const outputPath = path.join(__dirname, 'public', config.output);
      
      if (!fs.existsSync(svgPath)) {
        console.error(`❌ SVG template not found: ${config.input}`);
        continue;
      }

      try {
        await sharp(svgPath)
          .resize(config.size, config.size)
          .png({
            quality: 100,
            compressionLevel: 9,
            palette: false
          })
          .toFile(outputPath);
        
        console.log(`✅ Generated: ${config.output} (${config.description})`);
      } catch (error) {
        console.error(`❌ Error generating ${config.output}:`, error.message);
      }
    }

    // Generate favicon.ico from the 32x32 PNG
    try {
      console.log('\n🔄 Converting 32x32 PNG to ICO format...');
      await sharp(path.join(__dirname, 'public', 'favicon-32.png'))
        .resize(32, 32)
        .png()
        .toFile(path.join(__dirname, 'public', 'favicon-temp.png'));
      
      // Note: Sharp doesn't support ICO directly, so we'll copy the PNG as ICO
      // For a proper ICO file, you'd need a specialized library like 'to-ico'
      fs.copyFileSync(
        path.join(__dirname, 'public', 'favicon-temp.png'),
        path.join(__dirname, 'public', 'favicon.ico')
      );
      
      // Clean up temp file
      fs.unlinkSync(path.join(__dirname, 'public', 'favicon-temp.png'));
      
      console.log('✅ Generated: favicon.ico');
    } catch (error) {
      console.error('❌ Error generating favicon.ico:', error.message);
    }

    console.log('\n🎉 Favicon generation complete!');
    console.log('\nGenerated files:');
    console.log('- favicon.ico (32x32 for browser tabs)');
    console.log('- favicon-192.png (192x192 for PWA)');
    console.log('- favicon-512.png (512x512 for PWA)');
    console.log('- favicon.svg (scalable vector version)');
    
  } catch (error) {
    console.error('❌ Fatal error generating favicons:', error);
  }
}

generateFavicons();
