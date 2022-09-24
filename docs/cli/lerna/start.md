# lerna5.x 入门

## 简介

> `Lerna 是用于 TypeScript/JavaScript 的原始 monorepo 工具。它已经存在多年，被数以万计的项目使用，包括 React、Jest 和 Babel。`

它解决了 JavaScript monorepos 的三个最大问题：

+ Lerna 在 repo 中链接不同的项目，因此它们可以相互导入，而无需向 NPM 发布任何内容。 

+ Lerna 对任意数量的项目运行命令，它以最有效的方式、以正确的顺序执行它，并且可以将其分布在多台机器上。 

+ Lerna 管理您的发布过程，从版本管理到发布再到 NPM，它提供了多种选项来确保可以适应任何工作流程。
---
### 优势
+ 大幅减少重复操作
+ 提升操作的标准化
---
### lerna 管理模式
lerna 管理项目可以使用两种模式，默认固定模式，当使用 lerna init -i 命令初始化项目时，此时为独立模式
+ 固定模式：所有包使用同一个版本
+ 独立模式：给每个包单独设置版本号

>可以将lerna.json 中的 `version`  设置为 `Independent` 改变成独立模式。默认是统一的版本号

## 安装
  1. 全局安装 Lerna
  ```
  npm i lerna -g
  ```
  2. 本地安装
  ```sh
    mkdir xxx && cd xxx 
    npm init 
    npm i lerna -D
  ```
  3. 初始化
  ```sh
   lerna init
  ```

## 命令

1. `lerna init`  将一个仓库初始化为一个lerna仓库，或升级现有的lerna版本到当前安装的版本
> --independent/-i – 使用独立的版本控制模式

2. `lerna create` 创建一个 package 到项目工程的 packages 下

3. `lerna add` 安装包  
   +  没有参数，在根目录安装包，所有模块都可引用
    ```sh
    lerna add babel
    ```
   + 可以匹配给那些包安装
   ```sh
   lerna add module-1 packages/prefix-*
   ```
   + `--scope` 安装的包还是在根node_module,只是配置只会z增加到当前的package.json中
   ```sh
   lerna add module-1 --scope=module-2
   ``` 
   +  `--dev` 安装到devDependencies 
   ```sh
   lerna add module-1 --scope=module-2 --dev
   ``` 
 
4. `lerna bootstrap` 将本地包链接在一起并安装剩余的包依赖项

5. `lerna clean` 从所有包中删除 node_modules 目录，但不会删除根目录的node_module。只会删除 node_modules，不会删除 package.json 中的依赖

6. `lerna link` 链接互相引用的库，当 package/package.json 内明确了 packages 下的包时，才会将相关包链接到 package/node_modules 中。

7. `lerna list` 列出所有的包的信息
  ```sh
  lerna list = lerna ls
  lerna ll
  lerna la
  ```

8. `lerna changed` 列出所有改动的包
 
9. `lerna diff` 列出所有或单个包的差异
```sh
$ lerna diff
# 指定看某个模块的差异
$ lerna diff package-name
```
10. `lerna run`  运行每个包下面的 script命令

11. `lerna exec` 执行 shell 脚本

12. `lerna info` 查看 lerna 及运行环境的信息

13. `lerna publish` 发布包
+ 发布时会自动执行：git add package-lock.json，所以 package-lock.json 不要加入 .gitignore
+ 先创建远程仓库，并且同步一次 master 分支
+ 执行 lerna publish 前先完成 npm login，登录的时候要先检查npm源地址，要切换到https://registry.npmjs.org/
+ 如果发布的 npm 包名为：@xxx/yyy 的格式，需要先在 npm 注册名为：xxx 的 organization，否则可能会提交不成功
+ 发布到 npm group 时默认为 private，所以我们需要手动在 package.json 中添加如下配置：
```json
"publishConfig": {
  "access": "public"
}
```

