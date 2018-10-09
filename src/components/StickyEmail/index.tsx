import Axios from 'axios';
import * as React from 'react';
import { Button, Collapse, FormGroup, Input } from 'reactstrap';
import { API_URL } from '../../constants';

export class StickyEmail extends React.Component {
  public state = {
    open: false,
    name: '',
    email: '',
  };

  public toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  public handleSubmit = e => {
    e.preventDefault();
    Axios.post(`${API_URL}/sub`, {
      email: e.target.email.value,
      name: e.target.name.value,
    });
  }

  public render() {
    return (
      <div className="sticky-email">
        <Button onClick={this.toggle} block style={{ wordWrap: 'break-word' }}>
          Yes, I Want Rabbi Don’s <br /> Free Book &amp; Sermons
        </Button>
        <Collapse isOpen={this.state.open}>
          <div className="sticky-email-open">
            <img
              src="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/free-book-aweber-cta.png"
              alt="free ebooks"
            />
            <div className="sticky-email-body">
              {/* {this.state.loading && <Loading />}
                {this.state.error && <Error error={this.state.error} />} */}

              <form onSubmit={e => this.handleSubmit(e)}>
                <FormGroup>
                  <Input
                    placeholder="Name"
                    type="text"
                    autoComplete="name"
                    name="name"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    placeholder="Email"
                    type="text"
                    autoComplete="email"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </FormGroup>
                <Button color="primary" type="submit" block>
                  Free Book &amp; Sermons
                </Button>
              </form>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}
