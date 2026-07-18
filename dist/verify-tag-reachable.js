import { assertReachableFromMain } from './tag-ancestry.js';
/**
 * Reads the pushed tag's commit SHA and ref name from the environment, then verifies the
 * commit is reachable from `origin/main`.
 *
 * @throws {Error} If `GITHUB_SHA` or `GITHUB_REF_NAME` is unset, or the commit is not
 *   reachable from `origin/main`.
 */
function verifyTagReachable() {
    const sha = process.env['GITHUB_SHA'];
    const tagName = process.env['GITHUB_REF_NAME'];
    if (!sha) {
        throw new Error('The `GITHUB_SHA` environment variable is not set.');
    }
    if (!tagName) {
        throw new Error('The `GITHUB_REF_NAME` environment variable is not set.');
    }
    assertReachableFromMain(sha, tagName);
}
try {
    verifyTagReachable();
    console.log('Tag is reachable from main.');
}
catch (error) {
    console.error(`::error::${error.message}`);
    process.exit(1);
}
