<p style="color:#3A9;text-align:center;">Vue.js基础</p>
===
---

<p style="color:#3A9;text-align:center;">什么是Vue.js?</p>
===
1. 渐进式(Progressive)的框架，学习曲线比较平缓
2. 只关注视图(View)，所以可以认为是一个模板框架
3. 由下向上，也就是由简单到复杂

所以我们主要考查Vue如何处理DOM所需要的数据以及如何根据数据处理DOM。

---
<p style="color:#3A9;text-align:center;">启用Vue</p>
===
Vue是一个javascript脚本。所以添加vue到html的方式就是添加一个script标签如下：
```
<script 
src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"
>
</script>
```

正式生产的Vue脚本地址：
```
https://cdn.jsdelivr.net/npm/vue
```
---
<p style="color:#3A9;text-align:center;">Hello World!</p>
===
使用Vue生成`Hello world!`非常简单：
1. 获取DOM元素，通过CSS选择器，即Vue里面的el属性。
2. 添加替换内容，即data属性。
# JS代码如下
```
var app = new Vue({
  el: '.hello-world',
  data: {
    message: 'Hello World!'
  }
});
```

---

<p style="color:#3A9;text-align:center;">Hello World!(二）</p>
===

HTML代码：
```
<div class="hello-world">
  {{ message }}
</div>
```
---
<p style="color:#3A9;text-align:center;">完整版</p>
===

```
<!DOCTYPE html>
<html>
<body>
  <div class="hello-world">
    {{ message }}
  </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js">
</script>
<script>
  var app = new Vue({
    el: '.hello-world',
    data: {
      message: 'Hello World!'
    }
  });
</script>
</html>
```

---
<p style="color:#3A9;text-align:center;">el属性的问题</p>
===
1. 可以使用选择器，但是只会选择一个元素
2. 或者直接使用一个HTML元素
3. 并不是真正的选择器，无法与CSS的选择器理念融合

> 以上是vue 2.0测试的结果，并没有官方的说明

参考示例:

「[一个类](./source/basics/el.class.html)」「[多个类](./source/basics/el.class.1.html)」「[一个元素](./source/basics/el.element.html)」「 [多个元素](./source/basics/el.element.1.html)」

---
<p style="color:#3A9;text-align:center;">data属性</p>
===
1. 与DOM内容进行绑定的数据。
3. 响应式的数据
data的变化会导致DOM内容也发生变化
> 当你在控制台修改对应的值时，dom就会发生相应的变化
---


<p style="color:#3A9;text-align:center;">进入模板之前</p>
===

> 前面介绍了基本的Vue使用方法
> Vue核心处理的内容主要包括：模板，事件，数据，组件
> 所以下面我们将一次展开讨论。

---


<p style="color:#3A9;text-align:center;">模板详解</p>
===
---
<p style="color:#3A9;text-align:center;">模板详情</p>
===
Vue模板的功能主要有几个：
1. 数据处理（简单的数据处理，输入处理，数据模型绑定等）
2. DOM事件处理(键盘，鼠标，控制，自定义等事件）
---
<p style="color:#3A9;text-align:center;">简单的数据处理</p>
===
# 纯文本替换
# HTML节点内容替换
# HTML属性替换
# 表达式替换

---
<p style="color:#3A9;text-align:center;">纯文本替换</p>
===

1. 格式：`{{ text }}`
2. 作用： 对`{{ text }}`所指定的data.text变量内容进行替换
3. 示例：
```
<span>Message: {{ msg }}</span>
```

> 不能替换成html

完整案例：

「 [纯ASCII文本](./source/basics/pure-text.html)」「 [带HTML标签文本](./source/basics/pure-text.html.html)」

---
<p style="color:#3A9;text-align:center;">HTML替换</p>
===
1. 格式: `v-html="html"`
2. 作用：将`v-html`指令所对应的标签内容上填充data.html所对应的内容。

完整案例：
「 [HTML替换内容](./source/basics/v-html-danger-text.html)」
「 [HTML替换危险内容](./source/basics/v-html-text.html)」

---
<p style="color:#3A9;text-align:center;">示例</p>
===

对于父节点: 
```
<p v-html="html"></p>
```
其中html变量的值是: 
```
<span style="color:red">Hello HTML! </span>
```
那么结果值是：
```
<p v-html="html">
  <span style="color:red">Hello HTML!</span>
</p>
```

---
<p style="color:#3A9;text-align:center;">HTML替换的危险性</p>
===
HTML替换应用于用户数据可能会产生不可预测的结果。
比如XSS攻击，从而导致网站以及网站用户被攻击。

1. HTML替换只能用于网站数据的更新。
2. HTML替换禁止替换用户数据

---
<p style="color:#3A9;text-align:center;">HTML属性替换</p>
===
应用`v-bind`指令修改属性内容。
1. 格式: `v-bind:attr="value"`
其中attr是属性， value是对应的变量名。
2. 示例
```
<div v-bind:title="title"></div>
```
> 当属性的值是布尔类型时，属性为false时会直接消失

完整案例：
「 [v-bind-attr](./source/basics/v-bind-attr.html)」
「 [v-bind-attr-boolean](./source/basics/v-bind-attr-boolean.html)」

---
<p style="color:#3A9;text-align:center;">表达式替换</p>
===
表达式替换与文本替换类似，只是将变量换成是表达式。
1. 格式1：`{{ exp }}`
2. 格式2: v-bind:attr="exp"
其中exp是JavaScript表达式.
格式1作用于普通的html元素内容，格式2作用于元素的属性。

> 表达式必须是一个值，不能是一个语句
> 表达式访问的全局功能是受限的,不能访问用户定义的全局变量

---
<p style="color:#3A9;text-align:center;">示例</p>
===
正确：
```
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

错误：

```
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}

```

---
<p style="color:#3A9;text-align:center;">模板指令(Directives)</p>
===
---
<p style="color:#3A9;text-align:center;">指令</p>
===
指令是指格式为 `v-`的属性。指令主要有几个要点需要了解：
1. 指令分类
2. 指令参数与动态指令参数
3. 修饰符
4. 简写或者缩写

---
<p style="color:#3A9;text-align:center;">指令分类</p>
===
1. 字符/HTML处理指令 `v-text`, `v-html`, `v-pre`
2. CSS处理指令 `v-show`、`v-cloak`
3. 条件指令 `v-if`、`v-else`、`v-else-if`
4. 循环指令 `v-for`
5. 事件指令 `v-on`
6. 数据模型指令 `v-model`、`v-once`
7. 绑定指令 `v-bind`
9. 组件指令 `v-slot`

---

<p style="color:#3A9;text-align:center;">字符/HTML处理</p>
===

1. `v-text`: 将变量更换为元素的文本
```
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```

2. `v-html`: 将变量更换为元素的HTML
```
<div v-html="html"></div>
```
3. `v-pre`: 不对当前元素与子元素进行Vue的相关处理

```
<span v-pre>{{ this will not be compiled }}</span>
```
「 [示例：v-xxx.html](./source/basics/v-xxx.html)」

---
<p style="color:#3A9;text-align:center;">CSS处理指令</p>
===
1. `v-show`: 切换元素的display属性
```
<h1 v-show="show">Hello!</h1>
```
3. `v-cloak`: 隐藏未编译的数据，通常需要结合CSS完成
```css
[v-cloak] {
  display: none;
}
```
```html
<div v-cloak>
  {{ message }}
</div>
```

「 [示例：v-css.html](./source/basics/v-css.html)」

---
<p style="color:#3A9;text-align:center;">条件指令</p>
===

1. `v-if`:  当变量为真是渲染/编译元素
```
<h1 v-if="awesome">Vue is awesome!</h1>
```
2. `v-else`: 当`v-if`的条件不成立时生效
```
<h1 v-else>Oh no 😢</h1>
```
4. `v-else-if`: 当前一个条件失效时，再根据`v-if`的方式进行渲染
```
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
```

> `v-else`, `v-else-if` 必须放在`v-if`或者`v-else-if`后面

---
示例

```
<div v-if="type === 'Human'">
  I'am a Human;
</div>
<div v-else-if="type === 'Robot'">
  I'am a Robot
</div>
<div v-else-if="type === 'Machine'">
  I'am a Machine
</div>
<div v-else>
  I'am an Alien.
</div>
```

「 [示例：v-if.html](./source/basics/v-if.html)」


---

<p style="color:#3A9;text-align:center;">循环指令</p>
===
`v-for`: 对数组，对象，数值等可迭代的内容

---
<p style="color:#3A9;text-align:center;">数组循环</p>
===
1. 格式
最基本的格式：
```html
<div v-for="item in items">
  {{ item.text }}
</div>
```
可以获得key, index的形式, 基中`in`可以由`of`替换
```html
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, key, index) in object"></div>
```
---
<p style="color:#3A9;text-align:center;">示例(数组)</p>
===
1. HTML
```html
<ul class="for">
  <li v-for="item in items">
    {{ item.text }}
  </li>
