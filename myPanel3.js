class myPanel3 extends Panel {
  constructor(name, bgcolor) {
    super(name, bgcolor);
    this.stars = [];
    this.city = loadImage('assets/city.png');
    this.skater = loadImage('assets/skater.png');
    this.adventure = loadImage('assets/adventure.png');
    this.skateX = 422;
    this.skateY = 312;
    this.skateSpeed = 2;
    this.jumpSpeed = 2;
    

    for (let i = 0; i < 100; i++) {
      this.stars.push(new Star());
    }
  }

  render() {
    background(0);
    
    fill(2, 0, 53);
    rect(422, 195, 500, 390);

    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].show();
      this.stars[i].update();
    }

    image(this.city, 172, 5); // city background

    this.skater.resize(53, 67);
    image(this.skater, this.skateX, this.skateY); // skater background

    this.skateX += this.skateSpeed;
    if (this.skateX > width) {
      this.skateX = -this.skater.width;
    }

    if (this.skateX >= 220 && this.skateX < 300) {
      this.skateY -= this.jumpSpeed; // Move the skater upwards
    }

    if (this.skateX > 370) {
      this.skateY = 312; // Move (teleport) the skater back down
    }

    this.adventure.resize(70, 18);
    image(this.adventure, 495, 108); // Adventure text
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 5);
    this.speed = random(1, 3);
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.x -= this.speed;

    if (this.x < -this.size) {
      this.x = width + this.size;
      this.y = random(height);
    }
  }
}