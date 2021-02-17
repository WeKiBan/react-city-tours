import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import TourData from '../../tourData';

class TourList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TourData,
    };
  }

  render() {
    return (
      <section className="tour-list">
        <Tour />
      </section>
    );
  }
}

export default TourList;
