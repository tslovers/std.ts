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

import * as std from '../../src/std';
import {expect} from 'chai';

describe('algorithm::mergeSort', () => {
  it('Odd size array, ascending', () => {
    const array = [10, 5, 17, 18, 68, 12, 0, -4, 47];
    std.algorithm.mSort(array, 0, array.length);
    expect(std.algorithm.isSorted(array)).to.equals(true);
  });

  it('Odd size array, descending', () => {
    const array = [10, 5, 17, 18, 68, 12, 0, -4, 47];
    std.algorithm.mSort(array, 0, array.length,
      std.algorithm.descendingComparison);
    expect(std.algorithm.isSorted(array, std.algorithm.descendingComparison))
      .to.equals(true);
  });

  it('Pair size array, ascending', () => {
    const array = [10, 5, 17, 18, 68, 12, 0, -4];
    std.algorithm.mSort(array, 0, array.length);
    expect(std.algorithm.isSorted(array)).to.equals(true);
  });

  it('Pair size array, descending', () => {
    const array = [10, 5, 17, 18, 68, 12, 0, -4];
    std.algorithm.mSort(array, 0, array.length,
      std.algorithm.descendingComparison);
    expect(std.algorithm.isSorted(array, std.algorithm.descendingComparison))
      .to.equals(true);
  });
});

describe('algorithms::quickSort', () => {
  it('Odd size array, ascending', () => {
    const array = [10, 5, 17, 18, 68, 12, 0, -4, 47];
    std.algorithm.sort(array, 0, array.length);
    expect(std.algorithm.isSorted(array)).to.equals(true);
  });

  it('Odd size array, descending', () => {
    const array = [10, 5, 17, 18, 68, 12, 0, -4, 47];
    std.algorithm.sort(array, 0, array.length,
      std.algorithm.descendingComparison);
    expect(std.algorithm.isSorted(array, std.algorithm.descendingComparison))
      .to.equals(true);
  });

  it('Pair size array, ascending', () => {
    const array = [10, 5, 17, 18, 68, 12, 0, -4];
    std.algorithm.sort(array, 0, array.length);
    expect(std.algorithm.isSorted(array)).to.equals(true);
  });

  it('Pair size array, descending', () => {
    const array = [10, 5, 17, 18, 68, 12, 0, -4];
    std.algorithm.sort(array, 0, array.length,
      std.algorithm.descendingComparison);
    expect(std.algorithm.isSorted(array, std.algorithm.descendingComparison))
      .to.equals(true);
  });
});
