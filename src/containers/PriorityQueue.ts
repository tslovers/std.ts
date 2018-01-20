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

import {Queue} from '@std/containers/Queue';

/**
 * Priority queues are a type of queues which prioritizes some elements
 * above other. When an element is inserted, the ele
 * Queues are a type of container adaptor, specifically designed to
 * operate
 * in a FIFO context, where elements are inserted from one end and extracted
 * from another end of the container.
 */
export class PriorityQueue<T> extends Queue<T> {

    /**
     * Constructs queue.
     */
    constructor(private compareFunction: (a: T, b: T) => number = dc) {
        super();
    }

    /**
     * Inserts an element to the queue.
     * @param e The element to insert to the queue.
     */
    public push(e: T): void {
        let i = 0, comparison;
        for (i = 0; i < this.size(); i++) {
            if ((comparison = this.compareFunction(e, this._store[i])) > 0) {
                break;
            } else if (comparison === 0) {
                i++;
                break;
            }
        }
        this._store.splice(i, 0, e);
    }

    public info() {
        return this._store;
    }
}

/**
 * TODO: Use this as a function for every structure (export it).
 * @param a The first value to compare.
 * @param b The second value to compare.
 * @returns 0 if a and b are equal, 1 if a is greater than b, -1 otherwise.
 */
function dc(a: any, b: any): number {
    if (a === b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }
    return -1;
}