</ul>
```
2. 脚本
```js
var for = new Vue({
  el: '.for',
  data: {
    items: [ { text: 'Item1' }, { text: 'Item2' }]
  }
})
```

---
<p style="color:#3A9;text-align:center;">示例(对象)</p>
===
1. HTML
```html
<ul class="for">
  <li v-for="value in items">
    {{ value }}
  </li>
</ul>
```
2. 脚本
```js
var for1 = new Vue({
  el: '.for',
  data: {
    items: { name: 'John', age: 20,  height: 180}
  }
})
```

---
<p style="color:#3A9;text-align:center;">示例(数值)</p>
===
1. HTML
```html
<ul class="for">
  <li v-for="value in 10">
    {{ value }}
  </li>
</ul>
```
2. 脚本
```js
var for = new Vue({
  el: '.for'
});
```
---

「 [示例：v-for.html](./source/basics/v-for.html)」

---
<p style="color:#3A9;text-align:center;">事件指令</p>
===
### 格式: 
`v-on:event.modifier="handler"` / `@event.modifier="handler"`

1. 基本形式
```HTML
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 动态事件 (2.6.0+) -->
<button v-on:[event]="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

```
「 [示例：v-on.html](./source/basics/v-on.html)」

---
<p style="color:#3A9;text-align:center;">事件指令（示例)</p>
===

2. 缩写

```
<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 动态事件缩写 (2.6.0+) -->
<button @[event]="doThis"></button>

