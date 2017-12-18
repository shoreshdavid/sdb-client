import React from 'react';
import ServiceList from 'containers/ServiceList';
import { Service } from 'components/Service';

export const ServiceListPage = () => {
  return (
    <div className='container-fluid'>
      <ServiceList
        render={(services) => {
          if (!services) { return <h1>Loading...</h1> }

          return services.map((service) => {
            return <Service key={service._id} service={service} />
          });
        }}
      />
    </div>
  );
}