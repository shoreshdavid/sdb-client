import * as h from 'history';
import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';
import { useQuery } from '~utils/useQuery';

import image from '../../assets/img/service-background.png';

interface Props {
  data: any;
  history: h.History;
  partFromQueryParams?: string | undefined;
  selectedPart?: any;
}

const LeftSide = ({ title, color, parts, category, slug }) => {
  const history = useHistory();
  const handleSelect = (e: any) => {
    // console.log(e.target.value);
    // console.log(query.get('part'));
    // // query.set('part', e.target.value.toString());

    history.push(`/services/${category}/${slug}/?part=${e.target.value}`);
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 single-left-side">
      <div
        className="thumb"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundColor: color ? color : '#000',
        }}
      >
        <div className="thumb-title">
          <span>{title}</span>
        </div>
      </div>
      <select
        name="part"
        onChange={handleSelect}
        className="form-control"
        style={{ marginTop: 16 }}
      >
        {parts.map((part: any) => (
          <option value={part.order}>Part {part.order}</option>
        ))}
      </select>
    </div>
  );
};

const RightSide = ({
  data,
  history,
  partFromQueryParams,
  selectedPart,
}: any) => {
  const query = useQuery();
  const partNumber = query.get('part');
  if (data?.parts?.length > 0) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
        <div className="single-page__right">
          <h1>
            {data.title} - Part {partNumber}
          </h1>
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              marginTop: 8,
            }}
          >
            <iframe
              src={selectedPart?.video}
              title={data.title}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }

  if (data?.video && !data.content) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
        <div className="single-page__right">
          <iframe src={data.video} title={data.title} allowFullScreen />
        </div>
      </div>
    );
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
      <div className="single-page__right">{ReactHtmlParser(data.content)}</div>
    </div>
  );
};

export const DetailView = ({
  data,
  history,
  partFromQueryParams,
  selectedPart,
}: Props) => (
  <div className="container-fluid padding-50">
    <div className="row">
      <LeftSide
        title={data.title}
        color={data.color}
        parts={data.parts}
        category={data.category}
        slug={data.slug}
      />
      <RightSide
        data={data}
        history={history}
        partFromQueryParams={partFromQueryParams}
        selectedPart={selectedPart}
      />
    </div>
  </div>
);
