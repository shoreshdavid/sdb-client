import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from 'sdb-redux';

class SingleProduct extends React.Component {  
  
  componentDidMount() {
    this.props.dispatch(fetchProduct(this.props.slug));
  }

  render() {
    const { product } = this.props;

    if (!product) {
      return <h1>Loading...</h1>;
    }

    return this.props.render(product);
  }
}

const mapStateToProps = (state) => ({
  product: state.products.product
});

export default connect(mapStateToProps)(SingleProduct);