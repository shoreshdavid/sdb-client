import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/posts';
import Post from './Post';
import ReactHtmlParser from 'react-html-parser';

class SinglePost extends Component {
  
  componentWillMount() {
    const { dispatch, params } = this.props;
    dispatch(actions.fetchPost(params.slug));
  }

  render() {
    if (!this.props.post) return <h1>Loading..</h1>;
    let { createdAt, updatedAt, title, slug, content, featuredImage, tags, category } = this.props.post;
    return (
      <div className='post'>
        <img src={featuredImage} />
        <div className='content'>
          <h1>{title}</h1>
          <p>{ ReactHtmlParser(content) }</p>
          <a href='#'>{category}</a>
        </div>
      </div>
    );
  }
}


SinglePost.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    post: state.posts.one.post
  }
}


export default connect(mapStateToProps)(SinglePost);