<template>
  <!-- 底部导航栏 -->
  <div class="docker">
    <div
      v-for = "(item, index) in dockerList"
      :class="{ 'docker__item': true, 'docker__item--active': index === 0}"
      :key="item.icon"
    >

      <!-- 这里不可以用插值表达式写，
      因为 &# 会被自动转义成 文本，
      无法实施符号特性；
      改完记得刷新下页面！！！ -->
      <!-- <div class="iconfont">{{item.icon}}</div> -->

      <div class="iconfont" v-html="item.icon" />
      <div class="docker_title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe7c7;', text: '首页' },
      { icon: '&#xe63a;', text: '购物车' },
      { icon: '&#xe61e;', text: '订单' },
      { icon: '&#xe66f;', text: '我的' }
    ]

    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
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
