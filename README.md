[![Build Status][build-image]][build-url]
[![Version][npm-image]][npm-url]
[![Downloads][npm-downloads-image]][npm-url]
![Maintenance][maintain-image]
[![License][license-image]][license-url]

# std.ts
TypeScript Standard Library (std.ts) is a collection of classes and functions
inspired and adapted from C++ Standard Library. Although std.ts is written in
TypeScript, it can be used without any issues on JavaScript.

JavaScript & TypeScript lack of data structures limits the developers' ability
to solve problems; where other data structures would work better with less code
assuring the developer the maximum efficiency provided by the Standard Library.

## Features
std.ts is a work in progress, hence we've only implemented the next few 
features from std library:
- Containers
    - bitset as BitSet
    - stack as Stack
    - queue as Queue
    - priority_queue as PriorityQueue
- Others
    - Algorithm
        - lower_bound as lowerBound
        - upper_bound as upperBound
        - sort (quick sort)
        - mSort (merge sort, is not at c++ std)
        - is_sorted as isSorted

## Installation
The recommended way to install std.ts is through Node Package Manager.

```bash
$ npm install --save std.ts 
```

## Usage
> Still a work in progress. However, std.ts is build using typescript so this 
types may help you to uncover all functions inside this classes.
Furthermore, you can check the examples on this repository while we work on 
our documentation.

For JavaScript:

```javascript
const Stack = require('std.ts').Stack;
let s = new Stack();

s.push('!');
s.push('world');
s.push('Hello');

while(!s.empty()) {
    console.log(s.pop());
}
```

For TypeScript:

```typescript
import {Stack} from 'std.ts';

let s = new Stack<string>();

s.push('!');
s.push('world');
s.push('Hello');

while(!s.empty()) {
    console.log(s.pop());
}
```

## Upcoming features
As you should know, C++ Standard Library is huge and some functions would be 
impossible to implement. The next features are the ones we think may be 
adapted to TS/JS and we'll be working and accepting suggestions on this.
- Algorithm
    - sort
    - stable_sort
    - merge (to implement merge first to do is iterators)
- Containers
    - array
    - deque
    - forward_list
    - list
    - map
    - set
    - unordered_map
    - unordered_set
    - vector
- General
    - algorithm
    - **iterator**
    - tuple
    - utility
- Streams and IO

[npm-image]: https://img.shields.io/npm/v/std.ts.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/std.ts.svg
[npm-url]: https://www.npmjs.com/package/std.ts

[build-image]: https://img.shields.io/travis/tslovers/std.ts.svg
[build-url]: https://travis-ci.org/trslovers/std.ts

[license-image]: https://img.shields.io/github/license/tslovers/std.ts.svg
[license-url]: https://github.com/tslovers/std.ts/blob/master/LICENSE

[maintain-image]: https://img.shields.io/maintenance/yes/2018.svg
