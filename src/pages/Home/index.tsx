import React from 'react';
import { Container } from './styles';

const Home: React.FC = () => {
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
            <a href="#">Saber Mais</a>
            <a href="#">Contato</a>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
