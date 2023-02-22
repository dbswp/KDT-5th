// window.localStorage.setItem("name", "윤제");
// console.log(window.localStorage.getItem("name"));

// window.localStorage.setItem("number", 1);
// const number = window.localStorage.getItem("number");
// console.log(number);

// const tetz = {
//   name: "dbswp",
//   idOld: true,
//   hobby: ["음주", "콜라", "플스"],
// };
// const jsonTetz = JSON.stringify(tetz);
// console.log(jsonTetz);

// const objTetz = JSON.parse(jsonTetz);
// console.log(objTetz);
// window.localStorage.setItem("text", jsonTetz);
// const jsonTetzlocal = window.localStorage.getItem("text");
// console.log(JSON.parse(jsonTetzlocal));

// console.log(window.localStorage);

// window.localStorage.setItem("pororo", "뽀로로입니다.");
// console.log(window.localStorage.getItem("pororo"));
// window.localStorage.removeItem("pororo");
// console.log(window.localStorage.getItem("pororo"));

// window.localStorage.clear();

// window.localStorage.setItem("tetz", "윤제");
// window.sessionStorage.setItem("pororo", "뽀로로입니다.");

//실습
localStorage.setItem("name", "윤제");
localStorage.setItem("number", 1);
localStorage.setItem("tetz", "json");
localStorage.setItem("isOld", true);
localStorage.setItem("pororo", "뽀로로");

for (let i = 0; i < localStorage.length; i++) {
  console.log(
    localStorage.key(i),
    "=",
    localStorage.getItem(localStorage.key(i))
  );
}
