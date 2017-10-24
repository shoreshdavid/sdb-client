import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import * as actions from 'actions/services';
import { Service } from 'components/Service';
import './main.css';

class ServiceListItem extends Component {
  
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.fetchService(match.params.slug));
  }

  render() {
    const { service } = this.props;
    
    if (!service) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className='service'>
        <iframe width="853" height="480" src={`${service.videoUri}?rel=0&amp;showinfo=0`} frameBorder="0" allowFullScreen />
        <div className='content'>
          <h1>{service.title}</h1>
          <p>{ ReactHtmlParser(service.content) }</p>
          <a href='#'>{service.category}</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  service: state.services.service
});

export default connect(mapStateToProps)(ServiceListItem);