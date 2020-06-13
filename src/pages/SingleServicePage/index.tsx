import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { API_URL } from '~constants';
import { loadSermon } from '~store/actions/sermons';

import { DetailView } from '../../components/DetailView';
import { useQuery } from '../../utils/useQuery';

export const SingleServicePage = () => {
  const queryParams = useQuery();
  const history = useHistory();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const sermon: any = useSelector(
    (s: any) => s.sermons.allSermons[slug as string],
  );

  React.useEffect(() => {
    fetch();
  },              [slug]);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/sermons/slug/${slug}`);
      dispatch(loadSermon(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const partFromQueryParams = queryParams.get('part')?.toString();

  const selectedPart =
    sermon?.parts?.length > 0
      ? sermon.parts.find((node: any) => {
          return node.order === partFromQueryParams;
        })
      : null;

  return (
    <React.Fragment>
      <Helmet>
        <title>{sermon?.title || ''}</title>
      </Helmet>
      <DetailView
        data={sermon || {}}
        history={history}
        partFromQueryParams={partFromQueryParams}
        selectedPart={selectedPart}
        resource="services"
      />
    </React.Fragment>
  );
};
