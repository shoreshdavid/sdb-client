import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { ListView } from '~components/ListView';
import { Tabs } from '~components/Tabs';
import { loadSermons } from '~store/actions/sermons';
import { getSermonsByCategory, searchSermons } from '~store/reducers/sermons';
import { sermonCategories } from '~utils/categories';

import { API_URL } from '../../constants';

export const ServiceListPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const sermons = useSelector((s: any) =>
    getSermonsByCategory(s.sermons.allSermons, category as string),
  );
  const searchQueryItems = useSelector((s: any) =>
    searchSermons(s.sermons.allSermons, searchQuery),
  );

  React.useEffect(() => {
    fetch();
  },              []);

  React.useEffect(() => {
    setSearchQuery('');
  },              [location.pathname]);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/sermons`);

      dispatch(loadSermons(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchQueryChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const data = searchQueryItems.length > 0 ? searchQueryItems : sermons;

  return (
    <React.Fragment>
      <Helmet>
        <title>Services | Shoresh David Brandon</title>
      </Helmet>
      <ListView
        data={data}
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
        allCategories={sermonCategories}
        activeCategory={category}
        location={location}
        type="sermon"
      />
    </React.Fragment>
  );
};
