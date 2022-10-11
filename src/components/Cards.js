import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Amazing Dishes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text="We don't make your coffee We make your day"
              
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text="A moment of chill"
              
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text="A Moments of tasty Surprise"
              
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text="Winner winner burger dinner."
              
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text="It's always ice cream time"
          
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
