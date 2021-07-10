<template>
    <div class="cart">
        <div class="check">
            <div class="check__icon">
                <!-- 购物车图标 -->
                <img
                  src="http://www.dell-lee.com/imgs/vue3/basket.png"
                  class="check__icon__img"
                />
                <!-- 购物车小红点 -->
                <div class="check__icon__tag">{{total}}</div>
            </div>
            <!-- 总计内容 -->
            <div class="check__info">
                总计：<span class="check__info__price">&yen; {{totalPrice}}</span>
            </div>
            <div class="check__btn">去结算</div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// 页面数量、价格 总计 相关逻辑
const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.id
  const cartList = store.state.cartList
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    console.log('cartList total --- ', totalPrice)
    return count
  })

  const totalPrice = computed(() => {
    const productList = cartList[shopId]
    let totalPrice = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        totalPrice += (product.count * product.price)
      }
    }
    console.log('cartList totalPrice --- ', totalPrice)
    return totalPrice.toFixed(2)
  })

  return { total, totalPrice }
}

export default {
  name: 'Cart',
  setup () {
    const { total, totalPrice } = useCartEffect()
    return { total, totalPrice }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';

.cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
.check {
    display: flex;
    height: .49rem;
    border-top: .01rem solid $content-bgColor;// 顶部边框
    line-height: .49rem;
    &__icon {
        position: relative;
        width: .84rem;
        &__img {
            display: block;
            margin: .12rem auto;
            width: .28rem;
            height: .26rem;
        }
        &__tag {
            position: absolute;
            left: .46rem;
            top: .04rem;
            padding: 0 .015rem;
            min-width: .2rem;
            height: .2rem;
            line-height: .2rem;
            background-color: $red-hightlight-fontColor;
            border-radius: .1rem;
            font-size: .12rem;
            text-align: center;
            color: $bgColor-white;
            transform: scale(.5);
            transform-origin: left center;
        }
    }
    &__info {
        flex: 1;
        color: $content-fontcolor;
        font-size: .12rem;
        &__price {
            color: $red-hightlight-fontColor;
            font-size: .18rem;
        }
    }
    &__btn {
        width: .98rem;
        background-color: #4fb0f9;
        text-align: center;
        color: $bgColor-white;
        font-size: .14rem;
    }
}
</style>
