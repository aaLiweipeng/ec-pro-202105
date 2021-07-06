<template>
    <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: ['message']
}

// Toast弹窗模块
export const useToastEffect = () => {
  const toastData = reactive({
    show: false, // 用作 组件的显示开关
    toastMessage: ''// 通过return传给上层template，上层template通过子组件bind传给这里的props.message，显示在组件上
  })
  // 把数据进一步结构拆分
  const { show, toastMessage } = toRefs(toastData)

  // 弹出toast 及其 UI控制函数
  const showToast = (message) => {
    // 弹出Toast组件
    toastData.show = true
    toastData.toastMessage = message
    // 控制其两秒后消失
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }

  return { show, toastMessage, showToast }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables';

.toast {
  position: fixed;
  left: 50%;//居中
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0,0,0,.35);
  border-radius: .05rem;
  color: $bgColor-white;
}
</style>
