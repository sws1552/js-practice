
// getType이라는 함수를 내보내겠다 default 기본적인 함수데이터
// default는 하나의 파일에서 하나의 데이터만 내보낼수 있고 함수명을 적지 않아도 된다.
// 여러개의 파일을 내보내고 싶다면 export를 적고 함수명도 명시해서 
// 사용할 js파일에 import를 한다. 예시) import {getType,random} from '/js/getType';
// import {getType,random as wonseok} from '/js/getType'; 꺼내올때는 random이라는 
// 이름으로 꺼내오지만 사용할때는 wonseok이란 이름으로 사용할수 있도록 as로 바꿔줄수 있다.
// import * as getType_ranDom from '/js/getType'; getType.js 파일안에 있는 데이터들을 
// 모두 가져와서 쓸수 있다. 사용할때는 getType_ranDom.random(); 이렇게 사용하면 된다.
export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

export function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

export function random() {
  return Math.floor(Math.random() * 10);
}

