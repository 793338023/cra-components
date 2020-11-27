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
        prependData:`@import "@components/var.scss";`
    },
    extraBabelPlugins:[
        ["import", { libraryName: "antd-mobile", style: "css" }]
    ]
}