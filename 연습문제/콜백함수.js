
function introduce (name, age, international, position, callback) {

    const hello = '안녕하세요. 제 이름은 ' 
                    + name + ' 이고 나이는 ' 
                    + age + '살이며 ' 
                    + international + ' 국적의 ' 
                    + position + ' 입니다.';

    callback(hello);
}   

introduce('손흥민', 30, '대한민국', '공격수', myNameIs);

function myNameIs (answer) {
    console.log(answer);
}
