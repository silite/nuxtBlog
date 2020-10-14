<template>
  <div style="height: 2000px;">
    <p id="top">
      <a href="#bazinga">Go to the middle</a><br>
      <a href="#1@#%^-bottom">Go to the bottom</a>
    </p>

    <p>
      .<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>
      .<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>
      .<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.
    </p>

    <p id="bazinga">
      <a href="#1@#%^-bottom">Go to the bottom</a>
    </p>

    <p>
      .<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>
      .<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>
      .<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.
      .<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>
      .<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>
      .<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.
    </p>

    <p id="1@#%^-bottom">
      <a href="#top">Go back to the top</a>
    </p>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

const test = ref('')
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
