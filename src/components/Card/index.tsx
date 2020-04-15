import * as React from 'react';
import { Link } from 'react-router-dom';

import jewishImg from '../../assets/img/jewish.png';
import serviceImg from '../../assets/img/service-background-new.png';

import './card.scss';

const CustomLink = ({ link, type, category, slug, children }) => {
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

  return <Link to={`/${type}/${category}/${slug}`}>{children}</Link>;
};

interface Props {
  title: string;
  slug: string;
  link: string | null;
  color: string;
  type: string;
  category?: string;
}

export const Card = ({ title, slug, link, color, type, category }: Props) => {
  const img =
    type === 'jewish' ? `url("${jewishImg}")` : `url("${serviceImg}")`;

  return (
    <div className="sdb-card">
      <CustomLink type={type} link={link} slug={slug} category={category}>
        <div
          className="sdb-card_img"
          style={{
            backgroundImage: img,
            backgroundColor: color,
          }}
        />
        <div className="sdb-card-body">
          <h4>{title}</h4>
        </div>
      </CustomLink>
    </div>
  );
};
