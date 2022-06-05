import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function CoctailItem({ id, title, alcoholic, image }) {
  return (
    <Link to={`detail/${id}`}>
      <Card style={{ width: "200px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>Type - {alcoholic}</Card.Text>
      </Card>
    </Link>
  );
}

CoctailItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CoctailItem;
