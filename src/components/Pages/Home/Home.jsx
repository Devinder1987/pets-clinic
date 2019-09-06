import React from 'react';
import CarouselContainer from './Carousel';
import About from './About';
import Services from './Services';
import Facilites from '../Facilities/Facilities';

export default function Home() {
  return (
    <div>
      <CarouselContainer />
      <About />
      <Services />
      <Facilites />
    </div>
  );
}
