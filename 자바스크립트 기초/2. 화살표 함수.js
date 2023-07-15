
// ES6부터 화살표 함수 문법이 추가됨
// 화살표 함수


// 함수 선언문 방식
function add(n1, n2) {
    return n1 + n2;
}

// 함수 표현식 방식
const add = function(n1, n2) {
    return n1 + n2;
}

// 화살표 함수 방식
const add = (n1, n2) => {
    return n1 + n2;
}

// 위 3가지 방식 모두 동일하게 2개의 정수를 전달하면 그 합을 반환하는 add라는 함수를 정의함
// 화살표 함수는 함수 내부의 코드가 단 한 줄밖에 없다면 함수블록(중괄호)를 생략할 수 있음
// 또한 그 한 줄의 코드가 리턴문(return)이라면 return키워드도 생략이 가능함

// 예시
// 화살표 함수 방식
const add = (n1, n2) => {
    return n1 + n2;
}

// 좀 더 간략하게 개선
const add = (n1, n2) => n1 + n2;

// 만약 매개변수가 없다면 빈 소괄호를 사용함
// 매개변수가 단 한 개라면 소괄호를 생략할 수 있음


// 요약
function hello() {
    console.log('안녕?');
}

// 매개변수가 없는 경우의 화살표 함수
const hello = () => console.log('안녕?');

// ------------------------------------------------------
function sayName(name) {
    console.log(`${name}님 반가워요~`);
}

// 매개변수가 한 개인 경우의 화살표 함수
const sayName = name => console.log(`${name}님 반가워요~`);


