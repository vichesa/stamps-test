let arr = [1];
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (!isPrime) {
    arr.push(i);
  }
}

let result = [];
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (num % 3 === 0 && num % 5 === 0) {
    result.push("FooBar");
  } else if (num % 3 === 0) {
    result.push("Foo");
  } else if (num % 5 === 0) {
    result.push("Bar");
  } else result.push(num);
}

const res = result.reverse();
console.log(res.join(", "));
