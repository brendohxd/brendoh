import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    // This site intentionally uses full document navigation: Vinext's client
    // Link runtime is not reliable in the hosted Worker bundle.
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
]);

export default eslintConfig;
