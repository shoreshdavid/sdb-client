import React from 'react';
import { fetchArticle } from 'sdb-redux';
import { connect } from 'react-redux';

class ArticleListItem extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchArticle(this.props.slug));
  }

  render() {
    const { article } = this.props;
    
    return this.props.render(article);
  }
}

const mapStateToProps = (state) => ({
  article: state.articles.article
});

export default connect(mapStateToProps)(ArticleListItem);