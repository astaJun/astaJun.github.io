# Tomcat为什么要重写类加载器？

**这里简单解释类加载器双亲委派：**

**无法实现隔离性**：如果使用默认的类加载器机制，那么是无法加载两个相同类库的不同版本的，默认的类加器是不管你是什么版本的，只在乎你的全限定类名，并且只有一份。一个web容器可能要部署两个或者多个应用程序，不同的应用程序，可能会依赖同一个第三方类库的不同版本，因此要保证每一个应用程序的类库都是独立、相互隔离的。部署在同一个web容器中的相同类库的相同版本可以共享，否则，会有重复的类库被加载进JVM, web容器也有自己的类库，不能和应用程序的类库混淆，需要相互隔离

**无法实现热替换：**jsp 文件其实也就是class文件，那么如果修改了，但类名还是一样，类加载器会直接取方法区中已经存在的，修改后的jsp是不会重新加载的。

打破双亲委派机制(参照JVM中的内容)OSGI是基于Java语言的动态模块化规范，类加载器之间是网状结构，更加灵活，但是也更复杂,JNDI服务，使用线程上线文类加载器，父类加载器去使用子类加载器

 ![](E:/Git/hexo/source/_posts/JavaSE/ClassLoader.png)

2. tomcat自己定义的类加载器：

CommonClassLoader：tomcat最基本的类加载器，加载路径中的class可以被tomcat和各个webapp访问

CatalinaClassLoader：tomcat私有的类加载器，webapp不能访问其加载路径下的class，即对webapp不可见

SharedClassLoader：各个webapp共享的类加载器，对tomcat不可见

WebappClassLoader：webapp私有的类加载器，只对当前webapp可见

3. 每一个web应用程序对应一个WebappClassLoader，每一个jsp文件对应一个JspClassLoader，所以这两个类加载器有多个实例

4. 工作原理：

a. CommonClassLoader能加载的类都可以被Catalina ClassLoader和SharedClassLoader使用，从而实现了公有类库的共用

b. CatalinaClassLoader和SharedClassLoader自己能加载的类则与对方相互隔离

c. WebAppClassLoader可以使用SharedClassLoader加载到的类，但各个WebAppClassLoader实例之间相互隔离，多个WebAppClassLoader是同级关系

d. 而JasperLoader的加载范围仅仅是这个JSP文件所编译出来的那一个.Class文件，它出现的目的就是为了被丢弃：当Web容器检测到JSP文件被修改时，会替换掉目前的JasperLoader的实例，并通过再建立一个新的Jsp类加载器来实现JSP文件的HotSwap功能

5. tomcat目录结构，与上面的类加载器对应

/common/*

/server/*

/shared/*

/WEB-INF/*

6. 默认情况下，conf目录下的catalina.properties文件，没有指定server.loader以及shared.loader，所以tomcat没有建立CatalinaClassLoader和SharedClassLoader的实例，这两个都会使用CommonClassLoader来代替。Tomcat6之后，把common、shared、server目录合成了一个lib目录。所以在我们的服务器里看不到common、shared、server目录。

