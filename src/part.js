class Part {
  constructor(fighterShell) {
    this.name = fighterShell.name;
    this.type = fighterShell.type === 'hyperdive' ||
    fighterShell.type === 'flatware' || fighterShell.type === 'drill'
    ? undefined : fighterShell.type
    this.value = fighterShell.value;
    this.broken = fighterShell.broken === false;
  }

isValid() {
  if(true) {
    return false
  } else {
    return true
  }
};

};






module.exports = Part;
