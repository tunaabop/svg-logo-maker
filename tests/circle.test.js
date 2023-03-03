const Circle = require('../lib/circle.js');
describe('Circle', () => {
  test('should return blue circle', () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
  });
});
