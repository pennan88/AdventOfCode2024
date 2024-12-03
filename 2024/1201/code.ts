import { readFile } from "../../module";

var data = await readFile("input.txt");

const lines = data.trim().split("\n");

const leftList: number[] = [];
const rightList: number[] = [];

lines.forEach((line) => {
  const [left, right] = line.split(/\s+/).map(Number);
  leftList.push(left);
  rightList.push(right);
});

var leftSort = leftList.sort((a, b) => a - b);
var rightSort = rightList.sort((a, b) => a - b);

const pairedList = leftSort.map((left, index) => [left, rightSort[index]]);

var differences = pairedList.map(([start, end]) => Math.abs(start - end));
const totalDifference = differences.reduce((sum, diff) => sum + diff, 0);
console.log(totalDifference);
