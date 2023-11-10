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

// class Ford extends Car {}

interface Part {
  seats: number;
  tire: number;
}

class Ford implements Car, Part {
  mileage = 0;
  price = 100;
  color = 'white';
  seats = 4;
  tire = 4;

  drive() {
    return 'drive!';
  }

  breke() {
    return 'break!';
  }
}

const myFordCar = new Ford();
