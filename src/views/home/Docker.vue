<template>
    <!-- 底部导航栏 -->
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe7c7;</div>
      <div class="docker_title">首页</div>
    </span>
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe63a;</div>
      <div class="docker_title">购物车</div>
    </span>
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe61e;</div>
      <div class="docker_title">订单</div>
    </span>
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe66f;</div>
      <div class="docker_title">我的</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Docker'
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
//底部导航栏
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem; //间隔 上下无 左右0.18
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor; //顶部边框 及其样式
  color: $content-fontcolor;
  &__item {
    //等价于 .docker__item
    flex: 1;
    text-align: center;
    .iconfont {
      //docker__item下的iconfont样式
      margin: 0.07rem 0 0.02rem 0; //图标间隔
      font-size: 0.18rem; //调整图标大小
    }
    &--active {
      //等价于 .docker__item--active
      color: skyblue;
    }
  }

  &_title {
    //等价于 .docker_title
    font-size: 0.2rem;
    transform: scaleX(0.5) scaleY(0.5); //缩小一半
    transform-origin: center top; //缩小中心点
  }
}
</style>
