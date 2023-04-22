/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import texts from '../../db/textsCourses';

import { Container } from './styles';
import CardCourse from '../../components/CardCourse';

function Courses() {
  useEffect(() => {
    setPageTitle('Cursos - Colégio Criarte');
  }, []);

  return (
    <Container>
      <div className="card-box">
        {texts.map((text) => (
          <div className="courses" key={text.title}>
            <CardCourse {...text} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Courses;
