import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 匯入 vee-validate 相關規則
import rules from '@vee-validate/rules';
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');
library.add(faCaretRight, faCaretLeft, faTrashAlt);
const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
