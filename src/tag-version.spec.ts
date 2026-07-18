import { assertMatchesPackageVersion } from './tag-version.js';

describe('assertMatchesPackageVersion', () => {
    it('does not throw when the tag, stripped of its leading v, matches the package version', () => {
        expect(() => assertMatchesPackageVersion('v1.2.3', '1.2.3')).not.toThrow();
    });

    it('throws a descriptive error when the tag does not match the package version', () => {
        expect(() => assertMatchesPackageVersion('v1.2.3', '1.2.4')).toThrow(
            "Tag 'v1.2.3' does not match package.json version '1.2.4'.",
        );
    });
});
