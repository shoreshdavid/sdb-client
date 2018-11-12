import Axios from 'axios';
import { Error } from 'components/Error';
import { Image } from 'components/Image';
import * as React from 'react';
import { API_URL } from '../../constants';

import './email.scss';

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

  public handleSubmit = event => {
    event.preventDefault();
    Axios.post(`${API_URL}/email`, {
      email: this.state.email,
      name: this.state.name,
    })
      .then(res => {
        this.setState({ data: 'Registration successful!' });
      })
      .catch(err => {
        this.setState({ error: err.response.data.error.message });
      });
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
            <Image
              src="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/free-book-aweber-cta.png"
              alt="free ebooks"
            />
            <div className="sticky-email-body">
              {this.state.error && <Error error={this.state.error} />}
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
