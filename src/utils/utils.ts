import { languages, themes } from './constants';

export function getLanguagesData() {
    return Object.values(languages).map(lang => {
        return {
            value: `${lang}`,
            label: `t-${lang}`,
            icon: `${lang}-flag`
        }
    });
}
export function getLanguage(): string | null {
    return document.body.getAttribute('lang');
}
export function setLanguage(lang: string): void {
    document.body.setAttribute('lang', lang);
}
export function getThemesData() {
    return Object.values(themes).map(theme => {
        return {
            value: `${theme}`,
            label: `t-${theme}`,
            icon: `${theme}-theme`
        }
    });
}
export function getTheme(): string | null {
    return document.body.getAttribute('theme');
}
export function setTheme(theme: string): void {
    document.body.setAttribute('theme', theme);
}
