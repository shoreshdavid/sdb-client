import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/announcements';
import Announcement from '../components/Announcement';

class AnnouncementListContainer extends Component {
  
  componentWillMount() {
    this.props.dispatch(actions.fetchAnnouncements())
  }

  render() {
    return (
      <div>
        {this.props.announcements.map(a =>
          <Announcement
            key={a._id}
            createdAt={a.createdAt}
            updatedAt={a.updatedAt}
            title={a.title}
            slug={a.slug}
            content={a.content}
            featuredImage={a.featuredImage}
            published={a.published}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    announcements: state.announcements.all.announcements
  }
}

export default connect(mapStateToProps)(AnnouncementListContainer);