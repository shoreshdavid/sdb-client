import * as React from 'react';

export class Accordion extends React.Component<any, any> {
  public state = { open: false };

  public toggle = () => {
    this.setState((prev: any) => {
      return { open: !prev.open };
    });
  }

  public render() {
    const { text, heading } = this.props;
    return (
      <div>
        <button
          onClick={this.toggle}
          className="btn btn-secondary btn-block accordion-button"
        >
          <i
            className={`icon-primary fas fa-${
              this.state.open ? 'minus' : 'plus'
            }`}
          />{' '}
          <span>{heading}</span>
        </button>
        <div className={`${this.state.open ? 'collapse show' : 'collapse'}`}>
          <div className="accordion-item-container">
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}
