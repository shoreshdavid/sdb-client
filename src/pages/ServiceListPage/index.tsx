import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Tabs } from '~components/Tabs';
import { loadSermons } from '~store/actions/sermons';
import { getSermonsByCategory, searchSermons } from '~store/reducers/sermons';
import { sermonCategories } from '~utils/categories';

import { Card } from '../../components/Card';
// import { Error } from '../../components/Error';
// import { Loading } from '../../components/Loading';
import { API_URL } from '../../constants';
// import { Link } from 'react-router-dom';

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

  const data = searchQueryItems.length > 0 ? searchQueryItems : sermons;

  return (
    <React.Fragment>
      <Helmet>
        <title>Services | Shoresh David Brandon</title>
      </Helmet>
      <div className="container-fluid padding-50">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              className="form-control"
              name="searchQuery"
              placeholder="Search"
              value={searchQuery}
              onChange={(e: any) => setSearchQuery(e.target.value)}
              style={{ marginBottom: 16 }}
            />
            <ul className="list-group">
              <Tabs
                tabs={sermonCategories}
                activeCategory={category as string}
              />
            </ul>
          </div>
          <div className="col">
            <div className="row">
              {data.length > 0 &&
                data
                  .sort((a: any, b: any) => a.order - b.order)
                  .map(
                    ({
                      title,
                      slug,
                      color,
                      category: cat,
                      featuredImage,
                      parts,
                    }) => (
                      <div
                        className="col-sm-12 col-md-6 col-lg-6 col-xl-4"
                        key={slug}
                      >
                        <Card
                          title={title}
                          category={cat}
                          slug={slug}
                          type="services"
                          color={color}
                          part={parts ? parts[0] : null}
                          link={null}
                          featuredImage={featuredImage}
                          isSeries={parts?.length > 0}
                        />
                      </div>
                    ),
                  )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
