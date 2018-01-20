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

import {Stack} from '@std/containers/Stack';
import {expect} from 'chai';

describe('stack', () => {
    const stack = new Stack<number>();

    it('should have 3 elements', () => {
        stack.push(1);
        stack.push(3);
        stack.push(5);
        expect(stack.size()).to.equals(3);
    });

    it('should have 5 at top', () => {
        expect(stack.top()).to.equals(5);
    });

    it('should pop 5, then pop 3, then 1', () => {
        expect(stack.pop()).to.equals(5);
        expect(stack.pop()).to.equals(3);
        expect(stack.pop()).to.equals(1);
    });

    it('should have no elements left', () => {
        expect(stack.size()).to.equals(0);
    });
});
