<template>
  <div>
    <height-hover-transition> fsdf </height-hover-transition>
    <nuxt></nuxt>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import HeightHoverTransition from 'components/HeightHoverTransition'
export default defineComponent({
  components: {
    HeightHoverTransition,
  },

  setup() {},
})
</script>

<style scoped></style>
