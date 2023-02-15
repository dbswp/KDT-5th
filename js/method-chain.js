// // -> Hello
// // split() --> 문자열 자르기 (기준으로 자르기)
// let helloTest = "H-e-l-l-o";
// let helloTestArr = helloTest.split("-");
// console.log(helloTestArr);

// //문자열 뒤집기
// let reverseHelloTeatArr = helloTestArr.reverse();
// console.log(reverseHelloTeatArr);

// // join() --> 기준으로 문자열 합치기;
// let helloSrt = helloTestArr.join("");
// console.log(helloSrt);

// // 메소드 체이닝 -> 앞의 계산값이 리턴값을 가져야 뒤에 실행 가능, 리턴값확인
// let finalStr = helloTest.split("-").reverse().join("");
// console.log(finalStr);

// const obj = {
//   arr: ["a", "b", "c", "d"],
//   number: 10,
// };

// let reverseArr = obj.str?.reverse().join(""); //해당 객체 안의 값이 있는지 없는지 확인 -> ?
// console.log(reverseArr);

// const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];
// const answer = kdtCurriculum[0].split("").reverse().join("");
// console.log(answer);
// const answer1 = kdtCurriculum[4].split("").reverse().join("");
// console.log(answer1);
