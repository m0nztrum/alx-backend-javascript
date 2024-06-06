const assert = require('assert');
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should round up 1 and 2 and return 3', function () {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should round 1.4 and 2.5 and return 4', function () {
      expect(calculateNumber('SUM', 1.4, 2.5)).to.equal(4);
    });

    it('should round 4.5 and 2.5 and return 8', function () {
      expect(calculateNumber('SUM', 4.5, 2.5)).to.equal(8);
    });

    it('should round -1.4 and -2.4 and return -3', function () {
      expect(calculateNumber('SUM', -1.4, -2.4)).to.equal(-3);
    });
  });
  describe('SUBTRACT', function () {
    it('should round up 1 and 2 and return -1', function () {
      expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    });

    it('should round 1.4 and 2.5 and return -2', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 2.5)).to.equal(-2);
    });

    it('should round 4.5 and 2.5 and return 2', function () {
      expect(calculateNumber('SUBTRACT', 4.5, 2.5)).to.equal(2);
    });

    it('should round -1.4 and -2.4 and return 1', function () {
      expect(calculateNumber('SUBTRACT', -1.4, -2.4)).to.equal(1);
    });
  });
  describe('DIVIDE', function () {
    it('should round 4.5 and 2.4 and return 2.5', function () {
      expect(calculateNumber('DIVIDE', 4.5, 2.4)).to.equal(2.5);
    });

    it('should round -1.4 and -2.4 and return 0.5', function () {
      expect(calculateNumber('DIVIDE', -1.4, -2.4)).to.equal(0.5);
    });
    it('should round 2.4 and 0 and return Error', function () {
      expect(calculateNumber('DIVIDE', 2.4, 0)).to.equal('Error');
    });
  });
});
