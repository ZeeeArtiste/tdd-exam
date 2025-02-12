import { describe, it, expect } from 'vitest';
import { solveNQueensClassic } from '../src/nQueensClassic';

describe('solveNQueensClassic', () => {
    it('should return a board with one queen for n=1', () => {
        const solutions = solveNQueensClassic(1);
        expect(solutions).toEqual([["#"]]);
    });

    it('should return [] for n=2 (no solution)', () => {
        const solutions = solveNQueensClassic(2);
        expect(solutions).toEqual([]);
    });

    it('should return [] for n=3 (no solution)', () => {
        const solutions = solveNQueensClassic(3);
        expect(solutions).toEqual([]);
    });
});

describe('solveNQueensClassic for n=4', () => {
  it('should return exactly 2 solutions for n=4', () => {
    const solutions = solveNQueensClassic(4);
    expect(solutions.length).toBe(2);
  });

  it('each solution should have 4 rows', () => {
    const solutions = solveNQueensClassic(4);
    solutions.forEach(board => {
      expect(board.length).toBe(4);
    });
  });

  it('each row should have 4 characters', () => {
    const solutions = solveNQueensClassic(4);
    solutions.forEach(board => {
      board.forEach(row => {
        expect(row).toHaveLength(4);
      });
    });
  });

  it('each row should contain exactly one queen ("#")', () => {
    const solutions = solveNQueensClassic(4);
    solutions.forEach(board => {
      board.forEach(row => {
        expect((row.match(/#/g) || []).length).toBe(1);
      });
    });
  });
    
});
  
