import { NavItem } from "../interfaces/interfaces";

// TODO: Figure out a way to do this based on the selected language, not always 'fi'
import translations from '../i18n/translations.fi.json';

export const navItems: NavItem[] = [
    {
        title: translations.patterns.general,
        path: "/patterns",
    },
    {
        title: translations.patterns.multi_insert,
        path: "/patterns/multi-insert",
    },
]
