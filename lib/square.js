const Shapes = require('./shapes.js');
class Square extends Shapes {
  constructor() {
    super();
  }
  render() {
    return `<rect x="70" y="25" width="150" height="150" fill="${this.getColor()}" />`;
  }
}
module.exports = Square;