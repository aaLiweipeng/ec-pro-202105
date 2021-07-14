import { useStore } from 'vuex'
import { toRefs } from 'vue'

// 使用VueX数据, 【添加产品数据】到VueX 模块
export const useCommonCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    // 触发事件，向VueX添加数据
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }

  return { cartList, changeCartItemInfo }
}
