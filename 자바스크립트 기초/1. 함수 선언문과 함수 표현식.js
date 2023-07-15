
// ------------------------------------------------------ 1
// 일반적인 함수 선언 (함수 선언문)
function foo(param) {
    console.log(param);
}

// 함수 표현식
const foo = function(param) {
    console.log(param);
}

foo('hello!'); // hello가 콘솔에 출력!

// ------------------------------------------------------ 2 
// 선언된 함수를 변수에 담기
function smile() {
    console.log('웃으면 행복합니다.');
}

// @주의 : 괄호를 붙이면 호출되지 않음!
// const hahaha = smile();
const hahaha = smile;

smile();    // '웃으면 행복합니다.' 메시지 출력
hahaha();   // '웃으면 행복합니다.' 메시지 출력

