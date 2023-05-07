import PropTypes from 'prop-types';
import { Div, Span, SpanTotal, Dive } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Div>
      <Span>Good:{good}</Span>
      <Span>Neutral:{neutral}</Span>
      <Span>Bad:{bad}</Span>
      <Dive>
        <SpanTotal>Total:{total}</SpanTotal>
        Positive Feedback:{positivePercentage}%
      </Dive>
    </Div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
