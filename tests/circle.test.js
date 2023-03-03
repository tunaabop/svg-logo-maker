const Circle = require('../lib/circle.js');
describe('Circle', () => {
  test('should return blue circle', () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
  });
});
describe('Circle', () => {
  test('should return light blue circle with hex code #ADD8E6', () => {
    const circle = new Circle();
    circle.setColor("#ADD8E6");
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="#ADD8E6" />`);
  });
});
