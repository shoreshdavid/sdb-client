import { TextField } from '@material-ui/core';
import * as React from 'react';
import { Tabs } from '~components/Tabs';

import { Card } from '../../components/Card';

export const ListView = ({
  data,
  searchQuery,
  onSearchQueryChange,
  allCategories,
  activeCategory,
  location,
  type,
}) => {
  return (
    <div className="container-fluid padding-50">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <ul className="list-group">
            <Tabs
              resource={type}
              tabs={allCategories}
              activeCategory={activeCategory}
            />
          </ul>
        </div>
        <div className="col">
          <div
            className="row"
            style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}
          >
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <TextField
                // margin="normal"
                variant="outlined"
                fullWidth
                label="Search"
                name="searchQuery"
                value={searchQuery}
                onChange={onSearchQueryChange}
                style={{ marginBottom: 16 }}
              />
              {/* <InputGroup inside style={{ marginBottom: 16, maxWidth: 300 }}>
                <Input
                  name="searchQuery"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={onSearchQueryChange}
                />
                {searchQuery && (
                  <InputGroup.Button onClick={() => onSearchQueryChange('')}>
                    <Icon icon="close-circle" />
                  </InputGroup.Button>
                )}
              </InputGroup> */}
            </div>
          </div>
          <div className="row">
            {data.length > 0 &&
              data
                .sort((a: any, b: any) => a.order - b.order)
                .map(
                  ({
                    title,
                    slug,
                    externalLink,
                    color,
                    category: cat,
                    featuredImage,
                    showTitle,
                    parts,
                  }) => (
                    <div
                      className="col-sm-12 col-md-6 col-lg-6 col-xl-4"
                      key={slug}
                    >
                      <Card
                        title={title}
                        category={cat}
                        slug={slug}
                        type={type}
                        color={color}
                        link={externalLink}
                        featuredImage={featuredImage}
                        isSeries={parts?.length > 0}
                        showTitle={showTitle}
                      />
                    </div>
                  ),
                )}
          </div>
        </div>
      </div>
    </div>
  );
};
