## CRA集成组件库

1. 安装模块。

```
yarn add dumi cross-env -D
```

2. 增加启动命令，修改 package.json。

```
"scripts": {
    "dumi": "cross-env APP_ROOT=components dumi dev",
    "dumi-build": "cross-env APP_ROOT=components dumi build"
  },
```

3. 增加配置，新建 config/config.js，只是在我们定义`APP_ROOT`目录下新建。

主要是 `cross-env APP_ROOT=components` 把 dumi 的默认目录和项目的 src 隔离开来，就是设置`components`为根目录。

具体的配置看[`umi`](https://umijs.org/config#extrababelplugins)和[dumi](https://d.umijs.org/zh-CN/config)

`config.js`为配置文件，如以下配置：
```js
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
```

4. 新建文档目录 `components/`，这里的 `components` 目录即第二步中配置的环境变量，你可以随意同步修改。

例子看项目的这个目录下的文档怎么写。

5. 将 `components` 的临时文件添加到 .gitignore 中，如`.umi`。

6. 移动端文档展示需要安装`dumi@1.1.0-beta.18+`以上的版本并安装`dumi-theme-mobile`即可。

```shell
yarn add dumi@1.1.0-beta.18 dumi-theme-mobile -D
```

7. 可以利用dumi约定式模式自动生成路由