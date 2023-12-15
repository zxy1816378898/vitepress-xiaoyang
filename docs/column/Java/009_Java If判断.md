在 Java 程序中，如果要根据条件来决定是否执行某一段代码，就需要 <code>if</code> 语句。

if 语句的基本语法是：

```java
if (条件) {
    // 条件满足时执行
}
```

根据 <code>if</code> 的计算结果<code>（true 还是 false）</code>，JVM 决定是否执行 <code>if</code> 语句块（即花括号{}包含的所有语句）。

让我们来看一个例子：

```java
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 60) {
            System.out.println("及格了");
        }
        System.out.println("END");
    }
}
```

当条件 <code>n >= 60</code> 计算结果为 <code>true</code> 时，<code>if</code> 语句块被执行，将打印"及格了"，否则，<code>if </code>语句块将被跳过。修改 <code>n</code> 的值可以看到执行效果。

注意到 if 语句包含的块可以包含多条语句：

```java
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 60) {
            System.out.println("及格了");
            System.out.println("恭喜你");
        }
        System.out.println("END");
    }
}
```

当 <code>if</code> 语句块只有一行语句时，可以省略花括号{}：

```java
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 60)
            System.out.println("及格了");
        System.out.println("END");
    }
}
```

但是，省略花括号并不总是一个好主意。假设某个时候，突然想给 <code>if</code> 语句块增加一条语句时：

```java
public class Main {
    public static void main(String[] args) {
        int n = 50;
        if (n >= 60)
            System.out.println("及格了");
            System.out.println("恭喜你"); // 注意这条语句不是if语句块的一部分
        System.out.println("END");
    }
}
```

由于使用缩进格式，很容易把两行语句都看成 <code>if</code> 语句的执行块，但实际上只有第一行语句是 <code>if</code> 的执行块。在使用 git 这些版本控制系统自动合并时更容易出问题，所以不推荐忽略花括号的写法。

### else

<code>if</code> 语句还可以编写一个 <code>else { ... }</code>，当条件判断为 <code>false</code> 时，将执行 <code>else</code> 的语句块：

```java
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 60) {
            System.out.println("及格了");
        } else {
            System.out.println("挂科了");
        }
        System.out.println("END");
    }
}
```

修改上述代码 <code>n</code> 的值，观察 <code>if</code> 条件为 <code>true</code> 或 <code>false</code> 时，程序执行的语句块。

注意，<code>else</code> 不是必须的。

还可以用多个 <code>if ... else if ...</code>串联。例如：

```java
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 90) {
            System.out.println("优秀");
        } else if (n >= 60) {
            System.out.println("及格了");
        } else {
            System.out.println("挂科了");
        }
        System.out.println("END");
    }
}
```

串联的效果其实相当于：

```java
if (n >= 90) {
    // n >= 90为true:
    System.out.println("优秀");
} else {
    // n >= 90为false:
    if (n >= 60) {
        // n >= 60为true:
        System.out.println("及格了");
    } else {
        // n >= 60为false:
        System.out.println("挂科了");
    }
}
```

在串联使用多个 <code>if</code> 时，要特别注意<code>判断顺序</code>。观察下面的代码：

```java
public class Main {
    public static void main(String[] args) {
        int n = 100;
        if (n >= 60) {
            System.out.println("及格了");
        } else if (n >= 90) {
            System.out.println("优秀");
        } else {
            System.out.println("挂科了");
        }
    }
}
```

执行发现，<code>n = 100</code> 时，满足条件 <code>n >= 90</code>，但输出的不是<code>"优秀"</code>，而是"及格了"，原因是 if 语句从上到下执行时，先判断 n >= 60 成功后，后续 else 不再执行，因此，if (n >= 90)没有机会执行了。

正确的方式是按照判断范围从大到小依次判断：

```java
// 从大到小依次判断：
if (n >= 90) {
    // ...
} else if (n >= 60) {
    // ...
} else {
    // ...
}
```

或者改写成从小到大依次判断：

```java
// 从小到大依次判断：
if (n < 60) {
    // ...
} else if (n < 90) {
    // ...
} else {
    // ...
}
```

使用 if 时，还要特别注意边界条件。例如：

```java
public class Main {
    public static void main(String[] args) {
        int n = 90;
        if (n > 90) {
            System.out.println("优秀");
        } else if (n >= 60) {
            System.out.println("及格了");
        } else {
            System.out.println("挂科了");
        }
    }
}
```

假设我们期望 <code>90</code> 分或更高为“优秀”，上述代码输出的却是“及格”，原因是<code>>和>=</code>效果是不同的。

前面讲过了浮点数在计算机中常常无法精确表示，并且计算可能出现误差，因此，判断浮点数相等用<code>==</code>判断不靠谱：

```java
public class Main {
    public static void main(String[] args) {
        double x = 1 - 9.0 / 10;
        if (x == 0.1) {
            System.out.println("x is 0.1");
        } else {
            System.out.println("x is NOT 0.1");
        }
    }
}
```

正确的方法是利用差值小于某个临界值来判断：

```java
public class Main {
    public static void main(String[] args) {
        double x = 1 - 9.0 / 10;
        if (Math.abs(x - 0.1) < 0.00001) {
            System.out.println("x is 0.1");
        } else {
            System.out.println("x is NOT 0.1");
        }
    }
}
```

### 判断引用类型相等

在 Java 中，判断值类型的变量是否相等，可以使用<code>==</code>运算符。但是，判断引用类型的变量是否相等，==表示“引用是否相等”，或者说，是否指向同一个对象。例如，下面的两个 String 类型，它们的内容是相同的，但是，分别指向不同的对象，用==判断，结果为 false：

```java
public class Main {
    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = "HELLO".toLowerCase();
        System.out.println(s1);
        System.out.println(s2);
        if (s1 == s2) {
            System.out.println("s1 == s2");
        } else {
            System.out.println("s1 != s2");
        }
    }
}
```

要判断引用类型的变量内容是否相等，必须使用 <code>equals()</code>方法：

```java
public class Main {
    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = "HELLO".toLowerCase();
        System.out.println(s1);
        System.out.println(s2);
        if (s1.equals(s2)) {
            System.out.println("s1 equals s2");
        } else {
            System.out.println("s1 not equals s2");
        }
    }
}
```

注意：执行语句 <code>s1.equals(s2)</code>时，如果变量 <code>s1</code> 为 <code>null</code>，会报 <code>NullPointerException</code>：

```java
public class Main {
    public static void main(String[] args) {
        String s1 = null;
        if (s1.equals("hello")) {
            System.out.println("hello");
        }
    }
}
```

要避免 <code>NullPointerException</code> 错误，可以利用短路运算符<code>&&</code>：

```java
public class Main {
    public static void main(String[] args) {
        String s1 = null;
        if (s1 != null && s1.equals("hello")) {
            System.out.println("hello");
        }
    }
}
```

还可以把一定不是 null 的对象"hello"放到前面：例如：if ("hello".equals(s)) { ... }。

### 小结

if ... else 可以做条件判断，else 是可选的；

不推荐省略花括号{}；

多个 if ... else 串联要特别注意判断顺序；

要注意 if 的边界条件；

要注意浮点数判断相等不能直接用==运算符；

引用类型判断内容相等要使用 equals()，注意避免 NullPointerException。
