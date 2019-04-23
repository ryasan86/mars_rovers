import React, { useState } from 'react';
import Reveal from 'react-reveal/Reveal';

import CardWrap from './CardStyles';
import Loader from './../Loader/Loader';

const Card = ({ photo: { img_src, earth_date, sol, camera } }) => {
  const [imgIsLoading, setLoading] = useState(true);
  const onPhotoLoad = () => setLoading(false);

  return (
    <Reveal>
      <CardWrap imgIsLoading={imgIsLoading}>
        <div className="img-container">
          <img src={img_src} alt="rover" onLoad={onPhotoLoad} />
        </div>
        {imgIsLoading ? <Loader style={{ position: 'absolute' }} /> : ''}
        <div className="card-body">
          <p>Date: {earth_date}</p>
          <p>Martian Sol: {sol}</p>
          <p>
            Camera: {camera.full_name} ({camera.name})
          </p>
          <span onClick={() => window.open(img_src, '_blank')}>View Image</span>
        </div>
      </CardWrap>
    </Reveal>
  );
};

export default Card;
