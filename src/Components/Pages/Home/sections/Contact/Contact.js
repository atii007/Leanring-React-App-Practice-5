import Address from "./Address";
import Map from "./Map";

const Contact = () => {
  return (
    <>
      <section
        className="contact-section section-padding section-bg"
        id="section_5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h2 className="mb-5">Get in touch</h2>
            </div>
            <Map />
            <Address />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