<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }">
</button>

```

「 [示例：v-on.html](./source/basics/v-on.html)」

---
<p style="color:#3A9;text-align:center;">事件指令（示例)</p>
===

3. 修改符（Modifier)

```
.stop - 调用 event.stopPropagation()。
.prevent - 调用 event.preventDefault()。
.capture - 添加事件侦听器时使用 capture 模式。
.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
.native - 监听组件根元素的原生事件。
.once - 只触发一次回调。
.left - (2.2.0) 只当点击鼠标左键时触发。
.right - (2.2.0) 只当点击鼠标右键时触发。
.middle - (2.2.0) 只当点击鼠标中键时触发。
.passive - (2.3.0) 以 { passive: true } 模式添加侦听器
````

---
<p style="color:#3A9;text-align:center;">事件指令三（示例)</p>
===

### DOM事件消息修改符

```
<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>

<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>

```

「 [.stop](./source/basics/v-on.modifier.stop.html)」「 [.prevent](./source/basics/v-on.modifier.prevent.html)」


---

<p style="color:#3A9;text-align:center;">事件指令（示例)</p>
===

### DOM事件消息修改符(续）

```
<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

「 [.capture](./source/basics/v-on.modifier.capture.html)」「 [.self .once](./source/basics/v-on.modifier.self.html)」


---


<p style="color:#3A9;text-align:center;">事件指令（示例)</p>
===

### DOM事件消息修改符(续）

```
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

作用：提升页面滑动的流畅度

目前测试结果来看，提升不算非常理想。

[youtube 视频](https://www.youtube.com/watch?v=65VMej8n23A)

「 [.passive](./source/basics/v-on.modifier.passive.html)」


---

<p style="color:#3A9;text-align:center;">事件指令（示例)</p>
===

