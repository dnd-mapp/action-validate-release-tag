import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        coverage: {
            enabled: true,
            exclude: [...coverageConfigDefaults.exclude, 'src/verify-*.ts'],
            include: ['src/**/*.ts'],
            provider: 'v8',
            thresholds: {
                statements: 80,
                branches: 80,
                functions: 80,
                lines: 80,
            },
        },
    },
});
