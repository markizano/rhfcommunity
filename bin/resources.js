const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

function main() {
  try{
    // 1. Convert candidates.yml to JSON
    const ymlPath = path.resolve('data/candidates.yml');
    const jsonPath = path.resolve('dist/candidates.json');
    console.log(`Reading YAML from: ${ymlPath}`);
    const ymlContent = fs.readFileSync(ymlPath, 'utf8');
    const data = yaml.parse(ymlContent);
    fs.writeFileSync(jsonPath, JSON.stringify(data.candidates));
    console.log(`Converted YAML to JSON and wrote to: ${jsonPath}`);

    console.log('Resources allocated!');
  } catch (err) {
    console.error('Failed:', err);
    process.exit(1);
  }
}

main();
