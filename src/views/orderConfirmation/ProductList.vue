<template>
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
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/commonCartEffect'

export default {
  name: 'ProductList',
  setup () {
    const route = useRoute()
    const shopId = route.params.id

    const { shopName, cartProductList } = useCommonCartEffect(shopId)
    console.log('OrderConfirmation.vue productList --- ', cartProductList)

    return { shopName, cartProductList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';
@import "../../style/mixins.scss";

// 分类产品内容 列表模块
.products {
    margin: .16rem .18rem .25rem .18rem;
    background: $bgColor-white;
    &__title {
        padding: .16rem;
        font-size: .16rem;
        color: $content-fontcolor;
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
        background-color: $bgColor-white;
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
            color: $dark-fontcolor;
        }
        // yen 限定 货币符样式
        &__yen {
            font-size: .12rem;
        }
    }
}
</style>
