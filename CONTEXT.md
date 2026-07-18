# action-validate-release-tag

A reusable composite GitHub Action that validates a pushed release tag before a consuming repo creates a GitHub Release from it.

## Language

**Release tag**:  
The pushed tag ref this action validates (e.g. `v1.2.3`), read from `GITHUB_REF_NAME`. Its name, stripped of the leading `v`, is expected to equal the package version.  
_Avoid_: "tag" alone, always qualify as "release tag" or "tagged commit" depending on which you mean.

**Tagged commit**:  
The commit the release tag points at, read from `GITHUB_SHA`. The reachability check is about this commit, not the release tag's name.  
_Avoid_: conflating with "release tag", a name and the commit it points at are checked independently and can each be invalid on their own.

**Package version**:  
The `version` field read from the consumer repo's checked-out `package.json`, the repo this action runs against, not this action's own `package.json`.  
_Avoid_: "release version", that implies it's derived from the release tag rather than being the independent value the tag is checked against.

**Reachable**:  
Said of a tagged commit that is an ancestor of `origin/main`, meaning it was merged into `main` before being tagged, as opposed to a commit tagged on an unmerged branch.  
_Avoid_: "valid"/"verified" for this specific property, those describe the release tag as a whole, after both checks pass.
