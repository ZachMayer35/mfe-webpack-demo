var fs = require('fs-extra');
var path = require('path');

const targetDirs = [
  path.join(__dirname, 'dist', '01'),
  path.join(__dirname, 'dist', '02'),
  path.join(__dirname, 'dist', '03')
];

const sourceDirs = [
  path.join(__dirname, '/packages', '01-host', 'dist'),
  path.join(__dirname, '/packages', '02-material-ui', 'dist'),
  path.join(__dirname, '/packages', '03-styled-components', 'dist'),
];

// clean
targetDirs.forEach(dir => {
  let files = fs.readdirSync(dir);
  files.forEach((file) => {
    fs.removeSync(path.join(dir, file));
  });
});

// deploy
sourceDirs.forEach((dir, index) => {
  let destination =  path.join(__dirname, 'dist', `0${index + 1}`);
  fs.moveSync(dir, destination, { overwrite: true });
});
