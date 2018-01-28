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
 * This example simulates a queue that gives preference to elder people.
 */

import {PriorityQueue} from '..';

interface Person {
  name: string;
  age: number;
}

const pq = new PriorityQueue<Person>(comparison);

pq.push({
  name: 'Sir Alex Ferguson',
  age: 76
})
pq.push({
  name: 'Gary Oldman',
  age: 59
});
pq.push({
  name: 'Queen Elizabeth II',
  age: 91
});
pq.push({
  name: 'Christian Bale',
  age: 43
});
pq.push({
  name: 'Brad Pitt',
  age: 54
});

while (!pq.empty()) {
  const person = pq.pop();
  console.log(person.name + ', age: ' + person.age);
}

/**
 * If one person is greater then 60 and the other doesn't, then the older
 * must go first. They are equals otherwise.
 * @param a
 * @param b
 * @returns 1 if a has preference, -1 if b has preference, 0 otherwise.
 */
function comparison(a: Person, b: Person): number {
  if (a.age >= 60 && b.age < 60) {
    return 1;
  } else if (b.age >= 60 && a.age < 60) {
    return -1;
  } else {
    return 0;
  }
}
