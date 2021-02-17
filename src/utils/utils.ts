export function getLanguage(): string | null {
    return document.body.getAttribute('lang');
}

export function setLanguage(lang: string): void {
    document.body.setAttribute('lang', lang);
}

export function getTheme(): string | null {
    return document.body.getAttribute('theme');
}

export function setTheme(theme: string): void {
    document.body.setAttribute('theme', theme);
}
