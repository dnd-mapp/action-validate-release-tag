# action-validate-release-tag

[![Push to main](https://github.com/dnd-mapp/action-validate-release-tag/actions/workflows/push-main.yml/badge.svg)](https://github.com/dnd-mapp/action-validate-release-tag/actions/workflows/push-main.yml)
[![License](https://img.shields.io/github/license/dnd-mapp/action-validate-release-tag)](LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

Reusable GitHub Action that validates a pushed release tag: checks that its commit is reachable from `main`, and that the tag (stripped of its leading `v`) matches `package.json`'s `version` field.

## Usage

```yaml
- name: Verify release tag
  uses: dnd-mapp/action-validate-release-tag@<SHA> # v1.0.0
```

Runs against the checked-out repository at the tagged commit, so it must run after `actions/checkout` with `fetch-depth: 0` (the ancestry check needs full history to determine whether the tagged commit is reachable from `main`).

## Contributing

See the org-wide [CONTRIBUTING.md](https://github.com/dnd-mapp/.github/blob/main/CONTRIBUTING.md) for how to propose changes, and [DEVELOPMENT.md](DEVELOPMENT.md) for how to work in this repository day-to-day. This project follows the [Code of Conduct](https://github.com/dnd-mapp/.github/blob/main/CODE_OF_CONDUCT.md).

## Security

See [SECURITY.md](https://github.com/dnd-mapp/.github/blob/main/SECURITY.md) for how to report a vulnerability.

## Support

See [SUPPORT.md](https://github.com/dnd-mapp/.github/blob/main/SUPPORT.md) for how to get help.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## License

[MIT](LICENSE)
