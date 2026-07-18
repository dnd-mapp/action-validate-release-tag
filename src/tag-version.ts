/**
 * Verifies that `tagName`, stripped of its leading `v`, matches `packageVersion`.
 *
 * @param tagName - The pushed tag's ref name (e.g. `v1.2.3`).
 * @param packageVersion - The consumer's `package.json` `version` field.
 * @throws {Error} If the stripped tag name does not match `packageVersion`.
 */
export function assertMatchesPackageVersion(tagName: string, packageVersion: string): void {
    const strippedTagName = tagName.replace(/^v/, '');

    if (strippedTagName !== packageVersion) {
        throw new Error(`Tag '${tagName}' does not match package.json version '${packageVersion}'.`);
    }
}
