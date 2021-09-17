
// getType이라는 함수를 내보내겠다 default 기본적인 함수데이터
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}