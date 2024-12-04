#!/usr/bin/env -S node --no-warnings

import { Command } from "commander";
import { listCommand, downloadCommand } from "./commands";

const program = new Command();

program
    .name("penger-wallpaper")
    .description("CLI to download penger wallpapers")
    .version("1.0.0");

program
    .command("list")
    .description("List available wallpapers")
    .action(listCommand);

program
    .command("download <wallpaper_name>")
    .description("Download the given wallpaper")
    .option("--output-path <path>", "Specify output path", "~/Pictures/Penger")
    .action(downloadCommand);

program.parse();