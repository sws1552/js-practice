// JS 데이터---------------------------------------------------------------------

// String: "",'',``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

// const str = '                 sws1552    @gmail.com ';
// console.log(str.replace(/ /gi,''));

// const pi = 3.14959265458979;
// console.log(pi);

// // 문자데이터로 반환 (소수점 아래 두개까지 출력)
// const str = pi.toFixed(2);
// console.log(str);
// console.log(typeof str);

// // 문자데이터를 파라미터로 넣으면 정수로 반환
// const integer = parseInt(str);
// // 소수점자리를 유지하면서 숫자데이터로 변환
// const float = parseFloat(str);
// console.log(integer);
// console.log(float);
// console.log(typeof integer, typeof float);

// console.log('abs: ',Math.abs(-12));
// console.log('min: ',Math.min(2, 8));
// console.log('max: ',Math.max(2, 8));
// console.log('ceil: ',Math.ceil(3.14));
// console.log('floor: ',Math.floor(3.14));
// console.log('round: ',Math.round(3.14));
// console.log('random: ',Math.random() * 10);


// 배열---------------------------------------------------------------------

// const numbers = [1,2,3,4];
// const fruits = ['Apple','Banana','Cherry'];

// console.log(numbers);
// console.log(fruits);

// // .length
// console.log(numbers.length);
// console.log(fruits.length);
// console.log([1,2].length);
// console.log([].length);

// // .concat() = 두개의 배열데이터를 병합해서 새로운 배열데이터로 반환
// // 원본의 데이터들이 수정되지 않는다.
// console.log(numbers.concat(fruits));
// console.log(numbers);
// console.log(fruits);

// // .forEach() = 배열데이터의 아이템갯수만큼 callback함수가 반복한다. 
// fruits.forEach(function (item, index) {
//   console.log(item,index);
// });

// .map() = callback함수에서 반환된 특정한 데이터로 새로운 배열을 반환한다.
// const a = fruits.forEach((item, index) => {
//   console.log(`${item}-${index}`);
// });
// // forEach()는 따로 반환하는것이 없기때문에 undefined가 반환된다.
// console.log(a);

// const b = fruits.map((item, index) => ({
//     id: index,
//     name: item
// }));
// console.log(b);

// .filter() = 배열안에 들어있는 각각의 item들을 특정한 기준에 의해서 필터링해서
// 필터된 새로운 배열데이터를 반환한다.
// 원본의 데이터들이 수정되지 않는다.
// const a = numbers.map((item) => {
//   return item < 3;
// });
// console.log(a);

// const b = numbers.filter(item => item < 3);
// console.log(b);

// console.log(numbers);

// .find() = 특정한 조건에 맞으면 배열안에 item을 반환한다. 
// .findIndex() = 특정한 조건에 맞으면 배열안에 item의 인덱스를 반환한다.

// const a = fruits.find((item) => {
//   return /^B/.test(item);
// });
// console.log(a);

// const b = fruits.findIndex(item => /^B/.test(item));
// console.log(b);


// .includes() = 배열안에 파라미터로 적힌 값이 포함이 되어있는지
// true false로 반환

// const a = numbers.includes(3);
// console.log(a);

// const b = fruits.includes('Orange');
// console.log(b);


// .push() = 배열안에서 가장막지막 인덱스에 배열요소 추가
// .unshift() = 배열안에서 가장첫번째 인덱스에 배열요소 추가
// 원본데이터 수정됨 주의!

// console.log(numbers);

// numbers.push(5);
// console.log(numbers);

// numbers.unshift(3);
// console.log(numbers);


// .reverse() = 배열안의 데이터 순서를 거꾸로
// 원본데이터 수정됨 주의!

// numbers.reverse();
// fruits.reverse();

// console.log(numbers);
// console.log(fruits);


// .splice(0,2) = 0번째의 인덱스부터 2개의 item을 지워서 반환
// 원본데이터 수정됨 주의!

// console.log(numbers);
// // 2번째의 인덱스부터 0개를 지우고 2번째의 인덱스 자리에 999라는 item을 추가해서 반환
// numbers.splice(2, 0, 999);

// console.log(numbers);



// 객체---------------------------------------------------------------------

// const userAge = {
//   // key: value
//   name: 'Heropy',
//   age: 90
// };

// const userEmail = {
//   name: 'wonseok',
//   email: 'sws1552@gmail.com'
// }

// 첫번째파라미터는 대상객체, 두번째 객체는 출처객체
// 대상객체에 출처객체들을 복사해서 삽입 (같은 key의 객체가 있으면 덮어쓴다)한후
// 반환된다
// const target = Object.assign(userAge, userEmail);
// console.log(target);
// console.log(userAge);
// console.log(target === userAge);

// // 외형이 같다고해서 같은객체가 아니다.
// const a = {k:123};
// const b = {k:123};
// console.log(a === b);


const user = {
  // key: value
  name: 'wonseok',
  age: 90,
  email:'sws1552@gmail.com'
};

// user객체의 키값들을 출력해서 배열로 반환
const keys = Object.keys(user);
console.log(keys);

console.log(user['email']);

const values1 = keys.map(key => user[key]);
// const values2 = keys.map((key) => {
//   return user[key];
// });
console.log(values1);






































































































































