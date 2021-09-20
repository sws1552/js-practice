import _ from 'lodash';
// import {getType,random} from '/js/getType';
import * as getType_ranDom from '/js/getType';
// import { random } from '/js/getRandom';
import myData from '/json/myData.json';

import axios from 'axios';

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


// const user = {
//   // key: value
//   name: 'wonseok',
//   age: 90,
//   email:'sws1552@gmail.com'
// };

// // user객체의 키값들을 출력해서 배열로 반환
// const keys = Object.keys(user);
// console.log(keys);

// console.log(user['email']);

// const values1 = keys.map(key => user[key]);
// // const values2 = keys.map((key) => {
// //   return user[key];
// // });
// console.log(values1);



// 구조 분해 할당---------------------------------------------------------------------

// const user = {
//     // key: value
//     name: 'wonseok',
//     age: 90,
//     email:'sws1552@gmail.com'
// };

// // address처럼 기본값을 지정할수 있다. user에 address란 key와 value가 있으면
// // 기본값은 출력되지 않고 user의 address가 출력이된다.
// // user안에 객체가 밑에 변수에 할당되서 출력이 가능하다.
// const {name, age, email, address = 'korea'} = user;

// console.log(`사용자의 이름은 ${name}입니다.`);
// console.log(`${name}의 나이는 ${age}세입니다.`);
// console.log(`${name}의 이메일 주소는 ${email}입니다.`);
// console.log(address);

// const fruits = ['Apple','Banana','Cherry'];
// // 배열같은경우에는 인덱스 순서에맞게 변수에 할당된다.
// const [a, b, c, d] = fruits;
// console.log(a, b, c, d);
// // Banana만 출력한다.
// const [ , e] = fruits;
// console.log(e);


// 전개 연산자 (Spread)---------------------------------------------------------------------

// const fruits = ['Apple','Banana','Cherry','Orange'];
// console.log(fruits);
// console.log(...fruits);

// const toOblject = (a, b, ...c) => ({
//   a: a,
//   b: b,
//   c: c});
// console.log(toOblject(...fruits));


// 데이터 불변성(Immutability)---------------------------------------------------------------------
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function
// -----------------------------------------------------
// |1:          |2:         |3:         |4:
// -----------------------------------------------------

// let a = 1;
// let b = 4;
// console.log(a, b, a === b);
// b = a;
// console.log(a, b, a === b);
// a = 7;
// console.log(a, b, a === b);
// let c = 1; 
// console.log(b, c, b === c);


// let a = {k: 1};
// let b = {k: 1};
// // 객체는 서로 다른 메모리 주소가 할당된다.
// console.log(a, b, a === b);
// a.k = 7;
// // 이럴경우에는 이제 b 가 a의 메모리 주소를 바라보게 된다.
// b = a;
// console.log(a, b, a === b);
// // a의 값이 바뀌면 b도 같은 메모리주소를 바라보기 때문에 
// // b도 같이 수정된다.
// a.k = 2;
// console.log(a, b, a === b);
// let c = b; 
// console.log(a, b, c, a === c);
// a.k = 9;
// console.log(a, b, c, a===c);


// 얕은 복사, 깊은 복사 (객체, 배열, 함수 해당)
// const user = {
//   name: 'wonseok',
//   age: 85,
//   emails: ['sws1552@gmail.com']
// }
// // 얕은 복사
// // const copyUser = Object.assign({}, user);
// // const copyUser = {...user};
// // 깊은 복사
// const copyUser = _.cloneDeep(user);

// console.log(copyUser === user);

// user.age = 22;
// console.log('user !! ', user);
// console.log('copyUser !! ', copyUser);

// console.log('-------------------')
// console.log('-------------------')

// user.emails.push('neo@zillinks.com');
// console.log(user.emails === copyUser.emails);
// console.log('user !! ', user);
// console.log('copyUser !! ', copyUser);

// ---------------------------------------------------------------------------------------------

// import _ from 'lodash';
// import getType from './getType';
// import getRandom from './getRandom';

