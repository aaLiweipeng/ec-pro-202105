<template>
  <!-- 附近栏 -->
  <div class='nearby'>
    <!-- 附近栏标题 -->
    <h3 class='nearby__title'>附近店铺</h3>

    <!-- 附近栏Item -->
    <div
      class='nearby__item'
      v-for="item in nearbyList"
      :key="item._id">
      <!-- item 左侧图 -->
      <img
        :src='item.imgUrl'
        class='nearby__item__img'>
      <!-- item 右侧内容 -->
      <div class='nearby__content'>
        <div class='nearby__content__title'>{{item.name}}</div>
        <div class='nearby__content__tags'>
          <span class="nearby__content__tag">月售：{{item.sales}}</span>
          <span class="nearby__content__tag">起送：{{item.expressLimit}}</span>
          <span class="nearby__content__tag">基础运费：{{item.expressPrice}}</span>
          <!-- <span
            class='nearby__content_tag'
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
            >{{innerItem}}</span> -->
        </div>
        <p class='nearby__content__highlight'>{{item.slogan}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'

// 推荐热门店铺列表 数据 与 UI控制模块
const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  setup () {
    // 推荐热门店铺列表 数据 与 UI控制模块
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()

    return { nearbyList }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
//附近栏
.nearby {
  //附近栏总标题
  &__title {
    margin: 0.16rem 0 0.04rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

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
    border-bottom: 2px solid $content-bgColor; //item 内容content 下边框
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
