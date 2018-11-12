import { Error } from 'components/Error';
import * as React from 'react';

interface Props {
  error?: string;
}

interface State {
  hasError: boolean;
  error: any;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state = { hasError: false, error: null };

  public componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true, error });
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
