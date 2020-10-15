import Vue from 'vue'
import '../assets/style/scrollBar.css'
import 'overlayscrollbars/css/OverlayScrollbars.css'
import OverlayScrollbars from 'overlayscrollbars'
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue'
import { debounce } from 'utils/common'
import { SET_SCROLLBAR_OPTION } from 'utils/types/mutation-types'

Vue.use(OverlayScrollbarsPlugin)

export default function(content) {
  const { store } = content

  let count = 0 // A hacky way
  const scrollBar = OverlayScrollbars(document.body, {
    className: 'os-theme-block-dark',
    nativeScrollbarsOverlaid: {
      initialize: false
    }
  })

  window.addEventListener('scroll', debounce(() => {
    if (count === 0) {
      count++
      return
    }
    console.log(scrollBar.scroll())
    store.commit(SET_SCROLLBAR_OPTION, scrollBar.scroll())
  }), {
    capture: true
  })

  window.scrollBar = scrollBar
}
