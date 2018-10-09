import * as React from 'react';

interface IPartProps {
  title: string;
  youtubeLink: string;
  anchorLink: string;
  mediumLink: string;
}

export const Part = ({
  title,
  youtubeLink,
  anchorLink,
  mediumLink,
}: IPartProps) => {
  return (
    <div className="series-item">
      <div className="series-item-detail">
        <div className="series-item-title">{title}</div>
        <div className="series-item-links">
          <div>
            {youtubeLink && (
              <a
                href={`https://${youtubeLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-video" />
              </a>
            )}
            {anchorLink && (
              <a
                href={`https://${anchorLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-microphone" />
              </a>
            )}
            {mediumLink && (
              <a
                href={`https://${mediumLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-receipt" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
