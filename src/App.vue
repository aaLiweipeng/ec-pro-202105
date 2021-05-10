<template>
  <div class="wrapper">

    <div class="position">
      <span class="iconfont position__icon">&#xe64f;</span>
        XXXX大学XXXX区66号楼66层
      <span class="iconfont position_notice">&#xe6bb;</span>
    </div>

    <div class="search">
      <span class="iconfont">&#xe613;</span>
      <span class="search__text">菠萝菠萝包</span>
    </div>

    <div class="banner">
      <img
        class="banner__img"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yipic.cn%2Fthumb%2Ff0f77685%2Fbdaa5f3f%2Ffa49ab25%2Fc7151244%2Fbig_f0f77685bdaa5f3ffa49ab25c7151244.png&refer=http%3A%2F%2Fimg.yipic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623252871&t=7a27caac9990c344d03ff0dfff8f6c1d"/>
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
@import "./style/viriables.scss";
@import "./style/mixins.scss";

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem; //间隔 上下无 左右0.18
}

.position {
  //顶部栏目
  position: relative; //相对于父布局
  // padding: .16rem 0;//间隔 上下0.16 左右无
  padding: 0.16rem 0.24rem 0.16rem 0; //间隔 上.16 右.24 下.16 左0
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative; //相对于父布局
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position_notice {
    position: absolute; //绝对于根布局
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: .12rem;//与 banner间距
  line-height: 0.32rem; //组件高
  background: #f5f5f5; //背景颜色
  color: #b7b7b7; //文字颜色
  border-radius: 0.16rem; //圆角
  font-size: 0.14rem; //文字大小

  .iconfont {
    //search 下的 图标样式
    position: relative;//相对于 父布局
    top: .01rem;//相对于 父布局 下移 .01rem 调整图标居中
    // display: inline-block;
    padding: 0 .12rem 0 .16rem;
    font-size: .13rem;

    //细节调控--垂直居中
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  &__text {
    //搜索框文本 ---
    // display: inline-block;
    font-size: .14rem;

    //细节调控--垂直居中
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
}

.banner{
  //以下三行，用于防止弱网时，图标加载太慢
  //导致周围组件 发生抖动
  height: 0;
  overflow: hidden;
  padding-bottom: 46.7%;//图片的宽高比，图片未下载好时提前占位 373/798≈0.4674

  &__img {
    width: 100%;//撑满父布局
  }
}

.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem; //间隔 上下无 左右0.18
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f10000;
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
