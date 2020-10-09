<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

const test = ref('ffff')
export default defineComponent({
  mixins: [global.mixin],

  setup() {
    return {
      test,
    }
  },
})
</script>

<style lang="less" scoped></style>
