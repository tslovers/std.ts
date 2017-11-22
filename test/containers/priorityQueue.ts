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
import {PriorityQueue} from '../../src/containers/PriorityQueue';

/**
 * Generic interface for testing Priority Queue.
 */
interface PQTest {
    value: number;
    msg: string;
}

/**
 * Generic function to test Priority Queue.
 * @param a The first element to compare.
 * @param b The second element to compare.
 * @returns 1 if a has higher value than b, 0 if they're equals, -1 otherwise.
 */
function pqTestCompare(a: PQTest, b: PQTest): number {
    if (b.value === a.value) {
        return 0;
    }
    if (a.value > b.value) {
        return 1;
    }
    return -1;
}

describe('priority queue', () => {
    const queue = new PriorityQueue<PQTest>(pqTestCompare);

    it('should have 3 elements', () => {
        // First element
        queue.push({
            value: 1,
            msg: 'LOL1'
        });
        // Goes to second because has the same value but enters after LOL1
        queue.push({
            value: 1,
            msg: 'LOL2'
        });
        // Goes first because has higher value than LOL1 & LOL2
        queue.push({
            value: 2,
            msg: 'LOL3'
        });
        expect(queue.size()).to.equals(3);
    });

    it('should have LOL3 at front', () => {
        expect(queue.front().msg).to.equals('LOL3');
    });

    it('should have LOL2 at back', () => {
        expect(queue.back().msg).to.equals('LOL2');
    });

    it('should pop LOL3, then pop LOL1, then LOL2', () => {
        expect(queue.pop().msg).to.equals('LOL3');
        expect(queue.pop().msg).to.equals('LOL1');
        expect(queue.pop().msg).to.equals('LOL2');
    });

    it('should have no elements left', () => {
        expect(queue.size()).to.equals(0);
    });
});
