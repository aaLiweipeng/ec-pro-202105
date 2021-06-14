<template>
    <div class="wrapper">
        <img class="wrapper__img"
             src="http://www.dell-lee.com/imgs/vue3/user.png">
        <div class="wrapper__input">
            <input
              class="wrapper__input__content"
              placeholder="请输入手机号"
              v-model="username">
        </div>
        <div class="wrapper__input">
            <input
                class="wrapper__input__content"
                placeholder="请输入密码"
                type="password"
                v-model="password"
                autocomplete="new-password">
        </div>
        <div class="wrapper__login-button" @click="handleLogin">登   录</div>
        <div class="wrapper__login-link" @click="clickToRegister">立即注册</div>
        <Toast v-if="show" :message="toastMessage"/>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

// 登录相关逻辑
const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  // 把数据进一步 解构拆分
  const { username, password } = toRefs(data)
  // 登录按钮点击事件
  const handleLogin = async () => {
    try {
      const { username: dataUserName, password: dataPassword } = data
      if (dataUserName === '' || dataPassword === '') {
        showToast('输入内容不可为空')
        return
      }
      const result = await post(
        '/api/user/login', {
          username: data.username,
          password: data.password
        })

      console.log('result --- ', result)

      // if (result?.data?.error === 0) {
      if (result?.error === 0) {
        // alert('请求成功')
        showToast('登录请求成功')
        localStorage.logined = true
        router.push({ name: 'Home' })
      } else {
        // API写错 或者 请求成功送出，但由于服务器或者请求数据等其他情况导致失败
        showToast('登录失败')
      }
    } catch (e) {
      // API写错、网络错误等情况
      // alert('请求失败')
      showToast('请求失败')
    }

    //   axios({
    //     method: 'post',
    //     url: 'https://www.fastmock.site/mock/607e07af5701f2ae39a9553a6aab8bc7/heheda/api/user/login',
    //     data: {
    //       username: data.username,
    //       password: data.password
    //     }
    //   }).then(() => {
    //     alert('请求成功')
    //     localStorage.logined = true
    //     router.push({ name: 'Home' })
    //   }).catch(() => {
    //     alert('请求失败')
    //   })
  }
  return { username, password, handleLogin }
}

// 跳转注册页业务模块
const useRegisterEffect = () => {
  const router = useRouter()
  const clickToRegister = () => {
    router.push({ name: 'Register' })
  }
  return { clickToRegister }
}

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    // Toast模块
    const { show, toastMessage, showToast } = useToastEffect()
    // Login模块
    const { username, password, handleLogin } = useLoginEffect(showToast)
    // 跳转注册页业务
    const { clickToRegister } = useRegisterEffect()

    return { handleLogin, clickToRegister, username, password, show, toastMessage }
  }
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
