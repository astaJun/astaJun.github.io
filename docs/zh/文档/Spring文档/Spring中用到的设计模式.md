# Spring中用到的设计模式

单例模式：bean默认都是单例的

原型模式：指定作用域为prototype

工厂模式：BeanFactory

模板模式：postProcessBeanFactory，onRefresh，initPropertyValue

策略模式：XmlBeanDefinitionReader，PropertiesBeanDefinitionReader

观察者模式：listener，event，multicast

适配器模式：Adapter

装饰者模式：BeanWrapper

责任链模式：使用aop的时候会生成一个拦截器

代理模式：动态代理

委托者模式：delegate