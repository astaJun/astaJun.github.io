# 为什么hashmap扩容的时候是两倍？

查看源代码

在存入元素时,放入元素位置有一个 (n-1)&hash 的一个算法,和hash&(newCap-1),这里用到了一个&位运算符

![](E:/Git/hexo/source/_posts/JavaSE/HashMap源码图片.png)

![](E:/Git/hexo/source/_posts/JavaSE/HashMap源码图片2.png)

当HashMap的容量是16时，它的二进制是10000，(n-1)的二进制是01111，与hash值得计算结果如下

![](E:/Git/hexo/source/_posts/JavaSE/4.png)

下面就来看一下HashMap的容量不是2的n次幂的情况，当容量为10时，二进制为01010，(n-1)的二进制是01001，向里面添加同样的元素，结果为

![](E:/Git/hexo/source/_posts/JavaSE/5.png)

可以看出，有三个不同的元素进过&运算得出了同样的结果，严重的hash碰撞了