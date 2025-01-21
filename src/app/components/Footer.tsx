import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about">
          <h4>Sobre</h4>
          <p>Aqui temos um site voltado para você...</p>
        </div>
        <div className="feedback">
          <h4>Comente</h4>
          <textarea placeholder="Deixe um feedback"></textarea>
          <button>Enviar</button>
        </div>
        <div className="contact">
          <h4>Contate-me</h4>
          <p>brena.barros@mv.com.br</p>
          <p>https://mv.com.br</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
