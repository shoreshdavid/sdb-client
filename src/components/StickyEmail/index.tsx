import Axios from 'axios';
import * as React from 'react';

import book from '../../assets/img/free-book-aweber-cta.png';
import { Image } from '../../components/Image';
import { API_URL } from '../../constants';

import './email.scss';

export const StickyEmail = () => {
  const [state, setState] = React.useState({
    open: false,
    name: '',
    email: '',

    data: null as any,
    error: null as any,
  });

  const toggle = () => {
    setState({
      ...state,
      open: !state.open,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await Axios.post(`${API_URL}/email`, {
        email: state.email,
        name: state.name,
      });

      setState({ ...state, data: 'Registration successful!' });
      window.open(
        'https://s3.amazonaws.com/images.shoreshdavidbrandon.com/pdf/friend-book-ninth-printing.pdf',
        '_blank',
      );
    } catch (error) {
      setState({ ...state, error: error.response.data.message });
    }
  };

  return (
    <div className="sticky-email">
      <button
        className="btn btn-primary btn-block"
        onClick={toggle}
        style={{ wordWrap: 'break-word' }}
      >
        Yes, I Want Rabbi Don’s <br /> Free Book &amp; Sermons
      </button>
      <div className={`${state.open ? 'collapse show' : 'collapse'}`}>
        <div className="sticky-email-open">
          <Image src={book} alt="free ebooks" className="lazyload" />
          <div className="sticky-email-body">
            {state.error && (
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
                {state.error}
              </div>
            )}
            {state.data && <div>{state.data}</div>}
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Name"
                  type="text"
                  autoComplete="name"
                  name="name"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="text"
                  autoComplete="email"
                  name="email"
                  value={state.email}
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />
              </div>
              <button
                className="btn btn-primary btn-block"
                disabled={!state.name || !state.email}
                onClick={(event) => handleSubmit(event)}
              >
                Free Book &amp; Sermons
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
