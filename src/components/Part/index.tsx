import * as React from 'react';

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
        <div className="series-item-links">
          <div>
            {youtubeLink && (
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-video" />
              </a>
            )}
            {anchorLink && (
              <a href={anchorLink} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-microphone" />
              </a>
            )}
            {mediumLink && (
              <a href={mediumLink} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-receipt" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
