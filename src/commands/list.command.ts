import chalk from "chalk";
import * as cheerio from "cheerio";
import { Wallpaper } from "../types/wallpaper.interface";

const PENGER_WALLPAPER_BASEURL = "https://penger.city/wallpapers/"

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

async function loadAvailableWallpapers(): Promise<Wallpaper[]> {
    const $ = await cheerio.fromURL(PENGER_WALLPAPER_BASEURL);

    const wallpapers: Wallpaper[] = [];
    $("div.wallpaper").each((_, element) => {
        const extraElements = $(element).find("div")
        const by = $(extraElements[0]).text().replace("By: ", "");
        const inspiredBy = cleanString($(extraElements[1]).text().replace("Inspired by: ", ""));
        $(element).find("a").each((_, link) => {
            const filename = $(link).attr("href")?.split("/")[1]!;
            const nameAndExtension = filename.split(".");
            wallpapers.push({ name: nameAndExtension[0], extension: nameAndExtension[1], by, inspiredBy })
        });
    });

    return wallpapers;
}

function cleanString(str: string): string {
    return str
        .trim()
        .replace("/\n+/g", " ")
        .replace(/\s+/g, " ");
}
