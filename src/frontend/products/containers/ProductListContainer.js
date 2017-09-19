import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/products';
import Product from '../components/Product';

class ProductListContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchProducts());
  }

  render() {
    if (!this.props.products || this.props.products.length === 0) {
      return (
        <h1>No Products...</h1>
      );
    }
    return (
      <div>
        {this.props.products.map(p =>
          <Product
            key={p.id}
            createdAt={p.createdAt}
            updatedAt={p.updatedAt}
            name={p.name}
            slug={p.slug}
            price={p.price}
            featuredImage={p.featuredImage}
            gallery={p.gallery}
            description={p.description}
            storeLink={p.storeLink}
            published={p.published}
          />
        )}
      </div>
    );
  }
}

// ProductListContainer.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     featuredImage: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     timestamp: PropTypes.string.isRequired
//   }).isRequired).isRequired
// }

function mapStateToProps(state) {
  return {
    products: state.products.all.products
  }
}

export default connect(mapStateToProps)(ProductListContainer);