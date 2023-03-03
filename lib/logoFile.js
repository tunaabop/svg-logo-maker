function createLogo(text, shape, color) {
  // import class file based on shape
  const Shapes = require(`./${shape}.js`);
  // console.log(`./${shape}.js`);
  // create shape instance based on imported shape class
  const shapeObj = new Shapes();
  // set shape color
  shapeObj.setColor(color);
  // return rendered svg file text
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeObj.render()}
  <text x="150" y="125" font-size="50" text-anchor="middle" fill="white">${text}</text></svg>
`;
}

module.exports = { createLogo };
