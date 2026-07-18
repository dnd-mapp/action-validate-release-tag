import { assertReachableFromMain } from './tag-ancestry.js';

describe('assertReachableFromMain', () => {
    it('does not throw when the commit is reachable from origin/main', () => {
        const runGitImpl = vi.fn().mockReturnValue(undefined);

        expect(() => assertReachableFromMain('abc123', 'v1.2.3', runGitImpl)).not.toThrow();
        expect(runGitImpl).toHaveBeenCalledWith(['merge-base', '--is-ancestor', 'abc123', 'origin/main']);
    });

    it('throws a descriptive error when the commit is not reachable from origin/main', () => {
        const runGitImpl = vi.fn().mockImplementation(() => {
            throw new Error('exit status 1');
        });

        expect(() => assertReachableFromMain('abc123', 'v1.2.3', runGitImpl)).toThrow(
            "Tag 'v1.2.3' does not point at a commit reachable from main.",
        );
    });
});
