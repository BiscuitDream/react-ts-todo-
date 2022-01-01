import React from 'react';
import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea error est, ipsum laborum modi mollitia odio quia quod totam?</p>
      <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  );
};
