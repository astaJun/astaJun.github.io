import javaSiderbar from './sidebar/java'


export default {
    base: '/docs/',
    lang: 'zh-CN',
    title: 'VitePress',
    description: 'Just playing around.',
    cleanUrls: true,
    ignoreDeadLinks: true,
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'Jun Space',
        i18nRouting: true,
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Jun'
        },
        editLink: {
            pattern: 'https://github.com/astaJun/docs/blob/main/docs/:path',
            text: '在GitHub上编辑此页面'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'},
            {icon: 'twitter', link: '...'},
            // You can also add custom icons by passing SVG as string:
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
                },
                link: '...'
            }
        ],
        outlineTitle: '此页目录',
        nav: [
            {
                text: '日常',
                items: [
                    {text: 'Java', link: '/zh/java/', activeMatch: '/zh/java/'},
                    {text: 'Vue', link: '/zh/vue/', activeMatch: '/zh/vue/'},
                    {text: '爬虫', link: '/zh/vue/', activeMatch: '/config/'},
                    {text: '跨平台客户端开发', link: '/zh/vue/', activeMatch: '/config/'},
                ]
            },
            {
                text: '资源',
                items: [
                    {text: '设计', link: '/item-1'},
                    {text: '大前端', link: '/item-2'},
                    {text: 'Java', link: '/item-3'},
                ]
            },
            {
                text: '问题记录',
                link: '/item-3'
            },
            {
                text: '专栏',
                items: [
                    {text: '系统架构', link: '/item-1'},
                    {text: '网络安全', link: '/item-2'},
                    {text: '数据处理', link: '/item-2'},
                    {text: '新风向', link: '/item-2'},
                ]
            },
            {
                text: '文档',
                items: [
                    {text: 'ES', link: '/zh/文档/ES文档'},
                    {text: 'HR1', link: '/zh/文档/HR文档1'},
                    {text: 'HR2', link: '/zh/文档/HR文档2'},
                    {text: 'HR3', link: '/zh/文档/HR文档3'},
                    {text: 'HR4', link: '/zh/文档/HR文档4'},
                    {text: 'JavaSE', link: '/zh/文档/JavaSE文档'},
                    {text: 'JVM', link: '/zh/文档/JVM文档'},
                    {text: 'Redis', link: '/zh/文档/Redis文档'},
                    {text: 'Spring', link: '/zh/文档/Spring文档'},
                ]
            },
            {
                text: '面试',
                items: [
                    {text: '题目和答案', link: '/zh/题目和答案/面试题目和答案'},
                ]
            },
        ],
        sidebar: {
            // This sidebar gets displayed when a user
            // is on `guide` directory.
            ...javaSiderbar,

            // This sidebar gets displayed when a user
            // is on `config` directory.
            '/zh/vue/': [
                {
                    text: 'Vue',
                    collapsed: true,
                    items: [
                        {text: 'Vue Router', link: '/zh/vue/vue_router'},
                        {text: 'Vue CLI', link: '/zh/vue/vue_cli'},
                        {text: 'Vite', link: '/zh/vue/vite'},
                        {text: 'Pinia', link: '/zh/vue/pinia'},
                        {text: 'Vue Press', link: '/zh/vue/vue_press'},
                        {text: 'Vite Press', link: '/zh/vue/vite_press'},
                        {text: 'Vue Use', link: '/zh/vue/vue_use'}
                    ]
                }
            ]
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...',
            locales: {
                zh: {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                            buttonAriaLabel: '搜索文档'
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: '清除查询条件',
                                resetButtonAriaLabel: '清除查询条件',
                                cancelButtonText: '取消',
                                cancelButtonAriaLabel: '取消'
                            },
                            startScreen: {
                                recentSearchesTitle: '搜索历史',
                                noRecentSearchesText: '没有搜索历史',
                                saveRecentSearchButtonTitle: '保存至搜索历史',
                                removeRecentSearchButtonTitle: '从搜索历史中移除',
                                favoriteSearchesTitle: '收藏',
                                removeFavoriteSearchButtonTitle: '从收藏中移除'
                            },
                            errorScreen: {
                                titleText: '无法获取结果',
                                helpText: '你可能需要检查你的网络连接'
                            },
                            footer: {
                                selectText: '选择',
                                navigateText: '切换',
                                closeText: '关闭',
                                searchByText: '搜索提供者'
                            },
                            noResultsScreen: {
                                noResultsText: '无法找到相关结果',
                                suggestedQueryText: '你可以尝试查询',
                                reportMissingResultsText: '你认为该查询应该有结果？',
                                reportMissingResultsLinkText: '点击反馈'
                            }
                        }
                    }
                }
            }
        },
        carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
        },
        lastUpdatedText: '最后更新'
    }
}
