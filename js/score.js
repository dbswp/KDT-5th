let mathInput = prompt("수학 점수를 입력 하세요.");
let engInput = prompt("영어 점수를 입력 하세요.");
let avgScore = (mathInput + engInput) / 2;
console.log(avgScore);

//숫자 데이터로 변환
mathInput = Number(mathInput);
engInput = Number(engInput);
const avgScore2 = (mathInput + engInput) / 2;
console.log(avgScore2);
