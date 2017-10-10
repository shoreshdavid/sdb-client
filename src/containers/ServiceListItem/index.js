import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import * as actions from '../../redux/actions/services';
import { Service } from 'components/Service';
import './main.css';

class ServiceListItem extends Component {
  
  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(actions.fetchService(params.slug));
  }

  render() {
    if (!this.props.service) return <h1>Loading..</h1>;
    const { title, slug, content, videoUri, videos, tags, category } = this.props.service;
    return (
      <div className='service'>
        <iframe width="853" height="480" src={`${videoUri}?rel=0&amp;showinfo=0`} frameBorder="0" allowFullScreen />
        <div className='content'>
          <h1>{ title }</h1>
          <p>{ ReactHtmlParser(content) }</p>
          <a href='#'>{category}</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  service: state.services.service
});

export default connect(mapStateToProps)(ServiceListItem);