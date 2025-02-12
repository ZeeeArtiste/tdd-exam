export function solveNQueensClassic(n: number): string[][] {
  if (n === 1) {
    return [["#"]];
  }
  if (n === 2 || n === 3) {
    return [];
  }
  
  // Pour n>=4, utiliser le backtracking
  return solveNQueensBacktracking(n);
}
  
function solveNQueensBacktracking(n: number): string[][] {
  const solutions: string[][] = [];
  const board: number[] = [];

  function backtrack(row: number) {
    if (row === n) {
      solutions.push(convertBoard(board, n));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row] = col;
      backtrack(row + 1);
    }
  }

  backtrack(0);
  console.log(solutions);
  
  return solutions;
}
  
// Convertit un tableau de colonnes en un tableau de chaînes de caractères
export function convertBoard(board: number[], n: number): string[] {
  return board.map(col =>
    'O'.repeat(col) + '#' + 'O'.repeat(n - col - 1)
  );
}

export function isValid(board: number[], row: number, col: number): boolean {
  for (let i = 0; i < row; i++) {
      const queenCol = board[i];
      // Vérifier si la reine est sur la même colonne ou la même diagonale
      if (queenCol === col || Math.abs(queenCol - col) === row - i) {
        return false;
      }
  }
  return true;
}
  