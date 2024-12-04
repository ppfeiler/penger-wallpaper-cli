import * as cheerio from "cheerio";
import { Wallpaper } from "../types/wallpaper.interface";
import { cleanWhitespace } from "../utils/string.utils";

const PENGER_WALLPAPER_BASEURL = "https://penger.city/wallpapers/"

export async function loadAvailableWallpapers(): Promise<Wallpaper[]> {
    const $ = await cheerio.fromURL(PENGER_WALLPAPER_BASEURL);

    const wallpapers: Wallpaper[] = [];
    $("div.wallpaper").each((_, element) => {
        const extraElements = $(element).find("div")
        const by = $(extraElements[0]).text().replace("By: ", "");
        const inspiredBy = cleanWhitespace($(extraElements[1]).text().replace("Inspired by: ", ""));
        $(element).find("a").each((_, link) => {
            const url = $(link).attr("href")!;
            const filename = url.split("/")[1]!;
            const nameAndExtension = filename.split(".");
            wallpapers.push(
                {
                    name: nameAndExtension[0],
                    extension: nameAndExtension[1],
                    by,
                    inspiredBy,
                    url: PENGER_WALLPAPER_BASEURL + url 
                }
            );
        });
    });

    return wallpapers;
}
