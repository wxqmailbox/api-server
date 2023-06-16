module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // "plugin:react/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    // "react"
  ],
  rules: {
    // indent: [2, 2], // 强制使用一致的缩进
    camelcase: ['error', { properties: 'always' }],
  },
  // "settings": {
  //     "react": {
  //         /**
  //         * "detect" automatically picks the version you have installed.
  //         * You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
  //         * default to latest and warns if missing
  //         */
  //         "version": "detect"   // It will default to "detect" in the future
  //         // "version": "detect"
  //         // "version": "16.12.0"
  //     }
  // }
};
