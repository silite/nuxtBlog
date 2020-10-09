module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  globals: {
    // "_": true
  },

  extends: [
    'plugin:vue/strongly-recommended',
    'standard',
    'plugin:prettier/recommended'
  ],

  plugins: ['vue', 'prettier'],

  // add your custom rules here
  rules: {
    // 强制驼峰法命名
    camelcase: 2,
    'comma-dangle': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 0,
    'vue/html-indent': 2,
    'vue/no-multi-spaces': 2,
    'vue/require-prop-types': 2,
    'vue/no-unused-vars': 2,
    'vue/no-unused-components': 0,
    'vue/attribute-hyphenation': 2,
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/singleline-html-element-content-newline': 2,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'never'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'never'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ]
  }
}
