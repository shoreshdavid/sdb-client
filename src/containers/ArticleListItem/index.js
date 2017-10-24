import React, { Component } from 'react';
import * as actions from '../../redux/actions/articles';
import { connect } from 'react-redux';
import './main.css';

class ArticleListItem extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchArticle(this.props.match.params.slug));
  }

  render() {
    const { article } = this.props;
    return (
      <div className='article'>
        <img src={article.featuredImage} alt={article.title} />
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  article: state.articles.article
});

export default connect(mapStateToProps)(ArticleListItem);