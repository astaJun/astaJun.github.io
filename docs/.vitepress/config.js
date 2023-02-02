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
            pattern: 'https://github.com/astaJun/test/tree/main/docs/:path',
            text: '在GitHub上编辑此页面'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: 'twitter', link: '...' },
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
                text: '日记',
                items: [
                    { text: 'Java', link: '/zh/java/',activeMatch: '/zh/java/' },
                    { text: 'Vue', link: '/zh/vue/',activeMatch: '/zh/vue/' },
                    { text: '爬虫', link: '/zh/vue/',activeMatch: '/config/' },
                    { text: '跨平台客户端开发', link: '/zh/vue/',activeMatch: '/config/' },
                ]
            },
            {
                text: '资源收录',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            }
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
                        { text: 'Index', link: '/config/' },
                        { text: 'Three', link: '/config/three' },
                        { text: 'Four', link: '/config/four' }
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
