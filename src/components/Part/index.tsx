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
            <a
              href={`https://${youtubeLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-video" />
            </a>
            <a
              href={`https://${anchorLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-microphone" />
            </a>
            <a
              href={`https://${mediumLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-receipt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
