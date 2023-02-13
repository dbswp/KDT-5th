// array
//const kdt = ["김성현", "백진솔", "윤제", "송민선", "송수빈"];
// console.log(kdt);
// console.log(kdt[2]);
// console.log(kdt.length);
// kdt[0] = "양재연";
// console.log(kdt);
// console.log(kdt[0]);
// kdt.push("박지원");
// console.log(kdt);
// kdt.pop();
// console.log(kdt);

// for (let i = 0; i < kdt.length; i++) {
//   console.log(kdt[i]);
// }

// kdt.push("윤제");
// console.log(kdt);
// kdt.pop();
// console.log(kdt);
// kdt.unshift("윤제");
// console.log(kdt);
// for (let i = 0; i < kdt.length; i++) {
//   console.log(`${i + 1}번째 ${kdt[i]}입니다.`);
// }

// object

// const tetz = {
//   name: "윤제",
//   age: 26,
// };
// console.log(tetz.name);
// console.log(tetz.age);

// tetz.gender = "M";
// console.log(tetz);

// tetz["head"] = "big";
// console.log(tetz);

// tetz.gender = "F";
// console.log(tetz);

// const pororo = {
//   name: "뽀로로",
//   age: 7,
//   height: 110,
//   weigth: 30,
//   runnig: () => {
//     console.log("hello pororo");
//   },
//   say: function () {
//     console.log("Cute pororo");
//   },
// };
// pororo.runnig();
// pororo.say();
// console.log(pororo.name, pororo.age);

// pororo.gender = "M";
// console.log(pororo.gender);

// pororo["height"] = 173;
// console.log(pororo.height);

// delete pororo.gender;
// console.log(pororo);

// for문을 이용한 객체 상태 확인
// for (let key in pororo) {
//   console.log(key, ":", pororo[key]);
// }

// const user = {
//   name: "윤제",
//   sayHello: function () {
//     console.log(`안녕하세요. ${this.name} 님`);
//   },
// };
// user.sayHello();

// object안에서 함수 실행
// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
// }
// const boy = {
//   name: "Mike",
//   sayHello,
// };
// const girl = {
//   name: "Jane",
//   sayHello,
// };

// boy.sayHello();
// girl.sayHello();
// sayHello();

// const pororo = {
//   consoleName: function () {
//     console.log(this.name);
//   },
//   showHeight,
// };
// pororo.name = "윤제";
// pororo.height = 173;
// console.log(pororo.name);

// function showHeight() {
//   console.log(`뽀로로의 키는 ${this.height}cm 입니다.`);
// }
// pororo.showHeight();
// pororo.consoleName();

//화살표 함수는 자체적으로 this를 갖지 못한다.
// 외부의 this를 가져오게 된다.
// let sayHello = () => {
//   console.log(`${this.name}`);
// };
// function sayHello1() {
//   console.log(this.name);
// }
// const boy = {
//   name: "Mike",
//   sayHello,
//   sayHello1,
// };
// boy.sayHello();
// boy.sayHello1();

// const tetz = {
//   name: "a",
//   email: "b",
// };
// const dbswp = {
//   name: "a",
//   email: "b",
// };
// const tetzCopy = tetz;

// tetzCopy.name = "윤제";

// console.log(tetz);
// console.log(tetzCopy);
// // 객체를 const로 선언하게되면 주소값을 나타내는 거라 객체안의 내용을 변경하더라도 상관 x
// console.log(tetz === tetzCopy);

//생성자 함수
//생성자 함수를 만든때 User와 같이 시작을 대문자로 한다.
// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
// }
// let user1 = new Kdt("Mkie", "M");
// let user2 = new Kdt("nico", "M");
// console.log(user1.name, user2);

// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.sayHell = function () {
//     console.log(`이름 : ${this.name} 성별 : ${this.gender}`);
//   };
// }

// let user1 = new Kdt("김성현", "M");
// let user2 = new Kdt("윤제", "M");
// let user3 = new Kdt("송민선", "F");
// let user4 = new Kdt("송수빈", "F");

// user1.sayHell();
// user2.sayHell();
// user3.sayHell();
// user4.sayHell();
