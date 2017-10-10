let store = {drivers: []};

class Driver {
  constructor(name) {
    this.name = name;

    store.driver.push(this);
  }
}
