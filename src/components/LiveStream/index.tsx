import * as React from 'react';

export const LiveStream = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <h1>Live Stream</h1>
          <iframe
            width="100%"
            title="SDB Live Stream"
            height="560"
            src="https://www.youtube.com/embed/CqP2eAfRS_Y"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
