import { Error } from 'components/Error';
import * as Raven from 'raven-js';
import * as React from 'react';

const logException = (ex, context) => {
  Raven.captureException(ex, {
    extra: context,
  });
};

export class ErrorBoundary extends React.Component<any, any> {
  public state = { hasError: false };

  public componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
    logException(error, info);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <Error error={this.props.error} />
          {this.props.children}
        </div>
      );
    }
    return this.props.children;
  }
}
