import translations from './translations.js'

const LangPlugin = {
  install (Vue) {
    var userLang = navigator.language || navigator.userLanguage;
    var lang = 'en'

    if (userLang.includes('pt')) {
      lang = 'pt'
    }

    Vue.prototype.$lang = function () {
      return translations[lang]
    }
    Vue.prototype.$t = function () {
      return translations[lang]
    }
    Vue.prototype.$setLang = function (new_lang) {
      lang = new_lang
    }
    Vue.prototype.$getLang = function () {
      return lang
    }
  }
}

export default LangPlugin
