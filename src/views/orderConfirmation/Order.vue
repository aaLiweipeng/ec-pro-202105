<template>
    <div class="order">
        <div class="order__price">实付金额 <b>￥{{cartCalculations.price}}</b></div>
        <div class="order__btn">提交订单</div>
    </div>
    <div class="mask">
        <div class="mask__content">
            <h3 class="mask__content__title">确认要离开收银台？</h3>
            <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
            <div class="mask__content__btns">
                <div
                  class="mask__content__btn mask__content__btn--first"
                  @click="handleCancelOrder">取消订单</div>
                <div
                  class="mask__content__btn mask__content__btn--last"
                  @click="handleConfirmOrder">确认支付</div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/commonCartEffect'

export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { cartCalculations } = useCommonCartEffect(shopId)
    const handleCancelOrder = () => {
      alert('cancel')
    }
    const handleConfirmOrder = () => {
      alert('confirm')
    }

    return { handleCancelOrder, handleConfirmOrder, cartCalculations }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';

.order {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: .49rem;
    line-height: .49rem;
    background: $bgColor-white;
    &__price {
        flex: 1;
        text-indent: .24rem;
        font-size: .14rem;
        color: $content-fontcolor;
    }
    &__btn {
        width: .98rem;
        background: #4fb0f9;
        color: $bgColor-white;
        text-align: center;
        font-size: .14rem;
    }
}
// 整个模板
.mask {
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
    // 弹框
    &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3rem;
        height: 1.56rem;
        text-align: center;
        background: #fff;
        border-radius: .04rem;
        // 弹框标题
        &__title {
            margin: .24rem 0 0 0;
            line-height: .26rem;
            font-size: .18rem;
            color: #333;
        }
        // 弹框描述
        &__desc {
            margin: .08rem 0 0 0;
            font-size: .14rem;
            color: #666666;
        }
        // 下方按钮组 外框架
        &__btns {
            display: flex;
            margin: .24rem .58rem;
        }
        &__btn {
            flex: 1;
            width: .8rem;
            line-height: .32rem;
            border-radius: .16rem;
            font-size: .14rem;
            &--first {
                margin-right: .24rem;
                border: .01rem solid #4fb0f9;//边框
                color: #4fb0f9;//文本颜色
            }
            &--last {
                background: #4fb0f9;//背景填充颜色
                color: #fff;//文本颜色
            }
        }
    }
}
</style>
