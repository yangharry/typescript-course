class Car {
  mileage = 0;
  price = 100;
  color = 'white';

  drive() {
    return 'drive!';
  }

  breke() {
    return 'break!';
  }
}
class Ford extends Car {}

const myFordCar = new Ford();
