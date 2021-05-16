<template>
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
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yipic.cn%2Fthumb%2Ff0f77685%2Fbdaa5f3f%2Ffa49ab25%2Fc7151244%2Fbig_f0f77685bdaa5f3ffa49ab25c7151244.png&refer=http%3A%2F%2Fimg.yipic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623252871&t=7a27caac9990c344d03ff0dfff8f6c1d"
      />
    </div>

    <!-- icon网格布局 -->
    <div class="icons">
      <div
        class="icons__item"
        v-for="item in iconsList"
        :key="item.desc">
        <img
          class="icons__item__img"
          :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
        />
        <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>

    <!-- 网格布局下 灰色间隔线区 -->
    <div class="gap"></div>

</template>

<script>
export default {
  name: 'TopPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.position {
  //顶部位置栏
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
  margin-bottom: 0.12rem; //与 banner间距
  line-height: 0.32rem; //组件高
  background: #f5f5f5; //背景颜色
  color: #b7b7b7; //文字颜色
  border-radius: 0.16rem; //圆角
  font-size: 0.14rem; //文字大小

  .iconfont {
    //search 下的 图标样式
    position: relative; //相对于 父布局
    top: 0.01rem; //相对于 父布局 下移 .01rem 调整图标居中
    // display: inline-block;
    padding: 0 0.12rem 0 0.16rem;
    font-size: 0.13rem;

    //细节调控--垂直居中
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  &__text {
    //搜索框文本 ---
    // display: inline-block;
    font-size: 0.14rem;

    //细节调控--垂直居中
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
} //search

//icon网格布局
.icons {
  display: flex;
  flex-wrap: wrap; //一行不够放，就换行！
  margin-top: 0.16rem;
  &__item {
    //网格item
    width: 20%;

    &__img {
      //网格item中的 图
      display: block; //定义block 方便操作宽高
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      //网格item中的 文字
      margin: 0.06rem 0 0.16rem 0;
      text-align: center; //居中
      color: $content-fontcolor;
    }
  }
}

.banner {
  //以下三行，用于防止弱网时，图标加载太慢
  //导致周围组件 发生抖动
  height: 0;
  overflow: hidden;
  padding-bottom: 46.7%; //图片的宽高比，图片未下载好时提前占位 373/798≈0.4674

  &__img {
    width: 100%; //撑满父布局
  }
}

//网格布局下 灰色间隔线区
.gap {
  margin: 0 -0.18rem; //上下无 左右外撑0.18 撑过wrapper的padding
  height: 0.1rem;
  background: $content-bgColor;
}
</style>
