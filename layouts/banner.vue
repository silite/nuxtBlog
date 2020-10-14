<template>
  <div>
    <div
      class="el"
      @click="testOne">
      fdsfsdf
    </div>
    <nuxt></nuxt>
  </div>
</template>

<script>
import anime from 'animejs'
import { defineComponent } from '@vue/composition-api'
import HeightHoverTransition from 'components/HeightHoverTransition'
export default defineComponent({
  components: {
    HeightHoverTransition
  },

  setup() {
    if (process.browser) {
      anime({
        targets: '.el',
        translateY: 10,
        rotate: '1turn',
        duration: 800
      })
    }

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
