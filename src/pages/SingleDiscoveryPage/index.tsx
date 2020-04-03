import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parser from 'react-html-parser';
import { useParams } from 'react-router-dom';

import image from '../../assets/img/service-background-new.png';
import { Error } from '../../components/Error';
import { Loading } from '../../components/Loading';
import { API_URL } from '../../constants';

export const SingleDiscoveryPage = () => {
  const { slug } = useParams();
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    discovery: {} as any,
  });

  React.useEffect(() => {
    fetch();
  },              []);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/articles/${slug}`);
      setState({ ...state, loading: false, discovery: res.data.data });
    } catch (error) {
      setState({ ...state, loading: false, error: error.response.statusText });
    }
  };

  if (state.loading) {
    return <Loading />;
  }

  if (state.error) {
    return <Error error={state.error} />;
  }

  const { featuredImage, content, title, color } = state.discovery;
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container-fluid padding-50">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 single-left-side">
            <div
              className="thumb"
              style={{
                backgroundImage: `url("${image}")`,
                backgroundColor: color ? color : '#000',
                height: 100,
              }}
            >
              {featuredImage ? (
                <img src={featuredImage} alt={title} />
              ) : (
                <div className="thumb-title">
                  <span>{title}</span>
                </div>
              )}
            </div>
            <h1
              style={{
                fontSize: 18,
              }}
            >
              {title}
            </h1>
          </div>
          <div className="col-xs-12 col-sm-10 col-lg-8 single-page__right">
            {Parser(content)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
