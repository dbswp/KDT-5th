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

//Class
// const hyundai1 = new ConstructorCar("hyundai", "blue");
// console.log(hyundai1);
// hyundai1.drive();

// function ConstructorCar(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = () => {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
//   };
// }

// const porsche = new Car("porsche", "black");
// const kia = new Car("kia", "white");

// ------> class 버전
// class에는 암묵적으로 strict mode가 기본적으로 실행된다.
// 상속이 더 편하다 -> extends 키워드로 상속 !!!!
// 정적 매소드 사용 방식이 다르다. -> Static 키워드 사용
// 우선 선언하고 인스턴스화
// class ClassCar {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
//   showSpec() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
//   }
// }

// const hyundai = new ClassCar("hyundai", "blue");

// console.log(hyundai);
// hyundai.showSpec();

//상속
// class는 extends와 super를 사용하여 상속받는다 (이게 편함)
// class ElecCar extends ClassCar {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }
//   // showFuel() {
//   //   console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직인다.`);
//   // }
//   showSpec() {
//     super.showSpec();
//     console.log(`그리고 이차는 ${this.fuel}의 힘으로 움직입니다.`);
//   } // overriding 해서 상속받은 클래스에서 임의로 변경하여 사용
// }
// const tesla = new ElecCar("tesla", "red", "elec");
// console.log(tesla);
// tesla.showSpec();

// console.log(hyundai instanceof ClassCar);
// console.log(tesla instanceof ElecCar);

//이거는 생성자 함수로 상속받는 거
// function ElecCar(brand, color, fuel) {
//   ClassCar.call(this, brand, color);
//   this.fuel = fuel;
//   this.drive = function () {
//     console.log(
//       `${this.brand}의 ${this.color}색 자동차가 ${this.fuel} 의 힘으로 주행 중입니다.`
//     );
//   };
// }

// ElecCar.prototype = Object.create(ClassCar.prototype);
// ElecCar.prototype.constructor = ElecCar;

// const tesla = new ElecCar("tesla", "white", "elec");
// console.log(tesla);
// tesla.drive();

//실습
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea = function () {
    console.log(
      `Shape의 넓이는 ${this.width}*${this.height} = `,
      this.width * this.height,
      "이다."
    );
  };
}
class Ractangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea = function () {
    console.log(
      `Ractangle의 넓이는 ${this.width}*${this.height} = `,
      this.width * this.height,
      "이다."
    );
  };
}
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea = function () {
    console.log(
      `Triangle의 넓이는 ${this.width}*${this.height} / 2 = `,
      (this.width * this.height) / 2,
      "이다."
    );
  };
}
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea = function () {
    console.log(
      `Circle의 넓이는 ${this.radius}*${this.radius}*파이값 = `,
      this.radius * this.radius * Math.PI,
      "이다."
    );
  };
}

const shape = new Shape(10, 20);
const ractangle = new Ractangle(10, 30);
const triangle = new Triangle(10, 40);
const circle = new Circle(10, 10, 10);

shape.getArea();
ractangle.getArea();
triangle.getArea();
circle.getArea();
