# ES6 Basics

This project contains tasks for learning the basics of ECMAScript 2015 (ES6).

## Tasks To Complete

- [x] 0. **Const or let?**<br/>[0-constants.js](0-constants.js) contains a script that meets the following requirements.

  - For the code below, make the following modifications:
    - function `taskFirst` to instantiate variables using `const`.
    - function `taskNext` to instantiate variables using `let`.

  ```js
  export function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
  }

  export function getLast() {
    return ' is okay';
  }

  export function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();

    return combination;
  }
  ```
