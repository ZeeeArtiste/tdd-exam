import { describe, it, expect } from 'vitest';
import { solveNQueensClassic, convertBoard,  isValid} from '../src/nQueensClassic';
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

describe('convertBoard', () => {
  it('should convert a board [1,3,0,2] for n=4 into the correct string representation', () => {
    const board = [1, 3, 0, 2];
    const n = 4;
    const result = convertBoard(board, n);
    expect(result).toEqual(["O#OO", "OOO#", "#OOO", "OO#O"]);
  });

  it('should convert a board [0] for n=1 into ["#"]', () => {
    const board = [0];
    const n = 1;
    const result = convertBoard(board, n);
    expect(result).toEqual(["#"]);
  });
});

describe('isValid', () => {
  it('should return true for a valid placement when no queen conflicts exist', () => {
    // Placer une reine en ligne 0 à la colonne 1
    const board = [1];
    // Pour row = 1, placer à la colonne 3 ne crée pas de conflit
    expect(isValid(board, 1, 3)).toBe(true);
  });

  it('should return false when placing a queen in the same column as an existing queen', () => {
    // Placer une reine en ligne 0 à la colonne 1
    const board = [1];
    // Pour row = 1, placer à la colonne 1 (même colonne) est invalide
    expect(isValid(board, 1, 1)).toBe(false);
  });

  it('should return false when placing a queen on the same diagonal as an existing queen', () => {
    // Placer une reine en ligne 0 à la colonne 1
    const board = [1];
    // Pour row = 1, placer à la colonne 0 est en diagonale avec la reine de (0,1)
    expect(isValid(board, 1, 0)).toBe(false);
  });

  it('should return true for a known valid configuration', () => {
    // Pour le tableau partiel d'une solution valide de n=4: [1, 3, 0] (lignes 0 à 2)
    const board = [1, 3, 0];
    // Pour row = 3, placer à la colonne 2 est valide (la solution complète étant [1, 3, 0, 2])
    expect(isValid(board, 3, 2)).toBe(true);
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

  it('no two queens should attack each other', () => {
    const solutions = solveNQueensClassic(4);
    solutions.forEach(board => {
      // Récupérer les positions des reines
      const queens = board.map((row, rowIndex) => ({
        row: rowIndex,
        col: row.indexOf('#')
      }));
      // Vérifier que pour chaque paire de reines, elles ne sont pas en conflit
      for (let i = 0; i < queens.length; i++) {
        for (let j = i + 1; j < queens.length; j++) {
          const q1 = queens[i];
          const q2 = queens[j];
          // Vérifier que les reines ne sont pas sur la même colonne ou diagonale
          const sameCol = q1.col === q2.col;
          const sameDiag = Math.abs(q1.row - q2.row) === Math.abs(q1.col - q2.col);
          expect(sameCol || sameDiag).toBe(false);
        }
      }
    });
  });

  
});
  
