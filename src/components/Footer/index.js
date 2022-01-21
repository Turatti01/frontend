import { React } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="center">
        <div className="footer__box">
          <nav className="footer_menu">
            <Link to="#" className="footer__link">
              Formulário de testes
            </Link>
            <Link to="#" className="footer__link">
              Como Funciona
            </Link>
          </nav>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="center">
          <span className="footer__copyright-text">2022 © Helpet</span>
          <div>
            <Link to="" className="footer__copyright-link">
              <i className="icon icon-fb"></i>
            </Link>
            <Link to="https://twitter.com/turapttti" className="footer__copyright-link">
              <i className="icon icon-twitter"></i>
            </Link>
            <Link to="" className="footer__copyright-link">
              <i className="icon icon-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
