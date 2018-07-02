import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Mutation } from 'react-apollo';
import { Button, Collapse, FormGroup, Input } from 'reactstrap';

const mutation = gql`
  mutation subscribeUser($email: String!, $name: String!) {
    subscribeUser(data: { email: $email, name: $name }) {
      success
    }
  }
`;

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
  public handleSubmit = (e, subscribeUser) => {
    e.preventDefault();
    subscribeUser({
      variables: {
        email: e.target.email.value,
        name: e.target.name.value,
      },
    })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
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
              src="https://s3.amazonaws.com/sdb-images/sticky-email.png"
              alt="free ebooks"
            />
            <Mutation mutation={mutation} variables={{ name: 'sbsd' }}>
              {(subscribeUser, { loading, error, data }) => {
                return (
                  <div className="sticky-email-body">
                    {loading && <Loading />}
                    {error && <Error error={error} />}

                    {data && (
                      <p
                        style={{
                          color: 'red',
                          wordWrap: 'break-word',
                          overflow: 'hidden',
                        }}
                      >
                        {data.subscribeUser.success}
                      </p>
                    )}
                    <form onSubmit={e => this.handleSubmit(e, subscribeUser)}>
                      <FormGroup>
                        <Input
                          placeholder="Name"
                          type="text"
                          autoComplete="name"
                          name="name"
                          value={this.state.name}
                          onChange={e =>
                            this.setState({ name: e.target.value })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          placeholder="Email"
                          type="text"
                          autoComplete="email"
                          name="email"
                          value={this.state.email}
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </FormGroup>
                      <Button color="primary" type="submit" block>
                        Free Book &amp; Sermons
                      </Button>
                    </form>
                  </div>
                );
              }}
            </Mutation>
          </div>
        </Collapse>
      </div>
    );
  }
}
