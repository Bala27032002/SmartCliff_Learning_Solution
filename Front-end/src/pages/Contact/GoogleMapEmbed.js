import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '50rem', height: '20rem', margin: '0 auto', overflow: 'hidden' }}>
      <iframe
        title="Google Map Embed"
        width="100%"
        height="100%"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.537800519212!2d77.00737527346969!3d10.998217655066773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590b89fdb05f%3A0x4874f32fe1c2c1b6!2sSmartCliff%20Learning%20Solutions%20LLP!5e0!3m2!1sen!2sus!4v1688983068064!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
