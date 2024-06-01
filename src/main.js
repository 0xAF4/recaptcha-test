import { createApp } from 'vue'
import { VueRecaptchaPlugin } from 'vue-recaptcha'
import App from './App.vue'

const app = createApp(App)
app.use(VueRecaptchaPlugin, {
  v2SiteKey: '6LdJwe0pAAAAAGxNiJVbTdIxQZ0vdsHGBlMOWTzA',
})

app.mount('#app')
