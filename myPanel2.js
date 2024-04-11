class myPanel2 extends Panel {
  constructor(name, bgcolor) {
    super(name, bgcolor);
    this.img1 = loadImage('assets/test#3.png');
    this.img2 = loadImage('assets/guitar.png');
    this.img3 = loadImage('assets/keys.png');
    this.img4 = loadImage('assets/drums.png');
    this.img5 = loadImage('assets/words.png');
    this.img6 = loadImage('assets/notes.png');
    this.imgAy = 250;
    this.imgBy = 140;
    this.direction = -0.12;
    this.x = 0;
    this.notes = [];
    for (let i = 0; i < 15; i++) {
      let x = random(width);
      let y = random(height - 220);
      let speed = random(0.75, 2.5);
      this.notes.push(new Note(x, y, speed, this.img6));
    }
  }

  render() {
    background(0);
    
    image(this.img1, 172, 0, 500, 390);

    this.img2.resize(70, 70);
    image(this.img2, 412, this.imgBy);

    this.img3.resize(75, 75);
    image(this.img3, 272, this.imgAy);

    this.img4.resize(75, 75);
    image(this.img4, 522, this.imgAy);

    tint(255, this.x += 3.5);
    this.img5.resize(240, 50);
    image(this.img5, 322, 10);
    noTint();

    this.img6.resize(25, 25);
    for (let i = 0; i < this.notes.length; i++) {
      this.notes[i].update();
      this.notes[i].display();
    }

    this.imgAy += this.direction;
    this.imgBy += this.direction;

    if (this.imgAy <= 247 || this.imgAy >= 253) {
      this.direction *= -1;
    }
  }
}

class Note {
  constructor(x, y, speed, img) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.img = img;
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = height;
    }
  }

  display() {
    image(this.img, this.x, this.y);
  }
}