import React from 'react';
import PostListContainer from '../containers/PostListContainer';

const PostList = props => {
  return (
    <div className='container'>
      <PostListContainer posts={props.posts} />
      {/* <div className='col-lg-12'>
        <div className='row text-center'>
          <Pagination />
        </div>
      </div> */}
    </div>
  );
}

export default PostList;