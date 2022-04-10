const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'react-app', 'prettier'],
  // extends: ['airbnb-typescript', 'react-app', 'prettier', 'prettier/react'], // if you're using typescript
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/jsx-filename-extension': 0,
    'react/prop-types': 'off',
  },
};
