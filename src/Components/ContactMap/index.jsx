import React, { Component } from "react";

const ContactMap = () => {
  return (
    <section className="contact-map" style={{paddingTop: '50px'}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16134.946125426486!2d106.647175589287!3d10.818665255451405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529111aa89f9d%3A0xd8f09cc0aa1b27f3!2sTan%20Son%20Nhat%20International%20Airport!5e0!3m2!1sen!2s!4v1603289630153!5m2!1sen!2s"
        width={"100%"}
        height={460}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      />
    </section>
  );
};

export default ContactMap;
