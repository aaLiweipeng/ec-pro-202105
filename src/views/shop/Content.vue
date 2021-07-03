<template>
    <div class="content">
        <!-- 分类模块 -->
        <!-- 左侧分类List -->
        <div class="category">
            <div class="category__item category__item--active">全部商品</div>
            <div class="category__item">秒杀</div>
            <div class="category__item">新鲜水果</div>
            <div class="category__item">休闲食品</div>
            <div class="category__item">时令蔬菜</div>
            <div class="category__item">肉蛋家禽</div>
        </div>

        <!-- 右侧 分类产品内容 列表模块 -->
        <div class="product">
            <!-- 一个产品item -->
            <div class="product__item">
                <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" />
                <div class="product__item__detail">
                    <h4 class="product__item__title">番茄250g/份</h4>

                    <!-- 月售栏 -->
                    <p class="product__item__sales">月售10件</p>

                    <!-- 价格栏 -->
                    <p class="product__item__price">
                        <!-- yen 限定 货币符样式 -->
                        <span class="product__item__yen">&yen;</span>36.6
                        <!-- 原价 -->
                        <span class="product__item__origin">&yen;88.8</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
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
    background: #f5f5f5;
    &__item {
       line-height: .4rem;
       text-align: center;
       font-size: 14px;
       color: #333;
       &--active {
           background: #fff;
       }
    }
}

// 右侧 分类产品内容 列表模块
.product {
    overflow-y: scroll;
    flex: 1;
    // 整一个产品item的样式
    &__item {
        display: flex;
        padding: .12rem 0;
        margin: 0 0.16rem;
        border-bottom: .01rem solid #f1f1f1;

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
            color: #333;
        }
        // 月售栏
        &__sales {
            margin: .06rem 0;
            font-size: .12rem;
            color: #333;
        }
        // 右侧价格栏
        &__price {
            margin: 0;//覆盖原本p标签的margin
            line-height: .2rem;
            font-size: .14rem;
            color: #e93e3b;
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
            color: #999;
            text-decoration: line-through;//删除线
        }
    }
}

</style>
