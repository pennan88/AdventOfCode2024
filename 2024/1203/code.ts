import { readFile } from "../../module";

var data = await readFile("input.txt");

function extractMultiplications(corruptedMemory: string) {
  const regex = /mul\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)/g;
  let match;
  let totalSum = 0;

  while ((match = regex.exec(corruptedMemory)) !== null) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);

    totalSum += x * y;
  }

  return totalSum;
}

const result = extractMultiplications(data);

console.log(result);
