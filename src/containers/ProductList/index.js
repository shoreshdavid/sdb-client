import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from 'sdb-redux';

class ProductList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { products } = this.props;

    return this.props.render(products);
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products
});

export default connect(mapStateToProps)(ProductList);