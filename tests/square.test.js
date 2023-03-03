const Square = require('../lib/square.js');
describe('Square', () => {
  test('should return blue square', () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toEqual('rect width="160" height="160" fill="blue" />');
  });
});