import React from "react";

const Map = () => {
  return (
    <div className="col-lg-5 col-12 mb-4 mb-lg-0">
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
        width="100%"
        height={250}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="map"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
