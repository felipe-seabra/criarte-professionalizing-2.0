/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import texts from '../../db/textsCourses';

import { Container } from './styles';
import { ICourses } from '../../interfaces';

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = React.useState<ICourses>();

  useEffect(() => {
    const courseFound = texts.find((text) => text.id === Number(id));
    setCourse(courseFound);

    setPageTitle(courseFound?.title || 'Curso não encontrado');
  }, []);

  const {
    image,
    title,
    description,
    descriptionMore,
    occuparionArea,
    requirements,
    requirementsMore,
    duration
  } = course || {};

  return (
    <Container>
      <section className="pt-4 container justify-content-center mb-5">
        <div className="text-center">
          <h1 className="mb-5">{title}</h1>
          <div className="container justify-content-center flex-wrap flex-md-nowrap">
            <picture>
              <img className="mb-5 img-course" src={image} alt={title} />
            </picture>
            <div>
              <p>{description}</p>
              <p className="mb-4">{descriptionMore}</p>
              <h3 className="mb-4">
                <strong>ÁREA DE ATUAÇÃO:</strong>
              </h3>
              {occuparionArea ? (
                <ul className="list row">
                  {occuparionArea.map((e) => (
                    <li>{e}</li>
                  ))}
                </ul>
              ) : (
                ''
              )}
              <p className="mb-4">
                <em>{requirements}</em>
              </p>
              {requirementsMore ? (
                <p className="mb-4">
                  <em>{requirementsMore}</em>
                </p>
              ) : (
                ''
              )}
              <p className="mb-5">
                <strong> DURAÇÃO: </strong> {duration}
              </p>
            </div>
          </div>
          <Link to="/contato" className="interested-btn">
            Tenho interesse
          </Link>
        </div>
      </section>
    </Container>
  );
}

export default CourseDetail;
