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

* [x] 1. **Block Scope**<br/>[1-block-scoped.js](1-block-scoped.js) contains a script that meets the following requirements.

  - For the code below, modify the variables inside the function `taskBlock` so that the variables aren't overwritten inside the conditional block.

  ```js
  export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;

    if (trueOrFalse) {
      var task = true;
      var task2 = false;
    }

    return [task, task2];
  }
  ```

* [x] 2. **Arrow functions**<br/>[2-arrow.js](2-arrow.js) contains a script that meets the following requirements.

  - For the code below, rewrite the following standard function to use ES6's arrow syntax of the function `add`.

  ```js
  export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = function add(newNeighborhood) {
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
      return self.sanFranciscoNeighborhoods;
    };
  }
  ```
