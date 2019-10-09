import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Card } from '../../components/Card';
import { Error } from '../../components/Error';
import { Loading } from '../../components/Loading';
import { API_URL } from '../../constants';

export const JewishPage = () => {
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    data: null,
  });

  React.useEffect(() => {
    fetch();
  },              []);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/jewish?size=20`);
      setState({ ...state, data: res.data.data, loading: false });
    } catch (error) {
      setState({ ...state, error, loading: false });
    }
  };

  if (state.loading) {
    return <Loading />;
  }

  if (state.error) {
    return <Error error={state.error} />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Jewish | Shoresh David Brandon</title>
      </Helmet>
      <div className="container-fluid padding-50">
        <div className="jewish-page">
          <div className="row">
            {state.data.map(
              ({ featuredImage, link, title, slug, color }: any, i: number) => (
                <div className="col-sm-12 col-lg-3" key={i}>
                  <Card
                    title={title}
                    featuredImage={featuredImage}
                    slug={slug}
                    link={link}
                    color={color}
                    isSeries={false}
                    type="jewish"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
