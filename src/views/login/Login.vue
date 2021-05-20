<template>
    <div class="wrapper">
        <img class="wrapper__img"
             src="http://www.dell-lee.com/imgs/vue3/user.png">
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入手机号">
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入密码">
        </div>
        <div class="wrapper__login-button">登   录</div>
        <div class="wrapper__login-link">立即注册</div>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

    .wrapper {
        // 整体垂直居中
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);

        &__img {
            display: block;
            margin: 0 auto .4rem auto;//注意 左右 跟随 block 自动居中的技巧！！！
            width: .66rem;
            height: .66rem;
        }
        &__input {
            height: .48rem;
            margin: 0 .4rem .16rem .4rem;
            padding: 0 .16rem;
            background: #f9f9f9;
            border: .01rem solid rgba(0,0,0,0.10);
            border-radius: 0.06rem;

            &__content {
                line-height: .48rem;
                border: none;
                outline: none;
                width: 100%;
                background: none;//各种不必要的元素去掉 -- none
                font-size: .16rem;//用户输入的字体颜色
                // color: rgba(0,0,0,0.50);//没有特殊要求，没有背景要展示的情况下，可以不要透明度，简约代码
                color: $content-notice-fontcolor;
                &::placeholder {
                    // color:rgba(0,0,0,0.50);//默认字体颜色
                    color:$content-notice-fontcolor;//默认字体颜色
                }
            }
        }
        //按钮是一个div
        &__login-button {
            margin: .32rem .4rem .16rem .4rem;//上撑图标 下撑文案 左右间隔
            line-height: .48rem;
            background: #0091ff;
            box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);//阴影
            border-radius: .04rem;//四角弧度
            color: #fff;
            font-size: .16rem;
            text-align: center;//内容字体居中
        }
        //【立即注册】文案
        &__login-link {
            text-align: center;
            font-size: .14rem;
            // color:rgba(0,0,0,0.50);
            color:$content-notice-fontcolor;
        }
    }
</style>
