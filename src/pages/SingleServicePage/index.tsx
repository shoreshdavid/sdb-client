import * as React from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSermonBySlug } from '~store/reducers/sermons';

import image from '../../assets/img/service-background.png';

export const SingleServicePage = () => {
  const { slug } = useParams();
  const sermon: any = useSelector((s: any) =>
    getSermonBySlug(s.sermons.allSermons, slug as string),
  );

  return (
    <React.Fragment>
      <Helmet>
        <title>{sermon.title}</title>
      </Helmet>
      <div className="container-fluid padding-50">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 single-left-side">
            <div
              className="thumb"
              style={{
                backgroundImage: `url("${image}")`,
                backgroundColor: sermon.color ? sermon.color : '#000',
              }}
            >
              {sermon.featuredImage ? (
                <img src={sermon.featuredImage} alt={sermon.title} />
              ) : (
                <div className="thumb-title">
                  <span>{sermon.title}</span>
                </div>
              )}
            </div>
            <h1
              style={{
                fontSize: 18,
              }}
            >
              {sermon.title}
            </h1>
            <p style={{ fontSize: 14 }}>{sermon.description}</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
            <div className="single-page-content single-page__right">
              {ReactHtmlParser(sermon.content)}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
