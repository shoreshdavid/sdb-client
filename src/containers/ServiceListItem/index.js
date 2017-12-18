import React from 'react';
import { connect } from 'react-redux';
import { fetchService } from 'sdb-redux';
// import './main.css';

class ServiceListItem extends React.Component { 
  componentDidMount() {
    this.props.dispatch(fetchService(this.props.slug));
  }

  render() {
    const { service } = this.props;

    return this.props.render(service)
  }
}

const mapStateToProps = (state) => ({
  service: state.services.service
});

export default connect(mapStateToProps)(ServiceListItem);