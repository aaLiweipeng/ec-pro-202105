<template>
<div class="wrapper">
    <div class="title">我的订单</div>
    <!-- 订单列表外框 -->
    <div class="orders">
        <!-- 订单列表Item 外框 -->
        <div
          class="order"
          v-for="(item, index) in list"
          :key = "index">
            <div class="order__title">
                {{item.shopName}}
                <span class="order__status">{{item.isCanceled ? '已取消' : '已下单'}}</span>
            </div>
            <div class="order__content">
                <div class="order__content__imgs">
                    <template
                        v-for="(innerItem, innerIndex) in item.products"
                        :key="innerIndex">
                    <img
                      class="order__content__img"
                      :src="innerItem.product.img"
                      v-if="innerIndex <= 3" />
                    </template>
                </div>
                <div class="order__content__info">
                    <div class="order__content__price">￥ {{item.totalPrice}}</div>
                    <div class="order__content__count">共 {{item.totalNumber}} 件</div>
                </div>
            </div>
        </div>
    </div>
</div>

  <Docker :currentIndex="2"/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import Docker from '../../components/Docker'

const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getNearbyList = async () => {
    const result = await get('/api/order')
    console.log('OrderList useOrderListEffect result --- ', result)
    if (result?.errno === 0 && result?.data?.length) {
      // 获取数据之后，在使用之前做一个预处理
      const orderList = result.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNumber = 0
        products.forEach((productItem) => {
          totalNumber += productItem?.orderSales || 0
          totalPrice += ((productItem?.product?.price * productItem?.orderSales) || 0)
        })
        // 计算获得两个统计属性
        order.totalNumber = totalNumber
        order.totalPrice = totalPrice
      })
      console.log('useOrderListEffect orderList --- ', orderList)

      data.list = result.data
    }
  }
  getNearbyList()
  const { list } = toRefs(data)
  return { list }
}

export default {
  name: 'OrderList',
  components: { Docker },
  setup () {
    const { list } = useOrderListEffect()
    console.log('OrderList ---- ', list)
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.wrapper {
  overflow-y: auto; //处理溢出，使得底部导航栏不会跟着动
  //内容的 根布局
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: rgb(248,248,248);
}
.title {
  line-height: .44rem;
  background: $bgColor-white;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}
// 订单列表外框
.orders {

}
// 订单列表Item 外框
.order {
    margin: .16rem .18rem;
    padding: .16rem;
    background: $bgColor-white;
    &__title {
        margin-bottom: .16rem;
        line-height: .22rem;
        font-size: .16rem;
        color:$content-fontcolor;
    }
    &__status {
        float: right;
        font-size: .14rem;
        color: $light-gray-fontColor;
    }
    &__content {
        display: flex;
        // 商品图片横向列表外框
        &__imgs {
            flex: 1;
        }
        // 商品图片
        &__img {
            width: .4rem;
            height: .4rem;
            margin-right: .12rem;
        }
        &__info {
            width: .7rem;
        }
        &__price {
            margin-bottom: .04rem;
            line-height: .2rem;
            font-size: .14rem;
            color: $red-hightlight-fontColor;
            text-align: right;
        }
        &__count {
            line-height: .14rem;
            font-size: .12rem;
            color: $content-fontcolor;
            text-align: right;
        }
    }
}
</style>
