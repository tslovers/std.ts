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
 *
 */

/**
 * Eratosthenes' sieve is a very good algorithm to find all prime numbers up
 * to any given limit. It consists on mark iteratively the multiples of each
 * prime number starting from 2. The next unmarked number must be next
 * primer number to go.
 *
 * To execute this example run from the root dir:
 * node ./examples/sieve.js <limit>
 *     i.e
 *     node ./examples/sieve.js 30
 */

const BitSet = require('..').BitSet;

/**
 * Default PRIMES's max prime number.
 */
const LIMIT = 1100401;
const limit = process.argv[2];

console.log(sieveOfEratosthenes(limit));

/**
 * The algorithm.
 * @param max The max prime number limit. No prime number larger than this
 * will be provided.
 * @return An array with all prime numbers contained from 0 to max.
 */
function sieveOfEratosthenes(max = LIMIT) {
    const bs = new BitSet(max);
    // According to number's theory, it's not necessary to iterate beyond the
    // max number square root
    const maxSqrt = Math.round(Math.sqrt(max));
    const primes = []; // Primes found
    // Starting from 2
    for (let i = 2; i <= maxSqrt; i++) {
        if (!bs.get(i)) {
            primes.push(i);
            for (let j = 0; j < max; j += i) {
                bs.set(j, true);
            }
        }
    }
    // Prime numbers that weren't push before would be pushed here
    for (let i = maxSqrt + ((maxSqrt & 1) ? 2 : 1); i < max; i += 2) {
        if (!bs.get(i)) {
            primes.push(i);
        }
    }

    return primes;
}
