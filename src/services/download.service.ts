import chalk from "chalk";
import { Wallpaper } from "../types";
import * as fs from "fs";
import * as path from "path";

export function downloadWallpaper(wallpaper: Wallpaper, outputPath: string) {
    const path = validateAndCreateOutputPath(outputPath);
    console.log(`Downloading ${wallpaper.name} from ${wallpaper.url} to ${path}`);
}

export function validateAndCreateOutputPath(outputPath: string): string {
    const resolvedPath = path.resolve(outputPath);
  
    if (fs.existsSync(resolvedPath)) {
      if (!fs.lstatSync(resolvedPath).isDirectory()) {
        console.error(`Error: "${outputPath}" exists but is not a directory.`);
        process.exit(1);
      }
    } else {
      try {
        fs.mkdirSync(resolvedPath, { recursive: true });
        console.log(chalk.green(`Output path "${resolvedPath}" has been created.`));
      } catch (error) {
        console.error(chalk.red(`Error: Failed to create output path "${resolvedPath}".`));
        console.error((error as Error).message);
        process.exit(1);
      }
    }
  
    return resolvedPath;
  }