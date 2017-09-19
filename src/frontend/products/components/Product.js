import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Product = props => {
  return (
    <div className='col-md-3'>
      <div className='card'>
        <a href={props.storeLink} target='_blank'>
          <img src={props.featuredImage} />
          <div className='details'>
            <h3>{props.name}</h3>
            <p>${props.price}</p>
          </div>
        </a>
      </div>
    </div>
  );
}


// Product.propTypes = {
//   _id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   featuredImage: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   timestamp: PropTypes.string.isRequired
// }

export default Product;