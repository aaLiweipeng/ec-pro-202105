<template>
    <div
      class="mask"
      v-if="showCart && cartCalculations.total > 0"
      @click="handleCartShowChange" />
    <div class="cart">
        <!-- 购物车 产品内容列表 模块 -->
        <div class="product" v-if="showCart && cartCalculations.total > 0">
            <div class="product__header">
                <div
                  class="product__header__all"
                  @click="() => setCartItemsChecked(shopId)">

                    <span class="product__header__icon iconfont"
                        v-html="cartCalculations.allChecked ? '&#xe652;':'&#xe66c;'">
                    </span>
                    全选
                </div>

                <div class="product__header__clear">
                  <span class="product__header__clear__btn"
                    @click="() => cleanCartProducts(shopId)"
                  >清空购物车</span>
                </div>
            </div>
            <!-- 一个产品item -->
            <!-- 占位符 没有对应UI显示，但是可以包裹UI，设置UI控制逻辑 -->
            <!-- 这是控制 商品item.count为0时，不显示这个购物车Item -->
            <template
              v-for="item in cartProductList"
              :key="item._id">
                <div
                  class="product__item"
                  v-if="item?.count > 0">
                    <div class="product__item__checked iconfont"
                        v-html="item.check ? '&#xe652;':'&#xe66c;'"
                        @click="() => changeCartItemChecked(shopId, item._id)"
                    />

                    <img class="product__item__img" :src="item.imgUrl" />
                    <div class="product__item__detail">
                        <h4 class="product__item__title">{{item.name}}</h4>

                        <!-- 价格栏 -->
                        <p class="product__item__price">
                            <!-- yen 限定 货币符样式 -->
                            <span class="product__item__yen">&yen;</span>{{item.price}}
                            <!-- 原价 -->
                            <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
                        </p>
                    </div>

                    <!-- 产品加减键 -->
                    <div class="product__number">
                        <span class="product__number__minus"
                          @click="() => {changeCartItemInfo(shopId, item._id, item, -1)}">-</span>
                        {{item?.count || 0}}
                        <span
                          class="product__number__plus"
                          @click="() => {changeCartItemInfo(shopId, item._id, item, 1)}">+</span>
                    </div>
                </div>
            </template>
        </div>

        <!-- 统计模块 -->
        <div class="check">
            <div class="check__icon">
                <!-- 购物车图标 -->
                <img
                  src="http://www.dell-lee.com/imgs/vue3/basket.png"
                  class="check__icon__img"
                  @click="handleCartShowChange"
                />
                <!-- 购物车小红点 -->
                <div class="check__icon__tag">{{cartCalculations.total}}</div>
            </div>
            <!-- 总计内容 -->
            <div class="check__info">
                总计：<span class="check__info__price">&yen; {{cartCalculations.price}}</span>
            </div>
            <div class="check__btn">
                <router-link :to="{path: `/orderConfirmation/${shopId}`}">
                  去结算
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/commonCartEffect'

// 页面数量、价格 总计 相关逻辑
const useCartEffect = (shopId) => {
  const { cartProductList, changeCartItemInfo, cartCalculations } = useCommonCartEffect(shopId)

  const store = useStore()

  // 从state 取出缓存的 购物车数据
  // const cartList = store.state.cartList

  // 计算 购物车商品 总数
  // const total = computed(() => {
  //   const productList = cartList[shopId]?.productList
  //   let count = 0
  //   if (productList) {
  //     for (const i in productList) {
  //       const product = productList[i]
  //       count += product.count
  //     }
  //   }
  //   console.log('cartList total --- ', count)
  //   return count
  // })

  // 计算 购物车商品 总价
  // const totalPrice = computed(() => {
  //   const productList = cartList[shopId]?.productList
  //   let totalPrice = 0
  //   if (productList) {
  //     for (const i in productList) {
  //       const product = productList[i]
  //       // 选中的才加入总价
  //       if (product.check) {
  //         totalPrice += (product.count * product.price)
  //       }
  //     }
  //   }
  //   console.log('cartList totalPrice --- ', totalPrice)
  //   return totalPrice.toFixed(2)
  // })

  // 判定当前数据情况 是否需要点亮 全选按钮
  // const allChecked = computed(() => {
  //   const productList = cartList[shopId]?.productList
  //   let needAllChecked = true
  //   if (productList) {
  //     for (const i in productList) {
  //       const product = productList[i]
  //       // 这个产品有在购物车中【count > 0】 且 ，没被选中
  //       if (product.count > 0 && !product.check) {
  //         needAllChecked = false
  //       }
  //     }
  //   }
  //   return needAllChecked
  // })

  // 更改 购物车内容Item的 选中状态==
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  const cleanCartProducts = (shopId) => {
    // shopId 用来 删除 指定商家的 整个产品列表
    store.commit('cleanCartProducts', { shopId })
  }

  // 点击全选按钮
  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', { shopId })
  }

  return {
    cartCalculations,
    cartProductList,
    changeCartItemInfo,
    changeCartItemChecked,
    cleanCartProducts,
    setCartItemsChecked
  }
}

