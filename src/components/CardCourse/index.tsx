import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlurhashCanvas } from 'react-blurhash';
import { Container } from './styles';
import { ICourses } from '../../interfaces';

function CardCourse(texts: ICourses) {
  const { id, image, title, description } = texts;
  const link = `/cursos/${id}`;
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <Container>
      <Link to={link}>
        <div className="mt-5">
          <h2 className="mb-5">{title}</h2>
          <div style={{ position: 'relative' }}>
            <img
              style={{ display: loaded ? 'inline-block' : 'none' }}
              className="course-img mb-5 img-fluid"
              src={image}
              alt={title}
              onLoad={handleImageLoad}
            />
            {!loaded && (
              <BlurhashCanvas
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                className="course-img mb-5 img-fluid"
                width={200}
                height={200}
                punch={1}
              />
            )}
          </div>
          <p>{description}</p>
          <h3 className="click">Clique para saber mais!</h3>
        </div>
      </Link>
    </Container>
  );
}

export default CardCourse;
