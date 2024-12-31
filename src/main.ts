import App from './App.vue'
import { initializePlugins } from './modules'
import { loadEnvVariables } from './utils/env'

loadEnvVariables()

const app = createApp(App)

initializePlugins(app)

app.mount('#app')
