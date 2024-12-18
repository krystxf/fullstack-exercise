export function getTitle(title?: string | null): string {
    if (!title || title === "") {
        return "Cat Blog";
    }
    return `${title} | Cat Blog`;
}
