import * as React from 'react';

import { AboutSection } from 'pages/HomePage/AboutSection';
import { BackgroundImageSection } from 'pages/HomePage/BackgroundImageSection';
import { IntroSection } from 'pages/HomePage/IntroSection';
import { LiveStreamSection } from 'pages/HomePage/LiveStreamSection';
import { RabbiSection } from 'pages/HomePage/RabbiSection';
import { StatementSection } from 'pages/HomePage/StatementSection';

export const HomePage = () => {
  return (
    <React.Fragment>
      <BackgroundImageSection />
      <IntroSection />
      <LiveStreamSection />
      <StatementSection />
      <RabbiSection />
      <AboutSection />
    </React.Fragment>
  );
};
