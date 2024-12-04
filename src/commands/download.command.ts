import chalk from "chalk";
import { downloadWallpaper, loadAvailableWallpapers } from "../services";
import { DownloadOptions } from "../types/download-options.interface";

export async function downloadCommand(wallpaperName: string, options: DownloadOptions) {
    const availableWallpapers = await loadAvailableWallpapers();
    const wallpaper = availableWallpapers.find((w) => w.name === wallpaperName);

    if (!wallpaper) {
        console.error(chalk.red(`Error: Wallpaper "${wallpaperName}" not found.`));
        console.log("Available wallpapers are:");
        availableWallpapers.forEach((w) => console.log(`- ${chalk.green(w.name)}`));

        process.exit(1);
    }

    downloadWallpaper(wallpaper, options.outputPath);
}