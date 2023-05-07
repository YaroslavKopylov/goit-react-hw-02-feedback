import PropTypes from 'prop-types';
import { Container } from './Container.styled';
export const Container = ({ children }) => {
  return <>{children}</>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
