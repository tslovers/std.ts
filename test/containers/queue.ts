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

import {expect} from 'chai';
import {Queue} from '../../src/containers/Queue';

describe('queue', () => {
    let queue = new Queue<number>();

    it('should have 3 elements', () => {
        queue.push(1);
        queue.push(3);
        queue.push(5);
        expect(queue.size()).to.equals(3);
    });

    it('should have 1 at front', () => {
        expect(queue.front()).to.equals(1);
    });

    it('should have 5 at back', () => {
        expect(queue.back()).to.equals(5);
    });

    it('should pop 1, then pop 3, then 5', () => {
        expect(queue.pop()).to.equals(1);
        expect(queue.pop()).to.equals(3);
        expect(queue.pop()).to.equals(5);
    });

    it('should have no elements left', () => {
        expect(queue.size()).to.equals(0);
    });
});