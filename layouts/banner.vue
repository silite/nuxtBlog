<template>
  <div>
    <div
      class="el"
      @click="testOne">
      fdsfsdf
    </div>
    <scroll-bar></scroll-bar>
    <anime-demo></anime-demo>
    <nuxt></nuxt>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import HeightHoverTransition from 'components/HeightHoverTransition'
import scrollBar from 'components/scroll'
import animeDemo from '../components/animeDemo'
export default defineComponent({
  components: {
    HeightHoverTransition,
    scrollBar,
    animeDemo
  },

  setup() {
    //
    // function scrollHandle(evt) {
    //   console.log(evt)
    // }
    //
    function testOne() {
      console.log('fsdf')
    }
    //
    return {
      testOne
    }
  },
})
</script>

<style lang="less" scoped>

</style>
