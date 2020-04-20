import * as React from 'react';
import { Link } from 'react-router-dom';

import jewishImg from '../../assets/img/jewish.png';
import serviceImg from '../../assets/img/service-background-new.png';

import './card.scss';

const CustomLink = ({ link, type, category, slug, part, children }: any) => {
  const internalLink = part
    ? `${type}/${category}/${slug}?part=1`
    : `${type}/${category}/${slug}`;
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
  part?: any;
  isSeries?: boolean;
}

export const Card = ({
  title,
  slug,
  link,
  color,
  type,
  category,
  part,
  featuredImage,
  isSeries,
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
        part={part}
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
            <div className="sdb-card-chip">
              <span>Series</span>
            </div>
          </div>
        )}
        <div className="sdb-card-body">
          <h4>{title}</h4>
        </div>
      </CustomLink>
    </div>
  );
};
