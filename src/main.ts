#!/usr/bin/env node --no-warnings

import { Command } from "commander";
import { listWallpapers } from "./commands/list";
import { downloadWallpaper } from "./commands/download";

const program = new Command();

program
    .name("penger-wallpaper")
    .description("CLI to download penger wallpapers")
    .version("1.0.0");

program
    .command("list")
    .description("List available wallpapers")
    .action(listWallpapers);

program
    .command("download <wallpaper_name>")
    .description("Download the given wallpaper")
    .option("--out <path>", "Specify output path", "~/Pictures/Penger")
    .action(downloadWallpaper);

program.parse();