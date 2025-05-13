import eslint from '@eslint/js'
import chaiExpectPlugin from 'eslint-plugin-chai-expect'
import mochaPlugin from 'eslint-plugin-mocha'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  chaiExpectPlugin.configs['recommended-flat'],
  mochaPlugin.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false
      }
    },

    plugins: {mocha: mochaPlugin},

    rules: {
      curly: 'error',
      'no-console': 'error',
      'no-restricted-imports': [
        'error',
        {patterns: ['**/dist/**', '!@frnde/*/dist/*', '^aws-sdk']}
      ],
      /** ausgeschaltet, damit @typescript-eslint/return-await funktioniert */
      'no-return-await': 'off',
      'no-warning-comments': 'error',
      'prefer-promise-reject-errors': 'error',
      'sort-keys': ['error', 'asc', {caseSensitive: false, natural: true}],
      '@typescript-eslint/ban-ts-comment': ['error', {'ts-expect-error': 'allow-with-description'}],
      '@typescript-eslint/consistent-type-assertions': ['error', {assertionStyle: 'angle-bracket'}],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-require-imports': ['error', {allowAsImport: true}],
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      /** Findet mehr unused var's als TypeScript */
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      /** ausgeschaltet, damit @typescript-eslint/prefer-promise-reject-errors funktioniert */
      'prefer-promise-reject-errors': 'off',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowAny: false,
          allowNullableBoolean: false,
          allowNullableNumber: false,
          allowNullableObject: false,
          allowNullableString: false,
          allowNumber: false,
          allowString: false
        }
      ]
    }
  },

  {
    files: ['**/*.spec.ts'],
    rules: {
      /** mocha */
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-pending-tests': 'error',
      'mocha/no-mocha-arrows': 'off',
      'mocha/max-top-level-suites': 'off',
      'mocha/no-setup-in-describe': 'off',
      'mocha/no-skipped-tests': 'off',

      /** wg. chai expect */
      /** augeschaltet, damit @typescript-eslint/no-unused-expressions funktioniert */
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  },

  {linterOptions: {reportUnusedDisableDirectives: 'error', reportUnusedInlineConfigs: 'error'}}
)
