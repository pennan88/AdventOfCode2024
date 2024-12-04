import { readFile } from "../../module";

var data = await readFile("input.txt");

var dataList = data.trim().split("\n");

type Directions = {
  x: number;
  y: number;
  dx: number;
  dy: number;
};

type Type = {
  Directions: Directions;
  rows: number;
  cols: number;
  target: string;
  grid: string[];
};

function GetXmas(grid: string[]) {
  const rows: number = grid.length;
  const cols: number = grid[0].length;
  const target = "XMAS";
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
    [1, 1], // diag down-right
    [-1, -1], // diag up-left
    [1, -1], // diag down-left
    [-1, 1], // diag up-right
  ];

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (const [dx, dy] of directions) {
        if (GetMatch({ Directions: { x: i, y: j, dx: dx, dy: dy }, cols, grid, rows, target: target })) {
          count++;
        }
      }
    }
  }

  return count;
}

function GetMatch({ Directions, cols, rows, target, grid }: Type) {
  for (let i = 0; i < target.length; i++) {
    const nx = Directions.x + i * Directions.dx;
    const ny = Directions.y + i * Directions.dy;

    if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || grid[nx][ny] !== target[i]) {
      return false;
    }
  }
  return true;
}

var result = GetXmas(dataList);

console.log(result);
