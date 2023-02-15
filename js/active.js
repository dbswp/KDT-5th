// test = () => {

// };

// function changeColor() {
//   const box2 = document.querySelector(".box2");
//   box2.style = "background-color:orange;";
// }

// //addEventListner -> 이벤트가 발생하면 약속된 명령어 실행;
// const addEl = document.querySelector(".add");
// addEl.addEventListener("click", function () {
//   addEl.style = "background-color: tomato;";
//   addEl.innerText = "Hello";
// });

//실습
// const box1El = document.querySelector(".box1");
// const box2El = document.querySelector(".box2");

// function changeColor2() {
//   if (box2El.classList.contains("orange")) {
//     box2El.classList.remove("orange");
//     box2El.classList.add("skyblue");
//   } else {
//     box2El.classList.remove("skyblue");
//     box2El.classList.add("orange");
//   }
// }

// function changeColor() {
//   if (box1El.classList.contains("orange")) {
//     box1El.classList.remove("orange");
//     box1El.classList.add("skyblue");
//   } else {
//     box1El.classList.remove("skyblue");
//     box1El.classList.add("orange");
//   }
// }
// box1El.addEventListener("click", changeColor);

//this, e.target;
//삭제
// function deleteThis(t) {
//   t.remove();
// }

const listEl = document.querySelector(".list");

function deleteThis(e) {
  e.target.remove();
}
listEl.addEventListener("click", deleteThis);
