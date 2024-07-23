import './footLogos.scss';
import { footerLogos } from '../../../utils/footer/footerLogos';

const FootLogos = () => {
  return (
    <div className="logos_rrss_div">
      {footerLogos.map((logoData, index) => (
        <a key={index} href={logoData.href} target="_blank">
          <img
            src={logoData.src}
            alt={logoData.alt}
            className={logoData.className}
          />
        </a>
      ))}
    </div>
  );
};

export default FootLogos;
