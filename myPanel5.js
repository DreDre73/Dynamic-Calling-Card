class myPanel5 extends Panel {
  constructor(name, bgcolor) {
    super(name, bgcolor);
    this.font1 = loadFont('assets/Poppins-SemiBold.ttf');
    this.font2 = loadFont('assets/Poppins-LightItalic.ttf');
    this.font3 = loadFont('assets/LeagueSpartan-Regular.ttf');
    this.email = loadImage('assets/email.png');
    this.phone = loadImage('assets/phone.png');
    this.lnkdn = loadImage('assets/lnkdn.png');
    this.githb = loadImage('assets/githb.png');
    this.qr1 = loadImage('assets/Linkedin (1).png');
    this.qr2 = loadImage('assets/github.png');
    this.me = loadImage('assets/MEE.png');
    this.angle = 0;
  }

  render() {
    background(0);
    
    fill(11,3,45);
    rect(420, 195, 500, 390);
    
    fill(246,126,125);
    rect(420,195, 500, 300)

    

    this.me.resize(120,120);
    image(this.me, 365, 10);

    fill(0);
    textFont(this.font1);
    textSize(35);
    text("Andre Smith III", 420, 160);

    fill(255);
    textFont(this.font2);
    textSize(15);
    text("Computer Science Student", 420, 175);

    frameRate(60);

    fill(frameCount % 255, (frameCount + 50) % 255, (frameCount + 100) % 255);
    circle(200, 200, 35);

    fill((frameCount + 25) % 255, (frameCount + 75) % 255, (frameCount + 125) % 255);
    circle(200, 240, 35);

    fill((frameCount + 50) % 255, (frameCount + 100) % 255, (frameCount + 150) % 255);
    circle(200, 290, 35);

    fill((frameCount + 75) % 255, (frameCount + 125) % 255, (frameCount + 175) % 255);
    circle(360, 290, 35);

    image(this.email, 188, 188);
    image(this.phone, 188, 228);
    image(this.lnkdn, 188, 278);
    image(this.githb, 348, 275);

    fill(0);
    textFont(this.font3);
    textSize(16);
    text("smithaa9@vcu.edu", 290, 203);

    fill(0);
    textFont(this.font3);
    textSize(16);
    text("757-240-8902", 280, 245);

    this.qr1.resize(80, 80);
    image(this.qr1, 230, 260);

    this.qr2.resize(80, 80);
    image(this.qr2, 390, 260);

    fill(255);
    textFont(this.font3);
    textSize(13);
    text("Thank you for your visit! I trust that I've effectively showcased my passions and interests, offering you insight and understanding.", 575, 400, 150, 300);
  }
}