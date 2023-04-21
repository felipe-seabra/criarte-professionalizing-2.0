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
            Cursos profissionalizantes. Desde 1991, o Colégio Criarte oferece ensino de
            excelência para ingressar no mercado de trabalho. Oferece cursos de Farmácia,
            Radiologia e Enfermagem.
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
