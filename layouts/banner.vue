<template>
  <div>
    <height-hover-transition>
      <div
        style="text-align: center; background: #47494e"
        slot="trigger">
        fff
      </div>
      <div slot="el">
        fsddfsdf
      </div>
    </height-hover-transition>
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
