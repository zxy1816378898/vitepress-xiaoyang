### 输出

在前面的代码中，我们总是使用 <code>System.out.println()</code>来向屏幕输出一些内容。

<code>println</code> 是 <code>print line</code> 的缩写，表示输出并换行。因此，如果输出后不想换行，可以用 <code>print()</code>：

```java
public class Main {
    public static void main(String[] args) {
        System.out.print("A,");
        System.out.print("B,");
        System.out.print("C.");
        System.out.println();
        System.out.println("END");
    }
}

```

注意观察上述代码的执行效果。

### 格式化输出

Java 还提供了格式化输出的功能。为什么要格式化输出？因为计算机表示的数据不一定适合人来阅读：

```java
public class Main {
    public static void main(String[] args) {
        double d = 12900000;
        System.out.println(d); // 1.29E7
    }
}
```

如果要把数据显示成我们期望的格式，就需要使用格式化输出的功能。格式化输出使用<code> System.out.printf()</code>，通过使用占位符<code>%?</code>，<code>printf()</code>可以把后面的参数格式化成指定格式：

```java
public class Main {
    public static void main(String[] args) {
        double d = 3.1415926;
        System.out.printf("%.2f\n", d); // 显示两位小数3.14
        System.out.printf("%.4f\n", d); // 显示4位小数3.1416
    }
}
```

Java 的格式化功能提供了多种占位符，可以把各种数据类型“格式化”成指定的字符串：

```java
占位符	说明
%d	格式化输出整数
%x	格式化输出十六进制整数
%f	格式化输出浮点数
%e	格式化输出科学计数法表示的浮点数
%s	格式化字符串
```

注意，由于<code>%</code>表示占位符，因此，连续两个<code>%%</code>表示一个<code>%</code>字符本身。

占位符本身还可以有更详细的格式化参数。下面的例子把一个整数格式化成十六进制，并用 0 补足 8 位：

```java
public class Main {
    public static void main(String[] args) {
        int n = 12345000;
        System.out.printf("n=%d, hex=%08x", n, n); // 注意，两个%占位符必须传入两个数
    }
}
```

详细的格式化参数请参考 JDK 文档 java.util.Formatter

### 输入

和输出相比，Java 的输入就要复杂得多。

我们先看一个从控制台读取一个字符串和一个整数的例子：

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // 创建Scanner对象
        System.out.print("Input your name: "); // 打印提示
        String name = scanner.nextLine(); // 读取一行输入并获取字符串
        System.out.print("Input your age: "); // 打印提示
        int age = scanner.nextInt(); // 读取一行输入并获取整数
        System.out.printf("Hi, %s, you are %d\n", name, age); // 格式化输出
    }
}
```

首先，我们通过 <code>import</code> 语句导入 <code>java.util.Scanner</code>，<code>import</code> 是导入某个类的语句，必须放到 Java 源代码的开头，后面我们在 Java 的 <code>package</code> 中会详细讲解如何使用 <code>import</code>。

然后，创建 <code>Scanner</code> 对象并传入 <code>System.in</code>。<code>System.out </code>代表标准输出流，而 <code>System.in</code> 代表标准输入流。直接使用 <code>System.in </code>读取用户输入虽然是可以的，但需要更复杂的代码，而通过 <code>Scanner</code> 就可以简化后续的代码。

有了 <code>Scanner</code> 对象后，要读取用户输入的字符串，使用 <code>scanner.nextLine()</code>，要读取用户输入的整数，使用 <code>scanner.nextInt()</code>。<code>Scanner</code> 会自动转换数据类型，因此不必手动转换。

要测试输入，我们不能在线运行它，因为输入必须从命令行读取，因此，需要走编译、执行的流程：

```java
$ javac Main.java
```

这个程序编译时如果有警告，可以暂时忽略它，在后面学习 IO 的时候再详细解释。编译成功后，执行：

```java
$ java Main
Input your name: Bob
Input your age: 12
Hi, Bob, you are 12
```

根据提示分别输入一个字符串和整数后，我们得到了格式化的输出。

### 小结

Java 提供的输出包括：System.out.println() / print() / printf()，其中 printf()可以格式化输出；

Java 提供 Scanner 对象来方便输入，读取对应的类型可以使用：scanner.nextLine() / nextInt() / nextDouble() / ...
