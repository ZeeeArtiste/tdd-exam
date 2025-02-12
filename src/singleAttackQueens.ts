export function solveSingleAttackQueens(n: number): string[][] {
    // Crée un plateau n x n rempli de 'O'
    const board = Array.from({ length: n }, () => "O".repeat(n));
    // On retourne un tableau contenant ce plateau
    return [board];
  }