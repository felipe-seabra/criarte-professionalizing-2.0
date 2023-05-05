import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlurhashCanvas } from 'react-blurhash';
import { Container } from './styles';
import { ICourses } from '../../interfaces';

function CardCourse(texts: ICourses) {
  const { id, image, title, description } = texts;
  const link = `/cursos/${id}`;
  const [loaded, setLoaded] = useState(false);
  const [hash, setHash] = useState('');

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const handleHashLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imageElement = event.target as HTMLImageElement;
    const { width, height } = imageElement;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(imageElement, 0, 0);
      const imageData = context.getImageData(0, 0, width, height);
      import('blurhash').then((blurhash) => {
        const generateHash = blurhash.encode(
          imageData.data,
          imageData.width,
          imageData.height,
          4,
          3
        );
        setHash(generateHash);
      });
    }
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
            {!loaded && hash && (
              <BlurhashCanvas
                hash={hash}
                className="course-img mb-5 img-fluid"
                width={200}
                height={200}
                punch={1}
              />
            )}
            {!loaded && !hash && (
              <img
                className="course-img mb-5 img-fluid"
                src={image}
                alt={title}
                onLoad={handleHashLoad}
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
