import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/posts';
import Post from '../components/Post';

class PostListContainer extends Component {
  
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchPosts()); 
  }
  
  render() {
    if (!this.props.posts) return <h1>Loading...</h1>;
    return (
      <div className='row'>
        {this.props.posts.map(post =>
            <Post
              key={post.id}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
              title={post.title}
              slug={post.slug}
              featuredImage={post.featuredImage}
              content={post.content}
              category={post.category}
              tags={post.tags}
              published={post.published}
            />
        )}
      </div>
    );
  }
}

// PostListContainer.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     featuredImage: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     tags: PropTypes.arrayOf(PropTypes.string),
//     timestamp: PropTypes.string
//   }).isRequired).isRequired
// }

function mapStateToProps(state) {
  return {
    posts: state.posts.all.posts
  }
}


export default connect(mapStateToProps)(PostListContainer);