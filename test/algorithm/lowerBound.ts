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

import {lowerBound} from '../../src/algorithm';
import {expect} from 'chai';

describe('structures::lowerBound', () => {
  it('should find lower bounds', () => {
    const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    expect(lowerBound(array, 0, array.length, 1))
      .to.equals(0);
    expect(lowerBound(array, 0, array.length, 6))
      .to.equals(2);
    expect(lowerBound(array, 0, array.length, 0))
      .to.equals(0);
    expect(lowerBound(array, 0, array.length, 30))
      .to.equals(array.length - 1);
  });
});
