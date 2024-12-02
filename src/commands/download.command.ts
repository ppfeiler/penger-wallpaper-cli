import { DownloadOptions } from "../types/download-options.interface";

export function downloadWallpaper(wallpaperName: string, options: DownloadOptions) {
    console.log(`Downloading ${wallpaperName} to ${options.outputPath}`)
}