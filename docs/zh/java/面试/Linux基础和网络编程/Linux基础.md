## 有哪些方面的因素会导致网站网站访问慢？

**1、服务器出口带宽不够用**

> 1. 本身服务器购买的出口带宽比较小。一旦并发量大的话，就会造成分给每个用户的出口 带宽就小，访问速度自然就会慢。 
>
> 2. 跨运营商网络导致带宽缩减。例如，公司网站放在电信的网络上，那么客户这边对接是 长城宽带或联通，这也可能导致带宽的缩减。

**2、服务器负载过大，导致响应不过来**

> 1. 分析系统负载，使用 w 命令或者 uptime 命令查看系统负载。如果负载很高，则使用 top 命令查看 CPU ，MEM 等占用情况，要么是 CPU 繁忙，要么是内存不够。 
>
> 2. 如果这二者都正常，再去使用 sar 命令分析网卡流量，分析是不是遭到了攻击。一旦分 析出问题的原因，采取对应的措施解决，如决定要不要杀死一些进程，或者禁止一些访 问等。

**3、数据库瓶颈**

> 如果慢查询比较多。那么就要开发人员或 DBA 协助进行 SQL 语句的优化。 
>
> 如果数据库响应慢，考虑可以加一个数据库缓存，如 Redis 等。然后，也可以搭建 MySQL 主从，一台 MySQL 服务器负责写，其他几台从数据库负责读。

**4、网站开发代码没有优化好**



**怎么去解决？**

1、如果是出口带宽问题，那么久申请加大出口带宽。 

2、如果慢查询比较多，那么就要开发人员或 DBA 协助进行 SQL 语句的优化。 

3、如果数据库响应慢，考虑可以加一个数据库缓存，如 Redis 等等。然后也可以搭建MySQL 主 从，一台 MySQL 服务器负责写，其他几台从数据库负责读。 

4、申请购买 CDN 服务，加载用户的访问。 

5、如果访问还比较慢，那就需要从整体架构上进行优化咯。做到专角色专用，多台服务器提供同 一个服务。





## Linux 性能调优都有哪几种方法？

1、Disabling daemons (关闭 daemons)。 

2、Shutting down the GUI (关闭 GUI)。 

3、Changing kernel parameters (改变内核参数)。

 4、Kernel parameters (内核参数)。 

5、Tuning the processor subsystem (处理器子系统调优)。 

6、Tuning the memory subsystem (内存子系统调优)。 

7、Tuning the file system (文件系统子系统调优)。

 8、Tuning the network subsystem（网络子系统调优)。



## Linux 基本命令 **

cd （change directory：英文释义是改变目录）切换目录

pwd （print working directory：显示当前工作目录的绝对路径）

ls （ls：list的缩写，查看列表）查看当前目录下的所有文件夹（ls 只列出文件名或目录名）

ll （ll：list的缩写，查看列表详情）查看当前目录下的所有详细信息和文件夹（ll 结果是详细,有时间, 是否可读写等信息）

touch （touch：创建文件）创建文件

mkdir （mkdir：创建目录） 创建目录     mkdir   -p  /aaa/bbb

cat  （concatenate：显示或把多个文本文件连接起来）查看文件命令（可以快捷查看当前文件的内 容）

more （more：更多的意思）分页查看文件命令（不能快速定位到最后一页）

less （lese：较少的意思）分页查看文件命令（可以快速定位到最后一页）

tail（尾巴） 查看文件命令（看最后多少行） tail  -f  

cp（copy单词缩写，复制功能）

mv（move单词缩写，移动功能，该文件名称功能）

rm（remove：移除的意思）删除文件，或文件夹    rm -fr

find （find：找到的意思）查找指定文件或目录

vi （VIsual：视觉）文本编辑器 类似win的记事本 （操作类似于地下的vim命令，看底下vim 的操 作）

vim （VI IMproved：改进版视觉）改进版文本编辑器 （不管是文件查看还是文件编辑 按 Shift + 上或 者下可以上下移动查看视角）

tar （解压 压缩 命令）

ps （process status：进程状态，类似于windows的任务管理器）

ifconfig命令

ping （用于检测与目标的连通性）语法：ping ip地址

free 命令 （显示系统内存）

top 命令

netstat 命令





