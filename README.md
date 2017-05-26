# SZU Archives Address
深大档案室 档案转递邮寄地址查询

# 环境要求
Nodejs v7.2.0

Mongodb

附：
[ubuntu mongodb使用](http://pencilsky.cn/articles/59/)

# 部署
1. 下载项目
```
git clone https://github.com/PencilCl/szu-archives-address.git
```
2. 安装依赖
后端依赖安装：在根目录下执行命令
```
npm i
```
后台管理页面依赖安装：进入`front-end/admin`文件夹,执行命令
```
npm i
```
3. 配置文件
后端文件配置:
进入`src/`文件夹，执行命令
```
cp config.js.example config.js
```
对`config.js`文件相关信息进行设置

进入`front-end/admin`文件夹,对`config.js`文件相关信息进行设置

4. 部署
进入front-end/admin文件夹，执行命令
```
npm run start:pro
```
进入项目根目录,执行命令
```
npm run start:prod
```