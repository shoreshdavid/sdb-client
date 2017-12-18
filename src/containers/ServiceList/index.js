import React from 'react';
import { connect } from 'react-redux';
import { fetchServices } from 'sdb-redux';

class ServiceList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchServices());
  }

  render() {
    const { services } = this.props;

    return this.props.render(services);
  }
}

const mapStateToProps = (state) => ({
  services: state.services.services
});

export default connect(mapStateToProps)(ServiceList);