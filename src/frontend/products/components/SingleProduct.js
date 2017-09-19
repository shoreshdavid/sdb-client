import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Product from './Product';
import * as actions from '../../../redux/actions/products';
import ReactHtmlParser from 'react-html-parser';

class SingleProduct extends Component {  
  
  componentWillMount() {
    const { dispatch, params } = this.props;
    dispatch(actions.fetchProduct(params.slug));
  }

  render() {
    // if (!this.props.product) {
    //   return <h1>Loading...</h1>;
    // }
    const { name, slug, description, featuredImage, price } = this.props.product;
    return (
      <div>
        <div className='gap-md'></div>
        <div className='row center-xs'>
          <div className='col-md-4'>
            <div className='box'>
              <img src={featuredImage} />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='box'>
              <div className='product-meta'>
                <h1>{name}</h1>
                <p>${price}</p>
                <i className='fa fa-heart-o fa-lg'></i>
              </div>
            </div>
          </div>
        </div>
        {/*<div className='gap-md'></div>*/}
        <div className='row center-sm'>
          <div className='col-sm-10'>
            <div className='box'>
              <div className='product-details'>
                <div className='product-content'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// SingleProduct.propTypes = {
//   _id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   featuredImage: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   timestamp: PropTypes.string.isRequired
// }

function mapStateToProps(state) {
  return {
    product: state.products.one.product
  }
}


export default connect(mapStateToProps)(SingleProduct);