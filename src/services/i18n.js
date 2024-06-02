// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
import {createI18n} from "vue-i18n";
import {enMessage} from "@/locales/en/en";
import {frMessage} from "@/locales/fr-FR/fr-FR";

const messages = {
    en: enMessage,
    "fr-FR": frMessage
}

const i18nMessages = createI18n({
    locale: localStorage.getItem('currentLocale') ?? process.env.VUE_APP_DEFAULT_LOCALE,
    fallbackLocale: process.env.VUE_APP_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages
})

export { i18nMessages }