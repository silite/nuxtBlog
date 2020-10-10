<template>
  <div>
    <div style="background: #eeeeee; height: 50px;">
      fsdf
      <span style="float: right">fsdf</span>
    </div>
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
