在 Java 中，字符和字符串是两个不同的类型。

### 字符类型

字符类型<code>char</code>是基本数据类型，它是 <code>character</code>的缩写。一个<code>char</code>保存一个<code>Unicode</code>字符

```java
char c1 = 'A';
char c2 = '中';
```

因为 Java 在内存中总是使用 Unicode 表示字符，所以，一个英文字符和一个中文字符都用一个<code>char</code>类型表示，它们都占用两个字节。要显示一个字符的 Unicode 编码，只需将 char 类型直接赋值给 <code>int</code> 类型即可：

```java
int n1 = 'A'; // 字母“A”的Unicodde编码是65
int n2 = '中'; // 汉字“中”的Unicode编码是20013
```

还可以直接用转义字符<code>\u+Unicode</code>编码来表示一个字符：

```java
// 注意是十六进制:
char c3 = '\u0041'; // 'A'，因为十六进制0041 = 十进制65
char c4 = '\u4e2d'; // '中'，因为十六进制4e2d = 十进制20013
```

### 字符串类型

和 <code>char</code> 类型不同，字符串类型 <code>String</code> 是引用类型，我们用双引号<code>"..."</code>表示字符串。一个字符串可以存储 0 个到任意个字符：

```java
String s = ""; // 空字符串，包含0个字符
String s1 = "A"; // 包含一个字符
String s2 = "ABC"; // 包含3个字符
String s3 = "中文 ABC"; // 包含6个字符，其中有一个空格
```

因为字符串使用双引号<code>"..."</code>表示开始和结束，那如果字符串本身恰好包含一个<code>"</code>字符怎么表示？例如，<code>"abc"xyz"</code>，编译器就无法判断中间的引号究竟是字符串的一部分还是表示字符串结束。这个时候，我们需要借助转义字符\：

```java
String s = "abc\"xyz"; // 包含7个字符: a, b, c, ", x, y, z
```

因为\是转义字符，所以，两个\\表示一个\字符：

```java
String s = "abc\\xyz"; // 包含7个字符: a, b, c, \, x, y, z
```

常见的转义字符包括：

```java
\" 表示字符"
\' 表示字符'
\\ 表示字符\
\n 表示换行符
\r 表示回车符
\t 表示Tab
\u#### 表示一个Unicode编码的字符
```

例如：

```java
String s = "ABC\n\u4e2d\u6587"; // 包含6个字符: A, B, C, 换行符, 中, 文
```

### 字符串连接

Java 的编译器对字符串做了特殊照顾，可以使用<code>+</code>连接任意字符串和其他数据类型，这样极大地方便了字符串的处理。例如：

```java
public class Main {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "world";
        String s = s1 + " " + s2 + "!";
        System.out.println(s);
    }
}
```

如果用<code>+</code>连接字符串和其他数据类型，会将其他数据类型先自动转型为字符串，再连接：

```java
public class Main {
    public static void main(String[] args) {
        int age = 25;
        String s = "age is " + age;
        System.out.println(s);
    }
}
```

### 多行字符串

如果我们要表示多行字符串，使用<code>+</code>号连接会非常不方便：

```java
String s = "first line \n"
         + "second line \n"
         + "end";
```

从 Java 13 开始，字符串可以用"""..."""表示多行字符串（Text Blocks）了。举个例子：

```java
public class Main {
    public static void main(String[] args) {
        String s = """
                   SELECT * FROM
                     users
                   WHERE id > 100
                   ORDER BY name DESC
                   """;
        System.out.println(s);
    }
}

```

上述多行字符串实际上是 5 行，在最后一个<code>DESC</code> 后面还有一个<code>\n</code>。如果我们不想在字符串末尾加一个\n，就需要这么写

```java
String s = """
           SELECT * FROM
             users
           WHERE id > 100
           ORDER BY name DESC""";
```

还需要注意到，多行字符串前面共同的空格会被去掉，即：

```java
String s = """
...........SELECT * FROM
...........  users
...........WHERE id > 100
...........ORDER BY name DESC
...........""";
```

用<code>.</code>标注的空格都会被去掉。

如果多行字符串的排版不规则，那么，去掉的空格就会变成这样：

```java
String s = """
.........  SELECT * FROM
.........    users
.........WHERE id > 100
.........  ORDER BY name DESC
.........  """;
```

即总是以最短的行首空格为基准。

### 不可变特性

Java 的字符串除了是一个引用类型外，还有个重要特点，就是字符串不可变。考察以下代码：

```java
public class Main {
    public static void main(String[] args) {
        String s = "hello";
        System.out.println(s); // 显示 hello
        s = "world";
        System.out.println(s); // 显示 world
    }
}


```

```java
观察执行结果，难道字符串s变了吗？其实变的不是字符串，而是变量s的“指向”。

执行String s = "hello";时，JVM虚拟机先创建字符串"hello"，然后，把字符串变量s指向它：

      s
      │
      ▼
┌───┬───────────┬───┐
│   │  "hello"  │   │
└───┴───────────┴───┘
紧接着，执行s = "world";时，JVM虚拟机先创建字符串"world"，然后，把字符串变量s指向它：

      s ──────────────┐
                      │
                      ▼
┌───┬───────────┬───┬───────────┬───┐
│   │  "hello"  │   │  "world"  │   │
└───┴───────────┴───┴───────────┴───┘
原来的字符串"hello"还在，只是我们无法通过变量s访问它而已。因此，字符串的不可变是指字符串内容不可变。至于变量，可以一会指向字符串"hello"，一会指向字符串"world"。

理解了引用类型的“指向”后，试解释下面的代码输出：

public class Main {
    public static void main(String[] args) {
        String s = "hello";
        String t = s;
        s = "world";
        System.out.println(t); // t是"hello"还是"world"?
    }
}

```

### 空值 null

引用类型的变量可以指向一个空值 null，它表示不存在，即该变量不指向任何对象。例如：

```java
String s1 = null; // s1是null
String s2 = s1; // s2也是null
String s3 = ""; // s3指向空字符串，不是null

```

意要区分空值 <code>null</code> 和空字符串<code>""</code>，空字符串是一个有效的字符串对象，它不等于 <code>null</code>

### 小结

Java 的字符类型 <code>char</code> 是基本类型，字符串类型 <code>String</code> 是引用类型；

基本类型的变量是“持有”某个数值，引用类型的变量是“指向”某个对象；

引用类型的变量可以是空值 <code>null</code>；

要区分空值 <code>null</code> 和空字符串<code>""</code>。
