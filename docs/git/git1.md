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

