import chalk from "chalk";
import { loadAvailableWallpapers } from "../services/wallpaper.service";

export async function listWallpapers() {
    const wallpapers = await loadAvailableWallpapers();

    if (!wallpapers.length) {
        console.log(chalk.red("No Penger Wallpapers available!"));
        return;
    }

    console.log(chalk.blue("Available Penger Wallpapers:"))
    wallpapers.forEach((wallpaper) => {
        console.log(`"${chalk.green(wallpaper.name)}" by "${chalk.blue(wallpaper.by)}" and inspired by "${chalk.blue(wallpaper.inspiredBy)}"`)
    });
}
