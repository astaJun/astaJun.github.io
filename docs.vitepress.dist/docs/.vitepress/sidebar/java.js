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
    ],
}
