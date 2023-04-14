const path = require('path');

module.exports = {
  entry: [
    "./src/browsuh.js",
    "./src/cry.js",
    "./src/z4ui/windows.js",
    "./src/z4ui/dropdowns.js"
  ],
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'public/play/'),
  }
};