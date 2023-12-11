对于布尔类型 <code>boolean</code>，永远只有<code>true</code>和<code>false</code>两个值。

布尔运算是一种关系运算，包括以下几类：

-   比较运算符：<code>></code>，<code>>=</code>，<code><</code>，<code><=</code>，<code>==</code>，<code>!=</code>
-   与运算 <code>&&</code>
-   或运算 <code>||</code>
-   非运算 <code>!</code>

下面是一些示例：

```java
boolean isGreater = 5 > 3; // true
int age = 12;
boolean isZero = age == 0; // false
boolean isNonZero = !isZero; // true
boolean isAdult = age >= 18; // false
boolean isTeenager = age >6 && age <18; // true
```

关系运算符的优先级从高到低依次是：

-   <code>!</code>
-   <code>></code> ，<code>>=</code>，<code><</code>，<code><=</code>
-   <code>==</code>，<code>!=</code>
-   <code>&&</code>
-   <code>||</code>

### 短路运算

布尔运算的一个重要特点是短路运算。如果一个布尔运算的表达式能提前确定结果，则后续的计算不再执行，直接返回结果。

因为 <code>false && x</code> 的结果总是 <code>false</code>，无论 <code>x</code> 是 <code>true</code> 还是 <code>false</code>，因此，与运算在确定第一个值为 <code>false</code> 后，不再继续计算，而是直接返回 <code>false</code>。

我们考察以下代码：

```java
public class Main {
    public static void main(String[] args) {
        boolean b = 5 < 3;
        boolean result = b && (5 / 0 > 0);
        System.out.println(result);
    }
}
```

如果没有短路运算，<code>&&</code>后面的表达式会由于除数为 <code>0</code> 而报错，但实际上该语句并未报错，原因在于与运算是短路运算符，提前计算出了结果 <code>false</code>。

如果变量 <code>b</code> 的值为 <code>true</code>，则表达式变为 <code>true && (5 / 0 > 0)</code>。因为无法进行短路运算，该表达式必定会由于除数为 <code>0</code> 而报错，可以自行测试。

类似的，对于<code>||</code>运算，只要能确定第一个值为 <code>true</code>，后续计算也不再进行，而是直接返回 <code>true</code>：

```java
boolean result = true || (5 / 0 > 0); // true
```

### 三元运算符

Java 还提供一个三元运算符 <code>b ? x : y</code>，它根据第一个布尔表达式的结果，分别返回后续两个表达式之一的计算结果。示例：

```java
public class Main {
    public static void main(String[] args) {
        int n = -100;
        int x = n >= 0 ? n : -n;
        System.out.println(x);
    }
}

```

上述语句的意思是，判断<code>n >= 0</code> 是否成立，如果为 <code>true</code>，则返回 <code>n</code>，否则返回<code>-n</code>。这实际上是一个求绝对值的表达式。

注意到三元运算 <code>b ? x : y</code> 会首先计算 <code>b</code>，如果 <code>b</code> 为 <code>true</code>，则只计算 <code>x</code>，否则，只计算 <code>y</code>。此外，<code>x</code> 和 <code>y</code> 的类型必须相同，因为返回值不是 <code>boolean</code>，而是 <code>x</code> 和 <code>y</code> 之一。

### 练习

判断指定年龄是否是小学生（6 ～ 12 岁）：

```java
// 布尔运算
public class Main {
    public static void main(String[] args) {
        int age = 7;
        boolean isPrimaryStudent = age >= 6 && age <= 12;
        System.out.println(isPrimaryStudent ? "Yes" : "No");
    }}
```

### 小结

与运算和或运算是短路运算；

三元运算<code>b ? x : y</code> 后面的类型必须相同，三元运算也是“短路运算”，只计算 <code>x</code> 或 <code>y</code>。
