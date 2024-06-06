const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should round up 1 and 2 and return 3', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    });

    it('should round 1.4 and 2.5 and return 4', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
    });

    it('should round 4.5 and 2.5 and return 8', function () {
      assert.strictEqual(calculateNumber('SUM', 4.5, 2.5), 8);
    });

    it('should round -1.4 and -2.4 and return -3', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.4), -3);
    });
  });
  describe('SUBTRACT', function () {
    it('should round up 1 and 2 and return -1', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
    });

    it('should round 1.4 and 2.5 and return -2', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.5), -2);
    });

    it('should round 4.5 and 2.5 and return 2', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 2.5), 2);
    });

    it('should round -1.4 and -2.4 and return 1', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -2.4), 1);
    });
  });
  describe('DIVIDE', function () {
    it('should round 4.5 and 2.4 and return 2.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 2.4), 2.5);
    });

    it('should round -1.4 and -2.4 and return 0.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -2.4), 0.5);
    });
    it('should round 2.4 and 0 and return Error', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 0), 'Error');
    });
  });
});
