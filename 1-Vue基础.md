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

<p style="color:#3A9;text-align:center;">模板详解</p>
===
---
模板详情
===
Vue模板的功能主要有几个：
1. 数据替换
2. DOM事件处理
---
<p style="color:#3A9;text-align:center;">数据替换</p>
===
# 纯文本替换
# HTML节点内容替换
# HTML属性替换
# 表达式替换

---
纯文本替换
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
HTML替换
===
1. 格式: `v-html="html"`
2. 作用：将`v-html`指令所对应的标签内容上填充data.html所对应的内容。

完整案例：
「 [HTML替换内容](./source/basics/v-html-danger-text.html)」
「 [HTML替换危险内容](./source/basics/v-html-text.html)」

---
示例:
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
HTML替换的危险性
===
HTML替换应用于用户数据可能会产生不可预测的结果。
比如XSS攻击，从而导致网站以及网站用户被攻击。

1. HTML替换只能用于网站数据的更新。
2. HTML替换禁止替换用户数据

---
HTML属性替换
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
表达式替换
===
表达式替换与文本替换类似，只是将变量换成是表达式。
1. 格式1：`{{ exp }}`
2. 格式2: v-bind:attr="exp"
其中exp是JavaScript表达式.
格式1作用于普通的html元素内容，格式2作用于元素的属性。

> 表达式必须是一个值，不能是一个语句
> 表达式访问的全局功能是受限的,不能访问用户定义的全局变量

---
示例
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



























