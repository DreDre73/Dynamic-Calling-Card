class myPanel4 extends Panel {
  constructor(name, bgcolor) {
    super(name, bgcolor);
    this.gym = loadImage('assets/gym.png');
    this.font = loadFont('assets/DotGothic16-Regular.ttf');
    this.airplane = loadImage('assets/plane.png');
    this.direction = 0.16;
    this.imgY = -20;
    this.fillPercentage = 0;
    this.barWidth = 163;
    this.barHeight = 18;
    this.innerWidth = 0;
  }

  drawBar(x, y, w, h, fillColor, label, fillPercentage) {
    strokeWeight(3);
    fill(255); // Outer Rectangle
    rect(x, y, w, h);

    this.innerWidth = (fillPercentage / 100) * w;

    fill(fillColor); // Inner Rectangle
    rect(x - w/2 + this.innerWidth/2, y, this.innerWidth, h);

    textSize(15); // Font + Text
    fill(0);
    textFont(this.font);
    text(label, x - 40, y + 5);
  }

  render() {
    background(0);
    
    image(this.gym, 172, 0, 500, 390);

    this.drawBar(260, 202, this.barWidth, this.barHeight, color(255, 0, 0), "Strength", this.fillPercentage);
    this.drawBar(260, 242, this.barWidth, this.barHeight, color(0, 255, 0), "Fatigue", this.fillPercentage);
    this.drawBar(260, 282, this.barWidth, this.barHeight, color(0, 0, 255), "Heart Rate", this.fillPercentage);
    this.drawBar(260, 322, this.barWidth, this.barHeight, color(255, 255, 0), "Confidence", this.fillPercentage);
    
    this.fillPercentage += 0.4;
    if (this.fillPercentage > 100) {
      this.fillPercentage = 0;
    }

    this.airplane.resize(310, 250);
    image(this.airplane, 162, this.imgY);
    this.imgY += this.direction;
    if (this.imgY <= -23 || this.imgY >= -15) {
      this.direction *= -1;
    }
  }
}