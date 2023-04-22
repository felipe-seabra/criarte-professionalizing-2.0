/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

function Home() {
  useEffect(() => {
    setPageTitle('Início - Colégio Criarte');
  }, []);

  return (
    <Container>
      <section className="home">
        <div className="home-content">
          <h1>Colégio Criarte</h1>
          <h3>Cursos Profissionalizantes</h3>
          <p>
            Há mais de 30 anos, o Colégio Criarte tem sido referência em educação,
            oferecendo cursos de Farmácia, Radiologia e Enfermagem de excelência. Com foco
            na preparação para o mercado de trabalho, os estudantes recebem conhecimentos
            práticos e teóricos de alta qualidade.
          </p>
          <div className="home-btn">
            <Link to="/sobre">Saber Mais</Link>
            <Link to="/contato">Contato</Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Home;
