const Triangle = require('../lib/triangle.js');
describe('Triangle', () => {
  test('should return blue triangle', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});
describe('Triangle', () => {
  test('should return light blue triangle with hex code #ADD8E6', () => {
    const triangle = new Triangle();
    triangle.setColor("#ADD8E6");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#ADD8E6" />');
  });
});