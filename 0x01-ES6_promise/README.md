# ES6 Promises

This project contains tasks for learning to use Promises in ECMAScript 2015 (ES6).

## Tasks To Complete

-   [x] 0. **Keep every promise you make and only make promises you can keep**<br/>[0-promise.js](0-promise.js) contains a script that exports a function with the prototype `function getResponseFromAPI()`, which returns a Promise.

-   [x] 1. **Don't make a promise...if you know you can't keep it**<br/>[1-promise.js](1-promise.js) contains a script that exports a function with the prototype `getFullResponseFromAPI(success)`, which returns a Promise. The parameter (`success`) is a `boolean`.
    -   When the argument is:
        -   `true`
            -   Resolve the promise by passing an object with 2 attributes:
                -   `status`: `200`
                -   `body`: `'Success'`
        -   `false`
            -   Reject the promise with an error object with the message `The fake API is not working currently`.
