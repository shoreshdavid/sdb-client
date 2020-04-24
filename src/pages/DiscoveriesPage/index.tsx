import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { ListView } from '~components/ListView';
import { loadResources } from '~store/actions/resources';
import {
  getResourcesByCategory,
  searchResources,
} from '~store/reducers/resources';
import { resourceCategories } from '~utils/categories';

import { API_URL } from '../../constants';

export const DiscoveriesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = React.useState('');
  const resources = useSelector((s: any) =>
    getResourcesByCategory(s.resources.allResources, category as string),
  );
  const searchQueryItems = useSelector((s: any) =>
    searchResources(s.resources.allResources, searchQuery),
  );

  React.useEffect(() => {
    fetch();
  },              []);

  React.useEffect(() => {
    setSearchQuery('');
  },              [location.pathname]);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/resources`);

      dispatch(loadResources(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchQueryChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const data = searchQueryItems.length > 0 ? searchQueryItems : resources;

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Biblical Based Articles & Discoveries | Shoresh David Brandon
        </title>
      </Helmet>
      <ListView
        data={data}
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
        allCategories={resourceCategories}
        activeCategory={category}
        location={location}
        type="article"
      />
    </React.Fragment>
  );
};
