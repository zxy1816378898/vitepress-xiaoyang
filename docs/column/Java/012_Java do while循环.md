在 Java 中，<code>while</code> 循环是先判断循环条件，再执行循环。而另一种<code>do while</code> 循环则是先执行循环，再判断条件，条件满足时继续循环，条件不满足时退出。它的用法是：

```java
do {
    执行循环语句
} while (条件表达式);
```

可见，<code>do while</code> 循环会至少循环一次。

我们把对 1 到 100 的求和用 <code>do while</code> 循环改写一下：

```java
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        int n = 1;
        do {
            sum = sum + n;
            n ++;
        } while (n <= 100);
        System.out.println(sum);
    }
}
```

使用 <code>do while</code> 循环时，同样要注意循环条件的判断。

### 练习

使用 do while 循环计算从 m 到 n 的和。

```java
public class Main {
	public static void main(String[] args) {
		int sum = 0;
        int m = 20;
		int n = 100;
		// 使用do while计算M+...+N:
		do {
		} while (false);
		System.out.println(sum);
	}
}
```

### 小结

<code>do while</code> 循环先执行循环，再判断条件；

<code>do while</code> 循环会至少执行一次。
