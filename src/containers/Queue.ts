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

/**
 * Queues are a type of container adaptor, specifically designed to operate
 * in a FIFO context, where elements are inserted from one end and extracted
 * from another end of the container.
 */
export class Queue<T> {
    protected _store: T[];

    /**
     * Constructs queue.
     */
    constructor() {
        this._store = [];
    }

    /**
     * Checks the size of the queue and returns value.
     * @returns The size of the queue.
     */
    public size(): number {
        return this._store.length;
    }

    /**
     * Accesses the next element.
     * @returns The front element on the queue.
     */
    public front(): T {
        return this._store[0];
    }

    /**
     * Accesses the last element.
     * @returns e The back of the queue.
     */
    public back(): T {
        return this._store[this.size() - 1];
    }

    /**
     * Extracts the front element from the queue and returns it.
     * @returns The front element of the queue.
     */
    public pop(): T {
        return this._store.shift();
    }

    /**
     * Extracts the back element from the queue and returns it.
     * @returns The back element at the queue.
     */
    public popBack(): T {
        return this._store.pop();
    }

    /**
     * Inserts an element to the queue.
     * @param e The element to insert to the queue.
     */
    public push(e: T): void {
        this._store.push(e);
    }

    /**
     * Tests if the stack has any elements.
     * @returns true if there are no elements on the stack, false otherwise.
     */
    public empty(): boolean {
        return this.size() === 0;
    }
}