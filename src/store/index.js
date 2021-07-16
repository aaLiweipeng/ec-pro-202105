import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  const tempObject = JSON.parse(localStorage.cartList)
  console.log('getLocalCartList JSON.parse(localStorage.cartList) ----- ', tempObject)

  return tempObject || JSON.parse('{}')
}

export default createStore({
  state: {
    cartList: getLocalCartList()

    // cartList: {
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

    // 更新架构【其实就是shopId、productId之间，夹了一层productList】
    // 第一层是商铺id
    // shopId: {
    //   shopName:'沃尔玛'
    //   productList:{
    //     // 第二层是商品id
    //     // 内容是商品详情 以及 购物数量  content.vue中的 item.id ---》productId
    //     productId: {
    //       _id: '1',
    //       name: '番茄250g/份',
    //       imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //       sales: 10,
    //       price: 33.6,
    //       oldPrice: 39.6,
    //       count: 2
    //     }
    //  }
    // }
    // }
  },
  mutations: {
    // 响应外部事件 state即上面的存储的数据，payload即外部进来的数据
    changeCartItemInfo (state, payload) {
      const { shopId/* 商家 */, productId /* 产品 */, productInfo /* 产品详情 */ } = payload

      // 拿到state中 对应入参商家id的 产品列表
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      // // 判空处理
      // if (!shopInfo) { shopInfo = {} }

      // 根据入参productId 获取 state对应列表中 对应的产品
      let product = shopInfo?.productList[productId]
      // 判空处理
      if (!product) {
        // 如果是第一次加这个产品数据，则把 入参产品详情 加入state 设置 count为 0
        product = productInfo
        product.count = 0
      }
      product.count = product.count + payload.num
      if (payload.num > 0) { product.check = true } // 一个item如果被添加，默认置为true
      if (product.count < 0) { product.count = 0 } // 防止负数
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
      // 整个思路就是
      // 根据 入参id，一步步取 商家产品列表、取产品,
      // 商家产品列表为空，则初始空对象， 产品取得为空，则 把 入参 产品详情 加给state取出的这个 产品空对象，
      // 最后 给state 对应的产品 的数据 递增count，
      // 把产品设置回商家所取列表，把 商家设置回 state

      console.log('store/index.js mutations changeCartItemInfo --- ',
        '\nshopId --- ', shopId,
        '\nproductId --- ', productId,
        '\nproductInfo --- ', productInfo)
      console.log('store/index.js mutations changeCartItemInfo  --- ',
        '\nstate.cartList[shopId] --- ', state.cartList[shopId],
        '\nstate.cartList[shopId]?.productList[productId] --- ', state.cartList[shopId]?.productList[productId],
        '\nstate.cartList[shopId]?.productList[productId].count --- ', state.cartList[shopId]?.productList[productId].count)
    },

    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      // 取出商家信息数据，若为空，则初始为空
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      // 商家信息数据 拿到后，赋值商家名称，置回
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },

    // 更改 购物车内容Item的 选中状态
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      // 因为这里必定是UI存在 才能点击跳转到此，UI存在则其双向绑定数据必定存在
      const product = state.cartList[shopId]?.productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },

    // 清空购物车（产品列表）
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },

    // 全选按钮
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId]?.productList
      if (products) {
        // 循环 对应产品列表，全部设置为选中
        for (const key in products) {
          const product = products[key]
          product.check = true
        }
      }
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
