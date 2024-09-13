import { Phone, Email, LocationOn } from '@mui/icons-material';

const ContactSection = () => {
  return (
    <section className="elementor-section elementor-inner-section elementor-element elementor-element-09d10a6 contact_address_box elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="09d10a6" data-element_type="section">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a958d0f" data-id="a958d0f" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d48590a elementor-widget elementor-widget-rs-contact-box" data-id="d48590a" data-element_type="widget" data-widget_type="rs-contact-box.default">
              <div className="elementor-widget-container">
                <div className="rs-contact-box">
                  <div className="address-item horizontal">
                    <div className="address-icon">
                      <Phone />
                    </div>
                    <div className="address-text">
                      <div className="phone">
                        <span className="label">Phone</span>
                        <a href="tel:+91 90434 94941, +91 63741 48844, 0422 – 3599640">
                          <span className="des">+91 90434 94941, +91 63741 48844, 0422 – 3599640</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="address-item horizontal">
                    <div className="address-icon">
                      <Email />
                    </div>
                    <div className="address-text">
                      <div className="email">
                        <span className="label">Email</span>
                        <a href="mailto:contact@n-school.com">
                          <span className="des">contact@n-school.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="address-item horizontal">
                    <div className="address-icon">
                      <LocationOn />
                    </div>
                    <div className="address-text">
                      <div className="text">
                        <span className="label">Location</span>
                        <span className="des">
                          Regional Head Office - Coimbatore<br /><br />
                          No – 287/3, Standard Towers,<br />
                          Near Fun Republic Mall,<br />
                          Avinashi main road, Peelamedu,<br />
                          Coimbatore – 641 004.<br /><br />
                          Branch Office - Gobichettipalayam<br /><br />
                          No – 10/1 1st Floor, Sai Arcades,<br />
                          Pariyur Road,Near Bus Stand,<br />
                          Gobichettipalayam – 638 476.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
