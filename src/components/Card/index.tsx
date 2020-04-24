import { Chip } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';

import jewishImg from '../../assets/img/jewish.png';
import serviceImg from '../../assets/img/service-background-new.png';

import './card.scss';

const CustomLink = ({
  link,
  type,
  category,
  slug,
  isSeries,
  children,
}: any) => {
  const rootLink =
    type === 'jewish'
      ? 'jewish'
      : type === 'sermon'
      ? 'services'
      : 'discoveries';
  const internalLink = isSeries
    ? `${rootLink}/${category}/${slug}?part=1`
    : `${rootLink}/${category}/${slug}`;
  if (link) {
    return (
      <a href={link} target="_blank">
        {children}
      </a>
    );
  }
  if (type === 'jewish') {
    return <Link to={`/${type}/${slug}`}>{children}</Link>;
  }

  return <Link to={`/${internalLink}`}>{children}</Link>;
};

interface Props {
  title: string;
  slug: string;
  link: string | null;
  color: string;
  type: string;
  category?: string;
  featuredImage?: string;
  isSeries?: boolean;
  showTitle?: boolean;
}

export const Card = ({
  title,
  slug,
  link,
  color,
  type,
  category,
  featuredImage,
  isSeries,
  showTitle,
}: Props) => {
  const img =
    type === 'jewish' ? `url("${jewishImg}")` : `url("${serviceImg}")`;

  return (
    <div className="sdb-card">
      <CustomLink
        type={type}
        link={link}
        slug={slug}
        category={category}
        isSeries={isSeries}
      >
        <div
          className="sdb-card_img"
          style={{
            backgroundImage: featuredImage ? `url(${featuredImage})` : img,
            backgroundColor: featuredImage ? '' : color,
          }}
        />
        {isSeries && (
          <div className="sdb-card-chip__container">
            <Chip color="secondary" label="Series" />
          </div>
        )}
        {showTitle && (
          <div className="sdb-card-body">
            <h4>{title}</h4>
          </div>
        )}
      </CustomLink>
    </div>
  );
};
