import { describe, it, expect } from 'vitest';
import { solveNQueensClassic } from '../src/nQueensClassic';

describe('solveNQueensClassic', () => {
  it('should return a board with one queen for n=1', () => {
    const solutions = solveNQueensClassic(1);
    expect(solutions).toEqual([["#"]]);
  });
});

it('should return [] for n=2 (no solution)', () => {
    const solutions = solveNQueensClassic(2);
    expect(solutions).toEqual([]);
  });
