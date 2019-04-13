<p>异步IO与代码的同步化</p><p style="text-align:right;font-size:28px;margin-right:50px;color:#888;">:star: 田一块</p>
===
---
<p>异步与同步</p>
==
# 前提条件：1. 多线程 2. 阻塞IO
## 异步：在执行存在资源锁定（阻塞IO）的情况下，不阻止当前进，线程的执行
## 同步：在执行存在资源锁定（阻塞IO）的情况时，会阻止当前进，线程的执行

离开多线程，阻塞IO，异步就不存在了。

---
<p>事件与异步</p>
==
1. 相同的地方
都可以使用回调函数处理

2. 不同的地方
	事件：不确定发生的时间
    异步：确定在未来的一段时间内一定完成

3. 结论
	事件：只能使用回调函数
    异步：不一定就使用回调

---
<p>事件的处理方式</p>
==
1. 创建事件处理中心
3. 注册事件响应处理
4. 发送事件

---
创建事件处理中心
===
```
// 引入事件对象
const EventEmitter = require('events');
// 创建自己的事件对象
class MyEmitter extends EventEmitter {}
// 创建事件处理中心对象 myEmitter
const myEmitter = new MyEmitter();

```

---
注册事件
===
```
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
```

---
发送事件
===
```
myEmitter.emit('event');
```

---
<p>异步的处理方式</p>
==
1. 调用异步API
2. 判断是不是出错
3. 出错做出处理A
4. 正确做出处理B


