import React from 'react';
import { Container } from './styles';
import { ICourses } from '../../interfaces';

function CardCourse(texts: ICourses) {
  const { image, title, description } = texts;
  return (
    <Container>
      <div className="mt-5">
        <h2 className="mb-5">{title}</h2>
        <picture>
          <img
            className="course-img mb-5 img-fluid"
            src={image}
            alt="Foto de uma técnica em farmácia"
          />
        </picture>
        <p>{description}</p>
        <h3 className="click">Clique para saber mais!</h3>
      </div>
    </Container>
  );
}

export default CardCourse;
