import React from 'react';

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

const LiveStream = () => {
  return (
    <div>
      <div id="fb-root"></div>
    
      <div className="fb-video" data-href="https://www.facebook.com/shoreshdavidbrandon/videos/1454328981282995/" data-show-text="false">
        <div className="fb-xfbml-parse-ignore">
          <blockquote cite="https://www.facebook.com/shoreshdavidbrandon/videos/1454328981282995/">
            <a href="https://www.facebook.com/shoreshdavidbrandon/videos/1454328981282995/">How to Share With Just Friends</a>
          </blockquote>
        </div>
      </div>
      <button className='btn btn-default btn-block'>Donate</button>
    </div>
  );
}

export default LiveStream;