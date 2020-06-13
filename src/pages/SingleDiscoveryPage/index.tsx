import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { API_URL } from '~constants';
import { loadResource } from '~store/actions/resources';

import { DetailView } from '../../components/DetailView';
import { useQuery } from '../../utils/useQuery';

export const SingleDiscoveryPage = () => {
  const queryParams = useQuery();
  const history = useHistory();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const resource: any = useSelector(
    (s: any) => s.resources.allResources[slug as string],
  );

  console.log(resource);

  React.useEffect(() => {
    fetch();
  },              [slug]);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/resources/slug/${resource.slug}`);
      dispatch(loadResource(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const partFromQueryParams = queryParams.get('part')?.toString();

  const selectedPart =
    resource?.parts?.length > 0
      ? resource.parts.find((node: any) => {
          return node.order === partFromQueryParams;
        })
      : null;

  return (
    <React.Fragment>
      <Helmet>
        <title>{resource?.title}</title>
      </Helmet>
      <DetailView
        data={resource || {}}
        history={history}
        partFromQueryParams={partFromQueryParams}
        selectedPart={selectedPart}
        resource="discoveries"
      />
    </React.Fragment>
  );
};
