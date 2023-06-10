import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

let app = createApp(App)

app.config.globalProperties.discordLink = 'https://discord.gg/59TyngHnPF'
app.config.globalProperties.twitterLink = 'https://twitter.com/CornyCohbs'
app.config.globalProperties.hederaLink = 'https://hedera.com/'

app.mount('#app')
