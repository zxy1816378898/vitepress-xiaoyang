无论是 <code>while</code> 循环还是 <code>for</code> 循环，有两个特别的语句可以使用，就是 <code>break</code> 语句和 <code>continue</code> 语句。

### break

在循环过程中，可以使用 <code>break</code> 语句跳出当前循环。我们来看一个例子：

```java
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i=1; ; i++) {
            sum = sum + i;
            if (i == 100) {
                break;
            }
        }
        System.out.println(sum);
    }
}
```

使用 <code>for</code> 循环计算从 <code>1</code>到 <code>100</code> 时，我们并没有在 <code>for()</code>中设置循环退出的检测条件。但是，在循环内部，我们用 <code>if</code> 判断，如果 <code>i==100</code>，就通过 <code>break</code> 退出循环。

因此，<code>break</code> 语句通常都是配合 <code>if</code> 语句使用。要特别注意，<code>break</code> 语句总是跳出自己所在的那一层循环。例如：

```java
public class Main {
    public static void main(String[] args) {
        for (int i=1; i<=10; i++) {
            System.out.println("i = " + i);
            for (int j=1; j<=10; j++) {
                System.out.println("j = " + j);
                if (j >= i) {
                    break;
                }
            }
            // break跳到这里
            System.out.println("breaked");
        }
    }
}

```

上面的代码是两个 <code>for</code> 循环嵌套。因为 <code>break</code> 语句位于内层的 <code>for</code> 循环，因此，它会跳出内层 <code>for</code> 循环，但不会跳出外层 <code>for</code> 循环。

### continue

<code>break</code> 会跳出当前循环，也就是整个循环都不会执行了。而 <code>continue</code> 则是提前结束本次循环，直接继续执行下次循环。我们看一个例子：

```java
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i=1; i<=10; i++) {
            System.out.println("begin i = " + i);
            if (i % 2 == 0) {
                continue; // continue语句会结束本次循环
            }
            sum = sum + i;
            System.out.println("end i = " + i);
        }
        System.out.println(sum); // 25
    }
}
```

注意观察 <code>continue</code> 语句的效果。当 <code>i</code> 为奇数时，完整地执行了整个循环，因此，会打印 <code>begin i=1</code> 和 <code>end i=1</code>。在 <code>i</code> 为偶数时，<code>continue</code> 语句会提前结束本次循环，因此，会打印 <code>begin i=2</code> 但不会打印 <code>end i=2</code>。

在多层嵌套的循环中，<code>continue</code> 语句同样是结束本次自己所在的循环。

### 小结

<code>break</code> 语句可以跳出当前循环；

<code>break</code> 语句通常配合 <code>if</code>，在满足条件时提前结束整个循环；

<code>break</code> 语句总是跳出最近的一层循环；

<code>continue</code> 语句可以提前结束本次循环；

<code>continue</code> 语句通常配合 <code>if</code>，在满足条件时提前结束本次循环。
