const fs = require('fs');
const path = require('path');

const replacements = {
  '/images/Professional pest control.jpg': '/images/Professional-pest-control.jpg',
  '/images/Eco-friendly pest control.jpg': '/images/Eco-friendly-pest-control.jpg',
  '/images/Insect control Jeddah.jpg': '/images/Insect-control-Jeddah.jpg',
  '/images/Mosquito control service.jpg': '/images/Mosquito-control-service.jpg',
  '/images/Safe pest control.jpg': '/images/Safe-pest-control.jpg',
  '/images/Home pest treatment.jpg': '/images/Home-pest-treatment.jpg',
  '/images/Emergency pest control Jeddah.jpg': '/images/Emergency-pest-control-Jeddah.jpg',
  '/images/Best pest control company.jpg': '/images/Best-pest-control-company.jpg',
  '/images/Professional exterminators.jpg': '/images/Professional-exterminators.jpg',
  '/images/Pest control Jeddah.jpg': '/images/Pest-control-Jeddah.jpg',
  '/images/Pest control guarantee.jpg': '/images/Pest-control-guarantee.jpg',
  '/images/Residential pest control.jpg': '/images/Residential-pest-control.jpg',
  '/images/Commercial pest control Jeddah.jpg': '/images/Commercial-pest-control-Jeddah.jpg',
  '/images/Pest control contracts.jpg': '/images/Pest-control-contracts.jpg',
  '/images/Pest spray service.jpg': '/images/Pest-spray-service.jpg',
  '/images/Rodent control Jeddah.jpg': '/images/Rodent-control-Jeddah.jpg',
  '/images/Ant control Jeddah.jpg': '/images/Ant-control-Jeddah.jpg',
  '/images/Termite treatment Jeddah.jpg': '/images/Termite-treatment-Jeddah.jpg',
  '/images/Bed bug treatment Jeddah.jpg': '/images/Bed-bug-treatment-Jeddah.jpg',
  '/images/Cockroach control Jeddah.jpg': '/images/Cockroach-control-Jeddah.jpg',
  '/images/Exterminator Jeddah.jpg': '/images/Exterminator-Jeddah.jpg',
  '/images/Pest control for restaurants.jpg': '/images/Pest-control-for-restaurants.jpg'
};

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next')) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles('./app');
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  Object.keys(replacements).forEach(oldName => {
    if (content.includes(oldName)) {
      content = content.split(oldName).join(replacements[oldName]);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✓ Fixed: ${path.basename(file)}`);
    count++;
  }
});

console.log(`\n✅ Total files fixed: ${count}\n`);

