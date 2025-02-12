import { describe, it, expect } from 'vitest';
import { solveSingleAttackQueens } from '../src/singleAttackQueens';

describe('solveSingleAttackQueens - First Test', () => {
  it('should return at least one board of size n x n', () => {
    const n = 4;
    const solutions = solveSingleAttackQueens(n);
    // Pour chaque solution, vérifier que le plateau contient n lignes
    // et que chaque ligne contient exactement n caractères.
    solutions.forEach(board => {
      expect(board.length).toBe(n);
      board.forEach(row => {
        expect(row).toHaveLength(n);
      });
    });
  });
});
