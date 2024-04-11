class Panel {
  constructor(name, bgcolor) {
    this.name = name;
    this.bgcolor = bgcolor;
  }

  update() {}

  render() {
    background(this.bgcolor);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.name, width / 2, height / 2);
  }
}