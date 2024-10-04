module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript or modern JS
    'object-curly-spacing': 'off',
    'no-multi-spaces': 'off',
    'no-unused-vars': 'warn',
    'quotes': 'off',
    'no-trailing-spaces': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-multiple-empty-lines': 'off',
    'arrow-body-style': 'off',
    'react/function-component-definition': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off', // React is in scope with new JSX transform
    'react-native/no-inline-styles': 'off', // Warn about inline styles (can be set to 'off' or 'error')
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'off', // Consider turning this on if you want all text to be within <Text>
    'no-console': 'off', // Warn about console.log, can change to 'error'
    'no-underscore-dangle': 'off', // Allow underscores in variable names
    'import/no-extraneous-dependencies': 'off',
  },
};
