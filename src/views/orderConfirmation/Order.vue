<template>
    <div class="order">
        <div class="order__price">实付金额 <b>￥{{cartCalculations.price}}</b></div>
        <div class="order__btn" @click="() => handleSubmitClick(true)">提交订单</div>
    </div>

    <!-- 确认订单弹框套件 -->
    <div
      class="mask"
      v-show="showConfirm"
      @click="() => handleSubmitClick(false)">
        <div class="mask__content" @click.stop>
            <h3 class="mask__content__title">确认要离开收银台？</h3>
            <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
            <div class="mask__content__btns">
                <div
                  class="mask__content__btn mask__content__btn--first"
                  @click="() => handleConfirmOrder(true)">取消订单</div>
                <div
                  class="mask__content__btn mask__content__btn--last"
                  @click="() => handleConfirmOrder(false)">确认支付</div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../effects/commonCartEffect'
import { post } from '../../utils/request'

const useMarkOrderEffect = (shopId, shopName, cartProductList) => {
  const router = useRouter()
  const store = useStore()

  // 确认订单按钮 点击事件
  const handleConfirmOrder = async (isCanceled) => {
    const products = []
    // 遍历这个JSONObject Array
    for (const i in cartProductList.value) {
      const product = cartProductList.value[i]
      products.push({ id: parseInt(product._id, 10), num: product.count })
    }
    console.log(products)

    try {
      const result = await post('/api/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled,
        products
      })

      console.log('result --- ', result)

      if (result?.errno === 0) {
        if (isCanceled) {
          alert('取消订单成功')
        } else {
          alert('下单成功')
        }
        store.commit('cleanCartProducts', { shopId })
        router.push({ name: 'OrderList' })
      //   showToast('请求成功')
      } else {
        // API写错 或者 请求成功送出，但由于服务器或者请求数据等其他情况导致失败
      //   showToast('请求失败')
        alert('下单失败---' + result?.errno)
      }
    } catch (e) {
      // API写错、网络错误等情况
      alert('下单失败', e)
      console.log(e)
      // showToast('请求失败')
    }
  }

  return { handleConfirmOrder }
}

const useShowMaskEffect = () => {
  // 用于显示mask套件的控制
  const showConfirm = ref(false)

  // 提交按钮事件 回调
  const handleSubmitClick = (status) => {
    showConfirm.value = status
  }

  return { showConfirm, handleSubmitClick }
}

export default {
  name: 'Order',
  setup () {
    const route = useRoute()

    const shopId = parseInt(route.params.id, 10)
    const { cartCalculations, shopName, cartProductList } = useCommonCartEffect(shopId)

    // 确认订单按钮处理 模块
    const { handleConfirmOrder } = useMarkOrderEffect(shopId, shopName, cartProductList)

    // mask套件、弹框、提交按钮事件处理 模块
    const { showConfirm, handleSubmitClick } = useShowMaskEffect()

    return { handleConfirmOrder, cartCalculations, showConfirm, handleSubmitClick }
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
    background: rgba(0,0,0,0.5);// 蒙版背景
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
