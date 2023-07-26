
// 기본 문법
// let promise = fetch(url, [options])




// 응답 프로퍼티
// let response = await fetch(url);

// if(response.ok) { // HTTP 상태 코드가 200 ~ 299일 경우
//     // 응답 본문을 받습니다. (관련 메서드는 아래에서 설명)
//     let json = await response.json();
// } else {
//     alert("HTTP-Error : " + response.status);
// }



 // Github에서 마지막 커밋을 JSON 객체 형태로 받기
//  let url = 'https://api.github.com/repos/javascript-tutorial/ko.javascript.info/commits';
//  let response = await fetch(url);

//  let commits = await response.json(); // 응답 본문을 읽고 JSON 형태로 파싱함

//  alert(commits[0].author.login);




// await없이 프라미스만 사용하기
// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//     .then(response => response.json())
//     .then(commits => alert(commits[0].author.login));




// 응답을 text 형태로 얻기
// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// let text = await response.text(); // 응답 본문을 text 형태로 읽습니다.

// alert(text.slice(0, 80) + '...'); // 80자까지만 출력하고 그 이후에는 ... 으로 표시




// Blob
// let response = await fetch('/article/fetch/logo-fetch.svg');

// let blob = await response.blob(); // 응답을 Blob 객체 형태로 다운로드받습니다. 

// // 다운로드받은 Blob을 담을 <img>를 만듭니다.
// let img = document.createElement('img');
// img.style = 'position:fixed; top:10px; left:10px; width:100px';
// document.body.append(img);

// // 이미지를 화면에 보여줍니다. 
// img.src = URL.createObjectURL(blob);

// setTimeout(() => { // 이미지를 3초 후에 숨깁니다.
//     img.remove();
//     URL.revokeObjectURL(img.src);
// }, 3000);




// 본문을 읽을 때 사용되는 메서드는 딱 하나만 사용할 수 있습니다.
// let text = await response.text(); // 응답 본문이 소비됩니다.
// let parsed = await response.json(); // 실패



// 응답 헤더
// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// // 헤더 일부를 추출
// alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// // 헤더 전체를 순회
// for (let [key, value] of response.headers) {
//     alert(`${key} = ${value}`);
// }



// 요청 헤더
// let response = fetch(protectedUrl, {
//     headers : {
//         Authentication: 'secret'
//     }
// });



// POST 요청
// let user = {
//     name : 'John',
//     subName : 'Smith'
// };

// let response = await fetch('/article/fetch/post/user', {
//     method : 'POST',
//     headers : {
//         'Content-type' : 'application/json'
//     },
//     body : JSON.stringify(user)
// });

// let result = await response.json();
// alert(result.message);

