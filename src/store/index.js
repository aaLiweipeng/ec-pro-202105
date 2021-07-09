import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // // 第一层是商铺id
      // shopId: {
      //   // 第二层是商品id
      //   // 内容是商品详情 以及 购物数量  content.vue中的 item.id ---》productId
      //   productId: {
      //     _id: '1',
      //     name: '番茄250g/份',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2
      //   }
      // }
    }
  },
  mutations: {
    // 响应外部事件 state即上面的存储的数据，payload即外部进来的数据
    addItemToCart (state, payload) {
      const { shopId/* 商家 */, productId /* 产品 */, productInfo /* 产品详情 */ } = payload

      // 拿到state中 对应入参商家id的 产品列表
      let shopInfo = state.cartList[shopId]
      // 判空处理
      if (!shopInfo) { shopInfo = {} }

      // 根据入参productId 获取 state对应列表中 对应的产品
      let product = shopInfo[productId]
      // 判空处理
      if (!product) {
        // 如果是第一次加这个产品数据，则把入参详情加入state 设置 count为 0
        product = productInfo
        product.count = 0
      }
      product.count += 1
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
      // 整个思路就是把 入参产品详情 加入state【如果state里面没有对应数据的话】，
      // 再给state 对应产品数据 递增count

      console.log('store/index.js mutations addItemToCart --- ',
        '\nshopId --- ', shopId,
        '\nproductId --- ', productId,
        '\nproductInfo --- ', productInfo)
      console.log('store/index.js mutations addItemToCart  --- ',
        '\nstate.cartList[shopId] --- ', state.cartList[shopId],
        '\nstate.cartList[shopId][productId] --- ', state.cartList[shopId][productId],
        '\nstate.cartList[shopId][productId].count --- ', state.cartList[shopId][productId].count)
    }
  },
  actions: {
  },
  modules: {
  }
})
