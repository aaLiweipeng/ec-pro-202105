<template>
    <div class="content">
        <!-- 分类模块 -->
        <!-- 左侧分类List -->
        <div class="category">
            <div
              :class="{'category__item':true, 'category__item--active': currentTab === item.tab}"
              v-for="item in categories"
              :key="item.name"
              @click="() => handleTabClick(item.tab)">
                {{item.name}}
            </div>
        </div>

        <!-- 右侧 分类产品内容 列表模块 -->
        <div class="product">
            <!-- 一个产品item -->
            <div
              class="product__item"
              v-for="item in list"
              :key="item._id">
                <img class="product__item__img" :src="item.imgUrl" />
                <div class="product__item__detail">
                    <h4 class="product__item__title">{{item.name}}</h4>

                    <!-- 月售栏 -->
                    <p class="product__item__sales">月售 {{item.sales}}</p>

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
                    {{cartList?.[shopId]?.[item._id]?.count || 0}}
                    <span
                      class="product__number__plus"
                      @click="() => {changeCartItemInfo(shopId, item._id, item, 1)}">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { get } from '../../utils/request'
import { useCommonCartEffect } from './commonCartEffect'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' },
  { name: '休闲食品', tab: 'snack' },
  { name: '时令蔬菜', tab: 'vegetables' },
  { name: '肉蛋家禽', tab: 'meat' }
]

// 与 Tab 点击切换等相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    console.log('Content.vue  handleCategoryClick tab --- ', tab)
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

// 产品列表数据 处理模块
const useCurrentListEffect = (currentTab, shopId) => {
  // 用于存储 请求结果 数据
  const content = reactive({ list: [] })

  // 用于请求数据
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
    console.log('getContentData result --- ', result)
  }

  watchEffect(() => { getContentData() })

  const { list } = toRefs(content)
  return { list }
}

export default {
  name: 'Content',
  setup () {
    const route = useRoute()
    const shopId = route.params.id // 从网页URL获取id

    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { cartList, changeCartItemInfo } = useCommonCartEffect()
    return { categories, currentTab, list, handleTabClick, cartList, changeCartItemInfo, shopId }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';
@import "../../style/mixins.scss";

// 整个内容模块
.content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: .5rem;
}
// 左侧分类List
.category {
    overflow-y: scroll;
    height: 100%;
    width: .76rem;
    background: $search-bgColor;
    &__item {
       line-height: .4rem;
       text-align: center;
       font-size: 14px;
       color:$content-fontcolor;

       // 选中高亮
       &--active {
           background: $bgColor-white;
       }
    }
}

// 右侧 分类产品内容 列表模块
.product {
    overflow-y: scroll;
    flex: 1;
    // 整一个产品item的样式
    &__item {
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 0.16rem;
        border-bottom: .01rem solid $content-bgColor;
        &__detail {
            overflow: hidden;
        }
        // item左侧的图片
        &__img {
            width: .68rem;
            height: .68rem;
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
        // 月售栏
        &__sales {
            margin: .06rem 0;
            font-size: .12rem;
            color: $content-fontcolor;
        }
        // 右侧价格栏
        &__price {
            margin: 0;//覆盖原本p标签的margin
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

</style>
