import React from 'react';
import FlashCard from './FlashCard'
import { Card, } from 'semantic-ui-react'

const FlashCards = ({ cardsList, remove}) => (
  <Card.Group >
    {
      cardsList.map(card => (
        <FlashCard key={card.id} {...card} remove={remove} />
      ))
    }
  </Card.Group>
)

export default FlashCards;
