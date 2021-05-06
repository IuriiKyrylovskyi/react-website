import React from 'react';
import CardItem from '../cardItem/CardItem';
import './cards.scss';

const cardItems = [
  {
    id: '1',
    src: 'images/img-9.jpg',
    text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Advanture',
    path: '/services',
  },
  {
    id: '2',
    src: 'images/img-2.jpg',
    text: 'Travel through the Island of Bali in a Private Cruise',
    label: 'Luxury',
    path: '/services',
  },
  {
    id: '3',
    src: 'images/img-3.jpg',
    text: 'Set Sail in the Atlantic Ocean visitng Uncharted Waters',
    label: 'Mystery',
    path: '/services',
  },
  {
    id: '4',
    src: 'images/img-4.jpg',
    text: 'Experience Football on Top of the Himilayan Mountains',
    label: 'Advanture',
    path: '/products',
  },
  {
    id: '5',
    src: 'images/img-8.jpg',
    text: 'Ride through the Sahara Desert on a guided camel tour',
    label: 'Adrenaline',
    path: '/sign-up',
  },
];

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cardItems.length > 0 &&
              cardItems.map(item => {
                const {id, src, text, label, path} = item;
                return <CardItem key={id}
                  src={src}
                  text={text}
                  label={label}
                  path={path}
                />
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
