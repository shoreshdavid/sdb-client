import * as React from 'react';
import { Link } from 'react-router-dom';

export const HelpPage = () => {
  return (
    <div className="container-fluid padding-50">
      <div className="row">
        <div className="col">
          <p>
            Over the past couple of months, we have received emails from many of
            you, letting us know you were unable to access the live stream. We
            want to apologize for that.
          </p>

          <p>
            We also want to announce that the issue has been resolved. Our
            technology person was unaware of the correct way to live stream from
            Youtube on our website, which he discovered yesterday. Although the
            issue is resolved, you likely have a cached (saved) version of the
            website which needs to be changed to see the new one.
          </p>

          <p>
            Here's a guide to ensure you have the latest version of our website.
            If you have any technical questions or concerns, please reach out to
            Clayton directly. His personal email is{' '}
            <a href="mailto:iamclaytonray@gmail.com">iamclaytonray@gmail.com</a>
            .
          </p>

          <h2>Step 1:</h2>

          <p>
            Go to the{' '}
            <a href="https://shoreshdavidbrandon.org/live" target="_blank">
              live stream page
            </a>
            .
          </p>

          <img
            src="https://sdb-email-images.s3.amazonaws.com/sdb-livestream-aweber.png"
            style={{
              boxShadow: '0 2px 20px #ccc',
              marginTop: 32,
              marginBottom: 32,
            }}
          />

          <p>
            If the picture you see above is the same as what you see on the live
            stream page, you are all set! Skip everything below{' '}
            <strong style={{ color: '#000' }}>EXCEPT</strong> the last
            paragraph, entitled "A quick note..."
          </p>

          <p>
            If what you see on the website is{' '}
            <strong style={{ color: 'red' }}>DIFFERENT</strong> than the image
            above, please do the following:{' '}
            <strong style={{ color: '#000' }}>(Hard Refresh)</strong>
          </p>

          <p>
            On a Mac, press the following keys (excluding the plus (+) signs).{' '}
            <strong style={{ color: '#000' }}>COMMAND + SHIFT + R</strong>.
          </p>

          <p>
            On a Windows or Linux, press the following keys (excluding the plus
            (+) signs).{' '}
            <strong style={{ color: '#000' }}>CONTROL + SHIFT + R</strong>.
          </p>

          <h3 style={{ color: '#000' }}>Mobile Devices:</h3>

          <p>
            <strong style={{ color: '#000' }}>IMPORTANT:</strong> The following
            will likely clear your history as well, depending on your device.
            Please make sure to save anything important as a bookmark or write
            down the URL on a piece of paper so you do not lose that website (or
            websites).
          </p>

          <p>
            On an iOS device (iPhone, iPad), please see the following guide:{' '}
            <a
              href="https://9to5mac.com/2018/05/24/iphone-ipad-how-to-clear-cache/"
              target="_blank"
            >
              https://9to5mac.com/2018/05/24/iphone-ipad-how-to-clear-cache/
            </a>
          </p>

          <p>
            On an Android device (Android phone or tablet), please see the
            following guide:{' '}
            <a
              href="https://www.androidcentral.com/how-and-when-clear-app-cache-or-data-android"
              target="_blank"
            >
              https://www.androidcentral.com/how-and-when-clear-app-cache-or-data-android
            </a>
          </p>

          <p>
            <strong style={{ color: '#000' }}>NOTE:</strong> While Android
            devices share the exact same mechanism for caching, the place to
            clear your cache varies from device to device. If the above Android
            guide was not helpful, please search on Google the following:
          </p>

          <p style={{ color: '#000' }}>"How to clear cache on "Your Device"</p>

          <p>
            For example, if you own a Google Pixel 2 Android phone, the above
            would look like:
          </p>

          <p style={{ color: '#000' }}>
            "How to clear cache on Google Pixel 2"
          </p>

          <p>
            Again, if you have any questions or concerns, please reach out to
            Clayton, who is more than happy to assist you (to the best of his
            ability). We look forward to "seeing" you tonight, whether you will
            be at the physical building or with us on the live stream!
          </p>

          <h3 style={{ color: '#000' }}>A quick note...</h3>
          <p>
            We hit 100+ subscribers on Youtube! This now means that we have a
            custom URL, which is very easy to remember and share with family,
            friends, and pre-believers! If you haven't already, subscribe to us
            on YouTube to get automatic notifications every time we stream!{' '}
            <a
              href="https://www.youtube.com/c/shoreshdavidbrandon"
              target="_blank"
            >
              https://www.youtube.com/c/shoreshdavidbrandon
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
