# 数据类型

## <font style="color: var(--vp-c-brand);">一、JavaScript 有哪些数据类型，它们的区别？</font>

JavaScript 共有八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。

其中 Symbol 和 BigInt 是 ES6 中新增的数据类型：

-   Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
-   BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

    这些数据可以分为原始数据类型和引用数据类型：

-   栈：原始数据类型（Undefined、Null、Boolean、Number、String）
-   堆：引用数据类型（对象、数组和函数）

两种类型的区别在于**存储位置的不同**：

-   原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
-   引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

堆和栈的概念存在于数据结构和操作系统内存中，在数据结构中：

-   在数据结构中，栈中数据的存取方式为先进后出。
-   堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。

在操作系统中，内存被分为栈区和堆区：

-   栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
-   堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

## <font style="color: var(--vp-c-brand);">二、数据类型检测的方式有哪些</font>

1. typeof

```JavaScript
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof "str"); // string
console.log(typeof []); // object
console.log(typeof function () {}); // function
console.log(typeof {}); // object
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

其中数组、对象、null 都会被判断为 object，其他判断都正确。

2. instanceof

<code>instanceof</code> 可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。

```jsJavaScript
console.log(2 instanceof Number); // false
console.log(true instanceof Boolean); // false
console.log("str" instanceof String); // false

console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
console.log(undefined instanceof undefined); // 报错
console.log(null instanceof null); // 报错
```

可以看到，<code>instanceof</code>**只能正确判断引用数据类型**，而不能判断基本数据类型。instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 <code>prototype</code> 属性。

3. constructor

```JavaScript
console.log((2).constructor === Number); // true
console.log(true.constructor === Boolean); // true
console.log("str".constructor === String); // true
console.log([].constructor === Array); // true
console.log(function () {}.constructor === Function); // true
console.log({}.constructor === Object); // true
console.log(undefined.constructor === undefined); // 报错
console.log(null.constructor === null); // 报错
```

<code>constructor </code>有两个作用，一是判断数据的类型，二是对象实例通过<code> constrcutor </code>对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，<code>constructor</code> 就不能用来判断数据类型了：

```JavaScript
function Fn() {}

Fn.prototype = new Array();

var f = new Fn();

console.log(f.constructor === Fn); // false
console.log(f.constructor === Array); // true
```

4. Object.prototype.toString.call()

<code>Object.prototype.toString.call()</code> 使用 Object 对象的原型方法 toString 来判断数据类型：

```JavaScript
var a = Object.prototype.toString;

