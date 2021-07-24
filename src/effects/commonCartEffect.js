import { useStore } from 'vuex'
import { toRefs, computed } from 'vue'

// 使用VueX数据, 【添加产品数据】到VueX 模块
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const { cartList } = toRefs(store.state)

  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    // 触发事件，向VueX添加数据
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }

  // 从state 取出缓存的 购物车数据 商品列表
  const cartProductList = computed(() => {
    // 鲁棒性逻辑，若取不到数据，返回空数组
    const productList = store.state.cartList[shopId]?.productList || {}
    // const productList = cartList?.[shopId]?.productList || []

    const notEmptyProductList = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        notEmptyProductList[i] = product
      }
    }
    console.log(notEmptyProductList)

    console.log('useCommonCartEffect cartProductList shopId --- ', shopId)
    console.log('useCommonCartEffect cartProductList cartList --- ', cartList)
    console.log('useCommonCartEffect cartProductList cartList[shopId] --- ', cartList[shopId])
    console.log('useCommonCartEffect cartProductList productList --- ', productList)
    return notEmptyProductList
  })

  // 从state 取出缓存的 购物车
  const shopName = computed(() => {
    // 鲁棒性逻辑，若取不到数据，返回空数组
    const shopName = store.state.cartList[shopId]?.shopName || ''
    // const productList = cartList?.[shopId]?.productList || []
    console.log('useCommonCartEffect cartProductList shopId --- ', shopId)
    console.log('useCommonCartEffect cartProductList shopName --- ', shopName)
    return shopName
  })

  // 总数、总价、全选按钮判定，三合一
  // 【因为重复逻辑很多, 都是要获取 并遍历 产品列表，对每个迭代进行处理】
  const cartCalculations = computed(() => {
    // const productList = cartList[shopId]?.productList
    const productList = store.state.cartList[shopId]?.productList
    const result = { total: 0, price: 0, allChecked: true }
    if (productList) {
      for (const i in productList) {
        const product = productList[i]

        // 计算总数
        result.total += product.count
        // 选中的才加入总价
        if (product.check) {
          result.price += (product.count * product.price)
        }
        // 这个产品有在购物车中【count > 0】 且 ，没被选中
        if (product.count > 0 && !product.check) {
          result.allChecked = false
        }
      }
    }
    result.price = result.price.toFixed(2)
    console.log('cartList total --- ', result.total)
    console.log('cartList totalPrice --- ', result.price)

    return result
  })

  return { cartList, shopName, cartProductList, cartCalculations, changeCartItemInfo }
}
