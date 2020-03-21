class Ship {
  constructor(shuttle) {
    this.name = shuttle.name;
    this.type = shuttle.type === 'wooden' ||
    shuttle.type === 'tin' ||
    shuttle.type ==='plastic' ? undefined : shuttle.type
    this.maxCrew = shuttle.maxCrew;
    this.odometer = shuttle.odometer || 0;
    this.fuelCapacity = shuttle.fuelCapacity || 10;
    this.fuel = shuttle.fuel || 0;
    this.captain = shuttle.captain;
    this.crew = shuttle.crew || [];
    this.cargo = shuttle.cargo || [];
    this.parts = shuttle.parts || {};
    this.part = shuttle.part;
  }

  loadCargo(partCargo) {
    var cargoToLoad = this.cargo && this.part;
  }

   addCrew(crewTooAdd) {
     var crewSpotsAvailable = this.maxCrew - this.crew.length;
for (var i = 0; i < crewSpotsAvailable; i++) {
     var potentialCrewMember = crewTooAdd[i];

     if (potentialCrewMember.isAlive === true) {
      this.crew.push(potentialCrewMember);

    };





}
  }
};


module.exports = Ship;
