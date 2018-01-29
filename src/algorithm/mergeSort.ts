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

import {ascendingComparison, criterion} from './comparisons';

/**
 * The actual merge sort algorithm. Splits by two equal parts the array in each
 * recursion until it gets to arrays with only one elements, then orderly
 * joins them.
 * @param a The array containing the elements to sort.
 * @param p The index of the first element to sort.
 * @param r The index of the last element to sort.
 * @param compare The comparative criterion.
 */
export function mSort(a: any[], p: number, r: number, compare?: criterion) {
  // Ends when there are only 1 elements to evaluate
  if ((r - p) > 1) {
    // Gets the center of the array
    const q: number = Math.floor((p + r) / 2);
    // Merge sort the first half of this collection
    mSort(a, p, q, compare);
    // Merge sort the last half of this collection
    mSort(a, q, r, compare);
    // Merges and sorts the two parts of the array
    merge(a, p, q, r, compare);
  }
}

/**
 * Merges orderly the two parts of the array in the array using two helper
 * arrays.
 * @param a The array holding the elements to sort.
 * @param p The index of the first element of the first part of the array.
 * @param q The index of the first element of the second part of the array.
 * @param r The upper bound index to sort.
 * @param compare The comparative criterion.
 */
function merge(a: any[], p: number, q: number, r: number,
               compare: criterion = ascendingComparison) {
  let i: number;
  let j: number;
  const l1 = a.slice(p, q); // Copy the first half
  const l2 = a.slice(q, r); // Copy the last half

  i = j = 0;
  // Orders from p to q
  for (let k = p; k < r; k++) {
    if (compare(l1[i], l2[j]) < 0 && l1.length !== i) {
      a[k] = l1[i++];
    } else {
      a[k] = l2[j++];
    }
  }
}
