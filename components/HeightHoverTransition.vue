<template>
  <div class="trigger">
    <slot name="trigger" />
    <div class="el">
      <slot name="el" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {},
})
</script>

<style lang="less" scoped>
.el {
  transition: max-height 0.5s;
  overflow: hidden;
  max-height: 0;
}
.trigger:hover > .el {
  max-height: 50px;
}
</style>
