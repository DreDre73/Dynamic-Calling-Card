class PanelManager {
  constructor() {
    this.panels = [];
    this.panel_id = -1;
  }

  addPanel(panel) {
    this.panel_id = this.panel_id + 1;
    this.panels.push(panel);
  }

  nextPanel() {
    this.panel_id = (this.panel_id + 1) % this.panels.length;
  }

  prevPanel() {
    this.panel_id = (this.panel_id - 1 + this.panels.length) % this.panels.length;
  }

  update() {
    if (this.panel_id > -1) {
      this.panels[this.panel_id].update();
    }
  }

  render() {
    if (this.panel_id > -1) {
      this.panels[this.panel_id].render();
    }
  }
}