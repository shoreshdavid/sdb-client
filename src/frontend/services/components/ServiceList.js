import React from 'react';
import ServiceListContainer from '../containers/ServiceListContainer';
// import Pagination from '../../../shared/Pagination';

const ServiceList = props => {
  return (
    <div className='container'>
      <ServiceListContainer services={props.services} />
    </div>
  );
}

export default ServiceList;