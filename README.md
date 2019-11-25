# base-config

> 项目中使用到的配置文件


名称 | 描述 | 作用
---|---|---
.babelrc | es6代码转换到es5读取的配置文件 | 转换es6代码
eslint | eslint语法检测配置文件 | 检查代码语法
.gitignore | git上传文件过滤配置文件 | 过滤文件或目录
jsconfig.js | 指定当前目录是JavaScript项目的根目录配置文件 | 检查js代码语法，我主要用于检查js函数的入参<br/>可以在首选项 `settings.json` 中配置 `"javascript.validate.enable" : false` 来进行关闭验证
首选项settings.json | vscode编辑器的首选项配置文件 | 可以设置eslint
package.json | 项目包管理配置文件 | 管理包依赖
webpack.config.js | 项目webpack构建配置文件 | 构建项目