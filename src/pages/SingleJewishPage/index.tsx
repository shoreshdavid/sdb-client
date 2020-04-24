import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { DetailView } from '../../components/DetailView';

export const SingleJewishPage = () => {
  const history = useHistory();
  const { slug } = useParams();
  const jewishResource: any = useSelector(
    (s: any) => s.resources.allResources[slug as string],
  );

  return (
    <DetailView
      data={jewishResource}
      history={history}
      // partFromQueryParams={partFromQueryParams}
      // selectedPart={selectedPart}
    />
  );
};
