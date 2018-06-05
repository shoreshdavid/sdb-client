import { Accordion } from 'components/Accordion';
import * as React from 'react';

export const StatementSection = () => {
  return (
    <div
      className="fusion-fullwidth fullwidth-box nonhundred-percent-fullwidth non-hundred-percent-height-scrolling"
      style={{
        backgroundColor: '#f7f5f4',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        paddingTop: '4%',
        paddingRight: 30,
        paddingBottom: 125,
        paddingLeft: 30,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderColor: '#e7e4e2',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
      }}
    >
      <div className="fusion-builder-row fusion-row ">
        <div
          className="fusion-layout-column fusion_builder_column 
          fusion_builder_column_1_1  fusion-one-full fusion-column-first 
          fusion-column-last 1_1"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <div>
            <div className="fusion-menu-anchor" id="statement" />
            <div className="fusion-text">
              <h3>Our Statement of Faith.</h3>
            </div>
            <div className="accordian fusion-accordian">
              <div
                className="panel-group fusion-toggle-icon-unboxed"
                id="accordion-7-1"
              >
                <Accordion
                  heading="Exodus 3:6"
                  text="We believe in the one true God, 
                  the Creator of heaven and earth the God of Abraham, Isaac and Jacob."
                />
                <Accordion
                  heading="2 CORINTHIANS 13:14"
                  text="We believe in the triune nature of God; though He is One
                  God, we recognize Him as God the Father (Avinu), God the
                  Son (Yeshua) and God the Holy Spirit (Ruach Ha Kodesh)."
                />
                <Accordion
                  heading="2 TIMOTHY 3:16-17"
                  text="We believe the Bible is the divinely inspired, inerrant,
                  authoritative Word of God."
                />
                <Accordion
                  heading="JOHN 3:16"
                  text="We believe that God the Father sent His only begotten
                  Son, Yeshua Ha Mashiach (Jesus the Messiah), to die for
                  the sins of the world and to make atonement for all
                  mankind, that whoever believes in Him may have eternal
                  life."
                />
                <Accordion
                  heading="1 CORINTHIANS 15:20 &amp; REVELATION 19:26"
                  text="We believe that following Yeshua’s crucifixion and
                  death, God raised Him from the dead and that He ascended
                  unto His Father in heaven, where He reigns forever as
                  King of kings and Lord of lords."
                />
                <Accordion
                  heading="REVELATION 5:9-10"
                  text="We believe that all who receive salvation through the
                  blood atonement of Yeshua (Jesus) will also share in the
                  power of His resurrection from the dead and will live
                  forever in the Kingdom of Heaven."
                />
                <Accordion
                  heading="ACTS 1:8 &amp; 1 CORINTHIANS 12:1-11"
                  text="We believe that the Ruach Ha Kodesh (Holy Spirit) has
                  been poured out on all believers in Messiah Yeshua
                  (Jesus) to empower them to be witnesses for Him and to
                  live a holy life in Him. We further believe in the gifts
                  of the Ruach Ha Kodesh and in the operation of those
                  gifts throughout the Body of Messiah."
                />
                <Accordion
                  heading="GALATIONS 3:28 & MATTHEW 24:36"
                  text="We believe that Yeshua has broken down the middle wall
                  of partition and that all believers, both Jew and
                  Gentile, are one in Him. We further believe that in
                  these last days, God is preparing the Bride of Messiah
                  for Yeshua’s second coming, of which only the Father
                  knows the time."
                />
              </div>
            </div>
            <div className="fusion-clearfix" />
          </div>
        </div>
      </div>
    </div>
  );
};
