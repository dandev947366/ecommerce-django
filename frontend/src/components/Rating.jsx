import React from 'react';
import PropTypes from 'prop-types';

function Rating({ value, text, color }) {
  const stars = Array(5).fill().map((_, index) => {
    const starValue = index + 1;
    return (
      <span key={index}>
        <i
          style={{ color }}
          className={
            value >= starValue
              ? 'fas fa-star'
              : value >= starValue - 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
    );
  });

  return (
    <div className="rating">
      {stars}
      {text && <span>{text}</span>}
    </div>
  );
}

Rating.defaultProps = {
  color: '#f8e825'
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string
};

export default Rating;
