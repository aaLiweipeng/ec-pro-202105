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
    </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo'
import { useRouter } from 'vue-router'

export default {
  name: 'Shop',
  components: { ShopInfo },

  setup () {
    const router = useRouter()

    const item = {
      _id: '1',
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 66666,
      expressLimit: 0,
      expressPrice: 8.8,
      slogan: 'VIP尊享满89元减4元运费券'
    }

    const handleBackClick = () => {
      router.back()
    }

    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: .2rem 0 .16rem 0;
  line-height: .32rem;//注意样式会继承父样式
  &__back {
    width: .3rem;
    font-size: .20rem;
    color: #b6b6b6;

    //细节调控--垂直居中
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #f5f5f5;
    border-radius: .16rem;
    &__icon {
      width: .44rem; //32 left margin + 32 icon width + 16 right margin
      text-align: center;
      color: #b6b6b6;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      font-size: .14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>
