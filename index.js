let store = {driver: []};

class Driver {
  constructor(name) {
    this.name = name;

    store.push(this);
  }
}