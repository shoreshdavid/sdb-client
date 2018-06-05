import * as React from 'react';

export const EmailBanner = () => {
  return (
    // <div
    //   className="fusion-fullwidth fullwidth-box nonhundred-percent-fullwidth non-hundred-percent-height-scrolling"
    //   style={{
    //     backgroundColor: '#624575',
    //     backgroundPosition: 'left top',
    //     backgroundRepeat: 'no-repeat',
    //     paddingTop: 50,
    //     paddingRight: 30,
    //     paddingBottom: 45,
    //     paddingLeft: 30,
    //     borderTopWidth: 0,
    //     borderBottomWidth: 0,
    //     borderColor: '#e7e4e2',
    //     borderTopStyle: 'solid',
    //     borderBottomStyle: 'solid',
    //   }}
    // >
    //   <div className="fusion-builder-row fusion-row ">
    //     <div
    //       className="fusion-layout-column fusion_builder_column fusion_builder_column_1_1  fusion-one-full fusion-column-first fusion-column-last fusion-column-no-min-height 1_1"
    //       style={{ marginTop: '4%', marginBottom: '3%' }}
    //     >
    //       <div
    //         className="fusion-column-wrapper"
    //         style={{
    //           padding: '0px 0px 0px 0px',
    //           backgroundPosition: 'left top',
    //           backgroundRepeat: 'no-repeat',
    //           WebkitBackgroundSize: 'cover',
    //           MozBackgroundSize: 'cover',
    //           OBackgroundSize: 'cover',
    //           backgroundSize: 'cover',
    //         }}
    //       >
    //         <div className="fusion-text">
    //           <h3
    //             style={{
    //               textAlign: 'center',
    //               fontSize: 30,
    //               color: 'rgb(255, 255, 255)',
    //               lineHeight: '42px',
    //             }}
    //           >
    //             Join Our Global Family{' '}
    //             <span style={{ color: '#f09a3e' }}>
    //               Helping to Reach Millions
    //             </span>{' '}
    //             for the Kingdom of our Messiah
    //           </h3>
    //         </div>
    //         <div className="fusion-sep-clear" />
    //         <div
    //           className="fusion-separator fusion-full-width-sep sep-none"
    //           style={{
    //             marginLeft: 'auto',
    //             marginRight: 'auto',
    //             marginTop: '-25px',
    //           }}
    //         />
    //         <div className="fusion-text">
    //           <p style={{ textAlign: 'center', fontSize: 20 }}>
    //             Become Part of Shoresh David of Brandon.
    //           </p>
    //         </div>
    //         <div className="fusion-sep-clear" />
    //         <div
    //           className="fusion-separator fusion-full-width-sep sep-none"
    //           style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 15 }}
    //         />
    //         <div className="fusion-text">
    //           <p style={{ textAlign: 'center' }} />
    //           <div
    //             role="form"
    //             className="wpcf7"
    //             id="wpcf7-f86-p7-o1"
    //             lang="en-US"
    //             dir="ltr"
    //           >
    //             <div className="screen-reader-response" />
    //             <form className="wpcf7-form">
    //               <div style={{ display: 'none' }}>
    //                 <input type="hidden" name="_wpcf7" defaultValue="86" />
    //                 <input
    //                   type="hidden"
    //                   name="_wpcf7_version"
    //                   defaultValue="5.0.2"
    //                 />
    //                 <input
    //                   type="hidden"
    //                   name="_wpcf7_locale"
    //                   defaultValue="en_US"
    //                 />
    //                 <input
    //                   type="hidden"
    //                   name="_wpcf7_unit_tag"
    //                   defaultValue="wpcf7-f86-p7-o1"
    //                 />
    //                 <input
    //                   type="hidden"
    //                   name="_wpcf7_container_post"
    //                   defaultValue="7"
    //                 />
    //               </div>
    //               <div
    //                 style={{ marginBottom: 25, marginRight: 25 }}
    //                 className="fusion-one-fourth fusion-layout-column fusion-spacing-no"
    //               >
    //                 <span className="wpcf7-form-control-wrap your-name">
    //                   <input
    //                     type="text"
    //                     name="your-name"
    //                     defaultValue=""
    //                     size={40}
    //                     className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
    //                     aria-required="true"
    //                     aria-invalid="false"
    //                     placeholder="Name"
    //                   />
    //                 </span>
    //               </div>
    //               <div
    //                 style={{ marginBottom: 25, marginRight: 25 }}
    //                 className="fusion-one-fourth fusion-layout-column fusion-spacing-no"
    //               >
    //                 <span className="wpcf7-form-control-wrap your-email">
    //                   <input
    //                     type="email"
    //                     name="your-email"
    //                     defaultValue=""
    //                     size={40}
    //                     className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
    //                     aria-required="true"
    //                     aria-invalid="false"
    //                     placeholder="Email"
    //                   />
    //                 </span>
    //               </div>
    //               <div
    //                 style={{ marginBottom: 25, marginRight: 25 }}
    //                 className="fusion-one-fourth fusion-layout-column fusion-spacing-no"
    //               >
    //                 <span className="wpcf7-form-control-wrap your-subject">
    //                   <input
    //                     type="text"
    //                     name="your-subject"
    //                     defaultValue=""
    //                     size={40}
    //                     className="wpcf7-form-control wpcf7-text"
    //                     aria-invalid="false"
    //                     placeholder="Phone"
    //                   />
    //                 </span>
    //               </div>
    //               <p className="fusion-button" style={{ textAlign: 'center' }}>
    //                 <input
    //                   type="submit"
    //                   defaultValue="Apply Now"
    //                   className="wpcf7-form-control wpcf7-submit"
    //                 />
    //               </p>
    //               <div
    //                 className="fusion-slider-loading"
    //                 style={{ display: 'none' }}
    //               />
    //               <p />
    //               <div
    //                 className="fusion-alert alert custom alert-custom fusion-alert-center fusion-alert-capitalize alert-dismissable wpcf7-response-output wpcf7-display-none"
    //                 style={{
    //                   borderWidth: 1,
    //                 }}
    //               >
    //                 <button
    //                   style={{ color: '', borderColor: '' }}
    //                   type="button"
    //                   className="close toggle-alert"
    //                   aria-hidden="true"
    //                 >
    //                   ×
    //                 </button>
    //                 <div className="fusion-alert-content-wrapper">
    //                   <span className="fusion-alert-content" />
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //           <p />
    //         </div>
    //         <div className="fusion-clearfix" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      style={{
        backgroundColor: '#624575',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        paddingTop: 50,
        paddingRight: 30,
        paddingBottom: 45,
        paddingLeft: 30,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderColor: '#e7e4e2',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
      }}
    >
      <div className="fusion-text">
        <h3
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'rgb(255, 255, 255)',
            lineHeight: '42px',
          }}
        >
          Join Our Global Family{' '}
          <span style={{ color: '#f09a3e' }}>Helping to Reach Millions</span>{' '}
          for the Kingdom of our Messiah
        </h3>
      </div>
      <h4
        style={{
          color: '#FFF',
          textAlign: 'center',
          fontWeight: 400,
          fontSize: 22,
        }}
      >
        Become Part of Shoresh David of Brandon.
      </h4>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="wpcf7-form-control wpcf7-text"
        />
      </div>
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="phone" placeholder="Phone" />
      <button className="wpcf7-form-control wpcf7-submit">Apply Now</button>
    </div>
  );
};
