export function solveNQueensClassic(n: number): string[][] {
    if (n === 1) {
      return [["#"]];
    }

    // No solution for n=2 or n=3
    if (n === 2 || n === 3) {
        return [];
      }

    return [];
  }
  