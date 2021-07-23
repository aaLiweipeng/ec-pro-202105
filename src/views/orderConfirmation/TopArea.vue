<template>
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
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'TopArea',
  setup () {
    const router = useRouter()

    const handleBackClick = () => {
      router.back()
    }
    return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';
@import "../../style/mixins.scss";
.top {
    position: relative;
    height: 1.96rem;// 框架高度
    background-size: 100% 1.59rem;//  背景长度
    background-image: linear-gradient(0deg, rgba(0,0,0,0.00) 4%, $bgColor-btn-blue 50%);
    background-repeat: no-repeat;
    &__header {
        position: relative;
        padding-top: .26rem;
        line-height: .22rem;
        color: $bgColor-white;
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
      background: $bgColor-white;
      border-radius: .04rem;
      padding: 0 0 0 .16rem;// 统一padding
      &__title {
          line-height: .22rem;
          padding: .16rem 0 .14rem 0;
          font-size: .16rem;
          color: $content-fontcolor;
      }
      &__address {
          line-height: .2rem;
          padding: 0 .4rem .06rem 0;
          font-size: .14rem;
          color: $content-fontcolor;
      }
      &__info {
          &__name {
              margin-right: .06rem;
              line-height: .18rem;
              font-size: .12rem;
              color: $medium-gray-fontColor;
          }
      }
      &__icon {
          transform: rotate(180deg);
          position: absolute;
          right: .16rem;
          top: .5rem;
          color: $medium-gray-fontColor;
          font-size: .16rem;
      }
    }
}
</style>
