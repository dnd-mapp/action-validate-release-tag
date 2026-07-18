import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { assertMatchesPackageVersion } from './tag-version.js';
/**
 * Reads the pushed tag and the consumer's `package.json` version from the environment, then
 * verifies they match.
 *
 * @throws {Error} If `GITHUB_REF_NAME` is unset, or the tag does not match the package version.
 */
function verifyTagVersion() {
    const tagName = process.env['GITHUB_REF_NAME'];
    if (!tagName) {
        throw new Error('The `GITHUB_REF_NAME` environment variable is not set.');
    }
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    assertMatchesPackageVersion(tagName, packageJson.version);
}
try {
    verifyTagVersion();
    console.log('Tag matches package.json version.');
}
catch (error) {
    console.error(`::error::${error.message}`);
    process.exit(1);
}
