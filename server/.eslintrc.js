module.exports = {
  root: true,
  extends: 'standard',
  globals: {
    emit: false
  },
  rules: {
    semi: 0,
    eqeqeq: 0,
    'comma-spacing': [2, { before: false, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': [2, 'never'],
    'object-curly-spacing': 0,
    'space-before-function-paren': 0
  }
};
