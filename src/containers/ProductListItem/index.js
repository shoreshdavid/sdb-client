import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Product } from 'components/Product';
import * as actions from 'actions/products';
import ReactHtmlParser from 'react-html-parser';

class SingleProduct extends Component {  
  
  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(actions.fetchProduct(params.slug));
  }

  render() {
    if (!this.props.product) {
      return <h1>Loading...</h1>;
    }
    const { name, slug, description, featuredImage, price } = this.props.product;
    return (
      <div>
        <div className='gap-md'></div>
        <div className='row'>
          <div className='col-md-4'>
              <img src={featuredImage} />
          </div>
          <div className='col-lg-6'>
              <div className='product-meta'>
                <h1>{name}</h1>
                <p>${price}</p>
                <i className='fa fa-heart-o fa-lg'></i>
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

const mapStateToProps = (state) => ({
  product: state.products.product
});


export default connect(mapStateToProps)(SingleProduct);