import Vue from 'vue'
import '../assets/style/scrollBar.css'
import 'overlayscrollbars/css/OverlayScrollbars.css'
import OverlayScrollbars from 'overlayscrollbars'
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue'

Vue.use(OverlayScrollbarsPlugin)

OverlayScrollbars(document.body, {
  className: 'os-theme-block-dark',
  nativeScrollbarsOverlaid: {
    initialize: false
  }
})
