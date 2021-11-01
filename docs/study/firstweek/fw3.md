# 数据结构设计
![原型图](/images/data.jpeg)
根据产品图设置数据
vuex store 来同步数据 数据格式如下
```
{
    // 作品
    work: {
        title: '作品标题',
        setting: { /* 一些可能的配置项，用不到就先预留 */ },
        props: { /* 页面 body 的一些设置，如背景色 */ },
        components: [
            // components 要用数组，有序结构

            // 单个 node 要符合常见的 vnode 格式
            {
                id: 'xxx', // 每个组件都有 id ，不重复
                name: '文本1',
                tag: 'text',
                attrs: { fontSize: '20px' },
                children: [
                    '文本1' // 文本内容，有时候放在 children ，有时候放在 attrs 或者 props ，没有标准，看实际情况来确定
                ]
            },
            {
                id: 'yyy',
                name: '图片1',
                tag: 'image',
                attrs: { src: 'xxx.png', width: '100px' },
                children: null
            },
        ]
    },

    // 画布当前选中的组件
    activeComponentId: 'xxx'
}

```
整体数据流共用一个数据库
![数据流](/images/datastream.png)

## 数据流转
核心：B 端、C 端、管理后台，共用一个数据库。

- 创建作品：初始化一个 JSON 数据
- 保存作品：修改 JSON 数据
- 发布作品：修改一个标记，仅此而已
- C 端浏览作品：获取 JSON 数据，SSR 渲染页面
- 屏蔽作品：修改一个标记，C 端来判断
- 其中 C 端还有缓存，防止频繁访问数据库。
