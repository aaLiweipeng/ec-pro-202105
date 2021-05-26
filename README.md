# ec-pro-202105
An electronic commerce APP power by Vue3.0

<br>

#### 项目初始化
---

![](https://upload-images.jianshu.io/upload_images/9125154-b302314834f7a6f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)![](https://upload-images.jianshu.io/upload_images/9125154-8bcef3cc7520640e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)![](https://upload-images.jianshu.io/upload_images/9125154-240e498ce3d70ea4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>

#### 装ESLint插件
**协助做代码校验，规范代码：**

![](https://upload-images.jianshu.io/upload_images/9125154-4520ce4247c4a160.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>

#### 装Vetur插件

**识别、高亮显示Vue语法：**

![](https://upload-images.jianshu.io/upload_images/9125154-49f7cdee298cd66b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>

#### 目录 | node_modules、package.json

**npm install之后（有时候项目会自动生成，就无需npm install了），
package.json 是 记录第三方库依赖 的目录，
node_modules 存放 第三方库依赖模块：**

![](https://upload-images.jianshu.io/upload_images/9125154-afe554f7063a32af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**其中，package.json 的代码其实有很多学问：
如[《package.json配置详解》](https://blog.csdn.net/weixin_42420703/article/details/81870815)中，
browserslist 指定项目兼容浏览器或设备的版本，
"> 1%"指全球范围内用户使用量> 1%的浏览器；
"last 2 versions"指上述的浏览器中，只支持最新的两个浏览器版本；
"not dead"指正在维护的浏览器；**

```
{
  "name": "h5-components",
  "version": "1.2.0",
  "description": "",
  "main": "./lib/index",
  "module": "./es/index",
  "files": [
    "lib",
    "es",
    "dist",
    "assets"
  ],
  "repository": "http://.../h5-components.git",
  "homepage": "http://...",
  "author": "",
  "license": "MIT",
  "scripts": {
    "dll": "webpack --config webpack.dll.config.js",
    "rccompile": "rc-tools run compile --babel-runtime --copy-files",
    "dev": "webpack-dev-server --env.api dev",
    "rcdist": "rc-tools run dist",
    "ucs": "yarn upgrade h5-css",
    "rclint": "rc-tools run lint",
    "build": "yarn rccompile && git add . && git commit -m '[compile]' && git pull && git push"
  },
  "config": {
    "port": 8089,
    "entry": {
      "h5-components": [
        "./index.js"
      ]
    }
  },
  "dependencies": {
    "antd-mobile": "^2.2.0",
    "classnames": "^2.2.1",
    "exif-js": "^2.3.0"
  },
  "devDependencies": {
    "file-loader": "^1.1.5",   
    "less-loader": "^4.1.0",
    "lodash": "^4.17.4",
    "lodash-webpack-plugin": "^0.11.4",
    "mini-css-extract-plugin": "^0.4.1"   
  },
  "sideEffects": [
    "*.scss"
  ],
  "browserslist": [
    "iOS >= 8",
    "Firefox >= 20",
    "Android > 4.2",
    "> 1%",
    "last 2 versions",
    "not ie <= 10"
  ]
}
```

<br>

#### 目录 | public目录

**这里主要是配置了一些通用的内容，如这里的index.html中的icon，配置了网页的图标：**

![](https://upload-images.jianshu.io/upload_images/9125154-3e611cad9987f13b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)![](https://upload-images.jianshu.io/upload_images/9125154-5964ff8a0ec94211.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)![](https://upload-images.jianshu.io/upload_images/9125154-db6eda47ccef4f5a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>

#### 目录 | .editorconfig文件

**配置编辑器的特性；**

![](https://upload-images.jianshu.io/upload_images/9125154-c57946c6b9c4aee6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>**[EditorConfig使用介绍](https://segmentfault.com/a/1190000007599845)**

![](https://upload-images.jianshu.io/upload_images/9125154-032cb7c936ff58cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>
####目录 | package-lock.json
**保证多人协作的时候，依赖能有一个固定的版本；**

<br>
####目录 | src
**这里各个文件目录的作用和使用前面基本都用到过了；
assets目录下放一些静态的文件；**


![](https://upload-images.jianshu.io/upload_images/9125154-f8fb86d8aa70e43f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>
####样式兼容浏览器
>**有些HTML标签，同一个标签，在不同的浏览器上，展示效果不一致；
为了 写出来的样式 可以在所有的浏览器上 保持一致，
需要借助一下`normallize.css`；**

**这里需要在项目上install一下：**

![](https://upload-images.jianshu.io/upload_images/9125154-d9f97847763a448f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**添加@[版本]，可以指定安装的版本：**

![](https://upload-images.jianshu.io/upload_images/9125154-eeb10ab704d14a8e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**在src下新建一个style目录，下新建一个base.scss文件，
编写通用的样式，
这里指定html标签的样式——`1rem = font-size = 100px;`**

![](https://upload-images.jianshu.io/upload_images/9125154-942f0838a221daed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**清理router中多余的代码，
这边暂时简单测试即可：**

![](https://upload-images.jianshu.io/upload_images/9125154-ad57fbbd749fb57c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**在main.js中引入：**

![](https://upload-images.jianshu.io/upload_images/9125154-7668cf0724245571.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**运行项目：**

![](https://upload-images.jianshu.io/upload_images/9125154-a339c43616076e7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**可以看到字体很大，
因为这里App.vue的布局自然是在html标签下的，
于是默认使用我们方才定义的样式尺寸：**

![](https://upload-images.jianshu.io/upload_images/9125154-9e4e5b07c2d37863.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9125154-efc1845de3f97a07.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>
####使用移动端模拟器
**首先可以调整一下测试栏的位置：**

![](https://upload-images.jianshu.io/upload_images/9125154-750c3fdd136fc87f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**然后打开移动端模拟器：**

![](https://upload-images.jianshu.io/upload_images/9125154-74a216a262dd42bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>
####iconfont.cn阿里矢量图标库的使用【采集icon到项目】
**登录后，搜索图标然后加入购物车：![](https://upload-images.jianshu.io/upload_images/9125154-f7ec6797abea77c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)把购物车里的图标加入项目：![](https://upload-images.jianshu.io/upload_images/9125154-66363a66ff4fa717.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)加入已有项目：![](https://upload-images.jianshu.io/upload_images/9125154-170baabf88ade915.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)或者新建一个项目：![](https://upload-images.jianshu.io/upload_images/9125154-b3e0fa85ba8c1763.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)点击到【我的项目】：![](https://upload-images.jianshu.io/upload_images/9125154-291e13ba908b3f8a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)可以查看已有的项目内容：![](https://upload-images.jianshu.io/upload_images/9125154-bd7c36d5b9a55d1d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)点击下载到本地，
可以将当前目录下的图标的各种格式打包成zip下载下来：![](https://upload-images.jianshu.io/upload_images/9125154-33fa65435bdfc068.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)把其中的iconfont.css的这一部分代码复制一下：![](https://upload-images.jianshu.io/upload_images/9125154-5d5d331d0f4114a4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在style目录下新建一个css文件，如iconfont.css，把复制的代码贴到这里，
不过这里引用的代码还是本地的，
我们可以替换成在线的：![](https://upload-images.jianshu.io/upload_images/9125154-911ddce90155a226.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
点击查看在线连接，
点击【暂无代码，点此生成】，
可以生成在线连接代码：![](https://upload-images.jianshu.io/upload_images/9125154-702cc714c665553e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)![](https://upload-images.jianshu.io/upload_images/9125154-88b7ef8762a83902.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)复制上面的在线url引用代码，贴到项目里：![](https://upload-images.jianshu.io/upload_images/9125154-c302fd2f028ed33f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)main.js引入这个css文件：![](https://upload-images.jianshu.io/upload_images/9125154-ff399ba3d575ec1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)到这里环境就配置完成了；
接着在iconfont网页上，移动到图标上，点击复制对应图标的代码，如`&#xe7c7;`：![](https://upload-images.jianshu.io/upload_images/9125154-579251f5eb16ad6e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)最后在DOM节点中使用就可以了，
注意写上`class="iconfont"`：![](https://upload-images.jianshu.io/upload_images/9125154-ef827efd3c2b8054.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)效果：![](https://upload-images.jianshu.io/upload_images/9125154-80998231fb401456.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**

<br>
####浏览器最小只能使用12px的文字尺寸，如果要显示10px，需要写20px然后缩小一半
```
.docker_title {
  font-size: 20px;
  transform: scaleX(.5) scaleY(.5);//缩小一半
  transform-origin: center top;//缩小中心点
}
```

<br>
####优化 | 有从属关系的css 可以简写
注意这里的flex流式布局
```
<template>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe7c7;</div>
      <div class="docker_title">首页</div>
    </span>
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe63a;</div>
      <div class="docker_title">购物车</div>
    </span>
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe61e;</div>
      <div class="docker_title">订单</div>
    </span>
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe66f;</div>
      <div class="docker_title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem; //间隔
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f10000;

  &__item {
    //等价于 .docker__item
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0; //图标间隔
      font-size: 0.18rem; //调整图标大小
    }
    &--active {
      //等价于 .docker__item--active
      color: skyblue;
    }
  }

  &_title {
    //等价于 .docker_title
    font-size: 20px;
    transform: scaleX(0.5) scaleY(0.5); //缩小一半
    transform-origin: center top; //缩小中心点
  }
}
// .docker__item {
//   flex: 1;
//   text-align: center;
//   .iconfont {
//     margin: 0.07rem 0 0.02rem 0; //图标间隔
//     font-size: 0.18rem; //调整图标大小
//   }
// }
// .docker__item--active {
//   color: skyblue;
// }
// .docker_title {
//   font-size: 20px;
//   transform: scaleX(0.5) scaleY(0.5); //缩小一半
//   transform-origin: center top; //缩小中心点
// }
</style>
```

<br>
####优化 | css引入的简写
**当前的css文件引入我们是这样写的：![](https://upload-images.jianshu.io/upload_images/9125154-8ed58c47897bf6b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)其实我们可以在style目录下新建一个文件，如`index.scss`，
然后把需要引用的css文件都写在这里面：![](https://upload-images.jianshu.io/upload_images/9125154-15940431a91f2a11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)这样，
使用的时候就只要引入`index.scss`这个“引用汇总文件”就可以了：![](https://upload-images.jianshu.io/upload_images/9125154-fcabd0d940a0e661.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**

<br>
####1.end 至此底部栏UI基本完成
```
commit a0c19703acc3c0da070c9b2b291bdce11ff33646 (HEAD -> master)
Author: aaLiweipeng <31944741+aaLiweipeng@users.noreply.github.com>
Date:   Sat May 8 22:18:29 2021 +0800

    Preliminary completion of the bottom bar

```

>**github-commit: https://github.com/aaLiweipeng/ec-pro-202105/commit/30a33b963c323a12b3c1f5a15b238d3aac289a4e**

<br>
####2.1 bug | error  Trailing spaces not allowed  no-trailing-spaces
**解决方案：删除尾部多余的空格![](https://upload-images.jianshu.io/upload_images/9125154-6136b8e5d61442c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**


<br>
####2.2 注意 | CSS Class的优先级
**有时候同一个标签，
我们可能会给它定义了多个CSS Class：![](https://upload-images.jianshu.io/upload_images/9125154-6d3f35269fbe2e2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)这个时候，
我们可以用这种 嵌套 且 不使用`&...`简写 的方式，
提高CSS Class的优先级：![](https://upload-images.jianshu.io/upload_images/9125154-32a081be4be29343.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)如此，`position__icon`的优先级会比`iconfont`高；**

<br>
####2.3 新建scss文件，定义通用的样式变量【类似 `android的res/style/` 下文件】
**![](https://upload-images.jianshu.io/upload_images/9125154-50343f5274bca082.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)使用示例：![](https://upload-images.jianshu.io/upload_images/9125154-8c2bc34512b037b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**


<br>
####2.4 新建scss文件，封装mixin，效果同上
**![](https://upload-images.jianshu.io/upload_images/9125154-62579039ec5592b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)使用示例：![](https://upload-images.jianshu.io/upload_images/9125154-8749eec0efe11196.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**

<br>
####位置栏至此初步完成
```
commit d81edf449371f5d14972e5a6f0b328f2693cde8e (HEAD -> main, origin/main, origin/HEAD)
Author: aaLiweipeng <31944741+aaLiweipeng@users.noreply.github.com>
Date:   Mon May 10 00:23:59 2021 +0800

    Add the top position bar

```
>**github:https://github.com/aaLiweipeng/ec-pro-202105/commit/d81edf449371f5d14972e5a6f0b328f2693cde8e**

<br>
#3. 搜索和 banner区域
####3.1 新增iconfont项目图标【search】，更新项目 链接资源代码
![](https://upload-images.jianshu.io/upload_images/9125154-b8777468807bde96.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)![](https://upload-images.jianshu.io/upload_images/9125154-9a0d0936412a49a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)运行效果：![](https://upload-images.jianshu.io/upload_images/9125154-9b4025db68019f7b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>
####3.2 防止弱网时，图标加载太慢 导致周围组件 发生抖动【padding、overflow 结合 图片宽高比的 占位技巧】
```
.banner{
  //以下三行，用于防止弱网时，图标加载太慢
  //导致周围组件 发生抖动
  height: 0;
  overflow: hidden;
  padding-bottom: 46.7%;//图片的宽高比，图片未下载好时提前占位 373/798≈0.4674

  &__img {
    width: 100%;//撑满父布局
  }
}
```
>**搜索框和banner初步完成，
GitHub：**

<br>
####4.图标 Grid网格布局
GitHub：**

<br>
####5.附近栏
GitHub：**
######5.1 流式布局的魅力
```
//附近栏
.nearby {
  &__title {
    margin: .16rem 0 0.04rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    // display: flex;
    &__img {
      width: .56rem;
      height: .56rem;
    }
  }
}
```
![](https://upload-images.jianshu.io/upload_images/9125154-b7a5cf4070721a21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
<br>
```
//附近栏
.nearby {
  &__title {
    margin: .16rem 0 0.04rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    &__img {
      width: .56rem;
      height: .56rem;
    }
  }
}
```
![](https://upload-images.jianshu.io/upload_images/9125154-dd8d6fd07b6143f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>
######5.2 注意<p>标签的默认margin！！（其他标签 也要注意 默认margin等）
```
    &__highlight {
      // margin: 0.08rem 0 0 0;
      margin-top: 0.08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
    }
```
![](https://upload-images.jianshu.io/upload_images/9125154-9ff1428ee16dcc78.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**优化方案：
使用详细的margin样式，处理掉默认的margin：**
```
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
    }
```
**效果：![](https://upload-images.jianshu.io/upload_images/9125154-5a0b186d631e7fd3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**

<br>
######5.3 【overflow-y: auto】处理溢出，使得底部导航栏不会跟着动
```
.wrapper {
  overflow-y: auto;//处理溢出，使得底部导航栏不会跟着动
  //内容的 根布局
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem; //整体内容留白 间隔 上下无 左右0.18
}
```
![](https://upload-images.jianshu.io/upload_images/9125154-7c5275906b37209c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)![](https://upload-images.jianshu.io/upload_images/9125154-0b3f3b1549a0ec8c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)![](https://upload-images.jianshu.io/upload_images/9125154-4525286b3387ade9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>
####6.拆分组件代码
**GitHub：**
**--- views目录下创建一个home目录，
home下新建一个Home.vue；
把App.vue的内容剪切过来；
这个时候App.vue没内容，
然后Home里面的引用路径得改一下：![](https://upload-images.jianshu.io/upload_images/9125154-50293473bb3c44f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
然后这时候，
App.vue改成一下内容，
就可以如旧正常显示了：**
```
<template>
  <Home />
</template>

<script>
import Home from './views/home/Home'

export default {
  name: 'App',
  components: { Home }
}
</script>

```
**当然这时候只是把主页Home.vue从App.vue中拆除出去而已，
接下来还需要继续拆分；
首先把`position部分`到`gap部分`拆分出来，
为顶部业务部分【TopPart】：![](https://upload-images.jianshu.io/upload_images/9125154-7bb5426585e10347.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
view/home/TopPart.vue：**
```
<template>
<div class="position">
      <span class="iconfont position__icon">&#xe64f;</span>
      XXXX大学XXXX区66号楼66层
      <span class="iconfont position_notice">&#xe6bb;</span>
    </div>

    <div class="search">
      <span class="iconfont">&#xe613;</span>
      <span class="search__text">菠萝菠萝包</span>
    </div>

    <div class="banner">
      <img
        class="banner__img"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yipic.cn%2Fthumb%2Ff0f77685%2Fbdaa5f3f%2Ffa49ab25%2Fc7151244%2Fbig_f0f77685bdaa5f3ffa49ab25c7151244.png&refer=http%3A%2F%2Fimg.yipic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623252871&t=7a27caac9990c344d03ff0dfff8f6c1d"
      />
    </div>

    <!-- icon网格布局 -->
    <div class="icons">
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        />
        <p class="icons__item__desc">菜市场</p>
      </div>
      ...
    </div>

    <!-- 网格布局下 灰色间隔线区 -->
    <div class="gap"></div>

</template>

<style lang="scss">
...
.position {
...
  .position__icon {
  ...
  }
  .position_notice {
...
  }
  color: $content-fontcolor;
}

.search {
...

  .iconfont {
...
  }

  &__text {
...
  }
} //search

//icon网格布局
.icons {
  ...
  &__item {
    ...

    &__img {
      ...
    }
    &__desc {
     ...
    }
  }
}

.banner {
...
  &__img {
    ...
  }
}

//网格布局下 灰色间隔线区
.gap {
...
}
</style>

```
**然后作为子组件引入到`Home.vue`：**
```
<script>
import TopPart from './TopPart'

export default {
  name: 'Home',
  components: { TopPart }
}
</script>
```
**使用：![](https://upload-images.jianshu.io/upload_images/9125154-3bb1782035ac4bb0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**
#####然后是Nearby部分的拆分
**新建文件，
views/home/Nearby.vue，
把home中的【附近栏】相关的代码移过来：![](https://upload-images.jianshu.io/upload_images/9125154-e0358ca6070d49e4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
home.vue中注册为子组件：**
```
<script>
import TopPart from './TopPart'
import Nearby from './Nearby'

export default {
  name: 'Home',
  components: { TopPart, Nearby }
}
</script>
```
**使用：![](https://upload-images.jianshu.io/upload_images/9125154-b13ab2ab4dc105d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**

#####最后拆分底部导航栏部分
**新建 views/home/Docker.vue，
把home中的【底部导航栏】相关的代码移过来：；
home.vue中注册为子组件：**
```
<script>
import TopPart from './TopPart'
import Nearby from './Nearby'
import Docker from './Docker'

export default {
  name: 'Home',
  components: { TopPart, Nearby, Docker }
}
</script>
```
**使用：![](https://upload-images.jianshu.io/upload_images/9125154-5a16bceaaf2cefe3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**

<br>
####7.使用v-for、v-html优化代码
**主要优化Grid菜单部分，附近栏 和 底部导航栏部分等 list特性的模块，
细节可以看 GitHub：**       
#####7.1 iconfont转义问题
```
<!-- 底部导航栏 -->
  <div class="docker">
    <div
      v-for = "item in dockerList"
      class="docker__item docker__item--active"
      :key="item.icon"
    >

      <!-- 这里不可以用插值表达式写，
      因为 &# 会被自动转义成 文本，
      无法实施符号特性；
      改完记得刷新下页面！！！ -->
      <!-- <div class="iconfont">{{item.icon}}</div> -->

      <div class="iconfont" v-html="item.icon" />
      <div class="docker_title">{{item.text}}</div>
    </div>
  </div>
```
#####7.2 巧用表达式控制css处理！！！
- 处理前：
```
  <!-- 底部导航栏 -->
  <div class="docker">
    <div
      v-for = "item in dockerList"
      class="docker__item docker__item--active"
      :key="item.icon"
    >
.....
```
![](https://upload-images.jianshu.io/upload_images/9125154-020d45da032c19e4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 处理后，
更改class属性，使得颜色的样式需要判断，默认是第一个有蓝色：
```
  <!-- 底部导航栏 -->
  <div class="docker">
    <div
      v-for = "(item, index) in dockerList"
      :class="{ 'docker__item': true, 'docker__item--active': index === 0}"
      :key="item.icon"
    >
```
![](https://upload-images.jianshu.io/upload_images/9125154-29b032a876c864bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    
<br>
#####7.3 字符串模板 匹配实战
![](https://upload-images.jianshu.io/upload_images/9125154-2ee5c4e27b5bbe4c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>
####7.4 首页UI基本实现（画完了）
![](https://upload-images.jianshu.io/upload_images/9125154-02a18d81bfed51a3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<br>
####8.
####8.1 scoped 限制 样式的作用范围
**`一个组件的样式`应该只能作用于`自身组件`，
不能影响`外部组件`或者`其他组件`；<br><br>实现方式很简单，
只要`style标签`加个`scoped`即可，
建议如果没有特殊的需求，
所有`单文件组件`的`style标签`都可以加上这个特性：![](https://upload-images.jianshu.io/upload_images/9125154-5db7a2f869570d61.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**

<br>
####8.2 安装、使用Vue.js devtools
**需要梯子，需要在Chrome中进行，
打开网上应用商店：![](https://upload-images.jianshu.io/upload_images/9125154-75b0d03f01a298c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
搜索 类似`vue dev`字眼：![](https://upload-images.jianshu.io/upload_images/9125154-220279a6d9ca88a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)添加该插件：![](https://upload-images.jianshu.io/upload_images/9125154-f1c5d8e883d99b48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)然后启用：![](https://upload-images.jianshu.io/upload_images/9125154-6cce5ddfb6ad00ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)然后重启Chrome，打开项目，刷新页面，
点击如下图的位置，可以打开工具：![](https://upload-images.jianshu.io/upload_images/9125154-a8f0e30f68da1650.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)---Vue devtools第一个功能——可以轻易而直观地观察到
页面各个 分模块/子组件 的区域 以及 分模块/子组件 名：![](https://upload-images.jianshu.io/upload_images/9125154-4a23d4eb5680da1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)这个显示的名称，取决于该组件的`文件名`【毕竟`单文件组件`】：![](https://upload-images.jianshu.io/upload_images/9125154-107e349c4dfdb55f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)不过如果文件中`<script>`中，有对`name`属性进行定义的话，则根据这个`name`属性来处理显示：![](https://upload-images.jianshu.io/upload_images/9125154-3a690a13f65da873.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)---Vue devtools第二个常用功能——
双击某个模块，可以看到其对应的数据、路由情况，
方便做参数调测等：![](https://upload-images.jianshu.io/upload_images/9125154-ae6b2509f48c8ca7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)**

<br>
####

