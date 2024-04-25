import './footer.css';
import FootLogos from './FooterLogos/FootLogos';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <FootLogos />
        <h3 className="footer_title">
          © Creado por Aaron Carrasco Romero - 2024
        </h3>
      </footer>
    </>
  );
};

export default Footer;
