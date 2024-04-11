let pm;
let overlay;
let previous;
let next;
let clicked = false;
let button1;
let button2;
let button3;
let button4;
let button5;
let panelCount;


function setup() {
  createCanvas(844, 390);
  
  pm = new PanelManager();
  
  pm.addPanel(new myPanel1());
  pm.addPanel(new myPanel2());
  pm.addPanel(new myPanel3());
  pm.addPanel(new myPanel4());
  pm.addPanel(new myPanel5());
  
  pm.panel_id = 0;
  
  overlay = new Overlay();
  
  previous = new Widget(100, 365, 100, 20, 10, "Previous", () => {
    pm.prevPanel();
  }); 
  
  next = new Widget(750, 365, 100, 20, 10, "Next", () => {
    pm.nextPanel();
  });
  
  button1 = new Widget(750, 20, 80, 20, 10, "Panel 1", () => {
    pm.panel_id = 0;
  });
  
  button2 = new Widget(750, 40, 80, 20, 10, "Panel 2", () => {
    pm.panel_id = 1;
  });
  
  button3 = new Widget(750, 60, 80, 20, 10, "Panel 3", () => {
    pm.panel_id = 2;
  });
  
  button4 = new Widget(750, 80, 80, 20, 10, "Panel 4", () => {
    pm.panel_id = 3;
  });
  
  button5 = new Widget(750, 100, 80, 20, 10, "Panel 5", () => {
    pm.panel_id = 4;
  });
  
  panelCount = new Widget(100, 20, 60, 20, 10, "", () => {});
  
  
  
  overlay.addWidget(previous);
  overlay.addWidget(next);
  overlay.addWidget(button1);
  overlay.addWidget(button2);
  overlay.addWidget(button3);
  overlay.addWidget(button4);
  overlay.addWidget(button5);
  overlay.addWidget(panelCount);
}

function draw() {
  pm.render(); 
  overlay.render();
  
  panelCount.label = "Panel " + (pm.panel_id + 1) + "/5";
}

function mousePressed(){
  overlay.widgets.forEach(widget => {
    widget.handleClick();
  });
}
