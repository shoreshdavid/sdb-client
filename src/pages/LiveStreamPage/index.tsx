import * as React from 'react';
import { Link } from 'react-router-dom';

export const LiveStreamPage = () => {
  return (
    <div
      className="fusion-fullwidth fullwidth-box nonhundred-percent-fullwidth non-hundred-percent-height-scrolling"
      style={{
        backgroundColor: '#faf9f8',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        paddingTop: 90,
        paddingRight: 30,
        paddingBottom: '4%',
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
          className="fusion-layout-column fusion_builder_column fusion_builder_column_1_6  fusion-one-sixth fusion-column-first fusion-no-small-visibility 1_6"
          style={{
            marginTop: 10,
            marginBottom: 10,
            width: '13.3333%',
            marginRight: '4%',
          }}
        >
          <div
            className="fusion-column-wrapper"
            style={{
              padding: 0,
              backgroundPosition: 'left top',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundSize: 'cover',
              MozBackgroundSize: 'cover',
              OBackgroundSize: 'cover',
              backgroundSize: 'cover',
            }}
          >
            <div className="fusion-clearfix" />
          </div>
        </div>
        <div
          className="fusion-layout-column fusion_builder_column fusion_builder_column_2_3  fusion-two-third 2_3"
          style={{
            marginTop: 10,
            marginBottom: 30,
            width: '65.3333%',
            marginRight: '4%',
          }}
        >
          <div
            className="fusion-column-wrapper"
            style={{
              padding: 0,
              backgroundPosition: 'left top',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="imageframe-align-center">
              <span className="fusion-imageframe imageframe-none imageframe-1 hover-type-none">
                <a
                  className="fusion-no-lightbox"
                  href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?ref=ThemeFusion"
                  target="_blank"
                  aria-label="page-1-tree"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://tikvaproductions.com/wp-content/uploads/2018/02/page-1-tree.png"
                    width={82}
                    height={89}
                    alt=""
                    className="img-responsive wp-image-1955"
                  />
                </a>
              </span>
            </div>
            <div className="fusion-sep-clear" />
            <div
              className="fusion-separator fusion-full-width-sep sep-none"
              style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 40 }}
            />
            <div className="fusion-text">
              <h2 className="center">Watch Us LIVE!</h2>
            </div>
            <div className="fusion-text">
              <p style={{ textAlign: 'center', fontSize: 20 }}>
                Every Friday at 7:30pm est.
              </p>
            </div>
            <div className="fusion-sep-clear" />
            <div
              className="fusion-separator sep-single sep-solid"
              style={{
                borderColor: '#ef9a3d',
                borderTopWidth: 1,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 15,
                marginBottom: 60,
                width: '100%',
                maxWidth: 170,
              }}
            />
            <div className="fusion-clearfix" />
          </div>
        </div>
        <div
          className="fusion-layout-column fusion_builder_column fusion_builder_column_1_6  fusion-one-sixth fusion-column-last fusion-no-small-visibility 1_6"
          style={{ marginTop: 10, marginBottom: 10, width: '13.3333%' }}
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
            <div className="fusion-sep-clear" />
            <div
              className="fusion-separator fusion-full-width-sep sep-none"
              style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
            />
            <div className="fusion-clearfix" />
          </div>
        </div>
        <div
          className="fusion-layout-column fusion_builder_column fusion_builder_column_1_2  fusion-one-half fusion-column-first fusion-column-no-min-height 1_2"
          style={{
            marginTop: 10,
            marginBottom: 10,
            width: '48%',
            marginRight: '4%',
          }}
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
            <div className="fusion-sep-clear" />
            <div
              className="fusion-separator fusion-full-width-sep sep-none"
              style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 50 }}
            />
            <iframe
              style={{
                width: 640,
                height: 360,
                overflow: 'hidden',
                borderStyle: 'none',
              }}
              src="http://embed.truthcasting.com/video/100002774/161796"
              scrolling="no"
              width={640}
              height={360}
              allowFullScreen
            />
            <div className="fusion-clearfix" />
          </div>
        </div>
        <div
          className="fusion-layout-column fusion_builder_column fusion_builder_column_1_2  fusion-one-half fusion-column-last 1_2"
          style={{ marginTop: 10, marginBottom: 10, width: '48%' }}
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
              <h2 className="center">Donate Now!</h2>
            </div>
            <div className="fusion-button-wrappercenter">
              <Link
                className="fusion-button button-flat fusion-button-square button-large button-default button-2"
                to="/donations"
              >
                <span className="fusion-button-text">Click Here</span>
              </Link>
            </div>
            <div className="fusion-clearfix" />
          </div>
        </div>
      </div>
    </div>
  );
};
