import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from 'sdb-redux';
import { Article } from 'components/Article';

class ArticleList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticles());
  }

  render() {
    if (!this.props.articles) {
      return <h1>Hey, where did the articles go?</h1>;
    }
    return (
      <div className='container-fluid'>
        {this.props.articles.map((node) => 
          <Article key={node._id} article={node} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

export default connect(mapStateToProps)(ArticleList);