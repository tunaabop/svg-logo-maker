const Square = require('../lib/square.js');
describe('Square', () => {
  test('should return blue square', () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toEqual('<rect x="70" y="25" width="150" height="150" fill="blue" />');
  });
});
describe('Square', () => {
  test('should return light blue square with hex code #ADD8E6', () => {
    const square = new Square();
    square.setColor("#ADD8E6");
    expect(square.render()).toEqual('<rect x="70" y="25" width="150" height="150" fill="#ADD8E6" />');
  });
});