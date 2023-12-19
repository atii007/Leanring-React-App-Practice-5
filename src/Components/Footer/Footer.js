import FooterInfoSection from "./FooterInfoSection";
import FooterLinkList from "./FooterLinkList";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer className="site-footer section-padding">
        <div className="container">
          <div className="row">
            <Logo />
            <FooterLinkList />
            <FooterInfoSection />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
