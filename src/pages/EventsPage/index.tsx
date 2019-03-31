import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parser from 'react-html-parser';
import Axios from 'axios';

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
        {Parser(event.content)}
      </div>
    </div>
  );
};

interface EventsPageState {
  loading: boolean;
  error: any;
  data: any;
}

export class EventsPage extends React.Component<any, EventsPageState> {
  state = {
    loading: true,
    error: null,
    data: null as any,
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/events?page=1&size=20`);
      this.setState({ loading: false, data: res.data });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { loading, error, data } = this.state;

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
            ))};
          </div>
        </div>
      </React.Fragment>
    );
  }
}
