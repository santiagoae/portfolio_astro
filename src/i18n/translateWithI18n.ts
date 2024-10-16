import spanish from './es.json';
import english from './en.json';

const LANGUAGES = {
    SPANISH: "es",
    ENGLISH: "en"
}

export const translateWithI18n = (laungageType?: string) => {
    if(laungageType === LANGUAGES.SPANISH) return spanish;
    if(laungageType === LANGUAGES.SPANISH) return english;
    return spanish;
}