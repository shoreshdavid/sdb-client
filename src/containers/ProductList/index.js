import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'actions/products';
import { Product } from 'components/Product';

class ProductList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchProducts());
  }

  render() {

    const { products } = this.props;

    if (!products) {
      return (
        <h1>No Products...</h1>
      );
    }

    return (
      <div className='container-fluid'>
        {products.map(node =>
          <Product key={node._id} product={node} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products
});

export default connect(mapStateToProps)(ProductList);