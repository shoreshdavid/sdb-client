import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tabs } from '~components/Tabs';
import { loadSermons } from '~store/actions/sermons';
import { getSermonsByCategory } from '~store/reducers/sermons';

import { Card } from '../../components/Card';
// import { Error } from '../../components/Error';
// import { Loading } from '../../components/Loading';
import { API_URL } from '../../constants';
// import { Link } from 'react-router-dom';

export const ServiceListPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const sermons = useSelector((s: any) =>
    getSermonsByCategory(s.sermons.allSermons, category as string),
  );

  React.useEffect(() => {
    fetch();
  },              []);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/sermons`);

      dispatch(loadSermons(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const tabs = [
    { label: `Rabbi Don's Teachings & Others`, link: 'rabbi-don' },
    {
      label: `Rabbi Don's Discipleship Book`,
      link: 'rabbi-dons-discipleship-book',
    },
    {
      label: `Get Healed Fast`,
      link: 'get-healed-fast',
    },
    {
      label: `"Jewish" Holidays`,
      link: 'jewish-holidays',
    },
    {
      label: `End Times`,
      link: 'end-times',
    },
    {
      label: `Bible Studies`,
      link: 'bible-studies',
    },
    {
      label: `Special Speakers`,
      link: 'special-speakers',
    },
    {
      label: `Increase Your Income`,
      link: 'increase-your-income',
    },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Services | Shoresh David Brandon</title>
      </Helmet>
      <div className="container-fluid padding-50">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <ul className="list-group">
              <Tabs tabs={tabs} activeCategory={category as string} />
            </ul>
          </div>
          <div className="col">
            <div className="row">
              {sermons.length > 0 &&
                sermons.map(({ title, slug, color, category: cat }) => (
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
                      link={null}
                    />
                  </div>
                ))}
            </div>
            {/* {count > 12 ? (
                <div
                  className="row"
                  style={{
                    textAlign: 'center',
                    margin: '0 auto',
                    justifyContent: 'center',
                  }}
                >
                  <ul className="pagination">
                    <li
                      className={
                        this.state.page === 1
                          ? 'page-item disabled'
                          : 'page-item'
                      }
                      onClick={this.previous}
                    >
                      <span className="page-link">Previous</span>
                    </li>
                    {pageNumbers &&
                      pageNumbers.map((selectedPage: number, i) => (
                        <li
                          key={i}
                          className={`page-item ${
                            page === selectedPage ? 'active' : ''
                          }`}
                        >
                          <span
                            className="page-link"
                            onClick={() => this.goToPage(selectedPage)}
                          >
                            {selectedPage}
                          </span>
                        </li>
                      ))}
                    <li
                      className={
                        page > Math.ceil(count / size) - 1
                          ? 'page-item disabled'
                          : 'page-item'
                      }
                      onClick={this.next}
                    >
                      <span className="page-link">Next</span>
                    </li>
                  </ul>
                </div>
              ) : null} */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
