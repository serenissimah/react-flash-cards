import React from 'react';
import FlashCards from './FlashCards'
import FlashCardForm from './FlashCardForm'
import { Container, Header, Button, Segment, } from 'semantic-ui-react';

class Home extends React.Component {
  state = {
    cards: [
      { id: 1, front: "question", back: "answer", },
      { id: 2, front: "question", back: "answer", },
      { id: 3, front: "question", back: "answer", },
      { id: 4, front: "question", back: "answer", },
    ],
    // showCard: true,
    showForm: false,
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, }
    this.setState({ cards: [...this.state.cards, card] })
  } 

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card
    })
    this.setState({cards, })
  }

  toggleForm = () => this.setState( {showForm: !this.state.showForm} )

  render () {
    return (
      <Container textAlign="center" style={{paddingTop: "15px", letterSpacing: "3px"}}>
        <Header as="h1">React Flash Cards</Header>
          <Button onClick={this.toggleForm}>Add A Card</Button>
        <Segment basic>
          {this.state.showForm ? <FlashCardForm add={this.addCard} /> : null }
        </Segment>
        <Segment>
          <FlashCards cardsList={this.state.cards} remove={this.removeCard} />
        </Segment>
      </Container>
    )
  }
}

export default Home;
