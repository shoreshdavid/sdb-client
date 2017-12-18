import React from 'react';
import ProductListItem from 'containers/ProductListItem';
import { Loading } from 'shared/Loading';

export const SingleProductPage = (props) => {
  return (
    <React.Fragment>
      <ProductListItem
        slug={props.match.params.slug}
        render={(product) => {
          if (!product) { return <Loading /> }

          return (
            <React.Fragment>
              <div className='gap-md'></div>
              <div className='row'>
                <div className='col-md-4'>
                  <img src={product.featuredImage} alt={product.name} />
                </div>
                <div className='col-lg-6'>
                  <div className='product-meta'>
                    <h1>{product.name}</h1>
                    <p>${product.price}</p>
                    <i className='fa fa-heart-o fa-lg'></i>
                  </div>
                </div>
              </div>
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
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
}