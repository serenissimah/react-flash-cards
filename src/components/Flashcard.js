import React from 'react';
import { Card, Header, Button, } from 'semantic-ui-react'

class FlashCard extends React.Component { 
  state = { showCard: true}

  toggleCard = () => this.setState( {showCard: !this.state.showCard} )
  
  render () {
    return (
      <Card color="red" raised>
        <Card.Content onClick={ this.toggleCard }>
          {this.state.showCard ? <Header>{this.props.front}</Header> : <Header>{this.props.back}</Header>}
        </Card.Content>
        <Card.Content extra> 
          <Button.Group>
            <Button positive>Edit</Button>
            <Button.Or />
            <Button negative onClick={() => this.props.remove(this.props.id)}>Delete</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default FlashCard;