import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import ServiceListItem from 'containers/ServiceListItem';
import { Loading } from 'shared/Loading';

export const SingleServicePage = (props) => {
  return (
    <div>
      <ServiceListItem
        slug={props.match.params.slug}
        render={(service) => {
          if (!service) { return <Loading /> }

          return (
            <div className='service'>
              <iframe src={`${service.videoUri}?rel=0&amp;showinfo=0`} title={service.title} frameBorder='0' allowFullScreen />
              <div className='content'>
                <h1>{service.title}</h1>
                <p>{ ReactHtmlParser(service.content) }</p>
                <Link to='/services/categories'>{service.category}</Link>
              </div>
            </div>
          );
        }}
      />
    </div>
  )
}