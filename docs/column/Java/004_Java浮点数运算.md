浮点数运算和整数运算相比，只能进行加减乘除这些数值计算，不能做位运算和移位运算。

在计算机中，浮点数虽然表示的范围大，但是，浮点数有个非常重要的特点，就是浮点数常常无法精确表示。

举个栗子：

浮点数 <code>0.1</code> 在计算机中就无法精确表示，因为十进制的 <code>0.1</code> 换算成二进制是一个无限循环小数，很显然，无论使用 <code>float</code> 还是 <code>double</code>，都只能存储一个 <code>0.1</code> 的近似值。但是，<code>0.5</code> 这个浮点数又可以精确地表示。

因为浮点数常常无法精确表示，因此，浮点数运算会产生误差：

```java
public class Main {
    public static void main(String[] args) {
        double x = 1.0 / 10;
        double y = 1 - 9.0 / 10;
        // 观察x和y是否相等:
        System.out.println(x);
        System.out.println(y);
    }
}
```

由于浮点数存在运算误差，所以比较两个浮点数是否相等常常会出现错误的结果。正确的比较方法是判断两个浮点数之差的绝对值是否小于一个很小的数：

```java
// 比较x和y是否相等，先计算其差的绝对值:
double r = Math.abs(x - y);
// 再判断绝对值是否足够小:
if (r < 0.00001) {
    // 可以认为相等
} else {
    // 不相等
}

```

浮点数在内存的表示方法和整数比更加复杂。Java 的浮点数完全遵循 <font style="color: var(--vp-c-brand);">IEEE-754</font> 标准，这也是绝大多数计算机平台都支持的浮点数标准表示方法。

### 类型提升

如果参与运算的两个数其中一个是整型，那么整型可以自动提升到浮点型：

```java
public class Main {
    public static void main(String[] args) {
        int n = 5;
        double d = 1.2 + 24.0 / n; // 6.0
        System.out.println(d);
    }
}
```

需要特别注意，在一个复杂的四则运算中，两个整数的运算不会出现自动提升的情况。例如：

```java
double d = 1.2 + 24 / 5; // 5.2
```

计算结果为<code>5.2</code>，原因是编译器计算<code>24 / 5</code>这个子表达式时，按两个整数进行运算，结果仍为整数<code>4</code>。

### 溢出

整数运算在除数为 <code>0</code> 时会报错，而浮点数运算在除数为 <code>0</code> 时，不会报错，但会返回几个特殊值：

-   NaN 表示 Not a Number
-   Infinity 表示无穷大
-   Infinity 表示负无穷大

例如：

```java
double d1 = 0.0 / 0; // NaN
double d2 = 1.0 / 0; // Infinity
double d3 = -1.0 / 0; // -Infinity
```

这三种特殊值在实际运算中很少碰到，我们只需要了解即可。

### 强制转型

可以将浮点数强制转型为整数。在转型时，浮点数的小数部分会被丢掉。如果转型后超过了整型能表示的最大范围，将返回整型的最大值。例如：

```java
int n1 = (int) 12.3; // 12
int n2 = (int) 12.7; // 12
int n2 = (int) -12.7; // -12
int n3 = (int) (12.7 + 0.5); // 13
int n4 = (int) 1.2e20; // 2147483647
```

如果要进行四舍五入，可以对浮点数加上 0.5 再强制转型：

```java
public class Main {
    public static void main(String[] args) {
        double d = 2.6;
        int n = (int) (d + 0.5);
        System.out.println(n);
    }
}
```

### 小结

浮点数常常无法精确表示，并且浮点数的运算结果可能有误差；

比较两个浮点数通常比较它们的差的绝对值是否小于一个特定值；

整型和浮点型运算时，整型会自动提升为浮点型；

可以将浮点型强制转为整型，但超出范围后将始终返回整型的最大值。
