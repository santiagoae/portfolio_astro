import spanish from './es.json';
import english from './en.json';
import type { II18N } from '@interfaces/i18n.interface';

const LANGUAGES = {
    SPANISH: "es",
    ENGLISH: "en"
}

export const translateWithI18n = (laungageType?: string): II18N => {
    if(laungageType === LANGUAGES.SPANISH) return spanish;
    if(laungageType === LANGUAGES.ENGLISH) return english;
    return spanish;
}