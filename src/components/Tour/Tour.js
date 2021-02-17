import React from 'react';
import './Tour.scss';

function Tour() {
  return (
    <article className="tour">
      <div className="img-container">
        <img
          src="https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="tour photo"
        />
        <span className="close-btn">
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>City</h3>
        <h4>name</h4>
        <h5>
          info{' '}
          <span>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          aliquam.{' '}
        </p>
      </div>
    </article>
  );
}

export default Tour;
