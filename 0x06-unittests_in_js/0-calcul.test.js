const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('should return 3', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
  it('should return 2', () => {
    assert.strictEqual(calculateNumber(1, 1), 2);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });
  it('should return -2', () => {
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });
  it('should round 2.5 and 1.5 and return 5', () => {
    assert.strictEqual(calculateNumber(2.5, 1.5), 5);
  });
  it('should round 2.8 and 1.2 and return 4', () => {
    assert.strictEqual(calculateNumber(2.8, 1.2), 4);
  });
  it('should round -1.2 and -3.3 and return -4', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.3), -4);
  });
  it('should round -4.6 and -2.7 and return -8', () => {
    assert.strictEqual(calculateNumber(-4.6, -2.7), -8);
  });
});
