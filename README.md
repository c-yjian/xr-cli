
## 自定义mini脚手架
+ xr add (xr a): 在 template.json 中新增项目模板信息
+ xr delete (xr del): 删除 template.json 中已有的项目模板信息，并简单验证，模板名称比输入且存在于 template.json中
+ xr list: 罗列出此时在 template.json 文件中已有的模板信息
+ xr init: 接受两个必填参数，第一个是模板名（即需要git clone 那个项目模板），第二个是项目名称


## 登记命令
直接跑下面的命令
```
node ./bin/xr
```
或者在pack.json中登记
```
"bin": {
    "xr": "bin/xr"
  },
```
再全局绑定一下
```
sudo npm link

```
绑定之后直接在终端运行 xr 即可
全局解绑
```
sudo npm unlink
```

## 文件结构

```

|--bin
|   |--xr.js: 脚手架入口文件。
|
|--command
|   |--xr-add.js :     xr add 命令实现，主要用于向template.json中添加工程模板信息
|   |--xr-delete.js:   xr del 命令实现，主要用于向template.json中删除工程模板信息
|   |--xr-list.js      xr ls  命令实现，主要用于展示template.json中已有工程模板信息
|   |--xr-init.js      xr init命令实现，接受两个必填参数,第一个参数是 通过xr add 添加的模板名称，第二个命令就是项目名称（文件夹名）
|
|--template.json:      用于存储项目模板信息，对象，key为项目模板名称，value为项目远端地址
|
|--node_modules 包依赖
|
|--package.json 包信息
|

```

## ref:
https://www.toutiao.com/i6673103769904873996/?tt_from=weixin&utm_campaign=client_share&wxshare_count=1&timestamp=1559028364&app=news_article&utm_source=weixin&utm_medium=toutiao_android&req_id=20190528152604010152019200241AC4B&group_id=6673103769904873996
https://segmentfault.com/a/1190000006190814
template.json是用来存放模板信息的



