// //querySelector
// let boxEl = document.querySelector(".box");
// console.log(boxEl);

// let listEl = document.querySelector("ul>li:nth-child(2)");
// listEl.innerText = "5";
// console.log(listEl);

// //getElementById
// const thirdBoxEl = document.getElementById("third");
// console.log(thirdBoxEl);

//요소의 클래스 정보 객체 -> classList
// let boxEl = document.querySelector(".box");
// boxEl.classList.add("orange"); // js를 통해서 클래스 추가;

// const thirdBoxEl = document.querySelector("#third");
// thirdBoxEl.classList.remove("box"); // js를 통해서 클래스 삭제;
// console.log(boxEl.classList.contains("box")); // 클래스 유무 확인

//실습
// const liClassEl = document.querySelector(".orange");
// const liIdEl = document.querySelector("#skyblue");
// let liSecondEl = document.querySelector("ul>li:nth-child(2)");

// if (liClassEl.classList.contains("orange") === true) {
//   liClassEl.classList.remove("orange");
// }

// console.log(liClassEl);
// console.log(liIdEl);
// console.log(liSecondEl.classList.add("orange"));

// 요소의 속성 추가 -> setAttribute
// setAttribute("속성", "속성의 내용");
// 기존의 지정했던 속성이 쌓이지 않는다. 조심!
// const inputEl = document.querySelector("input");

// inputEl.setAttribute("placeholder", "통합검색");
// liClassEl.setAttribute("id", "box");
// liClassEl.setAttribute("style", "background: orange; height:300px;");

// 실습2
// const classOneEl = document.querySelector(".box1");
// const classTwoEl = document.querySelector(".box2");
// const inputEl = document.querySelector("input");

// classOneEl.innerHTML = "<a href='http://naver.com'>네이버로 이동</a> ";
// classTwoEl.innerText = "박스 내용 및 스타일 변경";
// classTwoEl.style = "background-color:orange";
// inputEl.setAttribute("placeholder", "아이디를 입력하세요");

//creatElement append를 사용하여 부모요소에 붙히기 가능 (노드와 문자열 가능)
// const ulEl = document.querySelector("ul");
// const li = document.createElement("li");
// const btn = document.createElement("button");
// const checkBox = document.createElement("checkbox");
// const firstLi = document.createElement("li");
// const firstEl = document.createElement("input");
// firstLi.appendChild(firstEl);
// checkBox.setAttribute("type", "checkbox");
// li.textContent = "test";
// btn.textContent = "클릭!";
// li.append(checkBox);

// ulEl.appendChild(li);
// ulEl.prepend(firstLi);

// remove로 요소 삭제;
// const listEl = document.querySelector(".list");
// listEl.remove();

// parentNode로 부모노드값 가져오는 메소드
// childNodes로 자식 요소를 전부 확인 (배열 형태)

// const listEl = document.querySelector(".list");
// const ulEl = document.querySelector("ul");

// console.log(ulEl.childNodes);
// console.log(listEl.parentNode);
