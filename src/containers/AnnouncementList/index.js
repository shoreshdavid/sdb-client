import React from 'react';
import { connect } from 'react-redux';
import { fetchAnnouncements } from 'sdb-redux';

class AnnouncementList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAnnouncements())
  }

  render() {
    const { announcements } = this.props;

    return this.props.render(announcements);
  }
}

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements
});

export default connect(mapStateToProps)(AnnouncementList);