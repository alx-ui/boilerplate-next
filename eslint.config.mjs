import alxConfig from '@ialexanderbrito/eslint-config/next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...alxConfig,
  {
    name: 'project/ignores',
    ignores: ['.agents/**'],
  },
  {
    name: 'project/rules',
    rules: {
      // Adicione suas regras customizadas aqui
    },
  },
];
