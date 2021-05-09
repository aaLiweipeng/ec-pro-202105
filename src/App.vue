<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe64f;</span>
        XXXX大学XXXX区66号楼66层
      <span class="iconfont position_notice">&#xe6bb;</span>
    </div>
  </div>
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

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;//间隔 上下无 左右0.18
}
.position {
  //顶部栏目
  position: relative;//相对于父布局
  // padding: .16rem 0;//间隔 上下0.16 左右无
  padding: .16rem .24rem .16rem 0;//间隔 上.16 右.24 下.16 左0
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    position: relative;//相对于父布局
    top: .01rem;
    font-size: .2rem;
  }
  .position_notice {
    position: absolute;//绝对于根布局
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem; //间隔 上下无 左右0.18
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid #f10000;
  color: $content-fontcolor;
  &__item {
    //等价于 .docker__item
    flex: 1;
    text-align: center;
    .iconfont {
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
    font-size: .2rem;
    transform: scaleX(0.5) scaleY(0.5); //缩小一半
    transform-origin: center top; //缩小中心点
  }
}
// .docker__item {
//   flex: 1;
//   text-align: center;
//   .iconfont {
//     margin: 0.07rem 0 0.02rem 0; //图标间隔
//     font-size: 0.18rem; //调整图标大小
//   }
// }
// .docker__item--active {
//   color: skyblue;
// }
// .docker_title {
//   font-size: 20px;
//   transform: scaleX(0.5) scaleY(0.5); //缩小一半
//   transform-origin: center top; //缩小中心点
// }
</style>
