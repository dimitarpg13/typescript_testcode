class Car {
  drive() {
    console.log("Hit the gas!");
	}
}

class Golfer {
	drive() {
		console.log("Hit the ball far!");
	}
}

// No error?
let w: Car = new Golfer();

w.drive();
