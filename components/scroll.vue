<template>
  <div>
    <span
      id="scrollAnime"
      :style="style">{{ style }}</span>
  </div>
</template>

<script>
import { defineComponent, watch, ref } from '@vue/composition-api'
export default defineComponent({
  setup(props, ctx) {
    const $store = ctx.root.$store
    const style = ref()

    watch(() => $store.state.scrollBarOption, (newVal, lastVal) => {
      // 待优化
      const { handleOffset, handleLengthRatio, trackLength } = newVal
      const { handleOffset: oldHandleOffset = { y: 0 } } = lastVal
      // eslint-disable-next-line no-unused-vars
      const barLen = Math.round(trackLength.y * handleLengthRatio.y)
      style.value = handleOffset.y > oldHandleOffset.y
        ? { top: `${Math.round(handleOffset.y + 70)}px` }
        : { top: `${Math.round(handleOffset.y)}px` }
    })
    console.log(style)

    return {
      style
    }
  }
})
</script>

<style lang="less" scoped>
#scrollAnime {
  position: fixed;
  right: 20px;
}
</style>
