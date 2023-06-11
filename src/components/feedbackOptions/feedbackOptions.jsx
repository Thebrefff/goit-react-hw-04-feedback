import PropTypes from 'prop-types';

import React from 'react';
import css from 'components/feedbackOptions/feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.button}
            type="button"
            name={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
