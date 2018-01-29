/**
 * @author Hector J. Vasquez <ipi.vasquez@gmail.com>
 *
 * @licence
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as std from '..';

declare const process: any;

// If user does not specify size, default array size is 10
const arraySize = process.argv[2] || 10;
const array = [];

for (let i = 0; i < arraySize; i++) {
  array.push(Math.floor(Math.random() * 50));
}

// Merge sort
const mergeSortedArray = array.slice();
std.algorithm.mSort(mergeSortedArray, 0, array.length);
// Quick sort
const quickSortedArray = array.slice();
std.algorithm.sort(quickSortedArray, 0, array.length);

console.log('OR:', array); // Original
console.log('MS:', mergeSortedArray);
console.log('QS:', quickSortedArray);
