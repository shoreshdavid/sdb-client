import * as React from 'react';
import { Link } from 'react-router-dom';

interface Tab {
  value: string;
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
        <Link key={tab.value} to={`/services/${tab.value}`}>
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
