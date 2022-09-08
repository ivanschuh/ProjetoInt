import { Carousel } from 'antd';
import 'antd/dist/antd.css';

import './carousel.css';

import React from 'react';
import Barber from '../../assets/barbearia.png';
import Barber2 from '../../assets/barbearia01.jpg';
import Barber3 from '../../assets/cadeirabarbearia.jpg';
import Barber4 from '../../assets/clickbarbearia.jpg';

const Car = () => (
  <Carousel autoplay>
      <div>
        <h3 className='contentStyle'><img className='imagemBarbearia' src={Barber}/></h3>
      </div>
      <div>
        <h3 className='contentStyle'><img className='imagemBarbearia' src={Barber2}/></h3>
      </div>
      <div>
        <h3 className='contentStyle'><img className='imagemBarbearia' src={Barber3}/></h3>
      </div>
      <div>
        <h3 className='contentStyle'><img  className='imagemBarbearia' src={Barber4}/></h3>
      </div>
  </Carousel>
);

export default Car;