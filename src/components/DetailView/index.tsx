import * as h from 'history';
import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';

import image from '../../assets/img/service-background.png';

interface Props {
  data: any;
  history: h.History;
  partFromQueryParams?: string | undefined;
  selectedPart?: any;
}

const LeftSide = ({ title, color }) => {
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
    </div>
  );
};

const RightSide = ({
  data,
  history,
  partFromQueryParams,
  selectedPart,
}: any) => {
  if (data?.parts?.length > 0) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
        <div className="single-page-content single-page__right">
          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {data.parts
                .sort((a: any, b: any) => a.order - b.order)
                .map((part: any) => (
                  <button
                    className={
                      partFromQueryParams === part.order
                        ? 'btn-tertiary btn-tertiary__solid'
                        : 'btn-tertiary btn-tertiary__outlined'
                    }
                    key={part.order}
                    onClick={() =>
                      history.push(
                        `/services/${data.category}/${data.slug}/?part=${part.order}`,
                      )
                    }
                  >
                    {part.title ? part.title : `Part ${part.order}`}
                  </button>
                ))}
            </div>
          </div>
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
        <div className="single-page-content single-page__right">
          <iframe src={data.video} title={data.title} allowFullScreen />
        </div>
      </div>
    );
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
      <div className="single-page-content single-page__right">
        {ReactHtmlParser(data.content)}
      </div>
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
      <LeftSide title={data.title} color={data.color} />
      <RightSide
        data={data}
        history={history}
        partFromQueryParams={partFromQueryParams}
        selectedPart={selectedPart}
      />
    </div>
  </div>
);
