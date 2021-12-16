# vue问题记录

## watch监听对象多个属性变化后再执行事件
使用计算属性 避免触发多次
```js
  computed: {
    cloneQueryParams(){
      return JSON.parse(JSON.stringify(this.queryParams))
    }
  },
  watch:{
    'cloneQueryParams': {
      handler(nv, ov){
       // do ..
      },
      deep: true
    }
  }

```
```js
computed: {
 	watchObj () {
        let { id, name } = this
        return { id, name }
    }
},
```

### props的值不能直接改变
持用computed
```js
 setup(props, {attrs, emit}){
    const localValue = computed({
      get(){
        return props.value
      },
      set(val){
        emit('input', val)
      }
    })
    return {
      localValue
    }
  },
```

