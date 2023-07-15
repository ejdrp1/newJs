

// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
// function showEvenNumber(n) {
//     for (let i = 1; i <= n; i++) {
//         if(i % 2 === 0) console.log(i);
//     }
// }

// function showOddNumber(n) {
//     for (let i = 1; i <= n; i++) {
//         if(i % 2 === 1) console.log(i);
//     }
// }

// function showOddOrEvenNumber(n, delim) {
//     for (let i = 1; i <= n; i++) {
//         if(i % 2 === delim) console.log(i);
//     }
// }

// function showMultipleNumber(n, multipleNumber) {
//     for (let i = 1; i <= n; i++) {
//         if(i % multipleNumber === 0) console.log(i);
//     }
// }


function showNumber(n, code) {
    for (let i = 1; i <= n; i++) {
        if (code(i)) {
            console.log(i);
        }
    }
}

showNumber(20, function(n) { return n % 2 === 0; });

// 화살표 함수로 표현
// showNumber(20, n => n % 2 === 0);

// showNumber(50, n % 3 === 0);
// n % 3 === 0 함수 자체가 전달되는 것이 아닌 결과 값인 true가 전달됨

// showEvenNumber(15);
// showOddNumber(15);
// showOddOrEvenNumber(10, 1);

function showMessage(message, howTo) {
    // 공통기능
    document.body.style.background = 'gray';

    setTimeout(() => {
        // 개별기능 
        howTo(message);

        // 공통기능
        alert('하하호호!'); // alert는 비동기처리 = 먼저 실행
    }, 500);
    
    
}

showMessage('메롱메롱', function(m) {
    const answer = prompt(m);
    if (answer === '즐')
        alert('음 그렇구나');
    else {
        alert('뭐냐~~');
    }
});



function showNumber(n, code) {
    for (let i = 1; i <= n; i++) {

        // 조건(code)
        if (code(i)) {
            console.log(i);
        }

    }
}

showNumber(20, code);

function code(n) {
    return n % 2 === 0;
}



