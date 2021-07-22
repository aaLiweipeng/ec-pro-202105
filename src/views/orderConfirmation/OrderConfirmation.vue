<template>
    <div class="wrapper">
        <!-- 整个顶部组件框架 -->
        <div class="top">

            <!-- 顶部标题 -->
            <div class="top__header">
                <!-- 返回图标 -->
                <div
                  class="iconfont top__header__back"
                  @click="handleBackClick">&#xe66a;</div>
                确定订单
            </div>

            <!-- 收货者信息栏区域 -->
            <div class="top__receiver">
                <!-- 标题栏 -->
                <div class="top__receiver__title">收获地址</div>
                <!-- 地址行 -->
                <div class="top__receiver__address">呵呵哒大学嘿嘿院</div>
                <!-- 名字、电话 栏 -->
                <div class="top__receiver__info">
                    <span class="top__receiver__info__name">呵呵先生</span>
                    <span class="top__receiver__info__phone">12312312345</span>
                </div>
                <div class="iconfont top__receiver__icon">&#xe66a;</div>
            </div>
        </div>

        <!-- 商品列表模块 -->
        <div class="products">
            <div class="products__title">{{shopName}}</div>
            <div class="products__wrapper">
                <div class="products__list">
                    <!-- 一个产品item -->
                    <template
                      v-for="item in cartProductList"
                      :key="item._id">
                        <div v-if="item.count > 0" class="products__item">
                            <img class="products__item__img" :src="item.imgUrl" />
                            <div class="products__item__detail">
                                <h4 class="products__item__title">{{item.name}}</h4>

                                <!-- 价格栏 -->
                                <p class="products__item__price">
                                    <!-- yen 限定 货币符样式 -->
                                    <span>
                                    <span class="products__item__yen">&yen;</span>
                                    {{item.price}} × {{item.count}}
                                    </span>
                                    <span class="products__item__total">
                                    <span class="products__item__yen">&yen;</span>
                                    {{(item.price * item.count).toFixed(2)}}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <div class="order">
            <div class="order__price">实付金额 <b>￥{{cartCalculations.price}}</b></div>
            <div class="order__btn">提交订单</div>
        </div>
    </div>
</template>

<script>

import { useRoute, useRouter } from 'vue-router'
import { useCommonCartEffect } from '../../effects/commonCartEffect'

export default {
  name: 'OrderConfirmation',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const shopId = route.params.id

    const { shopName, cartCalculations, cartProductList } = useCommonCartEffect(shopId)
    console.log('OrderConfirmation.vue productList --- ', cartProductList)

    const handleBackClick = () => {
      router.back()
    }
    return { shopName, cartCalculations, cartProductList, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';
@import "../../style/mixins.scss";
.wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(238, 238, 238, 0.89);
    overflow-y: scroll;
}
.top {
    position: relative;
    height: 1.96rem;// 框架高度
    background-size: 100% 1.59rem;//  背景长度
    background-image: linear-gradient(0deg, rgba(0,0,0,0.00) 4%, #0091ff 50%);
    background-repeat: no-repeat;
    &__header {
        position: relative;
        padding-top: .26rem;
        line-height: .22rem;
        color: #fff;
        text-align: center;
        font-size: .16rem;
        &__back {
            position: absolute;
            left: .18rem;
            // font-size: .20rem;
            line-height: .24rem;
        }
    }
    &__receiver {
      position: absolute;
      left: .18rem;
      right: .18rem;
      bottom: 0;
      height: 1.11rem;
      background: #fff;
      border-radius: .04rem;
      padding: 0 0 0 .16rem;// 统一padding
      &__title {
          line-height: .22rem;
          padding: .16rem 0 .14rem 0;
          font-size: .16rem;
          color: #333;
      }
      &__address {
          line-height: .2rem;
          padding: 0 .4rem .06rem 0;
          font-size: .14rem;
          color: #333;
      }
      &__info {
          &__name {
              margin-right: .06rem;
              line-height: .18rem;
              font-size: .12rem;
              color: #666;
          }
      }
      &__icon {
          transform: rotate(180deg);
          position: absolute;
          right: .16rem;
          top: .5rem;
          color: #666;
          font-size: .16rem;
      }
    }
}

// 分类产品内容 列表模块
.products {
    margin: .16rem .18rem .25rem .18rem;
    background: #fff;
    &__title {
        padding: .16rem;
        font-size: .16rem;
        color: #333;
    }
    // 列表模块 框架样式
    &__wrapper {
        overflow-y: scroll;
        margin: 0 .18rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: .6rem;
        top: 2.6rem;
    }
    &__list {
        background-color: #fff;
    }
    &__item {
        position: relative;
        display: flex;
        padding: 0 .16rem .16rem .16rem;
        // item左侧的图片
        &__img {
            width: .46rem;
            height: .46rem;
            margin-right: .16rem;
        }
        &__detail {
            flex: 1;
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
            display: flex;
            margin: .06rem 0 0 0;//覆盖原本p标签的margin
            line-height: .2rem;
            font-size: .14rem;
            color: $red-hightlight-fontColor;
        }
        &__total {
            flex: 1;
            text-align: right;
            color: #000;
        }
        // yen 限定 货币符样式
        &__yen {
            font-size: .12rem;
        }
    }
}

.order {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: .49rem;
    line-height: .49rem;
    background: #fff;
    &__price {
        flex: 1;
        text-indent: .24rem;
        font-size: .14rem;
        color: #333;
    }
    &__btn {
        width: .98rem;
        background: #4fb0f9;
        color: #fff;
        text-align: center;
        font-size: .14rem;
    }
}
</style>
