<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B: `ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: ?

<i>
In the varial let we defined greeting.But in console we wrote greetign. Misplacement of (n) and (g).Thats why is the console we got (greetign is not defined ).
</i>
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```
- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>C: `"12"`</b></summary>
<p>

#### Answer: ?

<i>
Answer is "12" because if we try to get sum of a number and a string in js, the + operator convert the number into string and concatenates two strings together.In the question a in number (1) and b is a string("2").js will see (a) as a string and because of concatenation Answer will be "12".
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: ['🍕', '🍫', '🥑', '🍔']</b></summary>
<p>

#### Answer: ?

<i>
Here food in an array containing 4 items.Then info is an object with property (favoriteFood) and value is 0 index of food array that means first element "🍕" of food.Then we changed the value of info.favoriteFood to "🍝".This changed the value of info but does not affect in the food array.So in the console food remains same as before.
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>
The answer is B: Hi there, undefined.Here sayHi is a function with parameter name.When we call sayHi without any argument , the name becomes undefined.The output will be the string and the function result, "Hi there, undefined" because we didn't pass any value for the name parameter, it becomes undefined.And it defaults to undefined within the function.
</i>
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i>
Here we have an array (nums) containing numbers 0,1,2,3.The for each method will iterate every element in the array.Initially, count is 0.For 0 the condition if (num) evaluates to false so count remains 0.When num is 1,2,3 the condition is true and count incremented by 1.After the forEach loop, count will be equal to the number of truthy values in the nums array which is 3.So the answer is 3.</i>
</p>
</details>