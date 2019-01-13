import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parser from 'react-html-parser';

import { Image } from 'components/Image';

import { books } from './books';

export const BooksPage = () => (
  <React.Fragment>
    <Helmet>
      <title>SDB | Biblical Based Articles & Discoveries</title>
    </Helmet>
    <div className="container-fluid padding-50">
      <div className="row">
        {books.map((book: any, i: number) => (
          <div
            key={i}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
          >
            <div
              className="card"
              style={{ height: 'auto', textAlign: 'center' }}
            >
              <Image
                src={book.image}
                alt={book.title}
                className="lazyload"
                style={{ height: 600 }}
              />
              <div className="card-body card-block">
                <h5 className="card-title">{book.title}</h5>
                <div style={{ margin: '1rem 0' }}>
                  {book.links.length > 0 ? (
                    book.links.map((link: any, index: number) => (
                      <a
                        key={index}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'black' }}
                      >
                        <button
                          className="btn btn-primary btn-block"
                          style={{ marginBottom: 16 }}
                        >
                          {link.text}
                        </button>
                      </a>
                    ))
                  ) : (
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'black' }}
                    >
                      <button className="btn btn-primary btn-block">
                        {book.buttonText}
                      </button>
                    </a>
                  )}
                </div>
                <div>{Parser(book.description)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </React.Fragment>
);
