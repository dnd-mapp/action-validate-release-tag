# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-07-18

### Added

- Validate a pushed release tag: check that its commit is reachable from `main`, and that the tag (stripped of its leading `v`) matches `package.json`'s `version` field.

[1.0.0]: https://github.com/dnd-mapp/action-validate-release-tag/releases/tag/v1.0.0
