# Spring的事务是如何回滚的？

spring的事务管理是如何实现的？

总：spring的事务是由aop来实现的，首先要生成具体的代理对象，然后按照aop的整套流程来执行具体的操作逻辑，正常情况下要通过通知来完成核心功能，但是事务不是通过通知实现的，而是通过一个TransactionInterceptor来实现的，然后调用invoke来实现具体的逻辑

分：1.先做准备工作，解析各个方法上事务相关的属性，根据具体的属性来判断是否开始新事务

​		2.当需要开启的时候，获取数据库连接，关闭自动提交功能，开启事务

​		3.执行具体的sql逻辑操作

​		4.在操作过程中，如果执行失败了，那么会通过completeTransactionAfterThrowing看来完成事务的回滚操作，回滚的具体逻辑是通过doRollBack方法来实现的，实现的时候也是要先获取链接对象，通过连接对象来回滚。

​		5.如果执行过程中，没有任何意外情况的发生，那么通过commitTransactionAfterReturning来完成事务的提交操作，提交的具体逻辑是通过doCommit方法来实现的，实现的时候也要获取链接，通过链接对象来提交

​		6.当事务执行完毕之后需要清除相关的事务信息cleanupTransactionInfo

如果想要聊的更加细致的话，需要知道TransactionInfo，TransactionsStatus