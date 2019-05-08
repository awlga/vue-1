<p style="color:#3A9;text-align:center;">Vuex介绍</p>
===
---
<p style="color:#3A9;text-align:center;">为什么使用Vuex?</p>
===
当：
1. 应用的组件复杂时
2. 数据需要在多个组件之间共享时
3. 应用需要一个独立的数据维护机制。

这个机制叫做应用的："状态管理模式"。
应用将绝大多数需要共享的数据放在这里统一进行管理。
所以这个状态管理模式是一种中心化的，集中式的管理模式。

---

<p style="color:#3A9;text-align:center;">简单的状态管理模式</p>
===

1. state，驱动应用的数据源；
2. view，以声明方式将 state 映射到视图；
3. actions，响应在 view 上的用户输入导致的状态变化。
<p style="text-align:center">
<img src="./images/flow.png" height="420px"/>
</p>

---


<p style="color:#3A9;text-align:center;position:absolute;top:20px;left:220px;">Vuex状态管理模式</p>
===
<p style="text-align:center;margin:0">
<img src="./images/vuex.png" height="700px"/>
</p>

---
<p style="color:#3A9;text-align:center;">Vuex状态管理模式</p>
===
当多个组件之间共享数据时，数据的传递与保存，维护就会变的非常复杂。
这个时候独立出来一份数据，共同来维护，相反会显得更加简单。
这就是Vuex这类状态管理模式的思路。
而这类数据化身为state,通mutations，actions来进行改变。
从而又对视图作出渲染通知。

---

<p style="color:#3A9;text-align:center;">为什么不使用全局对象？</p>
===
1. Vuex要求数据变化能对视图进行响应。
2. Vuex要求数据必须通过mutation的commit修改。


---
<p style="color:#3A9;text-align:center;">Vuex的引入</p>
===
Vuex是Vue的一个插件，所以只要使用
```
Vue.use(Vuex)
```

---
<p style="color:#3A9;text-align:center;">Vuex的核心是Store</p>
===
使用也非常简单.  [示例](./source/vuex/basic.html)

1. 创建store实例
```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```
2. 调用commit提交变更

```
store.commit('increment')
```

---

<p style="color:#3A9;text-align:center;">向组件传递store</p>
===
当我们加载了Vuex之后，
Vue就获得了一个属性store, 可以向子组件传递Vuex的Store实例。

```
  const app = new Vue({
    store,
    ...
  });  
```
在Vue实例或者组件中,就可以通过`this.$store`来操作Store了。

[示例](./source/vuex/store-attribute.html)

---

<p style="color:#3A9;text-align:center;">绑定Store数据State到组件</p>
===
如果需要绑定多个数据到组件，采用`computed`属性一个一个的绑定相对会比较麻烦。Vuex提供了Vuex. mapState帮助绑定
1. 简单模式，直接映射state的属性
```
computed: mapState([
  'count' // 映射 store.state.count
])
```

[示例 mapState](./source/vuex/mapState.html)

---

2. 运算模式

```
mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
});
```
[示例 mapState.hard](./source/vuex/mapState.hard.html)

---

<p style="color:#3A9;text-align:center;">Getter</p>
===
当组件需要
1.派生属性（特别是复杂运算)
2.这个属性需要在多个组件之间共享时

Store的Getter属性就会显得非常有价值。
> 因为通常它能缓存计算结果直到状态有变化为止

---
<p style="color:#3A9;text-align:center;">Getter的属性创建</p>
===

创建一个Getter属性非常简单：

示例代码如下：

```
  getters: {
    length: state => {
        return state.items.length
    }
  }
```
这时我们可以获得一个store.getters.length的属性值，可以用于实例对家内部
```
this.$store.getter.length`
```

---
<p style="color:#3A9;text-align:center;">Getter的属性创建</p>
===

可以让 Getter 本身可以作为参数，从而洐生出新的Getter属性。

这里产生一个新的Gettter属性`lg3Len`
```js
  getters: {
    lg3Len: function(state, getters) {
      return getters.lg3.length;
    }
  }
```

---
<p style="color:#3A9;text-align:center;">让Getter返回函数</p>
===
有时候我们需要提供变化的内容对状态进行查询，这个时候Getter可以返回一个函数用于接收参数计算。

```js
      getNameById: (state) => (id) => {
        const found = state.items.filter((item)
        => item.id === id);
        if (found.length) {
          return found[0].name;
        }
        return "Not Found!"
      }
```
这样我们就可以在Vue实例上调用了：
```
this.$store.getters.getNameById（1)
```
---

<p style="color:#3A9;text-align:center;"> 使用mapGetters绑定Getter到实例属性</p>
===

```
computed: Vuex.mapGetters(['length', 'lg3', 'lg3Len'])
```
也可以在map时修改属性名

```
computed: Vuex.mapGetters({lgLen: 'lg3Len'});
```

---
<p style="color:#3A9;text-align:center;">Mutation</p>
===

1. 状态修改的唯一地方
2. 必须是同步函数
3. 函数名类以于事件名，函数休类似于响应函数
4. 通过Store.commit激发

定义:
```
mutations: {
  increment (state) {
    state.count++
  }
}
```   
调用:

```
store.commit('increment');
```

---

<p style="color:#3A9;text-align:center;">commit带参数</p>
===
定义:
```
mutations: {
  increment (state, inc) {
    state.count += inc;
  }
}
```   
调用:

```
store.commit('increment', 10);
```

---
<p style="color:#3A9;text-align:center;">commit带对象参数</p>
===
定义:

```
mutations: {
  increment (state, obj) {
    state.count += obj.inc
  }
}
```
调用:

```
store.commit('increment', {inc: 10});
```

---

<p style="color:#3A9;text-align:center;">以对象形式commit</p>
===
定义:

```
store.commit({
  type: 'increment',
  inc: 10
});
```

---
<p style="color:#3A9;text-align:center;">mapMutations到组件</p>
===

与mapGetters 一样，支持两种方式，

1. 数组提取
```js
  methods: mapMutations([
      'increment', 
      'incrementBy'
    ])
```
2. 对象提取，可以修改名字
```js
methods: mapMutations({
    add: 'increment' 
 })
``` 

---

<p style="color:#3A9;text-align:center;">Action</p>
===
Action有点类似Mutation,但是有差别
1. Action 提交的是 mutation，而不是直接变更状态。
2. Action 可以包含任意异步操作。

---
<p style="color:#3A9;text-align:center;">Action用法</p>
===
定义：
```
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
```
调用：
```
store.dispatch('increment')
```

---
<p style="color:#3A9;text-align:center;">Action异步用法</p>
===
定义：
```
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```
调用：
```
store.dispatch('incrementAsync')
```

---
<p style="color:#3A9;text-align:center;">mapActions绑定Actions到组件中</p>
===
跟mapMutations一样。

---

<p style="color:#3A9;text-align:center;">dispatch调用返回Promise</p>
===
所以可以使用.then和async/await

---


