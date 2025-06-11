// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import  { inBrowser, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from "./layout.vue";
import confetti from "./components/confetti.vue";
import VisitorPanel from "./components/VisitorPanel.vue";
import busuanzi from "busuanzi.pure.js";
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Confetti', confetti);
    app.component('VisitorPanel', VisitorPanel);
    if(inBrowser){
      router.onAfterRouteChange = () => {
        busuanzi.fetch();
      };
    }
  }
} satisfies Theme
