import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default ({ route: { routes } }) => (
  <div>
    <header className='navigation-menu'>
      <Link className='link' key='1' to='/Task1'>Задание 1</Link>
      <Link className='link' key='2' to='/Task2'>Задание 2</Link>
      <Link className='link' key='3' to='/Task3'>Задание 3</Link>
      <Link className='link' key='4' to='/Task4'>Задание 4</Link>
    </header>
    <main>{renderRoutes(routes)}</main>
  </div>
);
