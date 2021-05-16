<template>
  <div class="wrapper">

    <TopPart />
    <Nearby />

  </div>

  <Docker />

</template>

<script>
import TopPart from './TopPart'
import Nearby from './Nearby'
import Docker from './Docker'

export default {
  name: 'Home',
  components: { TopPart, Nearby, Docker }
}
</script>

<style lang="scss">
.wrapper {
  overflow-y: auto; //处理溢出，使得底部导航栏不会跟着动
  //内容的 根布局
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.2rem 0.18rem; //整体内容留白 间隔 上左 下.2，给内容底部留白 右
}
</style>
