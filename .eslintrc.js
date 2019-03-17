module.exports = {
  "extends": "airbnb-base",
  "rules": {
      "comma-dangle": 0,
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
  "env": {"node": true, "mocha": true}
};

// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     "node": true,
//     "mocha": true
//   },
//   extends: 'airbnb-base',
//   "rules": {
//     "comma-dangle": 0,
//     "linebreak-style": 0
//   },
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   parserOptions: {
//     ecmaVersion: 2018,
//   },
//   rules: {
//   },
// };
