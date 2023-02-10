// console.log("안녕하세요!");
// alert("수업 언제 끝나냐!?");

// let, const
// let 변경가는한 변수
// const 고정되어 있는 변수
let num1 = 10;
let num2 = 20;
const sum = num1 + num2;
console.log(sum);
num2 = 40;
const sum2 = num1 + num2;
console.log(sum2);

// Number 숫자형 데이터
// 정수 및 부동 소수점 숫자를 나타냄
let number = 123;
let opacity = 0.7;

console.log(number);
console.log(opacity);

// undefined
// 값이 할당되지 않은 상태를 표기
let undef;
let obj = {
  abc: 123,
};
console.log(undef);
console.log(obj.abc);

// null
// 어떤 값이 "의도적으로 비어 있음을 의미할 때 사용"

//소개 Object
let dbwp = {
  name: "윤제",
  age: "26",
};

nameArr = ["윤제", "김성현", "백진솔", "신상아", "송민선"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(`${i + 1} 번째 이름은 ${nameArr[i]}입니다.`);
}

//js data type
let arr = {
  name: "dbswp",
  age: "26",
  hobby: [soccer, basketball],
};
console.log(typeof 1, "isn't", typeof "string", "data type");
console.log(
  "typeof를",
  typeof true,
  "이나 null에 사용하면,",
  typeof arr,
  "결과를 얻을 수 있습니다."
);

console.log(Boolean(1));
console.log(Boolean("   ")); // 내용이 있는 문자 True(띄어쓰기도 내용으로 간주)
console.log("undefined", Boolean(undefined));
console.log("NaN", Boolean(NaN));
