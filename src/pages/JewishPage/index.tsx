import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Fetch } from 'react-refetch-component';

import { Card } from 'components/Card';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';

import { API_URL } from '../../constants';

export const JewishPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Jewish | Shoresh David Brandon</title>
      </Helmet>
      <div className="container-fluid padding-50">
        <div className="jewish-page">
          <div className="row">
            <Fetch
              url={`${API_URL}/jewish?size=20`}
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

                return data.data.map(
                  ({ featuredImage, link, title, color }, i: number) => (
                    <div className="col-sm-12 col-lg-3" key={i}>
                      <Card
                        title={title}
                        featuredImage={featuredImage}
                        slug={null}
                        link={link}
                        color={color}
                        isSeries={false}
                        type="jewish"
                      />
                    </div>
                  ),
                );
              }}
            </Fetch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
