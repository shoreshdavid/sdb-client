import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/announcements';
import { Announcement } from 'components/Announcement';

class AnnouncementList extends Component {
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchAnnouncements())
  }

  render() {
    return (
      <div className='announcement-container'>
        {this.props.announcements.map(node =>
          <Announcement key={node._id} announcement={node}  />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements
});

export default connect(mapStateToProps)(AnnouncementList);