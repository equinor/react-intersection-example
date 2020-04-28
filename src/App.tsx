import React, { Component } from 'react';
import { Controller, GridLayer } from '@equinor/esv-intersection';
import './App.css';

const width = 500;
const height = 600;

class App extends Component {
  componentDidMount() {
    this.setupIntersection();
  }

  setupIntersection() {
    const gridLayer = new GridLayer('grid');
    const container = document.getElementById('intersection-container');
    if (!container) {
      return;
    }
    const controller = new Controller({
      container,
      axisOptions: { unitOfMeasure: 'm', xLabel: 'x', yLabel: 'y' },
    });
    controller.addLayer(gridLayer);
    controller.adjustToSize(width, height);
  }

  render() {
    return (
      <div id="intersection-container" />
    );
  }
}

export default App;
