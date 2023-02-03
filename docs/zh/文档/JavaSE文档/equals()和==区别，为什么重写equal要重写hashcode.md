# equals()和==区别，为什么重写equal要重写hashcode?

==是运算符  equals()是一个来自于Object的方法

==可以用于基本数据类型和引用

equals只能用于引用类型

== 两端如果是基本数据类型，就是判断值是否相等

equals()再重写之后就是判断两个对象的属性值是否相等

equals如果不重写就是 == 



重写equals可以让我们判断两个对象是否相同

Object中定义的hashcode方法生成的哈希码能保证同一个类的对象的哈希码一定是不同的

当equals 返回为true，我们在逻辑上可以认为是同一个对象，但是查看哈希码，发现哈希码不同，和equals方法的返回值结果违背

Object中定义的hashcode方法生成的哈希码跟对象的本身属性值是无关的

重写hashCode之后我们可以自定义hash值的生成规则，可以通过对象的属性值计算出hash码



HashMap中，借助equals和hashcode方法来完成数据的存储



将根据对象的内容查询转换为索引的查询

