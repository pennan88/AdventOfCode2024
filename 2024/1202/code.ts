import { readFile } from "../../module";

var data = await readFile("input.txt");

var dataList = data.trim().split("\n");

function isIncreasingOrDecreasing(arr: number[]) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      isDecreasing = false;
    }
    if (arr[i] > arr[i + 1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}

function hasValidDifferences(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    const difference = Math.abs(arr[i] - arr[i + 1]);

    if (difference < 1 || difference > 3) {
      return false;
    }
  }

  return true;
}

function countSafeReports(reports: number[][]) {
  let safeReportsCount = 0;

  reports.forEach((report) => {
    if (isIncreasingOrDecreasing(report) && hasValidDifferences(report)) {
      safeReportsCount++;
    }
  });

  return safeReportsCount;
}

var numberArray = dataList.map((str) => str.split(" ").map(Number));

const safeReportCount = countSafeReports(numberArray);
console.log(safeReportCount);
