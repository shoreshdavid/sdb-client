import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from 'sdb-redux';

class ArticleList extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticles());
  }

  render() {
    const { articles } = this.props;
    
    return this.props.render(articles);
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

export default connect(mapStateToProps)(ArticleList);