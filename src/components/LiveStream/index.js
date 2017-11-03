import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchLiveVideo } from 'sdb-redux';
import ReactHtmlParser from 'react-html-parser';

export class LiveStream extends Component {

  constructor(props) {
    super(props);
    this.state = {
      embedHtml: '',
    }
  }

  componentDidMount() {
    // this.props.dispatch(fetchLiveVideo());

    // const fbAccessToken = 'EAAMZBluPZAlVgBAGQgq4Ru4oQiWbWoHGx271WJHVna75aZAIMeoCGHvaDPZAnc3qROgJftJUvqJjrZAMfLlQcibA3ykk3Q7hM3LSQdQjV6ndWzWOQtbAy16jSyak6mL9YDRKZB66qcBMpJftzzP1U1UWeaicVZCwn6a37mM3pBV6ZAn3KKLK7dJVOtilSufQQAOlVPJpju6shgZDZD';

    // window.fbAsyncInit = () => {
    //   window.FB.init({
    //     appId            : '913242718836056',
    //     autoLogAppEvents : true,
    //     xfbml            : true,
    //     version          : 'v2.10'
    //   });
    //   // FB.AppEvents.logPageView();
    //   window.FB.api('shoreshdavidbrandon/live_videos', 'get', {
    //     access_token: fbAccessToken,
    //     fields: 'title,embed_html,id' 
    //   }, (response) => {
    //     if (!response || response.error) {
    //       console.log('Error occured' + response + JSON.stringify(response.error));
    //     } else {
    //       JSON.stringify(response.data.map((r) => {
    //         r.filter('', r.id, () => {

    //         })
    //         return this.setState({ 
    //           embedHtml: r.embed_html,
    //           videoTitle: r.title,
    //         });
    //       })
    //       );
    //     }
    //   }
    // )};
  
    // (function(d, s, id){
    //    var js, fjs = d.getElementsByTagName(s)[0];
    //    if (d.getElementById(id)) {return;}
    //    js = d.createElement(s); js.id = id;
    //    js.src = "https://connect.facebook.net/en_US/sdk.js";
    //    fjs.parentNode.insertBefore(js, fjs);
    //  }(document, 'script', 'facebook-jssdk'));

  }

  
  
  render() {
    return (
      <div>
        <h1>{this.state.videoTitle}</h1>
        <p></p>
        <p></p>
        <p></p>
        { ReactHtmlParser(this.state.embedHtml) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  live: state.live.video
});

export default connect(mapStateToProps)(LiveStream);