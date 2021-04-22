
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        uni: true,
        /* uniapp */
        wx: true,
        /* 微信 */
        getCurrentPages: true /* 页面栈 */
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        'no-undef': 'error' /* 禁止使用未定位的方法 */,
        'no-unused-vars': 'warn' /* 警告出现未使用过的变量 */,
        'no-debugger': process.env.NODE_ENV === 'dev' ? 0 : 2 /* 非dev环境禁用 debugger */,
        'no-console': 'off' /* 不禁用 console */,
        'no-constant-condition': 'error' /* 禁止在条件中使用常量表达式 */,
        'dot-location': ['warn', 'property'] /* 表达式中的点号操作符应该和属性在同一行 */,
        'eqeqeq': 'off' /* 强制使用使用 === 和 !== */,
        'block-spacing': ['warn', 'always'] /* 单行代码块中使用空格 */,
        'quote-props': 'off' /* 对象字面量属性名称非必须使用引号 */,
        'indent': ['warn'] /* 缩进4个空格 */,
        //'linebreak-style': ['warn', 'windows'] /* 换行使用window */,
        'quotes': ['error', 'single'] /* 字符串必须单引号 */,
        'semi': ['error', 'always'] /* 必须有分号 */,
        'no-extra-semi': 'warn' /* 去除不必要的分号 */,
        'semi-style': ['warn', 'last'] /* 分号在末尾 */,
        'no-const-assign': 'error', /* 禁止改变用const声明的变量 */
        'no-empty': 'off', /* 允许空block */
        'no-useless-escape': 'off', /* 允许转义 */
        'camelcase': 'off',/* 使用驼峰命名 */
        'vue/no-unused-components': 'warn',/* 存在注册未使用的组件 */
        "vue/require-valid-default-prop": "off",/* prop的默认值必须匹配它的类型 */
        "vue/no-use-v-if-with-v-for":"error",/* 禁止 v-if 和 v-for 同时使用 */
        "vue/no-unused-vars":"warn"/* 定义但未使用的变量 */,
        "no-async-promise-executor": 'off',
        "comma-dangle": ["error", 'always-multiline'], // 无封闭时，最后一行末尾尾随逗号
    }
};