console.log(a.call(2));
console.log(a.call(true));
console.log(a.call("str"));
console.log(a.call([]));
console.log(a.call(function () {}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```

同样是检测对象 obj 调用 toString 方法，obj.toString()的结果和 Object.prototype.toString.call(obj)的结果不一样，这是为什么？
这是因为 toString 是 Object 的原型方法，而 Array、function 等类型**作为 Object 的实例，都重写了 toString 方法**。不同的对象类型调用 toString 方法时，根据原型链的知识，调用的是对应的重写之后的 toString 方法（function 类型返回内容为函数体的字符串，Array 类型返回元素组成的字符串…），而不会去调用 Object 上原型 toString 方法（返回对象的具体类型），所以采用 obj.toString()不能得到其对象类型，只能将 obj 转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用 Object 原型上的 toString 方法。

## <font style="color: var(--vp-c-brand);">三、判断数组的方式有哪些</font>

-   通过 Object.prototype.toString.call( )做判断

```JavaScript
Object.prototype.toString.call(obj).slice(8, -1) === "Array";
```

-   通过原型链做判断

```JavaScript
    obj.**proto** === Array.prototype;
```

-   通过 ES6 的 Array.isArray()做判断

```JavaScript
Array.isArrray(obj);
```

-   通过 instanceof 做判断

```JavaScript
obj instanceof Array
```

-   通过 Array.prototype.isPrototypeOf

```JavaScript
Array.prototype.isPrototypeOf(obj)
```

## <font style="color: var(--vp-c-brand);">四、null 和 undefined 区别</font>

首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

undefined 代表的含义是<font style="color: var(--vp-c-brand);">未定义</font>，null 代表的含义是<font style="color: var(--vp-c-brand);">空对象</font>。一般变量声明了但还没有定义的时候会返回 undefined，null 主要用于赋值给一些可能会返回对象的变量，作为初始化。

undefined 在 JavaScript 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 undefined 值的判断。我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

## <font style="color: var(--vp-c-brand);">五、typeof null 的结果是什么，为什么？</font>

在 JavaScript 第一个版本中，所有值都存储在 32 位的单元中，每个单元包含一个小的 **类型标签(1-3 bits)** 以及当前要存储值的真实数据。类型标签存储在每个单元的低位中，共有五种数据类型：

```JavaScript

000: object   - 当前存储的数据指向一个对象。
  1: int      - 当前存储的数据是一个 31 位的有符号整数。
010: double   - 当前存储的数据指向一个双精度的浮点数。
100: string   - 当前存储的数据指向一个字符串。
110: boolean  - 当前存储的数据是布尔值。
```

如果最低位是 1，则类型标签标志位的长度只有一位；如果最低位是 0，则类型标签标志位的长度占三位，为存储其他四种数据类型提供了额外两个 bit 的长度。

有两种特殊数据类型：

-   undefined 的值是 (-2)30(一个超出整数范围的数字)；
-   null 的值是机器码 NULL 指针(null 指针的值全是 0)

那也就是说 null 的类型标签也是 000，和 Object 的类型标签一样，所以会被判定为 Object。

## <font style="color: var(--vp-c-brand);">六、intanceof 操作符的实现原理及实现</font>

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置

```JavaScript
function myInstanceof(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left)
  // 获取构造函数的 prototype 对象
  let prototype = right.prototype;

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型
    proto = Object.getPrototypeOf(proto);
  }
}
```

## <font style="color: var(--vp-c-brand);">七、为什么 0.1+0.2 ! == 0.3，如何让其相等 </font>

在开发过程中遇到类似这样的问题：

```JavaScript
let n1 = 0.1, n2 = 0.2
console.log(n1 + n2)  // 0.30000000000000004
```

这里得到的不是想要的结果，要想等于 0.3，就要把它进行转化：

```JavaScript
(n1 + n2).toFixed(2) // 注意，toFixed为四舍五入
```

<code>toFixed(num)</code>方法可把 Number 四舍五入为指定小数位数的数字。那为什么会出现这样的结果呢？

计算机是通过二进制的方式存储数据的，所以计算机计算 0.1+0.2 的时候，实际上是计算的两个数的二进制的和。0.1 的二进制是<code>0.0001100110011001100...(1100 循环)</code>，0.2 的二进制是：<code>0.00110011001100...(1100 循环)</code>，这两个数的二进制都是无限循环的数。那 JavaScript 是如何处理无限循环的二进制小数呢？
一般我们认为数字包括整数和小数，但是在 JavaScript 中只有一种数字类型：Number，它的实现遵循 IEEE 754 标准，使用 64 位固定长度来表示，也就是标准的 double 双精度浮点数。在二进制科学表示法中，双精度浮点数的小数部分最多只能保留 52 位，再加上前面的 1，其实就是保留 53 位有效数字，剩余的需要舍去，遵从“0 舍 1 入”的原则。

根据这个原则，0.1 和 0.2 的二进制数相加，再转化为十进制数就是：<code>0.30000000000000004</code>。



## <font style="color: var(--vp-c-brand);">八、typeof NaN 的结果是什么</font>

NaN 指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。

```JavaScript
typeof NaN; // "number"
```

NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN !== NaN 为 true。

## <font style="color: var(--vp-c-brand);">九、isNaN 和 Number.isNaN 函数的区别？</font>

-   函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。
-   函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。

## <font style="color: var(--vp-c-brand);">十、Object.is() 与比较操作符 “===”、“==” 的区别</font>

- 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
- 使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
- 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。
