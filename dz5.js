class ElectricalAppliance {
  constructor(power) {
    this.power = power;
    this.enabled = false;
  }
  on() {
    return (this.enabled = "On");
  }
  off() {
    return (this.enabled = "off");
  }
}

class DeskLamp extends ElectricalAppliance {
  constructor(power) {
    super(power);

    super.on();
    this.product = "Sumsung";
  }
}

class Fridge extends ElectricalAppliance {
  constructor(power) {
    super(power);
    super.off();
    this.product = "LG";
    this.refrigeration = -15;
  }
}
let fridge = new Fridge(1500);
let deskLamp = new DeskLamp(100);
console.log(deskLamp);
console.log(fridge);