### 键盘事件修改符

```
<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">

<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">
```

「 [v-on.key.html](./source/basics/v-on.key.html)」


---
<p style="color:#3A9;text-align:center;">事件指令</p>
===

### 键盘事件修改符(续）

### 自定义按键修改符
```
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase won`t work
  mediaPlayPause: 179,
  // instead you can use kebab-case with double quotation marks
  "media-play-pause": 179,
  up: [38, 87]
}

```



「 [v-on.key.html](./source/basics/v-on.key.html)」

---

<p style="color:#3A9;text-align:center;">事件指令</p>
===
### 键盘事件修改符(续）

### 已经定义的按键修改符

```
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
```

---


<p style="color:#3A9;text-align:center;">事件指令</p>
===
### 键盘控制事件修改符

### 已经定义的按键修改符

```
.ctrl
.alt
.shift
.meta
```

---
<p style="color:#3A9;text-align:center;">事件指令</p>
===
### .exact 修改符

`.exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

---
<p style="color:#3A9;text-align:center;">事件指令</p>
===
### 鼠标事件修改符
```
.left
.right
.middle
```

适合游戏等控制场景

---
<p style="color:#3A9;text-align:center;">表单输入与数据模型绑定</p>
===

---
<p style="color:#3A9;text-align:center;">针对用户数据输入的`v-model`</p>
===

1. 格式：`v-model="value"`
2. 有效的元素: `input`, `textarea` 及 `select`

---
<p style="color:#3A9;text-align:center;">根据不同的元素影响变化情况</p>
===
1. `type=text` 和 `textarea` 元素
使用 `value` 属性和 `input` 事件；
2. `type=checkbox` 和 `type=radio`
使用 `checked` 属性和 `change` 事件；
3. `select` 元素
将 `value` 作为 `prop` 并将 `change` 作为事件。

---
<p style="color:#3A9;text-align:center;">基本用法（文件本）</p>
===
1. 文本输入(type=text)
```html
<input v-model="message">
```
2. 多行文本(textarea)
```html
<textarea v-model="message"></textarea>
```

---

<p style="color:#3A9;text-align:center;">基本用法（选择）</p>
===
### 存在性选择(type=checkbox)

```html
<input type="checkbox" id="checkbox" v-model="checked">
```
### 多项选择

a. 单选 (type=radio)
```html
  <input type="radio" value="1" v-model="picked">
  <input type="radio" value="2" v-model="picked">
```
b. 多选(type=checkbox)
 
```html
<input type="checkbox" value="CN" v-model="countries"/>
<input type="checkbox" value="USA" v-model="countries"/>
```

---  

<p style="color:#3A9;text-align:center;">基本用法（选择）</p>
===


c. 混合（select)

```html
<select v-model="selected" [multiple]>
  <option disabled value="">请选择</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

> 当mutiple属性存在时，相应的model结果就是一个option值的数组，否则是一个option值

---

<p style="color:#3A9;text-align:center;">非默认值绑定</p>
===

通常模型绑定后会有默认值，比如

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

---

<p style="color:#3A9;text-align:center;">非默认值绑定</p>
===

1. 复选框(type="checkbox")的非默认值绑定
```html
<input type="checkbox" v-model="toggle"
       true-value="yes" false-value="no" />
```
2. 单选框(type="radio")的非默认值绑定
```html
<input type="radio" v-model="pick" v-bind:value="a"/>
```

---

<p style="color:#3A9;text-align:center;">非默认值绑定</p>
===
3. 选择框select的非默认值绑定
```
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>

