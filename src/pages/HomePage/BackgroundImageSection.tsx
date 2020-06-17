import * as React from 'react';
// import { Link } from 'react-router-dom';

export const BackgroundImageSection = () => {
  return (
    <div className="parallax">
      <div>
        <h1 className="parallax-header">Important Notice</h1>
        <h3 className="parallax-subheader">
          The synagogue will resume services for adults only (No young children yet) on June 19th at 7:30pm. Social distancing will apply.
        </h3>
        <br />
         <a href="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/covid+19+guidelines+for+services.docx">
           <button className="btn btn-primary">Guidelines</button>
         </a>
      </div>
    </div>
  );
};
