<template>
    <!-- 附近栏 -->
    <div class="nearby">
      <!-- 附近栏标题 -->
      <h3 class="nearby__title">附近店铺</h3>

      <!-- 附近栏Item -->
      <div class="nearby__item">
        <!-- item 左侧图 -->
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          class="nearby__item__img"
        />
        <!-- item 右侧内容 -->
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content_tag">月售6666</span>
            <span class="nearby__content_tag">月售6666</span>
            <span class="nearby__content_tag">月售6666</span>
          </div>
          <p class="nearby__content__highlight">
            满60减掉5.5满60减掉5.5满60减掉5.5满60减掉5.5满60减掉5.5
          </p>
        </div>
      </div>

      <!-- 附近栏Item -->
      <div class="nearby__item">
        <!-- item 左侧图 -->
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          class="nearby__item__img"
        />
        <!-- item 右侧内容 -->
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content_tag">月售6666</span>
            <span class="nearby__content_tag">月售6666</span>
            <span class="nearby__content_tag">月售6666</span>
          </div>
          <p class="nearby__content__highlight">
            满60减掉5.5满60减掉5.5满60减掉5.5满60减掉5.5满60减掉5.5
          </p>
        </div>
      </div>

      <!-- 附近栏Item -->
      <div class="nearby__item">
        <!-- item 左侧图 -->
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          class="nearby__item__img"
        />
        <!-- item 右侧内容 -->
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content_tag">月售6666</span>
            <span class="nearby__content_tag">月售6666</span>
            <span class="nearby__content_tag">月售6666</span>
          </div>
          <p class="nearby__content__highlight">
            满60减掉5.5满60减掉5.5满60减掉5.5满60减掉5.5满60减掉5.5
          </p>
        </div>
      </div>

      <!-- 附近栏Item -->
      <div class="nearby__item">
        <!-- item 左侧图 -->
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          class="nearby__item__img"
        />
        <!-- item 右侧内容 -->
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content_tag">月售6666</span>
            <span class="nearby__content_tag">月售6666</span>
            <span class="nearby__content_tag">月售6666</span>
          </div>
          <p class="nearby__content__highlight">
            满60减掉5.5满60减掉5.5满60减掉5.5满60减掉5.5满60减掉5.5
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nearby'
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
//附近栏
.nearby {
  //附近栏总标题
  &__title {
    margin: 0.16rem 0 0.04rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  &__item {
    //附近栏 item
    display: flex;
    padding-top: 0.12rem; //----------------

    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    border-bottom: 2px solid $content-bgColor; //item 内容content 下边框
    padding-bottom: 0.12rem;

    //item 内容 标题
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
