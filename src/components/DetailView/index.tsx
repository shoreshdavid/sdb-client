import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
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
  resource?: 'services' | 'discoveries';
}

const LeftSide = ({
  title,
  color,
  parts,
  category,
  slug,
  featuredImage,
  selectedPart,
  showTitle,
  resource,
}) => {
  const history = useHistory();

  const handleSelect = (event: any) => {
    history.push(`/${resource}/${category}/${slug}?part=${event.target.value}`);
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 single-left-side">
      <div
        className="thumb"
        style={{
          backgroundImage: `url("${featuredImage ? featuredImage : image}")`,
          backgroundColor: color ? color : '#000',
        }}
      >
        {showTitle && (
          <div className="thumb-title">
            <span>{title}</span>
          </div>
        )}
      </div>
      {parts?.length > 0 && (
        <FormControl variant="outlined" margin="normal" fullWidth={true}>
          <InputLabel shrink={true}>Select a part</InputLabel>
          <Select
            label="Color"
            value={selectedPart.order}
            onChange={handleSelect}
          >
            {parts.map((part: any) => (
              <MenuItem value={part.order}>
                {part.title
                  ? `Part ${part.order} (${part.title})`
                  : `Part ${part.order}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

const RightSide = ({ data, selectedPart }: any) => {
  const query = useQuery();
  const partNumber = query.get('part');
  if (data?.parts?.length > 0) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
        <div className="single-page__right">
          <h1>
            {data?.title
              ? `${data?.title} - Part ${partNumber}`
              : `Part ${partNumber}`}
          </h1>
          <div
            style={{
              // flexDirection: 'row',
              marginTop: 8,
            }}
          >
            {selectedPart?.video && (
              <iframe
                src={selectedPart.video}
                // title={data?.title}
                allowFullScreen
              />
            )}
          </div>
          <div className="single-page__right content">
            {selectedPart.content && (
              <div>{ReactHtmlParser(selectedPart.content)}</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
      <div className="single-page__right">
        <iframe src={data?.video} allowFullScreen />
        {data?.content && (
          <div style={{ marginTop: 24 }}>{ReactHtmlParser(data.content)}</div>
        )}
      </div>
    </div>
  );
};

export const DetailView = ({
  data,
  history,
  selectedPart,
  resource,
}: Props) => {
  return (
    <div className="container-fluid padding-50">
      <div className="row">
        <LeftSide
          title={data?.title || ''}
          color={data?.color}
          parts={data?.parts}
          category={data?.category}
          slug={data?.slug}
          featuredImage={data?.featuredImage}
          selectedPart={selectedPart}
          showTitle={data?.showTitle}
          resource={resource}
        />
        <RightSide data={data} history={history} selectedPart={selectedPart} />
      </div>
    </div>
  );
};
