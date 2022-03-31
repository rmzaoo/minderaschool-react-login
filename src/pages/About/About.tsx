import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import checkLogin from "../../utils/checkLogin";
import "./About.scss";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkLogin()) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="about-content">
      <h1>Bolo de Bolacha</h1>
      <div className="about-container">
        <h3 className="about-title">Ingredientes</h3>
        <ul>
          <li>300 g de manteiga</li>
          <li>400 g de bolachas Maria + 50g de bolachas Maria moídas</li>
          <li>2 gemas</li>
          <li>2 gemas</li>
          <li>3 colheres (sopa) de café forte frio</li>
          <li>Café para demolhar</li>
        </ul>
      </div>
      <div className="about-container">
        <h3 className="about-title">Instruções de preparação</h3>
        <ol>
          <li>
            Para preparar esta receita de bolo de bolacha, numa tigela misture a
            manteiga com o café, o açúcar em pó e as gemas e bata tudo muito
            bem.
          </li>
          <li>
            Disponha num prato de servir camadas de bolachas, previamente
            demolhadas em café, intercaladas com o creme de manteiga. Repita as
            camadas até terminarem os ingredientes.
          </li>
          <li>
            No final, polvilhe a superfície com os 50 g de bolacha moída,
            coloque no frio e, no momento de servir, decore o bolo de bolacha a
            gosto.
          </li>
        </ol>
      </div>
      <div className="about-container">
        <h3 className="about-title">Modo de preparo</h3>
        <iframe
          className="about-video"
          src="https://www.youtube-nocookie.com/embed/9h0v5rkTdrQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
