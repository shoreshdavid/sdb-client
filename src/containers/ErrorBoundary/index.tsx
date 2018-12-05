import * as Sentry from '@sentry/browser';
import * as React from 'react';

import { Error } from 'components/Error';

interface Props {
  error?: string;
  children: React.ReactNode;
}

interface State {
  error: any;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state = { error: null };

  public componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  public render() {
    if (this.state.error) {
      return (
        <Error error="We're unsure what happened but this error has been reported to us." />
      );
    }
    return this.props.children;
  }
}
