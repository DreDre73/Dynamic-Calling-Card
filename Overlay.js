class Overlay {
  constructor() {
    this.widgets = [];
  }

  // Method to add a widget to the overlay
  addWidget(widget) {
    this.widgets.push(widget);
  }

  // Method to render all widgets in the overlay
  render() {
    this.widgets.forEach(widget => {
      widget.render();
    });
  }
}