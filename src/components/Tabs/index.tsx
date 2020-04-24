import * as React from 'react';
import { Link } from 'react-router-dom';

interface Tab {
  value: string;
  label: string;
}

type Resource = 'article' | 'sermon';

interface Props {
  resource: Resource;
  tabs: Tab[];
  activeCategory: string;
}

export const Tabs = ({ resource, tabs, activeCategory }: Props) => {
  const link = resource === 'article' ? 'discoveries' : 'services';
  return (
    <div>
      {tabs.map((tab: Tab) => (
        <Link key={tab.value} to={`/${link}/${tab.value}`}>
          <li
            className={`list-group-item-action list-group-item ${
              tab.value === activeCategory ? 'active' : ''
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
