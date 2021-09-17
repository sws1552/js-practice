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

const a = ranDom();

if (a === 0){
  console.log('a is 0');
} else if(a === 2) {
  console.log('a is 2');
}else if(a === 4) {
  console.log('a is 4');
} else {
  console.log('rest...');
}







































