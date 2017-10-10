let store = {drivers: [], passengers: []};

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
  }
}