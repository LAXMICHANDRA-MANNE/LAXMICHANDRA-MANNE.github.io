import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          <a href="https://instagram.com/chandanmanne_06" target="_blank" rel="noreferrer" className="icon">
            <img src="/images/insta.png" alt="instagram icon" />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} LAXMICHANDRA MANNE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
