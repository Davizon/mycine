/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect } from 'react';

//Components
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

//Styles
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      // eslint-disable-next-line arrow-parens
      .then(response => response.json())
      // eslint-disable-next-line arrow-parens
      .then(data => setVideos(data));
  }, []);

  console.log(videos);

  return (
    <div className='App'>
      <Header />
      <Search />
      {
        videos.mylist.length > 0 &&
          <Categories title='Mi Lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
      }

      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
