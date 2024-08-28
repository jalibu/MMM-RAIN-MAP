import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'warn'
    },
    ignores: ['*.js']
  }
)
