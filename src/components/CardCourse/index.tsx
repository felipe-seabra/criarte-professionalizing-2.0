import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { ICourses } from '../../interfaces';

function CardCourse(texts: ICourses) {
  const { id, image, title, description } = texts;
  const link = `/cursos/${id}`;
  return (
    <Container>
      <Link to={link}>
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
      </Link>
    </Container>
  );
}

export default CardCourse;
