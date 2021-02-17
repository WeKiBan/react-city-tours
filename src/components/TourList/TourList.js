import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../../tourData';

class TourList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tours: tourData,
    };
  }

  render() {
    return (
      <section className="tour-list">
        {this.state.tours.map((tour) => (
          <Tour key={tour.id} tour={tour} />
        ))}
      </section>
    );
  }
}

export default TourList;
