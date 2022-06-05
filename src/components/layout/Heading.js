import PropTypes from "prop-types";

function Heading({ children }) {
  return <h1>{children}</h1>;
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
