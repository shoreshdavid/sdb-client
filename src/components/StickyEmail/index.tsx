import Axios from 'axios';
import * as React from 'react';

import { Image } from 'components/Image';

import { API_URL } from '../../constants';

import './email.scss';

const book = require('../../assets/img/free-book-aweber-cta.png');

export class StickyEmail extends React.Component<any, any> {
  public state = {
    open: false,
    name: '',
    email: '',

    data: null,
    error: null,
  };

  public toggle = () => {
    this.setState(prev => {
      return {
        open: !prev.open,
      };
    });
  }

  public handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await Axios.post(`${API_URL}/email`, {
        email: this.state.email,
        name: this.state.name,
      });

      this.setState({ data: 'Registration successful!' });
    } catch (error) {
      this.setState({ error: error.response.data.message });
    }
  }

  public render() {
    return (
      <div className="sticky-email">
        <button
          className="btn btn-primary btn-block"
          onClick={this.toggle}
          style={{ wordWrap: 'break-word' }}
        >
          Yes, I Want Rabbi Don’s <br /> Free Book &amp; Sermons
        </button>
        <div className={`${this.state.open ? 'collapse show' : 'collapse'}`}>
          <div className="sticky-email-open">
            <Image src={book} alt="free ebooks" className="lazyload" />
            <div className="sticky-email-body">
              {this.state.error && (
                <div
                  style={{
                    background: 'red',
                    padding: 5,
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center',
                    margin: '10px 0',
                  }}
                >
                  {this.state.error}
                </div>
              )}
              {this.state.data && <div>{this.state.data}</div>}
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Name"
                    type="text"
                    autoComplete="name"
                    name="name"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="text"
                    autoComplete="email"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block"
                  onClick={event => this.handleSubmit(event)}
                >
                  Free Book &amp; Sermons
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
