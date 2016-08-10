# git-description [![Build status for git-description on Circle CI.](https://img.shields.io/circleci/project/sholladay/git-description/master.svg "Circle Build Status")](https://circleci.com/gh/sholladay/git-description "Git Description Builds")

> Manage the description of a repository.

## Why?

 - Spread your intent far and wide.
 - Displayed in tools like [Tower](https://www.git-tower.com/).
 - Satisfies your inner perfectionist.

## Install

```sh
npm install git-description --save
```

## Usage

Get it into your program.

```js
const gitDescription = require('git-description');
```

Set the description of a repository.

```js
gitDescription.set('An awesome project.').then(() => {
    console.log('Finished saving repo description.');
});
```

## Contributing

See our [contributing guidelines](https://github.com/sholladay/git-description/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/git-description/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/git-description/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/git-description/blob/master/LICENSE "The license for git-description.") © [Seth Holladay](http://seth-holladay.com "Author of git-description.")

Go make something, dang it.
