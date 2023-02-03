# Condition 类和Object 类锁方法区别

\1.  Condition 类的 awiat 方法和 Object 类的 wait 方法等效 

\2.  Condition 类的 signal 方法和 Object 类的 notify 方法等效 

\3.  Condition 类的 signalAll 方法和 Object 类的 notifyAll 方法等效 

\4.  ReentrantLock 类可以唤醒指定条件的线程，而 object 的唤醒是随机的 