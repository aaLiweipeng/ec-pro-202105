<template>
  <!-- 附近栏 -->
  <div class='nearby'>
    <!-- 附近栏标题 -->
    <h3 class='nearby__title'>附近店铺</h3>

    <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="`/shop/${item._id}`">

      <ShopInfo :item = "item" :showBorder = "true" />

    </router-link>

  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

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
  components: { ShopInfo },
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

  //覆盖默认样式，使得超链接无下划线
  a {
    text-decoration: none;
  }
}
</style>
