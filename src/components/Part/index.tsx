import * as React from 'react';

import './part.scss';
import {
  faVideo,
  faMicrophone,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IPartProps {
  partNumber: number;
  youtubeLink: string;
  anchorLink: string;
  mediumLink: string;
}

export const Part = ({
  partNumber,
  youtubeLink,
  anchorLink,
  mediumLink,
}: IPartProps) => {
  return (
    <div className="series-item">
      <div className="series-item-detail">
        <div className="series-item-title">Part {partNumber}</div>
        <div className="series-item-links" style={{ display: 'flex' }}>
          {youtubeLink && (
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
              <div className="series-item-square">
                <FontAwesomeIcon icon={faVideo} />
              </div>
            </a>
          )}
          {anchorLink && (
            <a href={anchorLink} target="_blank" rel="noopener noreferrer">
              <div className="series-item-square">
                <FontAwesomeIcon icon={faMicrophone} />
              </div>
            </a>
          )}
          {mediumLink && (
            <a href={mediumLink} target="_blank" rel="noopener noreferrer">
              <div className="series-item-square">
                <FontAwesomeIcon icon={faReceipt} />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
