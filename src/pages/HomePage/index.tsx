import * as React from 'react';

import { AboutSection } from './AboutSection';
import { BackgroundImageSection } from './BackgroundImageSection';
import './home.scss';
import { IntroSection } from './IntroSection';
// import { LiveStreamSection } from './LiveStreamSection';
import { RabbiSection } from './RabbiSection';
import { StatementSection } from './StatementSection';

export const HomePage = () => (
  <React.Fragment>
    <BackgroundImageSection />
    <IntroSection />
    {/* <LiveStreamSection /> */}
    <StatementSection />
    <RabbiSection />
    <AboutSection />
  </React.Fragment>
);
