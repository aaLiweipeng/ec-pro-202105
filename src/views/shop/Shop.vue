<template>
    <div class="wrapper">
      <!-- 顶部搜索栏 -->
      <div class="search">
        <!-- 返回图标 -->
        <div
         class="search__back iconfont"
         @click="handleBackClick">&#xe66a;</div>
        <!-- 搜索栏内容 -->
        <div class="search__content">
          <span class="search__content__icon iconfont">&#xe613;</span>
          <input
            class="search__content__input"
            placeholder="请输入商品名称" />
        </div>
      </div>
        <ShopInfo :item="item" :showBorder = "false"/>
        <Content :shopName="item.name" />
        <Cart />
    </div>
</template>

<script>
// import { reactive } from 'vue'
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import { useRouter, useRoute } from 'vue-router'
import Content from './Content'
import Cart from './Cart'

// 商店数据加载 模块
const userShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({
    // 在获取数据之前，可以先填写默认数据
    item: { imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png' }
  })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
    console.log('result --- \n', result)
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

// 返回键逻辑处理 模块
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },

  setup () {
    // 商店数据加载模块
    const { item, getItemData } = userShopInfoEffect()
    // 此函数调用之后，数据就都注入到data中了
    getItemData()

    // 返回键逻辑处理
    const { handleBackClick } = useBackRouterEffect()

    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
    padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;//注意样式会继承父样式
  &__back {
    width: .3rem;
    font-size: .20rem;
    color: $search-fontColor;

    //细节调控--垂直居中
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem; //32 left margin + 32 icon width + 16 right margin
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
