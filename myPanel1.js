class myPanel1 extends Panel {
  constructor(name, bgcolor) {
    super(name, bgcolor);
    this.cover = loadImage('assets/Cover.png');
    this.font = loadFont('assets/CrimsonText-Bold.ttf');
    this.picture = loadImage('assets/Andre Smith III.png');
    this.picY = 60;
    this.direction = 0.10;
    this.x = 0;
  }

  render() {
    background(0);
    
    image(this.cover, 172, 0, 500, 390);
    
    tint(255, this.x += 3.5);
    image(this.picture, 180, this.picY);
    noTint();
    
    this.picY += this.direction;
    
    if (this.picY <= 57 || this.picY >= 63) {
      this.direction *= -1;
    }
  }
}