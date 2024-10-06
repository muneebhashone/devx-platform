# Contributing to DevX

We're thrilled that you're interested in contributing to DevX! This document provides guidelines for contributing to the project. By participating in this project, you agree to abide by its terms.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How to Contribute](#how-to-contribute)
4. [Style Guide](#style-guide)
5. [Commit Messages](#commit-messages)
6. [Pull Requests](#pull-requests)
7. [Reporting Bugs](#reporting-bugs)
8. [Suggesting Enhancements](#suggesting-enhancements)
9. [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [developer16.devx@gmail.com].

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```
   git clone https://github.com/your-username/devx.git
   cd devx
   ```
3. Install dependencies:
   ```
   pnpm install
   ```
4. Set up your environment variables:
   ```
   cp .env.example .env
   ```
   Edit `.env` with your configuration.
5. Run database migrations:
   ```
   pnpm run migration:run
   ```
6. Start the development server:
   ```
   pnpm run dev
   ```

## How to Contribute

1. Create a new branch for your feature or bug fix:
   ```
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and commit them (see [Commit Messages](#commit-messages)).
3. Push to your fork:
   ```
   git push origin feature/your-feature-name
   ```
4. [Submit a pull request](#pull-requests).

## Style Guide

We use ESLint and Prettier to maintain code quality and consistency. Please ensure your code follows these standards:

- Use 2 spaces for indentation.
- Follow the [ESLint rules](.eslintrc.json).
- Use meaningful variable names.
- Write clear and concise comments.
- Keep code DRY (Don't Repeat Yourself).
- Use descriptive commit messages.

To check your code, run:

```
pnpm run lint
```
To automatically fix issues, run:

```
pnpm run lint:fix
```


## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages that are easy to follow when looking through the project history.

Example commit messages:

- `feat: add user authentication`
- `fix: resolve issue with comment pagination`
- `docs: update README with new API endpoints`
- `style: format code according to style guide`
- `refactor: restructure post creation logic`
- `test: add unit tests for group service`
- `chore: update dependencies`

## Pull Requests

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent.
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Reporting Bugs

Bugs are tracked as GitHub issues. Create an issue and provide the following information:

- Use a clear and descriptive title
- Describe the exact steps which reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots and animated GIFs if possible

## Suggesting Enhancements

Enhancement suggestions are also tracked as GitHub issues. When creating an enhancement suggestion, please include:

- A clear and descriptive title
- A detailed description of the proposed enhancement
- An explanation of why this enhancement would be useful to most DevX users
- Possible implementation details

## Community

- Join our [Discord server](https://discord.gg/devx) for discussions and support.
- Follow us on [Twitter](https://twitter.com/devx) for updates.
- Read our [blog](https://devx.com/blog) for in-depth articles and tutorials.

Thank you for contributing to DevX!