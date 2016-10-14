### 起源
博客源于廖雪峰老师的[python3教程](http://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000)最后的实战项目。

目前UI部分还保留了原来的样式，其余部分都已重写。前端用vue重写成单页，后端也用nodejs重写。

#### 本项目只是单页博客的前端部分，需要配合后端启动
后端有两个版本，[express-blog](https://github.com/xwlyy/express-blog.git)、[thinkjs-blog](https://github.com/xwlyy/thinkjs-blog.git)

### 开发

```
$ git clone https://github.com/xwlyy/vue-blog.git
$ cd vue-blog
$ npm install
$ npm run dev
```
在浏览中打开http://localhost:8080

### 目录结构

本来想写下目录结构的，但后来想想还是算了。因为我是用vue-cli生成的项目，有些文件目录我自己也不知道干啥的，反正能用就行了。

除了`docs`和`src`这两个目录，其他我都没动过。`docs`目录是我自己新建的，是github pages目录。`src`目录就是核心代码目录了，我写的全在这个目录下。

### 生产环境构建  

```
$ npm run build
```

### 部署到github pages
[免费部署上线](http://www.paidepaiper.top/2016/10/08/read-before-study-jackblog/#%E5%85%8D%E8%B4%B9%E9%83%A8%E7%BD%B2%E4%B8%8A%E7%BA%BF)
