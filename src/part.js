class Part {
  constructor(fighterShell) {
    this.name = fighterShell.name;
    this.type = fighterShell.type;
    this.value = fighterShell.value;
    this.broken = fighterShell.broken === false;
  }

isValid() {
    return false;
};

};




module.exports = Part;
