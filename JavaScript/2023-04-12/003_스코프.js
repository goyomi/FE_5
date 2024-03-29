// let과 const는 블록레벨 스코프를 가지고 있습니다. 
// 스코프 : 변수에 접근할 수 있는 유효범위 
// 전역스코프
// 함수스코프
// 블록스코프(ES6)

{
  var a = 100 // 사용하지말기
  let x = 10
  const y = 20
}

console.log(x, y)
// error 

// 지역변수와 전역변수
let x = 100
// 블록 밖에서 선언하면 전역에서 접근할 수 있는 변수가 된다. 이것을 전역변수라고 한다. 
function 함수() {
  let y = 20 // 블록 안에 선언하면 밖에서 접근할 수 없다. 이를 지역번수라고 한다. 
  console.log(x) // 스코프 체이닝(스코프 체인을 따라 해당 영역에 변수가 없으면 계속해서 상위 스코프를 따라 올라간다. 전역까지 올라갔는데도 변수가 없다면 에러가 난다.)
}
함수()

// 1
let x = 10
function 함수1() {
  let x = 20
  function 함수2() {
    function 함수3() {
      let x = 30
      console.log(x)
    }
    함수3()
  }
  함수2()
}
함수1()

// 함수의 호이스팅: 함수나 변수를 끌어올려 주는 것 
함수(10)

function 함수(x) {
  return x + 100
}

함수(10)
let 함수 = x => x + 100
// error

let 함수 = x => x + 100
함수(10)
// 정상 
