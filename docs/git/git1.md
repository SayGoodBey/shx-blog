# git 基础

## 实现把项目某个人的提交单独拉取到一个新分支上
获取当前作者所有提交 
```
git log --reverse --author="author" --format=%H 
```
通过cherry-pick 合到单独分之
```
git cheout newBranch 
git cherry-pick commit1 commit2 ...
```
批量有冲突的时候解决完冲突 继续执行下面的命令
```
git cherry-pick  --continue
```
### 转移多个提交
转移多个提交   
```
git cherry-pick commit1 commit2 
```
转移一些列提交   **提交 A 必须早于提交 B** 这种写法不包含提交A
```
git cherry-pick A..B 
```
要包含A的提交
```
git cherry-pick A^..B 
```


[git 回滚](https://help.coding.net/insight/posts/bb30f4f8/)

[找出一个git分支创建者](https://qastack.cn/programming/12055198/find-out-a-git-branch-creator)

[如何获取按最近提交排序的 Git 分支列表？](https://stackoverflow.com/questions/5188320/how-can-i-get-a-list-of-git-branches-ordered-by-most-recent-commit/5188364#5188364)


### git commit 规范 
[commit规范+commitlint+CHANGELOG自动生成一条龙服务](https://juejin.cn/post/6934292467160514567#heading-9)



### 查看项目git提交
```js
git log --since=2022-02-01 --until=2022-04-30 --author="shangxin"  --date=iso --pretty=format:’"%h","%an","%ad","%s"’ >> ~/Desktop/commitdev.csv   
```
