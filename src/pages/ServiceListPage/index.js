import React from 'react';
import ServiceList from 'containers/ServiceList';
import { Service } from 'components/Service';
import { Loading } from 'shared/Loading';

export const ServiceListPage = () => {
  return (
    <div className='grid-wrapper'>
      <ServiceList
        render={(services) => {
          if (!services) { return <Loading /> }

          return services.map((service) => {
            return <Service key={service._id} service={service} />
          });
        }}
      />
    </div>
  );
}