<template>
    <!-- 附近栏Item -->
    <div class='shop__item'>
      <!-- item 左侧图 -->
      <img
        :src='item.imgUrl'
        class='shop__item__img'>
      <!-- item 右侧内容 -->
      <div
        :class="{'shop__content':true, 'shop__content--bordered':showBorder ? true : false}">
        <div class='shop__content__title'>{{item.name}}</div>
        <div class='shop__content__tags'>
          <span class="shop__content__tag">月售：{{item.sales}}</span>
          <span class="shop__content__tag">起送：{{item.expressLimit}}</span>
          <span class="shop__content__tag">基础运费：{{item.expressPrice}}</span>
          <!-- <span
            class='nearby__content_tag'
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
            >{{innerItem}}</span> -->
        </div>
        <p class='shop__content__highlight'>{{item.slogan}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'showBorder']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';

.shop{
  &__item {
    //附近栏 item
    display: flex;
    padding-top: 0.12rem; //----------------

    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    &--bordered {
      border-bottom: 2px solid $content-bgColor; //item 内容content 下边框
    }
    padding-bottom: 0.12rem;

    //item 内容 标题
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
