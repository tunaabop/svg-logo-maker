const Shapes = require('./shapes.js');
class Circle extends Shapes {
  constructor() {
    super();
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.getColor()}" />`;
  }
}
module.exports = Circle;

