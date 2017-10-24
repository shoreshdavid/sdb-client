import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'actions/services';
import { Service } from 'components/Service';

class ServiceList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchServices());
  }

  render() {
    const { services } = this.props;

    if (!services) {
      return <h1>Loading...</h1>
    }

    return (
      <div className='container-fluid'>
        {services.map(node =>
          <Service key={node._id} service={node} />
        )}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  services: state.services.services
});


export default connect(mapStateToProps)(ServiceList);