class Widget{
  
  constructor(x, y, width, height, radius, label, onClick){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius; 
    this.label = label;
    this.onClick = onClick;
  }
  
  render(){
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, this.width, this.height, this.radius);
    
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(13);
    fill(0);
    text(this.label, this.x, this.y + 4 );
  }
  
    handleClick() {
    if (mouseX > this.x - this.width / 2 && mouseX < this.x + this.width / 2 &&
        mouseY > this.y - this.height / 2 && mouseY < this.y + this.height / 2 &&
        this.onClick) {
      this.onClick();
    }
  }
}