function ElectricalAppliance(power) {
  this.power = power;
  this.enabled = false;
  this.enable = function () {
    this.enabled = true;
  };
  this.disable = function () {
    this.enabled = false;
  };
}

function DeskLamp(power) {
  this.product = "Sumsung";
  ElectricalAppliance.call(this, arguments);
  this.enable();
}

function Fridge(power) {
  this.product = "LG";
  this.refrigeration = -15;
  ElectricalAppliance.call(this, arguments);
  this.disable();
}
let fridge = new Fridge(1500);
let deskLamp = new DeskLamp(100);
console.log(deskLamp);
console.log(fridge);
