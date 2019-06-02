## vue-webpack-pro
  > Vue+Webpack的前端工程工作流搭建

## webpack 环境配置
  - webpack-base
    - style-loader 改成 vue-style-loader  .vue 热更替
  - webpack-client

  - vue-loader --> vue-loader.config.js
    - extractCSS: true 打包 vue 中的 css 文件 到 文件夹中
  
  - eslint
    - npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D
    - npm i eslint-html-plugin -D
    - npm i eslint-loader babel-eslint -D
      - webpack-base
        - enforce 预处理
    - .eslintrc

    - package.json
      lint 检测代码
      lint-fix  修复错误代码

    - npm i husky -D  检查代码 有错误 不让Git 提交
      - package.json
        precommit 

  - editorconfig
    > 编辑器

## vue
  - vue 实例
    new Vue()
  
  - vue-router
    - 路由配置
    - 路由传参
      props: (route) => ({ id: route.query.b }),
    - 路由守卫
      - beforeEach (to, from, next)
      - beforeEach (to, from, next)
  -vuex
    - state
    - getters
    - mustation
    - action
    - mudle

## vue srr
  > (https://ssr.vuejs.org/zh/)
  - vue-server-renderer 

