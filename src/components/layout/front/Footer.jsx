import '../../../css/Footer.scss'
import facebook from '../../../assets/images/facebook.png';
import instagram from '../../../assets/images/instagram.png';
import negative from '../../../assets/images/Negative.png';
import twitter from '../../../assets/images/twitter.png';
const Footer = () => {
  return <footer>
    <div className="footer-item h-100  d-flex justify-content-between align-items-center text-center">
                <div className="footer-left">
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com  020 7993 2905</p>
                </div>
                <div className="footer-right">
                  <img src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={instagram} alt="instagram" />
                  <img src={negative} alt="negative" />
                </div>
            </div>
  </footer>;
};

export default Footer;
