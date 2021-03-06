"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
/**
 * Priority queues are a type of queues which prioritizes some elements
 * above other. When an element is inserted, the ele
 * Queues are a type of container adaptor, specifically designed to
 * operate
 * in a FIFO context, where elements are inserted from one end and extracted
 * from another end of the container.
 */
var PriorityQueue = /** @class */ (function (_super) {
    __extends(PriorityQueue, _super);
    /**
     * Constructs queue.
     */
    function PriorityQueue(compareFunction) {
        if (compareFunction === void 0) { compareFunction = dc; }
        var _this = _super.call(this) || this;
        _this.compareFunction = compareFunction;
        return _this;
    }
    /**
     * Inserts an element to the queue.
     * @param e The element to insert to the queue.
     */
    PriorityQueue.prototype.push = function (e) {
        var i = 0, comparison;
        var n = this.size();
        for (i = 0; i < n; i++) {
            if ((comparison = this.compareFunction(e, this._store[i])) > 0) {
                break;
            }
            else if (comparison === 0) {
                while (i < n && this.compareFunction(e, this._store[i]) === 0) {
                    i++;
                }
                break;
            }
        }
        this._store.splice(i, 0, e);
    };
    PriorityQueue.prototype.info = function () {
        return this._store;
    };
    return PriorityQueue;
}(Queue_1.Queue));
exports.PriorityQueue = PriorityQueue;
/**
 * TODO: Use this as a function for every structure (export it).
 * @param a The first value to compare.
 * @param b The second value to compare.
 * @returns 0 if a and b are equal, 1 if a is greater than b, -1 otherwise.
 */
function dc(a, b) {
    if (a === b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }
    return -1;
}
