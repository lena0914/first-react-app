import PropTypes from "prop-types";

const MovieDetail = ({ image, intro, rating, title, url }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>
        <a href={url} target="_blank">
          {title}
        </a>
      </h2>
      <p>{intro}</p>
      <span>{rating}</span>
    </div>
  );
};

MovieDetail.propTypes = {
  image: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default MovieDetail;
