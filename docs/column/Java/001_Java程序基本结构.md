我们先剖析一个完整的 Java 程序，它的基本结构是什么

```Java
/**
 * 可以用来自动创建文档的注释
 */
public class Hello {
    public static void main(String[] args) {
        // 向屏幕输出文本:
        System.out.println("Hello, world!");
        /* 多行注释开始
        注释内容
        注释结束 */
    }
} // class定义结束

```

因为 Java 是面向对象的语言，一个程序的基本单位就是<code>class</code> 是<code>关键字</code>，这里定义的 <code>class</code> 名字就是 <code>Hello</code>

```Java
public class Hello { // 类名是Hello
    // ...
} // class定义结束
```

类名要求：

-   类名必须以英文字母开头，后接字母，数字和下划线的组合
-   习惯以大写字母开头
    要注意遵守命名习惯，好的类命名：
-   Hello
-   HelloDriver
-   MyHelloWorld

注意到 <code>public</code> 是访问修饰符，表示该 <code>class</code> 是公开的。

不写 <code>public</code>，也能正确编译，但是这个类将无法从命令行执行。

在 <code> class </code>内部，可以定义若干方法（method）：

```Java

public class Hello {
    public static void main(String[] args) { // 方法名是main
        // 方法代码...
    } // 方法定义结束
} // class定义结束

```

方法定义了一组执行语句，方法内部的代码将会被依次顺序执行。

这里的方法名是<code>main</code>，返回值是<code>void</code>，表示没有任何返回值。

我们注意到 <code>public</code> 除了可以修饰 <code>class</code> 外，也可以修饰方法。而关键字 <code>static</code> 是另一个修饰符，它表示静态方法，后面我们会讲解方法的类型，目前，我们只需要知道，Java 入口程序规定的方法必须是静态方法，方法名必须为<code>main</code> ，括号内的参数必须是 String 数组。

方法名也有命名规则，命名和 class 一样，但是首字母小写：

好的方法命名：

-   main
-   hello
-   printHelloWorld

不好的方法命名：

-   Main
-   good123
-   \_playVR
-   print_hello_world

在方法内部，语句才是真正的执行代码。Java 的每一行语句必须以分号结束：

```Java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world!"); // 语句
    }
}
```

在 Java 程序中，注释是一种给人阅读的文本，不是程序的一部分，所以编译器会自动忽略注释。

Java 有 3 种注释，第一种是单行注释，以双斜线开头，直到这一行的结尾结束：

```Java
// 这是注释...
```

而多行注释以<code>/\*星号开头</code>，以<code>\*/</code>结束，可以有多行：

```Java
/*
这是注释
blablabla...
这也是注释
*/
```

还有一种特殊的多行注释，以<code>/\*\*</code>开头，以<code>\*/</code>结束，如果有多行，每行通常以星号开头：

```Java
/**
 * 可以用来自动创建文档的注释
 *
 * @auther liaoxuefeng
 */
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

这种特殊的多行注释需要写在类和方法的定义处，可以用于自动创建文档。

Java 程序对格式没有明确的要求，多几个空格或者回车不影响程序的正确性，但是我们要养成良好的编程习惯，注意遵守 Java 社区约定的编码格式。
