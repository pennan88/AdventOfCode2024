import fs from "fs";

export function readFile(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data: string) => {
      if (err) {
        console.error("Error reading the file:", err);
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}
