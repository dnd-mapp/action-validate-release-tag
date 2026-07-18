import { execFileSync } from 'child_process';
/**
 * Runs `git` with `args`, inheriting stdio.
 *
 * Not unit-tested directly; exercised only through {@link assertReachableFromMain}, the same
 * precedent as `action-setup-workspace`'s `readChangelog()`.
 *
 * @param args - The arguments to pass to `git`.
 * @throws {Error} If `git` exits with a non-zero status.
 */
/* v8 ignore start */
export const runGit = (args) => {
    execFileSync('git', args, { stdio: 'inherit' });
};
/* v8 ignore stop */
/**
 * Verifies that the commit at `sha` is reachable from `origin/main`.
 *
 * @param sha - The commit SHA the tag points at.
 * @param tagName - The pushed tag's ref name, used only for the error message.
 * @param runGitImpl - The `git`-invoking function to use; defaults to {@link runGit}.
 * @throws {Error} If `sha` is not reachable from `origin/main`.
 */
export function assertReachableFromMain(sha, tagName, runGitImpl = runGit) {
    try {
        runGitImpl(['merge-base', '--is-ancestor', sha, 'origin/main']);
    }
    catch {
        throw new Error(`Tag '${tagName}' does not point at a commit reachable from main.`);
    }
}
