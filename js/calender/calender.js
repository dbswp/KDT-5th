const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const inputcont = document.querySelector("#content");
const p = document.querySelector("p");

p.style = "position: absolutel; top:0;";

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

//e.target 으로 click한 위치 찾기
function calendarDate(e) {
  if (e.target.tagName === "P") {
    date.value = `2023년 2월 ${e.target.innerText}일`;
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  }
}

function writeSchedule() {
  if (inputcont.value === "" && date.value === "") {
    inputcont.setAttribute("placeholder", "내용을 입력하세요!");
    date.setAttribute("placeholder", "날짜 선택");
    return;
  }

  const contdiv = document.createElement("div");
  contdiv.innerText = inputcont.value;

  targetEl.append(contdiv);
  inputcont.value = "";

  contdiv.addEventListener("click", removeCont);
  function removeCont() {
    contdiv.remove();
  }
}

calendar.addEventListener("click", calendarDate);