// console.log(_.camelCase('the hello world'));
// // console.log(getType([1,2,3]));
// // console.log(random(), random());
// console.log(getType_ranDom.getType([1,2,3]));
// console.log(getType_ranDom.random(), getType_ranDom.random());


// lodash 라이브러리 자주 사용되는 함수 추천 ---------------------------------------------------------------------------------------------

// import _ from 'lodash';

// const usersA = [
//   {userId: '1', name: 'wonseok'},
//   {userId: '2', name: 'Neo'}
// ]
// const usersB = [
//   {userId: '1', name: 'wonseok'},
//   {userId: '3', name: 'Amy'}
// ]
// const usersC = usersA.concat(usersB);
// console.log('concat ', usersC);
// // 이미 중복된 데이터가 있는 배열은 uniqBy를 사용한다.
// console.log('uniqBy ', _.uniqBy(usersC, 'userId'));

// // 두개의 배열을 합치는데 중복된 객체를 없애고싶다면 unionBy를 사용한다.
// const usersD = _.unionBy(usersA, usersB, 'userId');
// console.log('unionBy ', usersD);

// const users = [
//   {userId: '1', name: 'wonseok'},
//   {userId: '2', name: 'Neo'},
//   {userId: '3', name: 'Amy'},
//   {userId: '4', name: 'Evan'},
//   {userId: '5', name: 'Lewis'}
// ]

// // users라는 배열데이터 안에 {name: 'Amy'} 을 가지고있는 객체데이터를 출력
// const foundUser = _.find(users, {name: 'Amy'});
// const foundUserIndex = _.findIndex(users, {name: 'Amy'});
// console.log(foundUser);
// console.log(foundUserIndex);

// _.remove(users, {name: 'wonseok'});
// console.log(users);



// JSON (JavaScript Object Notation)------------------------------------------------------------------------------------------
// 자바스크립트의 객체 표기법

// const user = {
//   name: 'wonseok',
//   age: 90,
//   emails: [
//     'sws1552@gamil.com',
//     'neo@zillinks.com'
//   ]
// }

// console.log('user !! ',user);

// const str = JSON.stringify(user);
// console.log('str !! ',str);
// console.log(typeof str);

// const obj = JSON.parse(str);
// console.log('obj !! ',obj);

// console.log('jsonData !! ',myData);


// Storage ----------------------------------------------------------------------------------------------------------------

// const user = {
//   name: 'wonseok',
//   age: 90,
//   emails: [
//     'sws1552@gamil.com',
//     'neo@zillinks.com'
//   ]
// }

// // 추가
// localStorage.setItem("user", JSON.stringify(user));
// // 추가한 데이터 가져오기
// console.log(JSON.parse(localStorage.getItem("user")));
// // 추가한 데이터 지우기
// localStorage.removeItem("user");
// // 수정하기
// const str = localStorage.getItem("user");
// const obj = JSON.parse(str);
// obj.age = 22;
// console.log(obj);
// localStorage.setItem("user", JSON.stringify(obj));


// 쿼리 스트링-----------------------------------------------------------------------------------------------------------
// 주소?속성=값&속성=값&속성=값.......

// axios = 브라우저 및 node.js를 위한 Promise 기반 HTTP 클라이언트
function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((res) => {

      // console.log('res !! ',res);
      const divEl = document.querySelector('#title_image');
      console.log(divEl);
      // h1El.textContent = res.data.Search[0].Title;
      // imgEl.src = res.data.Search[0].Poster;
      

      for(let item in res.data.Search){

        const data = res.data.Search[item];

        for(let item2 in data) {

          
          if(item2 === "Title"){
            const h1El = document.createElement('h1');
            const imgEl = document.createElement('img');
            divEl.append(h1El);
            divEl.append(img);
            // console.log(data[item2]);
            // h1El.textContent = data[item2];
          }else if(item2 === "Poster"){
            // console.log(data[item2]);
            // imgEl.src = data[item2];
          }else {

          }
        }
      }
      
    });
}
fetchMovies();

























































































