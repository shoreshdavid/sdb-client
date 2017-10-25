import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAnnouncements } from 'sdb-redux';
import { Announcement } from 'components/Announcement';

class AnnouncementList extends Component {
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAnnouncements())
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='col-lg-10 col-lg-offset-1'>
          {this.props.announcements.map(node =>
            <Announcement key={node._id} announcement={node}  />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements
});

export default connect(mapStateToProps)(AnnouncementList);