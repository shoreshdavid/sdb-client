import * as Raven from 'raven-js';
import * as React from 'react';

const logException = (ex, context) => {
  Raven.captureException(ex, {
    extra: context,
  });
  window.console && console.error && console.error(ex);
};

export class ErrorBoundary extends React.Component<any, any> {
  public state = { hasError: false };

  public componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
    logException(error, info);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
