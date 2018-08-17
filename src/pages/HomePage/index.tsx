import { AboutSection } from 'pages/HomePage/AboutSection';
import { BackgroundImageSection } from 'pages/HomePage/BackgroundImageSection';
import { IntroSection } from 'pages/HomePage/IntroSection';
import { LiveStreamSection } from 'pages/HomePage/LiveStreamSection';
import { MapSection } from 'pages/HomePage/MapSection';
import { RabbiSection } from 'pages/HomePage/RabbiSection';
import { StatementSection } from 'pages/HomePage/StatementSection';
import * as React from 'react';

export const HomePage = () => {
  return (
    <React.Fragment>
      <BackgroundImageSection />
      <IntroSection />
      <LiveStreamSection />
      <StatementSection />
      <RabbiSection />
      <AboutSection />
      <MapSection />
    </React.Fragment>
  );
};
