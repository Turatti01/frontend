import { React } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="center">
        <div class="footer__box">
          <nav class="footer_menu">
            <Link to="#" class="footer__link">
              Formulário de testes
            </Link>
            <Link to="#" class="footer__link">
              Como Funciona
            </Link>
          </nav>
        </div>
      </div>
      <div class="footer__copyright">
        <div class="center">
          <span class="footer__copyright-text">2020 © Helpet</span>
          <div>
            <Link to="" class="footer__copyright-link">
              <i class="icon icon-fb"></i>
            </Link>
            <Link to="" class="footer__copyright-link">
              <i class="icon icon-twitter"></i>
            </Link>
            <Link to="" class="footer__copyright-link">
              <i class="icon icon-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
