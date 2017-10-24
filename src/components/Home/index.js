import React from 'react';
import './main.css';

const HomeContent = () => {
  return (
    <div className='content'>
      <p>In our joyous Messianic Synagogue you will meet both Jews and Gentiles who are genuinely warm, loving, friendly and caring. Ours is not your standard boring service where you come, listen, go home and nothing changes. We don’t talk about what God “can” do, you’ll see Him do it! Rabbi Don’s messages come from God’s Word and are delivered in an easy to understand way. You can view his past messages by clicking here.</p>
      <p>We invite you to come and worship the God of Abraham, Isaac and Jacob with Messianic Music, Davidic Dance, anointed teachings, and life changing healings. We also encourage you to spend some time exploring this website, because it is loaded with a lot of great information. If you would like to know what we believe, click here to view our Statement of Faith.</p>
      <p>Both Rabbi Don and Jackie were born and raised Jewish so their teachings come from their genuine Jewish experience and their 30+ years of walking with the Messiah. So come! Discover your roots as they are clearly explained.</p>
    </div>
  );
}

const EmailForm = () => {
  return (
    <div>
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
        <div className='col-lg-12'>
          <iframe src='https://www.youtube.com/embed/djrY_eFDOwE?list=RDfff1c-HZf50' title='Home video' frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
      <div className='section-margin'></div>
      <div className='row'>
        <div className='col-lg-6'>
          <HomeContent />
        </div>
        <div className='col-lg-6'>
          <EmailForm />
        </div>
      </div>
      <div className='section-margin'></div>
      <div className='row'>
        <div className='map'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14100.18277867274!2d-82.28446493250395!3d27.93124438269986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cdb75c8a78c5%3A0x7afa5e06b1d0c2ca!2s445+Lithia+Pinecrest+Rd%2C+Brandon%2C+FL+33511!5e0!3m2!1sen!2sus!4v1507603432008' title='Home map' width='100%' height='550' frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}