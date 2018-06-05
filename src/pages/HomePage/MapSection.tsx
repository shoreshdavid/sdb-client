import * as React from 'react';

export const MapSection = () => {
  return (
    <div
      className="fusion-fullwidth fullwidth-box nonhundred-percent-fullwidth non-hundred-percent-height-scrolling"
      style={{
        backgroundColor: '#faf9f8',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        paddingTop: 110,
        paddingRight: 30,
        paddingBottom: 125,
        paddingLeft: 30,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderColor: '#f5f5f5',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
      }}
    >
      <div className="fusion-builder-row fusion-row ">
        <div
          className="fusion-layout-column fusion_builder_column fusion_builder_column_1_1  fusion-one-full fusion-column-first fusion-column-last fusion-column-no-min-height 1_1"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <div
            className="fusion-column-wrapper"
            style={{
              padding: '0px 0px 0px 0px',
              backgroundPosition: 'left top',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundSize: 'cover',
              MozBackgroundSize: 'cover',
              OBackgroundSize: 'cover',
              backgroundSize: 'cover',
            }}
          >
            <div className="fusion-text">
              <h3 style={{ textAlign: 'center' }}>Address to SDB</h3>
            </div>
            <div className="fusion-sep-clear" />
            <div
              className="fusion-separator sep-single sep-solid"
              style={{
                borderColor: '#ef9a3d',
                borderTopWidth: 1,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '-10px',
                marginBottom: 45,
                width: '100%',
                maxWidth: 170,
              }}
            />
            <div className="fusion-clearfix" />
          </div>
        </div>
        <div
          className="fusion-layout-column fusion_builder_column fusion_builder_column_1_1  fusion-one-full fusion-column-first fusion-column-last 1_1"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <div className="fusion-column-wrapper">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.045057326591!2d-82.27793648420689!3d27.931263922221223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d244b4f1861b%3A0x7ba1af9b3a820c56!2sShoresh+David+Messianic+Synagogue+of+Brandon!5e0!3m2!1sen!2sus!4v1522241351592"
                frameBorder={0}
                // style={{ border: 0, maxWidth: '100%', height: 'auto' }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
