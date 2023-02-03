# tryLock和Lock和lockInterruptibly 的区别 

\1.  tryLock 能获得锁就返回 true，不能就立即返回 false，tryLock(long timeout,TimeUnit unit)，可以增加时间限制，如果超过该时间段还没获得锁，返回 false 

\2.  lock 能获得锁就返回 true，不能的话一直等待获得锁 

\3.  lock 和 lockInterruptibly，如果两个线程分别执行这两个方法，但此时中断这两个线程， lock 不会抛出异常，而 lockInterruptibly 会抛出异常。 