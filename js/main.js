import getType from '/js/getType.js';
import ranDom from '/js/getRandom.js';



// console.log(typeof 'Hello world');
// console.log(typeof 321);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);


// console.log(getType(321));
// console.log(getType(false));
// console.log(getType(null));
// console.log(getType({}));
// console.log(getType([]));


// 산술 연산자----------------------------------------------------------------
// console.log(1 + 2);
// console.log(1 - 2);
// console.log(2 * 5);
// console.log(2 / 5);
// console.log(7 % 5);

// 할당 연산자
// let a = 2;
// a += 1;

// console.log(a);

// 비교 연산자----------------------------------------------------------------
// const a = 1;
// const b = 3;

// console.log(a === b); // 일치연산

// function isEqual(x,y) {
//   return x === y;
// }

// console.log(isEqual(1,1));
// console.log(isEqual(1,'1'));

// console.log(a !== b);
// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);

// 논리 연산자----------------------------------------------------------------
// const a = 1 === 1;
// const b = 'AB' === 'AB';
// const c = false;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log('&&: ', a && b && c);
// console.log('||: ', a || b || c);
// console.log('!: ', !a);

// 삼항 연산자----------------------------------------------------------------

// const a = 1 < 2;

// if (a) {
//   console.log('참');
// } else {
//   console.log('거짓');
// }

// console.log(a ? '참' : '거짓');

// 조건문----------------------------------------------------------------

// const a = ranDom();

// if (a === 0){
//   console.log('a is 0');
// } else if(a === 2) {
//   console.log('a is 2');
// }else if(a === 4) {
//   console.log('a is 4');
// } else {
//   console.log('rest...');
// }

// switch (a) {
//   case 0 :
//     console.log('a is 0');
//     break;
//   case 2 :
//     console.log('a is 2');
//     break;
//   case 4 :
//     console.log('a is 4');
//     break;
//   default :
//     console.log('rest...');    
// }

// 반복문----------------------------------------------------------------

// for (let i = 2; i <= 9; i += 1){
//   for(let j = 1; j <= 9; j += 1){
//     for(let k = 1; k <= 9; k += 1){
//       console.log('i !! ',i,' j !! ',j,' k !! ',k);
//     }
//   }
// }

// const ulEl = document.querySelector('ul');

// for(let i = 0; i < 10; i += 1){
//   const li = document.createElement('li');
//   li.textContent = `list-${i+1}`;
//   if ((i+1) % 2 === 0){
//     li.addEventListener('click', function () {
//       console.log(li.textContent);
//     });
//   }
//   ulEl.appendChild(li);
// }

// 변수 유효범위----------------------------------------------------------------
// var, let, const
// var = 함수안이 범위
// function scope() {
//   if(true) {
//     var a = 123;
//   }
//   console.log('a !! ',a);
// }
// scope();

// 형 변환----------------------------------------------------------------

// const a = 1;
// const b = '1';

// console.log(a !== b);

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

// if (-12) {
//   console.log(123);
// }

// 함수 복습----------------------------------------------------------------

// function sum (x,y) {
//   return x+y;
// }

// console.log(sum(1,3));
// console.log(sum(10,33));

// let a = sum(1,3);
// let b = sum(10,33);

// console.log(a);
// console.log(b);
// console.log(a+b);

// const sum1 = function (x,y) {
//   return x + y;
// }
// console.log(sum1(33,35));

// function sum2() {
//   console.log(arguments);
//   return arguments[0] + arguments[1];
// }
// console.log(sum2(33,35));


// 화살표 함수----------------------------------------------------------------
// () => {} vs function () {}

// const double = function (x, y) {
//   return x * 2;
// }
// console.log('double !! ',double(7));

// // (x,y)는 매개변수, 객체 데이터를 반환하려면 ({}) 형식으로 작성.
// const doubleArrow = (x,y) => ({ name :'songwonseok' });
// console.log('doubleArrow !! ', doubleArrow());

// 즉시실행 함수----------------------------------------------------------------
// IIFE, Immediately-Invoked Function Expression

// const a = 7;
// function double() {
//   console.log(a * 2);
// }
// double();

// // 즉시실행함수
// (function () {
//   console.log(a * 2);
// })();

// // 권장.
// (function () {
//   console.log(a * 2);
// }());


// 호이스팅(Hoisting)----------------------------------------------------------------
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7;

// double();

// function double() {
//   console.log(a * 6);
// }


// 타이머 함수----------------------------------------------------------------
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// setTimeout(function() {
//   console.log('setTimeout !! ');
// }, 3000);

// const timer = setTimeout(() => {
//   console.log('setTimeout !! ');
// }, 3000);

// const h1El = document.querySelector('h1');

// h1El.addEventListener('click',() => {
//   clearTimeout(timer);
// });

// const timer = setInterval(() => {
//   console.log('setInterval !! ');
// }, 3000);

// const h1El = document.querySelector('h1');

// h1El.addEventListener('click',() => {
//   clearInterval(timer);
// });


// 콜백(Callback)----------------------------------------------------------------
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간);

// 아래 로직의 경우 timeout함수안에있는 setTimeout때문에 Done !! 이 먼저 출력된다.
// function timeout() {
//   setTimeout(() => {
//     console.log('songwonseok !! ');
//   }, 3000);
// }
// timeout();
// console.log('Done !! ');

// 콜백 예시 (특정한 실행 위치를 보장한다~)
// function timeout(cb) {
//   setTimeout(() => {
//     console.log('songwonseok !! ');
//     cb();
//   }, 3000);
// }
// timeout(() => {
//   console.log('Done 콜백 !! ');
// });


// 생성자 함수(prototype)----------------------------------------------------------------


// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }
// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// // wonseok, amy, neo = 인스턴스
// const wonseok = new User('Song', 'wonseok');
// const amy = new User('Amy', 'Clarke');
// const neo = new User('Neo', 'Smith');

// console.log(wonseok.getFullName());
// console.log(amy);
// console.log(neo);


// this----------------------------------------------------------------
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// function User(name) {
//   this.name = name;
// }

// User.prototype.normal = function () {
//   console.log(this.name);
// }

// User.prototype.arrow = () => {
//   console.log(this.name);
// }

// const wonseok = new User('wonseok');

// wonseok.normal();
// wonseok.arrow();

// 화살표(Arrow) 함수는 !!자신이 선언된 함수 범위!! 에서 this 정의! 
// const timer = {
//   name: 'wonseok !! ',
//   timeout: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 2000)
//   }
// };
// timer.timeout();


// ES6 Classes----------------------------------------------------------------


// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }
// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const wonseok = new User('Song', 'wonseok');
// const amy = new User('Amy', 'Clarke');
// const neo = new User('Neo', 'Smith');

// console.log(wonseok.getFullName());
// console.log(amy);
// console.log(neo);


// 상속(확장)----------------------------------------------------------------

// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name;
//     this.wheel = wheel;
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2);
// console.log(myVehicle);

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     // super은 Vehicle을 의미한다.
//     super(name, wheel);
//   }
// }
// const myBicycle = new Bicycle('자전거', 2);
// const daughtersBicycle = new Bicycle('세발자전거', 3);
// console.log(myBicycle);
// console.log(daughtersBicycle);

// // 상속 extends
// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel);
//     this.license = license;
//   }
// }
// const myCar = new Car('벤츠', 4, true);
// const dasughersCar = new Car('포르쉐', 4, false);

// console.log(myCar);
// console.log(dasughersCar);







































































































