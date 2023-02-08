const baseDir = '/zh/java/'
const keyInterviewTechniquesBaseDir = baseDir + '面试重点技术/'

export default {

    '/zh/java/': [
        {
            text: '介绍',
            link: '/zh/java/'
        },
        {
          text: '集合',
          collapsed: true,
          items: [
              {text: 'HashMap',link:'/zh/java/collection/hashMap'}
          ]
        },
        {
          text: '并发',
          collapsed: true,
          items: [
              {text: '自旋锁',link:'/zh/java/concurrent/spinlock'}
          ]
        },
        {
          text: 'IO',
          collapsed: true,
          items: [
              {text: 'NIO',link:'/zh/java/io/nio'}
          ]
        },
        {
          text: '中间件',
          collapsed: true,
          items: [
              {text: 'RabbitMQ',link:'/zh/java/middleware/rabbitMQ'}
          ]
        },
        {
          text: 'NoSQL',
          collapsed: true,
          items: [
              {text: 'Redis',link:'/zh/java/nosql/redis'},
              {text: 'Elastic Search',link:'/zh/java/nosql/es'},
          ]
        },
        {
          text: '运维',
          collapsed: true,
          items: [
              {text: 'Docker',link:'/zh/java/ops/docker'},
              {text: 'K8S',link:'/zh/java/ops/k8s'},
          ]
        },
        {
          text: '杂谈',
          collapsed: true,
          items: [
              {text: 'Elastic Search性能分析',link:'/zh/java/gossip/es'}
          ]
        },
        {
          text: '面试知识点',
          collapsed: true,
          items: [
            {text: 'Elastic Search',link:baseDir+'面试/ElasticSearch/ElasticSearch'},
            {
              text: 'Java基础',
              collapsed: true,
              items: [
                {text: 'Java基础概念',link:baseDir+'面试/Java基础/Java基础概念'},
                {text: 'Java多线程',link:baseDir+'面试/Java基础/Java多线程'},
                {text: 'Java集合框架',link:baseDir+'面试/Java基础/Java集合框架'},
                {text: 'JVM内存结构与调优',link:baseDir+'面试/Java基础/JVM内存结构与调优'},
              ]
            },
            {text: 'Kafka',link:baseDir+'面试/Kafka/Kafka面试'},
            {
              text: 'Linux基础和网络编程',
              collapsed: true,
              items: [
                {text: 'Linux基础',link:baseDir+'面试/Linux基础和网络编程/Linux基础'},
                {text: '网络编程',link:baseDir+'面试/Linux基础和网络编程/网络编程'},
              ]
            },
            {text: 'Mysql索引与锁',link:baseDir+'面试/Mysql索引与锁/Mysql索引与锁'},
            {text: 'Redis',link:baseDir+'面试/Redis/redis面试'},
            {
              text: 'SSM框架',
              collapsed: true,
              items: [
                {text: 'Mybatis框架',link:baseDir+'面试/SSM框架/Mybatis框架'},
                {text: 'SpringMVC框架',link:baseDir+'面试/SSM框架/SpringMVC框架'},
                {text: 'Spring框架',link:baseDir+'面试/SSM框架/Spring框架'},
              ]
            },
          ]
        },
        {
          text: '面试重点技术',
          collapsed: true,
          items: [
            {text: 'Git',link: keyInterviewTechniquesBaseDir+'01-Git课程讲义/'+'Git课程讲义'},
            {
              text: 'Linux',
              collapsed: true,
              items: [
                {text: 'day01',link: keyInterviewTechniquesBaseDir+'02-Linux课程讲义/'+'Linux-Day01/Linux-Day01'},
                {text: 'day02',link: keyInterviewTechniquesBaseDir+'02-Linux课程讲义/'+'Linux-Day02/Linux-Day02'},
              ]
            },
            {text: 'Redis',link: keyInterviewTechniquesBaseDir+'03-Redis课程讲义/'+'Redis基础课程讲义'},
            {
              text: 'RabbitMQ',
              collapsed: true,
              items: [
                {text: 'RabbitMQ',link: keyInterviewTechniquesBaseDir+'04-RabbitMQ课程讲义/'+'RabbitMQ-qiang'},
                {text: 'RabbitMQ-高级篇',link: keyInterviewTechniquesBaseDir+'04-RabbitMQ课程讲义/'+'RabbitMQ-高级篇'},
              ]
            },
            {text: 'Docker',link: keyInterviewTechniquesBaseDir+'05-Docker课程讲义/'+'Docker实用篇'},
            {text: 'Seata分布式事务',link: keyInterviewTechniquesBaseDir+'06-seata分布式事务课程讲义/'+'分布式事务'},
            {text: 'Redis分布式缓存',link: keyInterviewTechniquesBaseDir+'07-redis分布式缓存课程讲义/'+'分布式缓存'},
          ]
        }
    ],
}
