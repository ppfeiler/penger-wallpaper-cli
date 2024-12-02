export function cleanWhitespace(str: string): string {
    return str
        .trim()
        .replace(/\n+/g, " ")
        .replace(/\s+/g, " ");
}