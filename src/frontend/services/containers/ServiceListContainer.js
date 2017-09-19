import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/services';
import Service from '../components/Service';

class ServiceListContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchServices());
  }

  render() {
    return (
      <div>
        {this.props.services.map(service =>
          <Service
            key={service.id}
            createdAt={service.createdAt}
            updatedAt={service.updatedAt}
            title={service.title}
            slug={service.slug}
            featuredImage={service.featuredImage}
            videoURI={service.videoURI}
            tags={service.tags}
            category={service.category}
            content={service.content}
          />
        )}
      </div>
    );
  }
}

// ServiceListContainer.propTypes = {
//   services: PropTypes.arrayOf(PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     timestamp: PropTypes.string.isRequired,
//   }).isRequired).isRequired
// }

function mapStateToProps(state) {
  return {
    services: state.services.all.services
  }
}


export default connect(mapStateToProps)(ServiceListContainer);