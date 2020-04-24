import * as React from 'react';

import './accordion.scss';

interface Props {
  text: string;
  heading: string;
}

export const Accordion = ({ text, heading }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="btn btn-secondary btn-block accordion-button"
      >
        <i className={`icon-primary fas fa-${isOpen ? 'minus' : 'plus'}`} />{' '}
        <span>{heading}</span>
      </button>
      <div className={`${isOpen ? 'collapse show' : 'collapse'}`}>
        <div className="accordion-item-container">
          <p>{text}</p>
          <i className={`fas fa-chevron-${isOpen ? 'down' : 'up'}`} />
        </div>
      </div>
    </div>
  );
};
