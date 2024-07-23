import './footer.scss';
import H3Comp from '../H3Comp/H3Comp';
import FootLogos from './FooterLogos/FootLogos';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <FootLogos />
        <H3Comp
          className={'footer_title'}
          text={'© Creado por Aaron Carrasco Romero - 2024'}
        />
      </footer>
    </>
  );
};

export default Footer;
