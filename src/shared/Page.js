import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/pages';
import ReactHtmlParser from 'react-html-parser';

class Page extends Component {
  
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchPage(this.props.slug));
  }

  render() {
    if (!this.props.page) return <h1>Loading..</h1>;
    console.log(this.props.page);
    return (
      <div>
        { ReactHtmlParser(this.props.page.code) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    page: state.pages.one.page
  }
}


export default connect(mapStateToProps)(Page);