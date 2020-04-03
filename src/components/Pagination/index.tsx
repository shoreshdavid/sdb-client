import Axios from 'axios';
import * as React from 'react';

import { API_URL } from '../../constants';

interface Children {
  page: number;
  count: number;
  size: number;

  handlePageRequest: () => void;
  goToPage: (page: number) => Promise<void>;
  previous: () => Promise<void>;
  next: () => Promise<void>;
}

interface Props {
  category: string;
  children: (props: Children) => React.ReactNode;
}

interface State {
  page: number;
  count: number;
  size: number;
}

export class Pagination extends React.Component<Props, State> {
  public state = {
    page: 1,
    count: 1,
    size: 12,
  };

  public handlePageRequest = async () => {
    const { page, size } = this.state;
    const { category } = this.props;
    const res = await Axios.get(
      `${API_URL}/services?category=${category}&page=${page}&size=${size}`,
    );
    return res;
    // .then(res => {
    //   this.setState({
    //     services: res.data.data,
    //   });
    // })
    // .catch(err =>
    //   this.setState({
    //     error: err.response.data.error,
    //   })
    // );
  }

  public goToPage = async (page: number) => {
    await this.setState({ page });
    this.handlePageRequest();
  }

  public previous = async () => {
    if (this.state.page === 1) {
      return;
    }
    await this.setState((prevState) => {
      return {
        page: prevState.page - 1,
      };
    });
    this.handlePageRequest();
  }

  public next = async () => {
    if (this.state.page > Math.ceil(this.state.count / this.state.size) - 1) {
      return;
    }
    await this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
    this.handlePageRequest();
  }

  public render() {
    return this.props.children({
      page: this.state.page,
      count: this.state.count,
      size: this.state.size,

      handlePageRequest: this.handlePageRequest,
      goToPage: this.goToPage,
      previous: this.previous,
      next: this.next,
    });
  }
}
