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
    ],
    themeConfig: {
        hd: {
            rules: [] // 禁用高清方案
            // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
        }
    }
}
```

4. 新建文档目录 `components/`，这里的 `components` 目录即第二步中配置的环境变量，你可以随意同步修改。

例子看项目的这个目录下的文档怎么写。

5. 将 `components` 的临时文件添加到 .gitignore 中，如`.umi`。

6. 移动端文档展示需要安装最新的`dumi`版本如`dumi@1.1.0-rc.3`，并安装`dumi-theme-mobile`即可。

目前移动端都在测试阶段，最好安装最新的，否则会各种找不到的问题BUG，而移动端展示目前不支持多例子点击切换展示，只能滚动页面到对应的例子进行切换展示

```shell
yarn add dumi@1.1.0-rc.5 dumi-theme-mobile -D
```

7. 目前移动端会使用750的高清模式，如果组件不是按这样模式开发，展示会缩小一半，不符合要求，所以禁用高清方案

```
themeConfig: {
        hd: {
            rules: [] // 禁用高清方案
            // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
        }
    }
```

9. 使用sass需要安装@umijs/plugin-sass，否则无法启动sass

8. 可以利用dumi约定式模式自动生成路由