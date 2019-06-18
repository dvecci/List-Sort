import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css';

const Photo = ({ image }) => {
  const {
    id,
    owner,
    secret,
    server,
    farm,
    title
  } = image;
  const imageSource = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  return <div className="photoContainer">
    <h2 className="photoTitle">{title}</h2>
    <img className="image" alt={title} src={imageSource} />
  </div>;
};

Photo.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string,
    owner: PropTypes.string,
    secret: PropTypes.string,
    server: PropTypes.string,
    farm: PropTypes.number,
    title: PropTypes.string
  })
}

export default Photo;