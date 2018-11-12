/* tslint:disable */
import * as React from 'react';

export const MapSection = () => (
  <div className="container-fluid padding-50">
    <h3
      style={{
        textAlign: 'center',
        color: 'black',
      }}
    >
      Address to SDB
    </h3>
    <hr
      style={{
        borderColor: 'rgb(240, 154, 61)',
        width: 150,
      }}
    />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.045057326591!2d-82.27793648420689!3d27.931263922221223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d244b4f1861b%3A0x7ba1af9b3a820c56!2sShoresh+David+Messianic+Synagogue+of+Brandon!5e0!3m2!1sen!2sus!4v1522241351592"
      frameBorder={0}
      allowFullScreen
      style={{
        border: 0,
        maxWidth: 'auto',
        height: 500,
        marginTop: 50,
      }}
    />
  </div>
);
