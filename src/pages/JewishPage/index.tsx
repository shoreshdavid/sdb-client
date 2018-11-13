import { Error } from 'components/Error';
import { Image } from 'components/Image';
import { Loading } from 'components/Loading';
import * as React from 'react';
import { Fetch } from 'react-refetch-component';
import { API_URL } from '../../constants';

import './jewish.scss';

const JewishCard = ({ image, title, link }) => {
  return (
    <div className="jewish-card card">
      <Image src={image} alt={title} className="lazyload" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card-body card-block">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="c-footer">
          <button className="btn btn-primary btn-block">Read</button>
        </div>
      </a>
    </div>
  );
};

export const JewishPage = () => {
  return (
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

              return data.data.map((j: any, i: number) => (
                <div className="col-sm-12 col-lg-3" key={i}>
                  <JewishCard
                    image={j.featuredImage}
                    title={j.title}
                    link={j.link}
                  />
                </div>
              ));
            }}
          </Fetch>
        </div>
      </div>
    </div>
  );
};
