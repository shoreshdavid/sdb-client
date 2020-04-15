import * as React from 'react';
import { Link } from 'react-router-dom';

interface Tab {
  link: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  activeCategory: string;
}

export const Tabs = ({ tabs, activeCategory }: Props) => {
  return (
    <div>
      {tabs.map((tab: Tab) => (
        <Link key={tab.link} to={`/services/${tab.link}`}>
          <li
            className={`list-group-item-action list-group-item ${
              tab.link === activeCategory ? 'active' : ''
            }`}
            style={{
              marginBottom: 10,
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            {tab.label}
          </li>
        </Link>
      ))}
    </div>
  );
};
