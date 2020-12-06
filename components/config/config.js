import path from 'path';
export default {
    chainWebpack(memo) {
        memo.plugins.delete('copy');
    },
    title: '组件库',
    mode: 'site',
    hash: true,
    alias: {
        "@components": path.resolve(process.cwd(), "./src/components")
    },
    sass: {
        prependData: `@import "@components/var.scss";`
    },
    extraBabelPlugins: [
        ["import", { libraryName: "antd-mobile", style: "css" }]
    ],
    themeConfig: {
        hd: {
            rules: [] // 禁用高清方案
            // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
        }
    }
}