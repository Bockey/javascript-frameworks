import PropTypes from "prop-types";

function CoctailDetail({ title, alcoholic, category, instructions }) {
  return (
    <div className="coctail-detail">
      <h1>{title}</h1>
      <span>Type - {alcoholic} </span>
      <span>Category - {category}</span>
      <p>{instructions}</p>
    </div>
  );
}

CoctailDetail.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
};

export default CoctailDetail;
