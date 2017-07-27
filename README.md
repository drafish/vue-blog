# xwblog Vue 版

## 简介
xwblog 是使用 Node.js + Mysql + Redis + 其它客户端框架开发的个人博客系统,前后端分离.    
服务端有: [thinkjs 版](https://github.com/xwlyy/xwblog-api-thinkjs)    
##### 此为客户端vue版, 需要配合服务端使用.

## 功能
- 用户登录注册
- 新建编辑文章
- 评论
- 貌似功能有点少啊，以后有空再加吧

## 开发

```
$ git clone https://github.com/xwlyy/xwblog-home-vue
$ cd xwblog-home-vue
$ npm install
$ npm run dev
```
在浏览器中打开 http://localhost:9090

## 调试
- 默认开启 vue-devtools [chrome浏览器扩展](https://github.com/vuejs/vue-devtools), 生产环境自动关闭


## 生产环境构建  

```
$ npm run build
```

## 部署
用阿里云持续交付平台CRP实现持续集成、持续部署，免费的。当然跑项目用的服务还是得自己买。静态文件由Nginx返回.

## TODO
- ~~vuex换成2.0版本~~
- ~~vue-resource换成axios~~
- 前端数据验证
- uikit2换成uikit3
- 写一个管理后台，UI组件库选的是element-ui（公司后台开发就用这个）
- 可能还会专门为手机浏览览器写一个版本吧，UI组件库选的是mint-ui（公司微信端开发就用这个）
- 用weex写一个APP（坑先挖着，反正管挖不管埋）
