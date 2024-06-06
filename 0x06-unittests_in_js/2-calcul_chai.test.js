const { expect } = require('chai');
const calculateNumber = require('./2-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should round up 1 and 2 and return 3', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should round 1.4 and 2.5 and return 4', () => {
      expect(calculateNumber('SUM', 1.4, 2.5)).to.equal(4);
    });

    it('should round 4.5 and 2.5 and return 8', () => {
      expect(calculateNumber('SUM', 4.5, 2.5)).to.equal(8);
    });

    it('should round -1.4 and -2.4 and return -3', () => {
      expect(calculateNumber('SUM', -1.4, -2.4)).to.equal(-3);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('should round up 1 and 2 and return -1', () => {
      expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    });

    it('should round 1.4 and 2.5 and return -2', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.5)).to.equal(-2);
    });

    it('should round 4.5 and 2.5 and return 2', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 2.5)).to.equal(2);
    });

    it('should round -1.4 and -2.4 and return 1', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -2.4)).to.equal(1);
    });
  });
  describe('type == "DIVIDE"', () => {
    it('should round 4.5 and 2.4 and return 2.5', () => {
      expect(calculateNumber('DIVIDE', 4.5, 2.4)).to.equal(2.5);
    });

    it('should round -1.4 and -2.4 and return 0.5', () => {
      expect(calculateNumber('DIVIDE', -1.4, -2.4)).to.equal(0.5);
    });
    it('should round 2.4 and 0 and return Error', () => {
      expect(calculateNumber('DIVIDE', 2.4, 0)).to.equal('Error');
    });
  });
});
