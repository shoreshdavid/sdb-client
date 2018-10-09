import * as React from 'react';
import { Button, Collapse } from 'reactstrap';

export class Accordion extends React.Component<any, any> {
  public state = { collapse: false };

  public toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  public render() {
    const { text, heading } = this.props;
    return (
      <div>
        <Button
          color="secondary"
          block
          onClick={this.toggle}
          className="accordion-button"
        >
          <i
            className={`icon-primary fas fa-${
              this.state.collapse ? 'minus' : 'plus'
            }`}
          />{' '}
          <span>{heading}</span>
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <div className="accordion-item-container">
            <p>{text}</p>
          </div>
        </Collapse>
      </div>
    );
  }
}