```

---
<p style="color:#3A9;text-align:center;">修改符</p>
===
1. `.lazy` 不即时同步，会应用`change`事件
```
<input v-model.lazy="msg" >
```
2. `.number` 将输入转化成数值类型Number
```
<input v-model.number="age" type="number">
```
3. `.trim` 将首尾多余的空白字符去除
```
<input v-model.trim="msg">
```

---

<p style="color:#3A9;text-align:center;">只作一次修改</p>
===
```
<span v-once>这个将不会改变: {{ msg }}</span>
```
---

<p style="color:#3A9;text-align:center;">绑定事件</p>
===
### 格式： `v-bind:prop` / `:prop`
### 作用：绑定属性
1. 绑定一个或者多个DOM基本的属性(title, src等)
2. 绑定CSS相关的属性(class, style)
3. 绑定自定义属性

---

<p style="color:#3A9;text-align:center;">绑定一个或者多个DOM基本的属性</p>
===

```
<!-- 绑定一个属性 -->
<img v-bind:src="imageSrc">

<!-- 动态特性名 (2.6.0+) -->
<button v-bind:[key]="value"></button>

<!-- 缩写 -->
<img :src="imageSrc">

<!-- 动态特性名缩写 (2.6.0+) -->
<button :[key]="value"></button>

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName">

```

---

<p style="color:#3A9;text-align:center;">绑定CSS相关的属性(class, style)</p>
===
```
<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>
```

---

<p style="color:#3A9;text-align:center;">绑定对象到DOM</p>
===
```html
<!-- 绑定一个有属性的对象 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }">
</div>
```

---

<p style="color:#3A9;text-align:center;">进入组件之前</p>
===

> 除了v-slot这个跟组件相关的指令，所有模板相关的指令都已经讲完了
> 在进入组件之前，我们需要了解Vue的实例及相关的基本概念

---

<p style="color:#3A9;text-align:center;">Vue 实例</p>
===

讲完了

创建：

```js
var options = {...};
var vm = new Vue(options);
```
`vm => View Model` 表示是一个DOM的模型与视图的处理实例
`options` 就是创建实例的选项信息，它是Vue实例的核心内容之一。

---

<p style="color:#3A9;text-align:center;">实例的选项：data</p>
===
### data
响应式的数据，当这些数据改变时，实例数据会跟着改变，同时视图会进行重渲染

```js
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
});
vm.a = 2   // data.a => 2
vm.a == data.a // => true

```
其中vm就是实例

---

<p style="color:#3A9;text-align:center;">实例的选项：computed</p>
===

处理需要计算的数据

1. 将复杂的计算迁出模板

初始模板

```
<div>{{ message.split('').reverse().join('') }}</div>
```

优化后模板

```
<div>{{ reversedMessage }}</div>
```

---


<p style="color:#3A9;text-align:center;">实例的选项：computed</p>
===

```
{
  data: { message: 'hello' },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
}
```

---


<p style="color:#3A9;text-align:center;">实例的选项：computed</p>
===

# 有时候只是需要获得一个需要计算的值，但是并不需要是响应式的。

模板：
```
<div>{{ now }}</div>
```
选项:

```
computed: {
  now: function () {
    return Date.now()
  }
}

```

---

<p style="color:#3A9;text-align:center;">实例的选项：computed</p>
===

### setter

计算属性默认函数是getter，也就是只获取的数值，不改变数据。
但是computed支持修改。
方式是

```js
data: {
  time: 0,
}, 
computed: {
  now: {
    get: function () {
      return Date.now()
    },
    set: function(time) {
      this.time = time; 
    }
  }
}
```


---


<p style="color:#3A9;text-align:center;">实例的选项：watch</p>
===
侦听数据的变化，但是简单的计算通常推荐computed.

```
<div id="watch">{{ fullName }}</div>
```

```
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
```

---
<p style="color:#3A9;text-align:center;">实例的选项：watch</p>
===

computed 版本实现

```js
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
```

> 对于简单的计算，computed 更加简洁
> 但是对于复杂的数据，比如异步数据的更新的监控，watch会更加好用

---
<p style="color:#3A9;text-align:center;">生命周期</p>
===
<div style="height: 640px; overflow-y: auto;">
  <img src="./images/lifecycle.png"/>
</div>

---
<p style="color:#3A9;text-align:center;">生命周期钩子</p>
===
1. beforeCreate
2. created
3. beforeMounte
4. mounted
5. beforeUpdate
6. updated
7. beforeDestroy
8. destroy











































