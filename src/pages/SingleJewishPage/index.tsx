import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parser from 'react-html-parser';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getResourceBySlug } from '~store/reducers/resources';

import image from '../../assets/img/jewish.png';

export const SingleJewishPage = () => {
  const { slug } = useParams();
  const jewishResource: any = useSelector((s: any) =>
    getResourceBySlug(s.sermons.allSermons, slug as string),
  );

  const { featuredImage, content, title, color } = jewishResource;
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
