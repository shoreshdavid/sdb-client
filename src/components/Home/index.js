import React from 'react';
import { homeContent, homeVideo, mapIframe } from '../../constants';
import ReactHtmlParser from 'react-html-parser';
import './main.css';



const EmailForm = () => {
  return (
    <div className='col-lg-6'>
      <div className='form-group'>
        <input className='form-control' placeholder='Your name' />
      </div>
      <div className='form-group'>
        <input className='form-control' placeholder='Your email' />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </div>
  );
}


export const Home = props => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-10 col-lg-offset-1'>
          <iframe src={homeVideo} title='Home video' width='100%' height='700px' frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
      <div className='section-margin'></div>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='content'>
            { ReactHtmlParser(homeContent) }
          </div>
        </div>
        <EmailForm />
      </div>
      <div className='section-margin'></div>
      <div className='row'>
        <div className='map'>
          <iframe src={mapIframe} title='Home map' width='100%' height='550' frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}