// 购物车内产品列表的展示 控制模块
const toggleCartEffect = () => {
  const showCart = ref(false) // 控制购物车内产品列表的展示
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }

  return { showCart, handleCartShowChange }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { showCart, handleCartShowChange } = toggleCartEffect()
    const {
      cartCalculations,
      cartProductList,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked
    } = useCartEffect(shopId)

    return {
      showCart,
      cartCalculations,
      cartProductList,
      shopId,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
      handleCartShowChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';
@import "../../style/mixins.scss";

.mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 1;
}
// 最外层框架样式
.cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: $bgColor-white;
}
// 购物车 产品内容列表 模块
.product {
    overflow-y: scroll;
    flex: 1;
    background: $bgColor-white;

    // 头部行
    &__header {
        display: flex;
        line-height: .52rem;
        border-bottom: 1px solid $content-bgColor;
        font-size: .14rem;
        color: $content-fontcolor;

        //全选
        &__all {
            width: .64rem;
            margin-left: .18rem;
            vertical-align: middle;
        }
        &__icon {
            color:$bgColor-btn-blue;
            font-size: .18rem;
            vertical-align: middle;
        }

        // 清空购物车
        &__clear {
            flex: 1;
            margin-right: .16rem;
            text-align: right;
            &__btn {
              display: inline-block;
            }
        }
    }

    // 整一个产品item的样式
    &__item {
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 0.16rem;
        border-bottom: .01rem solid $content-bgColor;

        // 购物车 产品内容列表item 勾选图标
        &__checked {
            line-height: .5rem;
            margin-right: .15rem;
            color:$bgColor-btn-blue;
            font-size: .2rem;
        }
        &__detail {
            overflow: hidden;
        }
        // item左侧的图片
        &__img {
            width: .46rem;
            height: .46rem;
            margin-right: .16rem;
        }
        // 右侧标题
        &__title {
            margin: 0;//妙啊，覆盖原本h4标签的margin
            line-height: .2rem;
            font-size: .14rem;
            color: $content-fontcolor;
            @include ellipsis;
        }
        // 右侧价格栏
        &__price {
            margin: .06rem 0 0 0;//覆盖原本p标签的margin
            // line-height: .2rem;
            font-size: .14rem;
            color: $red-hightlight-fontColor;
        }
        // yen 限定 货币符样式
        &__yen {
            font-size: .12rem;
        }
        // 原价 字体样式
        &__origin {
            margin-left: .06rem;
            line-height: .2rem;
            font-size: .12rem;
            color: $light-gray-fontColor;
            text-decoration: line-through;//删除线
        }
        // 产品加减键
        .product__number {
            position: absolute;
            right: 0;
            bottom: .12rem;

            display: table-cell;
            vertical-align: middle;
            text-align: center;
            &__minus, &__plus
            {
                display: inline-block;
                width: .2rem;
                height: .2rem;
                line-height: .16rem;
                border-radius: 50%;
                border: .01rem solid $medium-gray-fontColor;
                font-size: .2rem;
                text-align: center;
            }
            &__minus {
                border: .01rem solid $medium-gray-fontColor;// 边框
                color: $medium-gray-fontColor;// 减号颜色
                margin-right: 0.05rem;
            }
            &__plus {
                background: $bgColor-btn-blue;
                color: $bgColor-white;
                margin-left: 0.05rem;
            }
        }
    }
}

// 统计模块
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
        a {
          color: $bgColor-white;
          text-decoration: none;
        }
    }
}
</style>
