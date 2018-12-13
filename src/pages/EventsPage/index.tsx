import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Fetch } from 'react-refetch-component';

import { Error } from 'components/Error';
import { Image } from 'components/Image';
import { Loading } from 'components/Loading';

import { API_URL } from '../../constants';

import './event.scss';

export const Event = ({ event }) => {
  return (
    <div className="announcement">
      <Image src={event.featuredImage} alt={event.slug} className="lazyload" />
      <div className="announcement-body">
        <h3>{event.title}</h3>
        <p>{event.content}</p>
      </div>
    </div>
  );
};

export const EventsPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Events At Shoresh David Brandon</title>
    </Helmet>
    <div className="container-fluid padding-50">
      <div className="row">
        <Fetch
          url={`${API_URL}/events?page=1&size=20`}
          method="get"
          lifecycle="onMount"
        >
          {({ loading, error, data }) => {
            if (loading) {
              return <Loading />;
            }
            if (error) {
              return <Error error={error} />;
            }

            console.log(data);

            return data.data.map((event: any, i: number) => (
              <div key={i} className="col-lg-6">
                <Event event={event} />
              </div>
            ));
          }}
        </Fetch>
      </div>
    </div>
  </React.Fragment>
);
