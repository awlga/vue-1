<p style="color:#3A9;text-align:center;">Vue.js基础</p>
===
---

<p style="color:#3A9;text-align:center;">什么是Vue.js?</p>
===
1. 渐进式(Progressive)的框架
2. 只关注视图(View)
3. 由下向上

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
1. 获取DOM元素
2. 添加替换内容
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











