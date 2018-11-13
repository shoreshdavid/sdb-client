import * as React from 'react';
import { Fetch } from 'react-refetch-component';

import { Error } from 'components/Error';
import { Image } from 'components/Image';
import { Loading } from 'components/Loading';

import { API_URL } from '../../constants';

import './event.scss';

export const Event = ({ event }) => {
  return (
    <div className="announcement">
      <div className="row">
        <div className="col-lg-5">
          <Image
            src={event.featuredImage}
            alt={event.slug}
            className="lazyload"
          />
        </div>
        <div className="col-lg-5 offset-lg-1">
          <h3>{event.title}</h3>
          {/* {ReactHtmlParser(announcement.content)} */}
        </div>
      </div>
    </div>
  );
};

export const EventsPage = () => {
  return (
    <div className="padding-50">
      <Fetch url={`${API_URL}/events?size=20`} method="get" lifecycle="onMount">
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <Error error={error} />;
          }

          return data.data.map((event: any, i: number) => (
            <Event event={event} key={i} />
          ));
        }}
      </Fetch>
    </div>
  );
};
