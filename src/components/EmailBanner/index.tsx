import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Mutation } from 'react-apollo';
import { Button, Container, FormGroup, Input } from 'reactstrap';

const mutation = gql`
  mutation subscribeUser($email: String!, $name: String!) {
    subscribeUser(data: { email: $email, name: $name }) {
      success
    }
  }
`;

export class EmailBanner extends React.Component<any, any> {
  public state = {
    name: '',
    email: '',
  };
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
      <Container fluid className="email-cta">
        <h3 style={{ textAlign: 'center' }}>
          Join Our Global Family{' '}
          <span>&nbsp;Helping to Reach Millions&nbsp;</span> for the Kingdom of
          our Messiah
        </h3>
        <h4>Become Part of Shoresh David of Brandon.</h4>
        <Mutation mutation={mutation} variables={{ name: 'sbsd' }}>
          {(subscribeUser, { loading, error, data }) => {
            return (
              <React.Fragment>
                {loading && <Loading />}
                {error && <Error error={error} />}

                {data && (
                  <div style={{ color: 'red', margin: '20px 0' }}>
                    {data.subscribeUser.success}
                  </div>
                )}
                <form onSubmit={e => this.handleSubmit(e, subscribeUser)}>
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
                  <FormGroup>
                    <Input
                      placeholder="Phone"
                      type="text"
                      autoComplete="tel-national"
                      name="phone"
                    />
                  </FormGroup>
                  <Button color="primary" type="submit">
                    Apply Now
                  </Button>
                </form>
              </React.Fragment>
            );
          }}
        </Mutation>
      </Container>
    );
  }
}
