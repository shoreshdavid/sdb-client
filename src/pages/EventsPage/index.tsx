import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import { Error } from '../../components/Error';
import { Image } from '../../components/Image';
import { Loading } from '../../components/Loading';
import { API_URL } from '../../constants';

import './event.scss';

export const Event = ({ event }) => {
  return (
    <div className="announcement">
      <Image src={event.featuredImage} alt={event.slug} className="lazyload" />
      <div className="announcement-body">
        <h3>{event.title}</h3>
        <ReactMarkdown source={event.content} />
      </div>
    </div>
  );
};

export const EventsPage = () => {
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    data: null as any,
  });

  React.useEffect(() => {
    fetch();
  },              []);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/events`);
      setState({ ...state, loading: false, data: res.data });
    } catch (error) {
      setState({ ...state, error, loading: false });
    }
  };

  const { loading, error, data } = state;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Events | Shoresh David Brandon</title>
      </Helmet>
      <div className="container-fluid padding-50">
        <div className="row">
          {data.data.map((event: any, i: number) => (
            <div key={i} className="col-lg-6">
              <Event event={event} />
            </div>
          ))}
          ;
        </div>
      </div>
    </React.Fragment>
  );
};
