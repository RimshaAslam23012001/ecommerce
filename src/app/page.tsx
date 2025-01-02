import React from 'react';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import Productlist from './components/Productlist';
import List from './components/List';
import Menuitem from './components/Menuitem';
import Offer from './components/Offer';
import Card from './components/Card';
import Reservation from './components/Reservation';




const Home = () => {
  return (
    <div className='bg-gradient-to-r from-black to-slate-500 min-h-screen'>
        
         <Carousel/>
         <Progressor/>
         <Productlist/>
         <Banner/>
         <List/>
         <Menuitem/>
         <Offer/>
         <Card/>
         <Reservation/>
         
    </div>
  )
}

export default Home;

