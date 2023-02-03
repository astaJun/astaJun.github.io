# 描述一下bean的生命周期

背图:记住图中的流程

![](E:/Git/hexo/source/_posts/Bean的生命周期.jpg)

在表述的时候不要只说图片中有的关键点，要学会扩展描述

设置对象这步骤 可以衍生出循环依赖的问题

1.实例化Bean，反射的方式生成对象

2.填充bena的属性：populateBean(),循环依赖的问题(三级缓存)

3.调用aware接口相关的方法：invokeAwareMethod(完成BeanName可以获取容器bean的名称，BeanFactory获取当前bean factory这也可以调用容器的服务，BeanClassLoader对象的属性设置)

4.调用BeanPostProcessor中的前置处理方法：使用比较多的有(ApplicationContextPostProcessor设置ApplicationContext，Environment,ResourceLoader,EmbeddValueResolver等对象)

5.调用initmethod方法:invokeInitmethod(),判断是否实现了InitializingBean接口，如果有，调用afterPropertiesSet方法，

6.调用BeanPostProcessor的后置处理方法：spring的aop就是在此处实现的，AbstractAutoProxyCreator

​		注册Destuction相关的回调接口

7.获取到完整的对象，可以通过getBean的方式来进行对象的获取

8.销毁流程 ①判断是否实现了DispoableBean接口②调用destroyMethod方法