# node express 模板#

基础功能：

```
    封装http数据请求模块
    使用request模块实现数据请求
    使用async模块控制逻辑
    handlebar自定义helper
    gulp 编译sass文件
    启用node服务
    监控node 服务端代码变化，重启node服务
```


使用：

```
1. cnpm install node-dev -g 全局安装node-dev用于监控node 服务端代码变化，并重启服务

2. gulp watch 监控编译sass文件

2. 使用 node-dev ./bin/www 开启服务器

http://localhost:3000 可以看到首页渲染的结果

访问 http://localhost:3000/test 查看服务端handlebar模板的使用，包括：
    自定义行级helper
    自定义helper返回html代码片段
    自定义helper获取对象下标
    自定义helper判断大小
    自定义块级helper
    ../路径使用
    loopup获取兄弟元素
```





